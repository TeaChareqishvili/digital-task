import logo from "../../assets/Logotype.png";

import HeaderLayout from "./HeaderLayout";

export default function Logo() {
  return (
    <div className="header">
      <HeaderLayout>
        <img src={logo} alt="logo" />
      </HeaderLayout>
    </div>
  );
}
