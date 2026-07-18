export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "Angel" | "Monster";
  isPopular: boolean;
  isLimited: boolean;
};