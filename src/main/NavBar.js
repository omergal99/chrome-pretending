import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';

function NavBar() {

  const navLinks = ['home'];

  const list = navLinks.map(link => {
    const titleLink = link.replace('-', ' ').replace(/\b\w/g, letter => letter.toUpperCase());
    return <NavLink className="nav-link" to={`/${link}`} replace key={link}>
      <span className="text">{titleLink}</span>
    </NavLink>
  })

  return (
    <div className="nav-bar">
      <div className="nav-bar-links">{list}</div>
      <Menu />
    </div>
  );
}

export default NavBar;
