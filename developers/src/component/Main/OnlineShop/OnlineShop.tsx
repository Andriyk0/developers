import React from 'react';
import './OnlineShop.scss';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const OnlineShop:React.FC = () => {
  return (
    <div id="onlineShop">
    <div className="online-shop">
      <div className="container-fluid" >
        <div className="row">
          <p className="online-shop__title">Примеры онлайн-магазинов</p>
          <div className="col-12">
           <Carousel>
           <Carousel.Item>
              <div className="online-shop__container">
                <div className="online-shop__firstImg">
                  <p className="online-shop__imgTitle">Онлайн-магазин</p>
                  <p className="online-shop__imgDescription">для оптовых покупок</p>
                  <img src="./image/first.jpg" alt="img" className="online-shop__image"/>
                </div>
                <div className="online-shop__secondImg">
                  <p className="online-shop__imgTitle">Онлайн-магазин</p>
                  <p className="online-shop__imgDescription">для парикмахеров</p>
                  <img src="./image/two.jpg" alt="img" className="online-shop__image"/>
                </div>
                <div className="online-shop__therdImg">
                  <p className="online-shop__imgTitle">Онлайн-магазин</p>
                  <p className="online-shop__imgDescription">для кондитеров</p>
                  <img src="./image/three.jpg" alt="img" className="online-shop__image"/>
                </div>
              </div> 
           </Carousel.Item>
           <Carousel.Item>
              <div className="online-shop__container">
                <div className="online-shop__fourImg">
                  <p className="online-shop__imgTitle">Онлайн-магазин</p>
                  <p className="online-shop__imgDescription">для флористов</p>
                  <img src="./image/four.jpg" alt="img" className="online-shop__image" />
                </div>
                <div className="online-shop__fiveImg">
                  <p className="online-shop__imgTitle">Онлайн-магазин</p>
                  <p className="online-shop__imgDescription">для визажистов</p>
                  <img src="./image/five.jpg" alt="img" className="online-shop__image"/>
                </div>
                <div className="online-shop__sixImg">
                  <p className="online-shop__imgTitle">Онлайн-магазин</p>
                  <p className="online-shop__imgDescription">для художников</p>
                  <img src="./image/six.jpg" alt="img" className="online-shop__image"/>
                </div>
              </div> 
           </Carousel.Item>
           </Carousel>
          </div>
        </div>
      </div>
    </div>

    <div className="online" id="onlineshop">
      <p className="online__title">Примеры онлайн-магазинов</p>
      <div className="online__container">
        <div className="online__left-container">
          <div className="online__firstImg">
            <p className="online__imgTitle">Онлайн-магазин</p>
            <p className="online__imgDescription">для оптовых покупок</p>
            <img src="./image/first.jpg" alt="img" className="online__image"/>
          </div>
          <div className="online__secondImg">
            <p className="online__imgTitle">Онлайн-магазин</p>
            <p className="online__imgDescription">для парикмахеров</p>
            <img src="./image/two.jpg" alt="img" className="online__image"/>
          </div>
          <div className="online__therdImg">
            <p className="online__imgTitle">Онлайн-магазин</p>
            <p className="online__imgDescription">для кондитеров</p>
            <img src="./image/three.jpg" alt="img" className="online__image"/>
          </div>
        </div>
        <div className="online__right-container">
          <div className="online__fourImg">
            <p className="online__imgTitle">Онлайн-магазин</p>
            <p className="online__imgDescription">для флористов</p>
            <img src="./image/four.jpg" alt="img" className="online__image" />
          </div>
          <div className="online__fiveImg">
            <p className="online__imgTitle">Онлайн-магазин</p>
            <p className="online__imgDescription">для визажистов</p>
            <img src="./image/five.jpg" alt="img" className="online__image"/>
          </div>
          <div className="online__sixImg">
            <p className="online__imgTitle">Онлайн-магазин</p>
            <p className="online__imgDescription">для художников</p>
            <img src="./image/six.jpg" alt="img" className="online__image"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};