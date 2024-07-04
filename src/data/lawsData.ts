import civilLawImg from "@/images/civil-law.jpg";
import criminalAndPenalLawwImg from "@/images/Criminal.png";
import immigrationLawImg from "@/images/Immigration.png";
import insuranceLawImg from "@/images/Insurance.png";
import laborAndSocialLawImg from "@/images/social.jpg";
import otherTypeOfLawImg from "@/images/area-of-law.jpg";
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
