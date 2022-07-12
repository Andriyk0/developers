import React from 'react';
import './Info.scss';

export const Info:React.FC = () => {
  return (
    <div className="info" id="info">
      <p className="info__title">Необходимо больше информации?</p>
      <div className="info__image-box">
        <img 
          src="./image/Group 155.svg" 
          alt="img"
          className="info__image"
        />
         <img 
          src="./image/Orders.svg" 
          alt="img"
          className="info__image2"
        />
      </div>
      <p className="info__description">Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб-проект.</p>
      <button 
        type="button"
        className="info__button"
      >
        оставить заявку
      </button>
      <img 
        src="./image/shape sphere.267.svg" 
        alt="img" 
        className="info__ball"
      />
    </div>
  )
};