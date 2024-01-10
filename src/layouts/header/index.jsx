import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img
            src="https://preview.colorlib.com/theme/blogger/img/logo.png.webp"
            alt=""
          />

          <ul>
            <NavLink className="navlink" to="/">
              HOME
            </NavLink>
            <NavLink className="navlink" to="/news">
              NEWS
            </NavLink>

            <NavLink className="navlink" to="/travel">
              TRAVEL
            </NavLink>
            <NavLink className="navlink" to="/fashion">
              FASHION
            </NavLink>
            <NavLink className="navlink" to="/team">
              TEAM
            </NavLink>
            <NavLink className="navlink" to="/pages">
              PAGES
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
