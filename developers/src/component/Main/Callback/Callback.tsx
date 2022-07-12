import React from 'react';
import './Callback.scss';

export const Callback:React.FC = () => {
  return (
    <div className="callback" id="callback">
      <form action="#">    
        <p className="callback__title">Обсудить проект</p>
        <p className="callback__description">Расскажите o своих бизнес-целях и мы поможем вам в их достижении</p>
        <input 
          type="text" 
          className="callback__input" 
          placeholder="Имя"
        />
        <input 
          type="phone" 
          className="callback__input"
          placeholder="Telegram/Viber"
        />
        <input 
          type="email" 
          className="callback__input"
          placeholder="Email"
        />
        <button 
          type="submit"
          className="callback__button"
        >
          Отправить
        </button>
      </form>
      <img 
        src="./image/Postpaid.svg" 
        alt="img" 
        className="callback__image-phone"
      />
      <img 
        src="./image/phone call.243.svg" 
        alt="img" 
        className="callback__image"
      />
      <img 
        src="./image/shape wave.258.svg" 
        alt="img" 
        className="callback__shape"
      />
      <img 
        src="./image/shape sphere.269.svg" 
        alt="img" 
        className="callback__sphare"
      />
    </div>
  )
};