import React from 'react';
import './Footer.scss';

export const Footer:React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__box">
          <div className="footer__logo-box">
            <img 
              src="./image/logo.svg" 
              alt="logo" 
              className="footer__logo-img"
            />
          </div>
          <div className="footer__viber-container">
            <div className="footer__viber">
              <img 
                src="./image/viber.svg" 
                alt="viberImg" 
                className="footer__viber-img"
              />
              <p className="footer__viber-title">Валерия  +380505859409</p>
            </div>
            <div className="footer__viber">
              <img 
                src="./image/viber.svg" 
                alt="viberImg" 
                className="footer__viber-img"
              />
              <p className="footer__viber-title">Анна     +380505859409</p>
            </div>
            <div className="footer__viber">
              <img 
                src="./image/viber.svg" 
                alt="viberImg" 
                className="footer__viber-img"
              />
              <p className="footer__viber-title">Валерия  +380505859409</p>
            </div>
          </div>
          <div className="footer__icons">
            <img src="./image/fb.svg" alt="facebooksvg" className="footer__icons-img" />
            <img src="./image/teleg.svg" alt="telegram" className="footer__icons-img" />
            <img src="./image/viber.svg" alt="viber" className="footer__icons-img" />
            <img src="./image/insta.svg" alt="instagram" className="footer__icons-img" />
            <img src="./image/watsup.svg" alt="watsup" className="footer__icons-img" />
          </div>
          <p className="footer__email">hr@d-vs.com</p>
        </div>
        <p className="footer__est">Developers 2018-2021  All rights reserved</p>
      </div>
    </footer>
  )
};
