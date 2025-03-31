import { useState } from "react";
import burger from "../../../assets/burger.png";
import BurgerMenu from "./BurgerMenu";

export default function BurgerMenuContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="burger-menu-wrapper">
      <img src={burger} alt="burger-menu" onClick={openMenuHandler} />
      {isMenuOpen && (
        <BurgerMenu
          isMenuOpen={isMenuOpen}
          closeMenuHandler={closeMenuHandler}
        />
      )}
    </div>
  );
}
