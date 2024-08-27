import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/scss";
import CalendlyButton from "../Calendly/CalendlyButton";

import styles from "./DomaineDroitSection.module.scss";

import icon from "@/images/criminal-penal-law.svg";
import { domaineDroitData } from "@/data/domaineDroitData";
import useDarkMode from "@/hooks/useDarkMode";

const DomaineDroitSection = () => {
  const { t } = useTranslation();

  const isDark = useDarkMode();

  return (
    <section className={styles.domaineDroitSection}>
      <h2 className="title-hidden">Domaine de droit recherché</h2>

      <Swiper
        spaceBetween={45}
        breakpoints={{
          0: {
            slidesPerView: 2,
            direction: "vertical",
          },
          730: {
            slidesPerView: 2.2,
            direction: "horizontal",
          },
          1150: {
            slidesPerView: 3.5,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        modules={[Autoplay]}
        className={styles.verticalCenter}
      >
        {domaineDroitData.map(({ id, title, description }) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.cardWrapper}>
                <div className={styles.headerCard}>
                  <div className={styles.wrapperIcon}>
                    <img src={icon} alt="svg" width="25" />
                  </div>
                  <h3 className="uppercase font-bold">{t(`${title}`)}</h3>
                </div>
                <p className="p-3 dark:text-zinc-400">{t(`${description}`)}</p>

                <div className={styles.linkBtnWrapper}>
                  <CalendlyButton
                    buttonText="domaineDroitButtonText"
                    color="default"
                    variant="solid"
                    className="text-zinc-400"
                    style={{
                      border: `1px solid ${isDark ? "zinc-700" : "#3F3F46"}`,
                      backgroundColor: isDark
                        ? "rgba(63, 63, 70, 0.4)"
                        : "rgba(63, 63, 70, 0.9)",
                    }}
                  />
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
