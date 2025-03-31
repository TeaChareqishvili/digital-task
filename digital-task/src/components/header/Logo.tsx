import logo from "../../assets/Logotype.png";
import BurgerMenuContainer from "./BurgerMenuContainer";

export default function Logo() {
  return (
    <div className="logo">
      <BurgerMenuContainer />
      <img src={logo} alt="logo" />
    </div>
  );
}
