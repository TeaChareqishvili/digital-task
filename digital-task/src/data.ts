import icon from "../src/assets/menuArrow.png";

export type MenuItem = {
  id: number;
  text: string;
  icon?: string;
};

const menu: MenuItem[] = [
  {
    id: 1,
    text: "Demos",
    icon: icon,
  },
  {
    id: 2,
    text: "Post",
    icon: icon,
  },
  {
    id: 3,
    text: "Features",
    icon: icon,
  },
  {
    id: 4,
    text: "Categories",
    icon: icon,
  },
  {
    id: 5,
    text: "Shop",
    icon: icon,
  },
  {
    id: 6,
    text: "Buy Now",
  },
];

export default menu;
