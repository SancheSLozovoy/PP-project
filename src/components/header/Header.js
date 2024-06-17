import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/main" className="header-link">Главная</Link>
        <Link to="/teamsprofile" className="header-link">Профиль</Link>
      </nav>
    </header>
  );
};

export default Header;
