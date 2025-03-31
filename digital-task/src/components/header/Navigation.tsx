import menu from "../../data";
import arrowRight from "../../assets/arrowRight.png";

type NavigationProps = {
  flexDirection: "row" | "column";
  alignItems: "center" | "flex-start";
};

export default function Navigation({
  flexDirection,
  alignItems,
}: NavigationProps) {
  return (
    <>
      <ul className="menu-bar" style={{ flexDirection, alignItems }}>
        {menu.map((item) => (
          <li
            key={item.id}
            className="menu"
            style={{
              borderBottom:
                flexDirection === "column" ? "1px solid #e9e9e9" : "none",
            }}
          >
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
    </>
  );
}
