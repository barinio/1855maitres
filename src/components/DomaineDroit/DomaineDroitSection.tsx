import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import icon from "../../images/criminal-penal-law.svg";

import styles from "./DomaineDroitSection.module.scss";
import { Data } from "./data";

const DomaineDroitSection = () => {
  return (
    <section className={styles.domaineDroitSection}>
      <h2 className={styles.titleHidden}>Domaine de droit recherché</h2>

      <Swiper spaceBetween={45} slidesPerView={3.5}>
        {Data.map(({ id, title, description }) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.cardWrapper}>
                <div className={styles.headerCard}>
                  <div className={styles.wrapperIcon}>
                    <img src={icon} alt="svg" width="25" />
                  </div>
                  {/* <h3 className={`${styles.titleCard} uppercase font-bold`}>{title}</h3> */}
                  <h3 className="uppercase font-bold">{title}</h3>
                </div>
                <p className={styles.descriptionCard}>{description}</p>

                <div className={styles.linkBtnWrapper}>
                  <Button
                    href="https://github.com/nextui-org/nextui"
                    as={Link}
                    color="default"
                    variant="solid"
                    className="text-zinc-400"
                    style={{
                      border: "1px solid zinc-700",
                      backgroundColor: "rgba(63, 63, 70, 0.4)"
                    }}
                  >
                    Rendez-vous
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default DomaineDroitSection;
