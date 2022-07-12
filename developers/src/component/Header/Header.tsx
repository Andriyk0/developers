import React, { useState } from 'react';
import { NavMenu } from '../Nav-menu';

import './Header.scss';

export const Header:React.FC = () => {
  const [menu, setMenu] = useState(false);
  
  const showMenu = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false)
    }
  };
 
  return (
    <>
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img 
            src="/image/logo.svg" 
            alt="logo" 
            className="header__logo-img"
          />
        </a>
        <div 
          className="header__menu menu"
          onClick={showMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__nav nav">
          <nav className="nav__body">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#services" className="nav__link">Услуги</a>
              </li>
              <li className="nav__item">
                <a href="#onlineShop" className="nav__link">Портфолио</a>
              </li>
              <li className="nav__item">
                <a href="#stages" className="nav__link">Этапы</a>
              </li>
              <li className="nav__item">
                <a href="#info" className="nav__link">Дизайнеры</a>
              </li>
              <li className="nav__item">
                <a href="#callback" className="nav__link nav__link-buy">Заказать</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <>
    {
      menu && (
        <NavMenu setMenu={setMenu}/>
      )
    }
    </>
    </>
  );
}
