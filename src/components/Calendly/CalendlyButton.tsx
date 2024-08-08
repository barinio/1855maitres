import { useState } from "react";
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/button";
import axios from "axios";

interface CalendlyButtonProps {
  buttonText: string;
  color: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
  variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  className: string;
  style: {};
}

interface CalendlyEventData {
  name: string;
  profileName: string;
  phoneNumber: string;
  startTime: string;
}

function CalendlyButton({ buttonText, color, variant, className, style }: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const refRootElement = document.getElementById("root") || document.body;

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

  return (
    <>
      <Button
        color={color}
        variant={variant}
        className={className}
        style={style}
        onClick={() => setIsOpen(true)}
      >
        {t(buttonText)}
      </Button>

      <PopupModal
        url="https://calendly.com/7328652/test"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={refRootElement}
      />
    </>
  );
}

export default CalendlyButton;
