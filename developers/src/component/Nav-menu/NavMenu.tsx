import React from 'react';
import './NavMenu.scss';

export const NavMenu:React.FC = () => {

  return (
    <div className="nav-menu">
          <nav className="nav-menu__body">
            <ul className="nav-menu__list">
              <li className="nav-menu__item">
                <a href="d" className="nav-menu__link">Услуги</a>
              </li>
              <li className="nav-menu__item">
                <a href="d" className="nav-menu__link">Портфолио</a>
              </li>
              <li className="nav-menu__item">
                <a href="d" className="nav-menu__link">Этапы</a>
              </li>
              <li className="nav-menu__item">
                <a href="d" className="nav-menu__link">Дизайнеры</a>
              </li>
            </ul>
          </nav>
        </div>
  )
};