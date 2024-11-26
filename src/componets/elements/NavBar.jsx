import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faLanguage, faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../public/asset/image/Logo.png";
import "../../css/Navbar.css";
import "../../css/index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageOpen(!languageOpen);
  };

  const MenuLanguage = ["Indonesia", "English", "Japan"];

  return (
    <nav>
      <img src={Logo} alt="Logo" />

      <div className="Listbar-nav-dekstop">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Baby</li>
        </ul>
      </div>

      <div className="Listbar-nav">
        <ul className={menuOpen ? "active" : ""}>
          <div className="Lisbar-nav-hr">
            <li>Women</li>
            <hr />
          </div>
          <div className="Lisbar-nav-hr">
            <li>Men</li>
            <hr />
          </div>
          <div className="Lisbar-nav-hr">
            <li>Kids</li>
            <hr />
          </div>
          <div className="Lisbar-nav-hr">
            <li>Baby</li>
            <hr />
          </div>
        </ul>
      </div>

      <div className="navbar-icons">
        <button className="icon-btn menu-bars" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button className="icon-btn menu-normal">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button className="icon-btn menu-normal">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <div className="language-dropdown">
          <button className="icon-btn menu-normal" onClick={toggleLanguageDropdown}>
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          {languageOpen && (
            <ul className="dropdown-menu">
              {MenuLanguage.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
