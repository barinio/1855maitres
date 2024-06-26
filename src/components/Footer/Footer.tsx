import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerSection}>
      <p className={styles.footerText}>{t("footerText")}</p>
      <Link
        href="mailto:info@1855maitres.com"
        underline="always"
        style={{ color: "#a1a1aa", display: "flex" }}
      >
        Info@1855maitres.com
      </Link>
      <Link
        href="/privacy-information"
        underline="always"
        className="uppercase text-center"
        style={{ color: "#a1a1aa", display: "flex" }}
      >
        {t("linkPrivacyInformation")}
      </Link>
      <Link
        href="/privacy-policy"
        underline="always"
        className="uppercase"
        style={{ color: "#a1a1aa", display: "flex" }}
      >
        {t("linkPrivacyPolicy")}
      </Link>
      <p className="capitalize">
        ©{" "}
        <Link href="#" underline="always" style={{ color: "#a1a1aa", display: "inline-block" }}>
          1-855-MAÎTRES
        </Link>{" "}
        | {t("allRightsReserved")}.
      </p>
    </footer>
  );
};

export default Footer;
