import { LawsData } from "../../data/lawsData";

import styles from "./LawsSection.module.scss";
import ListItem from "./ListItem";

const LawsSection = () => {
  return (
    <section className={styles.lawsSection}>
      <h2 className="title-hidden">Laws</h2>
      <ul className={styles.lawsItemsList}>
        {LawsData.map((item, index) => {
          return <ListItem key={item.title} {...item} index={index} />;
        })}
      </ul>
    </section>
  );
};

export default LawsSection;
