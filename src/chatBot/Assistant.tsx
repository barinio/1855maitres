import { useState } from "react";
import styles from "./styles/Assistant.module.scss";
import Chat from "./Chat";
import { t } from "i18next";

function Assistant() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.appContainer}>
      {!isChatOpen && (
        <button onClick={toggleChat} className={styles.openModalBtn}>
          {t("chatOpenBtn")}
        </button>
      )}
      {isChatOpen && <Chat closeChat={toggleChat} />}
    </div>
  );
}

export default Assistant;
