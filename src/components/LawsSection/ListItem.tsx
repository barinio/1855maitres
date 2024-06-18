import React from "react";
import { Link, Button } from "@nextui-org/react";

import styles from "./LawsSection.module.scss";

import { LawItemProps } from "@/types/ListItemProps";

const ListItem: React.FC<LawItemProps> = ({ title, description, img, index, imgWidth }) => {
  const isEven = index % 2 === 0;

  const buttonColor = isEven ? "#C20E4D" : "#F96501";

  return (
    <li key={title} className={styles.lawContentWrapper}>
      {!isEven && <img src={img} alt={title} width={imgWidth} />}

      <div className={styles.lawTexttWrapper}>
        <h3 className={styles.titleLawBlock}>{title}</h3>
        <p className={styles.descriptionLawBlock}>{description}</p>

        <div className={styles.btnsWrapper}>
          <Button
            href="#"
            as={Link}
            variant="solid"
            className="uppercase underline"
            style={{ backgroundColor: buttonColor }}
          >
            By telephone
          </Button>

          <Button
            href="#"
            as={Link}
            variant="bordered"
            radius="full"
            className="uppercase underline"
            style={{ border: `1px solid ${buttonColor}`, color: buttonColor }}
          >
            By videoconference
          </Button>
        </div>
      </div>
      {isEven && <img src={img} alt={title} width={imgWidth} />}
    </li>
  );
};

export default ListItem;
