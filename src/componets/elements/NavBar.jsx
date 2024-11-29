import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faLanguage, faBars} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../public/asset/image/Logo.png";
import Intagram from "../../../public/asset/image/icon/Instagram.png";
import Facebook from "../../../public/asset/image/icon/Facebook.png";

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
    <>
      <nav>
        <img src={Logo} alt="Logo" />

        <div className="Listbar-nav-dekstop">
          <ul>
            <li>Pakaian</li>
            <li>Peralatan</li>
            <li>Eletronik</li>
            <li>AniManga</li>
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
          <button className="botton-login menu-normal">
            Login
          </button>
        </div>
      </nav>

      {/* Navbar Second */}
      <div className="navSecond">
        <ul className="navSecond-Left">
          <span className="dot"></span>
          <li>Spesial</li>
          <span className="dot"></span>
          <li>Kolaborasi</li>
          <span className="dot"></span>
          <li>Unggulan</li>
          <span className="dot"></span>
          <li>Limited Edition</li>
          <li><span className="diskon">Diskon</span></li>
        </ul>
        <div className="navSecond-Right">
          <ul>
            <li>Sosial Media:</li>
            <a href=""><img height="19px" src={Intagram} alt="Instagram" /></a>
            <a href=""><img height="19px" src={Facebook} alt="Facebook" s/></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
