import menu from "../../data";

export default function HorizontalMenu() {
  return (
    <div className="logo">
      <ul className="menu-bar">
        {menu.map((item) => (
          <li key={item.id} className="menu">
            {item.text}
            {item.icon && <img src={item.icon} alt="icon" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
