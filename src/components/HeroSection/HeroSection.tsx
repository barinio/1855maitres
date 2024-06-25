import { Link, Button } from "@nextui-org/react";

import styles from "./HeroSection.module.scss";

import heroImgDark from "@/images/hero-dark.png";
import heroImgLight from "@/images/hero-light.png";
import useDarkMode from "@/hooks/useDarkMode";

const HeroSection = () => {
  const isDark = useDarkMode();

  return (
    <section className="relative pt-16">
      <div
        className={`${isDark ? styles.heroImgDark : styles.heroImgLight}`}
        style={{
          backgroundImage: `url('${isDark ? heroImgDark : heroImgLight}')`
        }}
      />
      <h1 className={`${styles.titlePage} uppercase text-4xl font-bold `}>
        Legal solutions adapted to your needs
      </h1>
      <div className={styles.wrapperHeroContent}>
        <a
          className={`${styles.phoneLink} light:text-[#030508] dark:text-[#ecedee]`}
          href="tel:+18556248737"
        >
          +1-855-624-8737
        </a>

        <Button
          style={{ display: "flex", fontSize: "16px" }}
          href="#"
          as={Link}
          color="primary"
          variant="solid"
          className={styles.btnLink}
        >
          Prendre un rendez-vous
        </Button>

        <div className={styles.wrapperHeroText}>
          <p style={{ fontSize: "16px", color: isDark ? "#a1a1aa" : "#000000" }}>
            Our goal is to make legal services accessible to citizens throughout Quebec. If you are
            looking to assert your rights in one of the many areas of law, you can easily contact us
            by dialing our unique number,{" "}
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
