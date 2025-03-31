import menu from "../../data";
import arrowRight from "../../assets/arrowRight.png";
import { useEffect, useState, useCallback } from "react";

export default function HorizontalMenu() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > lastScrollTop;
    console.log(currentScrollPos, "scrol");

    if (isScrollingDown && currentScrollPos > 200) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollTop(currentScrollPos);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={`navigation ${visible ? "" : "hide-menu"}`}>
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
