import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ImMenu } from "react-icons/im";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import "./styles.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img src={Logo} className="logo" alt="logo" />
          </Link>
          <ul
            className={
              click ? "navbar__container__menu active" : "navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  className="navbar__container__menu__item__link"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <ImMenu size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
