import logo from "../../assets/Logotype.png";
import close from "../../assets/close.png";
import Navigation from "./Navigation";

type burgerMenuProp = {
  isMenuOpen: boolean;
  closeMenuHandler: () => void;
};

export default function BurgerMenu({
  isMenuOpen,
  closeMenuHandler,
}: burgerMenuProp) {
  return (
    <>
      <span className="burger-background"></span>
      <div
        className={`burger-list ${isMenuOpen ? "burger-list-visible" : " "}`}
      >
        <div className="burger-header">
          <img src={logo} alt="logo" />
          <img src={close} alt="close" onClick={closeMenuHandler} />
        </div>
        <div className="border"></div>
        <Navigation flexDirection="column" alignItems="flex-start" />
      </div>
    </>
  );
}
