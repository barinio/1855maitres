import civilLawImg from '@/images/old/old-civil-law.png';
import criminalAndPenalLawwImg from '@/images/old/old-criminal.png';
import immigrationLawImg from '@/images/old/old-immigration.png';
import insuranceLawImg from '@/images/old/old-insurance.png';
import laborAndSocialLawImg from '@/images/old/old-social.png';
import otherTypeOfLawImg from '@/images/old/old-area-of-law.png';
import { LawItem } from '@/types/ListItemProps';

export const OldLawsData: LawItem[] = [
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
