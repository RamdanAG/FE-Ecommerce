import '../../css/Navbar.css';
import '../../css/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons'; // Import ikon yang digunakan

import Logo from '../../../public/asset/image/Logo.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo" />
        <div className="Listbar-nav">
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Baby</li>
          </ul>
        </div>
        <div className="navbar-icons">
          <button className="icon-btn">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button className="icon-btn">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button className="icon-btn">
            <FontAwesomeIcon icon={faLanguage} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
