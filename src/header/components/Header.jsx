import React from 'react';

import '../styles/header.scss';

export default function Header() {
  return (
    <header className="header">
      <a href="./" className="header__logo">
        <img src="./images/header/logo.webp" alt="Logo" />
      </a>
      <nav className="header__navigation">
        <ul className="header__links">
          <li className="header__link">
            <a href="./">For passengers</a>
          </li>
          <li className="header__link">
            <a href="./">IEV Services</a>
          </li>
          <li className="header__link">
            <a href="./">VIP</a>
          </li>
          <li className="header__link">
            <a href="./">Corporate</a>
          </li>
          <li className="header__link">
            <a href="./">Press Room</a>
          </li>
          <li className="header__link">
            <a href="./">EN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
