import React from 'react';
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const logout = () => {
    toggleMenu();
    history.replace(`/`);
  }

  const goToMyItems = () => {
    toggleMenu();
    history.replace(`/settings`);
  }

  return (
    <>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-icon-custom">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {isMenuOpen && <div className="cover-layer" onClick={toggleMenu}></div>}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-user">
          <div className="user-img"></div>
          <div className="user-details">
            <h2>{'Omer'}</h2>
            <h3>{'omergal@gmail.com'}</h3>
          </div>
        </div>
        <ul className="menu-options">
          <li className="option" onClick={goToMyItems}>Settings</li>
          <li className="option" onClick={logout}>Logout</li>
        </ul>
      </div >
    </>
  );
}

export default Menu;
