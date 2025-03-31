import icon from "../src/assets/menuArrow.png";

export type MenuItem = {
  id: number;
  text: string;
  icon?: string;
  dropdown?: MenuItem[];
};

const menu: MenuItem[] = [
  {
    id: 1,
    text: "Demos",
    icon: icon,
    dropdown: [
      { id: 1, text: "Demo" },
      { id: 2, text: "Live Demo" },
    ],
  },
  {
    id: 2,
    text: "Post",
    icon: icon,
    dropdown: [
      { id: 1, text: "Health" },
      { id: 2, text: "Gym" },
      { id: 3, text: "Sports" },
      { id: 4, text: "News" },
    ],
  },
  {
    id: 3,
    text: "Features",
    icon: icon,
    dropdown: [
      { id: 1, text: "Post Header" },
      { id: 2, text: "Post Layout" },
      { id: 3, text: "Share buttons" },
      { id: 4, text: "Gallery Post" },
      { id: 5, text: "Video Post" },
    ],
  },
  {
    id: 4,
    text: "Categories",
    icon: icon,
    dropdown: [
      { id: 1, text: "Health" },
      { id: 2, text: "Gym" },
      { id: 3, text: "Sports" },
      { id: 4, text: "News" },
    ],
  },
  {
    id: 5,
    text: "Shop",
    icon: icon,
    dropdown: [
      { id: 1, text: "Your Card" },
      { id: 2, text: "Payment History" },
      { id: 3, text: "Gift Cards " },
    ],
  },
  {
    id: 6,
    text: "Buy Now",
  },
];

export default menu;
