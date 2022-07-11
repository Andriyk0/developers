import React from 'react';
import './NavMenu.scss';

type Props = {
  setMenu:React.Dispatch<React.SetStateAction<boolean>>
}

export const NavMenu:React.FC<Props> = ({ setMenu }) => {

  return (
    <div className="nav-menu">
          <nav className="nav-menu__body">
            <ul className="nav-menu__list">
              <li className="nav-menu__item">
                <a 
                  href="#services" 
                  className="nav-menu__link"
                  onClick={() => setMenu(false)}
                >
                  Услуги
                </a>
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