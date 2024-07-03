import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useNavigate } from "react-router-dom";

import styles from "./CalendlyButton.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/button";

interface CalendlyButtonProps {
  buttonText: string;
}

function CalendlyButton({ buttonText }: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      // eslint-disable-next-line no-console
      console.log("Event scheduled: ", e.data);
      // Здесь можно отправить данные на бэкенд
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
