import menu from "../../data";
import arrowRight from "../../assets/arrowRight.png";

export default function HorizontalMenu() {
  return (
    <div className="logo">
      <ul className="menu-bar">
        {menu.map((item) => (
          <li key={item.id} className="menu">
            {item.text}
            {item.icon && <img src={item.icon} alt="icon" />}
            {item.dropdown && (
              <ul className="dropdown">
                {item.dropdown.map((subitem) => (
                  <li key={subitem.id}>
                    {subitem.text} <img src={arrowRight} alt="icon" />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
