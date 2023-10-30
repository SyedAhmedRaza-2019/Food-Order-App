import React from "react";
import mealsImage from "../../Assets/meals.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="" />
      </div>
    </React.Fragment>
  );
}

export default Header;
