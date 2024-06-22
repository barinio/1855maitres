export interface BlogItem {
  id: string;
  title: string;
  img: string;
  description: string;
}

export interface CardBlogProps {
  data: BlogItem;
  onClickCard: () => void;
}
