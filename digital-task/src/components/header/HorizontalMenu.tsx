import { useEffect, useState, useCallback } from "react";
import Navigation from "./Navigation";

export default function HorizontalMenu() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > lastScrollTop;

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
      <div className="desktop-navigation">
        <Navigation flexDirection="row" alignItems="center" />
      </div>
    </div>
  );
}
