import { Link } from "@nextui-org/react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <p className={styles.footerText}>
        Vous cherchez des solutions en droit civil? Nous offrons une approche personnalisée et une
        aide qualifiée. Prenez rendez-vous pour des solutions juridiques sur mesure afin de protéger
        vos intérêts et droits.
      </p>
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
        Information on the protection of personal information
      </Link>
      <Link
        href="/privacy-policy"
        underline="always"
        className="uppercase"
        style={{ color: "#a1a1aa", display: "flex" }}
      >
        Privacy policy
      </Link>
      <p>
        ©{" "}
        <Link href="#" underline="always" style={{ color: "#a1a1aa", display: "inline-block" }}>
          1-855-MAÎTRES
        </Link>{" "}
        | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
