import civilLawImg from "../../images/civil-law.png";
import criminalAndPenalLawwImg from "../../images/criminal-and-penal-law.png";
import immigrationLawImg from "../../images/immigration-to-canada.png";
import insuranceLawImg from "../../images/insurance-law.png";
import laborAndSocialLawImg from "../../images/labor-and-social-law.png";
import otherTypeOfLawImg from "../../images/area-of-law.png";

import { LawItem } from "@/types/ListItemProps";

export const LawsData: LawItem[] = [
  {
    title: "lawsTitle1",
    description: "lawsDescription",
    img: civilLawImg
  },
  {
    title: "lawsTitle2",
    description: "lawsDescription",
    img: criminalAndPenalLawwImg
  },
  {
    title: "lawsTitle3",
    description: "lawsDescription",
    img: immigrationLawImg
  },
  {
    title: "lawsTitle4",
    description: "lawsDescription",
    img: insuranceLawImg
  },
  {
    title: "lawsTitle5",
    description: "lawsDescription",
    img: laborAndSocialLawImg
  },
  {
    title: "lawsTitle6",
    description: "lawsDescription",
    img: otherTypeOfLawImg
  }
];
