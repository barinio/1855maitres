import civilLawImg from '@/images/civil-law.png';
import criminalAndPenalLawwImg from '@/images/Criminal.png';
import immigrationLawImg from '@/images/Immigration.png';
import insuranceLawImg from '@/images/Insurance.png';
import laborAndSocialLawImg from '@/images/social.jpg';
import otherTypeOfLawImg from '@/images/area-of-law.jpg';
import { LawItem } from '@/types/ListItemProps';

export const LawsData: LawItem[] = [
  {
    title: 'lawsTitle1',
    description: 'lawsDescription',
    img: civilLawImg,
  },
  {
    title: 'lawsTitle2',
    description: 'lawsDescription2',
    img: criminalAndPenalLawwImg,
  },
  {
    title: 'lawsTitle3',
    description: 'lawsDescription3',
    img: immigrationLawImg,
  },
  {
    title: 'lawsTitle4',
    description: 'lawsDescription4',
    img: insuranceLawImg,
  },
  {
    title: 'lawsTitle5',
    description: 'lawsDescription5',
    img: laborAndSocialLawImg,
  },
  {
    title: 'lawsTitle6',
    description: 'lawsDescription6',
    img: otherTypeOfLawImg,
  },
];
