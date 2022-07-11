import React, { useState } from 'react';
import classnames from 'classnames';
import './Services.scss';

export const Services:React.FC = () => {
  const [portal, setPortal] = useState(false);
  const [adaptive, setAdaptive] = useState(false);
  const [desctop, setDesctop] = useState(false);
  const [interfaces, setInterface] = useState(false);
  const [ux, setUx] = useState(false);
  

  const showPortal = () => {
    if (portal === false) {
        setPortal(true);
    } else {
        setPortal(false);
    }
  };

  const showAdaptive = () => {
    if (adaptive === false) {
        setAdaptive(true);
    } else {
        setAdaptive(false);
    }
  };

  const showDesctop = () => {
    if (desctop === false) {
        setDesctop(true);
    } else {
        setDesctop(false);
    }
  };

  const showInterface = () => {
    if (interfaces === false) {
        setInterface(true);
    } else {
        setInterface(false);
    }
  };

  const showUx = () => {
    if (ux === false) {
        setUx(true);
    } else {
        setUx(false);
    }
  };

  return (
    <section className="services" id="services">
      <p className="services__title">
        Что входит в услугу по созданию дизайна интернет-магазина?
      </p>
      <div className="services__container">
        <div className={classnames('services__portal', {'show' : portal})} onClick={showPortal}>
          <div className="services__portal-box">
            <span className={classnames('services__circle', {'blue' : portal})}></span>
            <p className="services__title2">Дизайн портала</p>
            <img 
              src={portal ? "./image/Vector1.svg" : "./image/Vector.svg" }
              alt="vector" 
              className="services__vector"
            />
          </div>
          <div className="services__portal-text">
            <p className="services__portal-description">Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя co страницей. Продуманный дизайн создает нужное впечатление o компании.</p>
          </div>
        </div>

        <div className={classnames('services__adaptive', {'show' : adaptive})} onClick={showAdaptive}>
          <div className="services__portal-box">
            <span className={classnames('services__circle', {'blue' : adaptive})}></span>
            <p>Дизайн адаптивной <br /> мобильной версии</p>
            <img 
              src={adaptive ? "./image/Vector1.svg" : "./image/Vector.svg" }
              alt="vector" 
              className="services__vector"
            />
          </div>
          <div className="services__portal-text">
            <p className="services__portal-description">Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия позволяет совершать заказ/покупку  с минимумом действий. 
              При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. 
            </p>
          </div>
        </div>

        <div className={classnames('services__adaptive', {'show' : desctop})} onClick={showDesctop}>
          <div className="services__portal-box">
            <span className={classnames('services__circle', {'blue' : desctop})}></span>
            <p>Дизайн десктопной <br /> версии</p>
            <img 
              src={desctop ? "./image/Vector1.svg" : "./image/Vector.svg" } 
              alt="vector" 
              className="services__vector"
            />
          </div>
          <div className="services__portal-text">
            <p className="services__portal-description">Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.</p>
          </div>
        </div>

        <div className={classnames('services__adaptive', {'show' : interfaces})} onClick={showInterface}>
          <div className="services__portal-box">
            <span className={classnames('services__circle', {'blue' : interfaces})}></span>
            <p>Пользовательский <br /> интерфейс</p>
            <img 
              src={interfaces ? "./image/Vector1.svg" : "./image/Vector.svg" }
              alt="vector" 
              className="services__vector"
            />
          </div>
          <div className="services__portal-text">
            <p className="services__portal-description">Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя.</p>
          </div>
        </div>

        <div className={classnames('services__portal', {'show' : ux})} onClick={showUx}>
          <div className="services__portal-box">
            <span className={classnames('services__circle', {'blue' : ux})}></span>
            <p>Микро UX</p>
            <img 
              src={ux ? "./image/Vector1.svg" : "./image/Vector.svg" }
              alt="vector" 
              className="services__vector"
            />
          </div>
          <div className="services__portal-text">
            <p className="services__portal-description">Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. </p>
          </div>
        </div>
      </div>
      <img 
        src="./image/bag.149.svg" 
        alt="bag" 
        className="services__bag"
      />
    </section>
  )
};