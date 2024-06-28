import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/react";

import styles from "./Footer.module.scss";

const dataLink = [
  { href: "/privacy-information", text: "linkPrivacyInformation" },
  { href: "/privacy-policy", text: "linkPrivacyPolicy" }
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerSection}>
      <p className={`dark:text-zinc-400 ${styles.footerText}`}>{t("footerText")}</p>
      <Link
        href="mailto:info@1855maitres.com"
        underline="always"
        color="foreground"
        className="flex text-center dark:text-zinc-400"
      >
        Info@1855maitres.com
      </Link>
      {dataLink.map(({ href, text }) => (
        <Link
          key={text}
          href={href}
          underline="always"
          color="foreground"
          className="uppercase text-center dark:text-zinc-400"
        >
          {t(text)}
        </Link>
      ))}

      <p className={`capitalize dark:text-zinc-400`}>
        ©{" "}
        <Link
          href="#"
          underline="always"
          color="foreground"
          className="inline-block uppercase text-center dark:text-zinc-400"
        >
          1-855-MAÎTRES
        </Link>{" "}
        | {t("allRightsReserved")}.
      </p>
    </footer>
  );
};

export default Footer;
