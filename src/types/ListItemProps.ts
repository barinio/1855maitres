export type LawItem = {
  title: string;
  description: string;
  img: string;
};

export type LawItemProps = LawItem & { index: number };
