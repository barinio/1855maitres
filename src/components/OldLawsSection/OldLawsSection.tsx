import styles from "../LawsSection/LawsSection.module.scss";

import OldListItem from "./OldListItem";

import { OldLawsData } from "@/data/oldLawsData";

const OldLawsSection = () => {
  return (
    <section className={styles.lawsSection}>
      <h2 className="title-hidden">Laws</h2>
      <ul className={styles.lawsItemsList}>
        {OldLawsData.map((item, index) => {
          return <OldListItem key={item.title} {...item} index={index} />;
        })}
      </ul>
    </section>
  );
};

export default OldLawsSection;
