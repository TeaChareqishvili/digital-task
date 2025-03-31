import logo from "../../assets/Logotype.png";
import close from "../../assets/close.png";
import Navigation from "./Navigation";

export default function BurgerMenu() {
  return (
    <>
      <div className="burger-background"></div>
      <div className="burger-list">
        <div className="burger-header">
          <img src={logo} alt="logo" />
          <img src={close} alt="close" />
        </div>
        <div className="border"></div>
        <Navigation flexDirection="column" alignItems="flex-start" />
      </div>
    </>
  );
}
