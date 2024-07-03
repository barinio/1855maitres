import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/button";
import axios from "axios";

import styles from "./CalendlyButton.module.scss";

interface CalendlyButtonProps {
  buttonText: string;
}

interface CalendlyEventData {
  name: string;
  profileName: string;
  phoneNumber: string;
  startTime: string;
}

function CalendlyButton({ buttonText }: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sendDataToBackend = async (eventData: CalendlyEventData) => {
    // eslint-disable-next-line no-console
    console.log("eventData:", eventData);

    try {
      const response = await axios.post("http://localhost:3000/api/calendly-events", eventData);

      // eslint-disable-next-line no-console
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error sending data to backend:", error);
    }
  };

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      // Asserting the type of e.data.payload to any to bypass strict type checking
      const eventData: CalendlyEventData = {
        name: (e.data.payload as any).invitee?.name,
        profileName: (e.data.payload as any).event?.name,
        phoneNumber: (e.data.payload as any).invitee?.phone_number || "",
        startTime: (e.data.payload as any).event?.start_time
      };

      sendDataToBackend(eventData);
      setIsOpen(false);
      navigate("/thank-you");
    }
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button
        style={{ display: "flex", fontSize: "16px" }}
        color="primary"
        variant="solid"
        className={styles.btnLink}
        onClick={handleClick}
      >
        {t(buttonText)}
      </Button>

      {isOpen && (
        <div className={styles.backdrop}>
          <div className={styles.modalPopup}>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
              ✖
            </button>
            <InlineWidget url="https://calendly.com/7328652/test" />
          </div>
        </div>
      )}
    </>
  );
}

export default CalendlyButton;
