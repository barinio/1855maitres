import { useState, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { t } from "i18next";

import styles from "./styles/Chat.module.scss";
import Input from "./Input";
import KeywordForm from "./KeywordForm";

interface Message {
  content: string;
  type: "incoming" | "outgoing";
}

interface ChatProps {
  closeChat: () => void;
}

function Chat({ closeChat }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const ws = useRef<WebSocket | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const setupWebSocket = () => {
    ws.current = new WebSocket("wss://one855-product-code.onrender.com");
    ws.current.onmessage = (event) => {
      const receivedMessage: Message = JSON.parse(event.data);

      console.log("Received message: ", receivedMessage);
      setIsLoading(false);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
      setTimeout(() => {
        setupWebSocket();
      }, 1000);
    };

    ws.current.onerror = (error) => {
      console.log("WebSocket error: ", error);
      ws.current?.close();
    };
  };

  useEffect(() => {
    if (!ws.current || ws.current.readyState === WebSocket.CLOSED) {
      setupWebSocket();
    }

    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [messages]);

  const sendMessage = (message: string) => {
    if (
      message !== "" &&
      ws.current &&
      ws.current.readyState === WebSocket.OPEN
    ) {
      const messageData = JSON.stringify({
        content: message,
        type: "outgoing",
      });

      console.log("Sending message: ", messageData);
      ws.current.send(messageData);
      setIsLoading(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, type: "outgoing" },
      ]);
    }
  };

  return (
    <div className={styles.divChat}>
      <div>
        <div className={styles.headerChat}>
          <button onClick={closeChat} className={styles.button}>
            x
          </button>
        </div>
        <div className={styles.divChatScreen} ref={chatRef}>
          <KeywordForm />
          {messages.map((msg, index) => (
            <div className={styles.messageContainer} key={index}>
              {msg.type === "incoming" && (
                <img
                  className={styles.icon}
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-balance-scale-advertising-kiranshastry-lineal-kiranshastry.png"
                  alt="Balance Scale"
                />
              )}
              <div
                className={`${styles.message} ${msg.type === "outgoing" ? styles.user : styles.server}`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && <PulseLoader color="#aec6eb" />}
          <Input sendMessage={sendMessage} />
        </div>
      </div>
      <div>
        <p className={styles.textItIsBot}>{t("chatText")}</p>
      </div>
    </div>
  );
}

export default Chat;
