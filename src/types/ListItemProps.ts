export type LawItem = {
  title: string;
  description: string;
  img: string;
  imgWidth: number;
};

export type LawItemProps = LawItem & { index: number };
