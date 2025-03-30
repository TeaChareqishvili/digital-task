import React from "react";
import logo from "../../assets/Logotype.png";
import searchIcon from "../../assets/search.png";
import HeaderLayout from "./HeaderLayout";

//TODO implement search bar

export default function Logo() {
  return (
    <div className="header">
      <HeaderLayout>
        <img src={logo} alt="logo" />
        <img src={searchIcon} alt="search-icon" />
      </HeaderLayout>
    </div>
  );
}
