export interface NewsItem {
  id: number;
  title: string;
  time: Date;
  category: string;
  source: string;
  sentiment: number;
  image: string;
}