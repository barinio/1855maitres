import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Button } from "@nextui-org/react";

import styles from "./LawsSection.module.scss";

import { LawItemProps } from "@/types/ListItemProps";

const ListItem: React.FC<LawItemProps> = ({
  title,
  description,
  img,
  index,
}) => {
  const { t } = useTranslation();

  const isEven = index % 2 === 0;

  const buttonColor = isEven ? "#C20E4D" : "#F96501";

  return (
    <li key={title} className={styles.lawContentWrapper}>
      {!isEven && (
        <img src={img} alt={title} className={styles.isEvenImg} width={520} />
      )}

      <div className={styles.lawTexttWrapper}>
        <h3 className={styles.titleLawBlock}>{t(`${title}`)}</h3>
        <p
          className={`${styles.descriptionLawBlock} dark:text-zinc-400s lg:text-lg`}
        >
          {t(`${description}`)}
        </p>

        <div className={styles.btnsWrapper}>
          <Button
            href="tel:+18556248737"
            as={Link}
            variant="solid"
            className="uppercase underline text-white"
            style={{ backgroundColor: buttonColor }}
          >
            {t("lawItemBtnTelef")}
          </Button>

          <Button
            href="https://calendly.com/1855maitres/reunion-de-15-minutes-en-teams"
            as={Link}
            variant="bordered"
            radius="full"
            className="uppercase underline"
            style={{ border: `1px solid ${buttonColor}`, color: buttonColor }}
          >
            {t("lawItemBtnConferen")}
          </Button>
        </div>
      </div>
      {isEven && (
        <img src={img} alt={title} className={styles.isEvenImg} width={520} />
      )}
    </li>
  );
};

export default ListItem;
