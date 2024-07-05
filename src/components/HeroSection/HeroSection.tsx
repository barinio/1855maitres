import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/react";

import CalendlyButton from "../Calendly/CalendlyButton";

import styles from "./HeroSection.module.scss";

import heroImgDark from "@/images/hero-dark.png";
import heroImgLight from "@/images/hero-light.png";
import useDarkMode from "@/hooks/useDarkMode";

const HeroSection = () => {
  const { t } = useTranslation();
  const isDark = useDarkMode();

  return (
    <section className="relative pt-16">
      <div
        className={`${isDark ? styles.heroImgDark : styles.heroImgLight}`}
        style={{
          backgroundImage: `url('${isDark ? heroImgDark : heroImgLight}')`
        }}
      />
      <h1 className={`${styles.titlePage} uppercase text-4xl font-bold `}>{t("homeHeroH1")}</h1>
      <div className={styles.wrapperHeroContent}>
        <a
          className={`${styles.phoneLink} light:text-[#030508] dark:text-[#ecedee]`}
          href="tel:+18556248737"
        >
          +1-855-624-8737
        </a>

        <CalendlyButton
          buttonText="homeHeroBtn"
          color="primary"
          variant="solid"
          className={styles.btnLink}
          style={{ display: "flex", fontSize: "16px" }}
        />

        <div className={styles.wrapperHeroText}>
          <p
            style={{
              fontSize: "16px",
              color: isDark ? "#a1a1aa" : "#000000"
            }}
          >
            {t("homeHeroDescription")}
            <Link href="#" style={{ color: isDark ? "#a1a1aa" : "#000000" }} underline="always">
              1-855-MAÎTRES
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
