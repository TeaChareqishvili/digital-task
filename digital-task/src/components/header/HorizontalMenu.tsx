import menu from "../../data";
import HeaderLayout from "./HeaderLayout";

export default function HorizontalMenu() {
  return (
    <div className="header">
      <HeaderLayout>
        <ul className="menu-bar">
          {menu.map((item) => (
            <li key={item.id} className="menu">
              {item.text}
              {item.icon && <img src={item.icon} alt="icon" />}
            </li>
          ))}
        </ul>
      </HeaderLayout>
    </div>
  );
}
