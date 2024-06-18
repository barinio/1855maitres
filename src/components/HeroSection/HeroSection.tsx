import { Link, Button } from "@nextui-org/react";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className={styles.heroImg} />
      <h1 className={`${styles.titlePage} uppercase text-4xl font-bold`}>
        Legal solutions adapted to your needs
      </h1>
      <div className={styles.wrapperHeroContent}>
        <a className={styles.phoneLink} href="tel:+18556248737">
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
          <p className={styles.heroText}>
            Our goal is to make legal services accessible to citizens throughout Quebec. If you are
            looking to assert your rights in one of the many areas of law, you can easily contact us
            by dialing our unique number,{" "}
            <Link href="#" style={{ color: "#a1a1aa" }} underline="always">
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
