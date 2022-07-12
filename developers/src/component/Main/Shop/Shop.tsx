import React from 'react';
import './Shop.scss';

export const Shop:React.FC = () => {
  return (
    <section className="shop">
      <div className="shop__image-box">
        <img 
          src="./image/go to market.147.svg" 
          alt="goToMarket" 
          className="shop__go-to-market"
        />
        <img 
          src="./image/shape  cylinder.275.svg" 
          alt="cylinder" 
          className="shop__cylinder-275"
        />
        <img 
          src="./image/shape wave.257 copy.svg" 
          alt="shape" 
          className="shop__shape-257"
        />
        <img 
          src="./image/Layer 9 copy 3.svg" 
          alt="layer"
          className="shop__layer9"
        />
        <img 
          src="./image/shape wave.258.svg" 
          alt="shape" 
          className="shop__shape-258"
        />
        <img 
          src="./image/shape sphere.267.svg" 
          alt="sphere" 
          className="shop__sphere-267"
        />
        <img 
          src="./image/shape  cylinder.278 copy.svg" 
          alt="cylinder"
          className="shop__cylinder-278" 
        />
        <img 
          src="./image/Ellipse 2.svg" 
          alt="elipse" 
          className="shop__elipse-2"
        />
        <img 
          src="./image/shape sphere.264.svg" 
          alt="sphere" 
          className="shop__sphere-264"
        />
        <img 
          src="./image/Ellipse 3.svg" 
          alt="elipse" 
          className="shop__elipse-3"
        />
        <img 
          src="./image/shape sphere.267.svg" 
          alt="sphere" 
          className="shop__sphere-2672"
        />
        <img 
          src="./image/Ellipse 2big.svg" 
          alt="elipse" 
          className="shop__elipse-2big"
        />  
      </div>
      <div className="shop__info">
        <p className="shop__title">Разработка <br /> интернет-магазина <br /> c нуля за неделю</p>
        <p className="shop__description">Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля до пользовательского интерфейса в сжатые сроки c командой Virtual Designers </p>
        <a href="#callback" className="shop__button">Заказать</a>
      </div>
    </section>
  )
};