import { useState } from "react";
import i18next from "i18next";
import { Button } from "@nextui-org/button";

import { LOCALS } from "./constants";

import i18n from ".";

const SwitcherLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === LOCALS.EN ? LOCALS.FR : LOCALS.EN;

    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <Button
      variant="light"
      style={{ padding: "0" }}
      size="sm"
      className="sm:text-base"
      onClick={handleLanguageChange}
    >
      {currentLanguage === LOCALS.EN ? "English" : "Français"}
    </Button>
  );
};

export default SwitcherLanguage;
