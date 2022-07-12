import React from 'react';
import './Stages.scss';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Stages:React.FC = () => {
  return (
    <div className="stages" id="stages">
      <div className="container-fluid" >
        <div className="row">
          <p className="stages__title">Этапы разработки интернет-магазина</p>
          <div className="col-12">
           <Carousel>
           <Carousel.Item>
              <div className="stages__container">
                <div>
                  <p className="stages__title2">1. Анализ</p>
                  <p className="stages__description">Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. </p>
                </div>
                <div className="stages__image-centr">
                  <img
                    className="stages__image"
                    src="./image/Top-Right 1.svg"
                    alt="First slide"
                  />
                </div>
              </div> 
           </Carousel.Item>
           <Carousel.Item>
              <div className="stages__container">
                <div>
                  <p className="stages__title2">2. Визуальное решение</p>
                  <p className="stages__description">Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров.  Для нас главное – передать настроение бренда, сделать удобный сайт. </p>
                </div>
                <div className="stages__image-centr">
                  <img
                    className="stages__image"
                    src="./image/cake.214.svg"
                    alt="First slide"
                  />
                </div>
              </div>
           </Carousel.Item>
           <Carousel.Item>
              <div className="stages__container">
                <div>
                  <p className="stages__title2">3. Техническая реализация</p>
                  <p className="stages__description">После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок. </p>
                </div>
                <div className="stages__image-centr">
                  <img
                    className="stages__image"
                    src="./image/3 step.svg"
                    width="220px"
                    alt="First slide"
                  />
                </div>
              </div>
           </Carousel.Item>
           <Carousel.Item>
              <div className="stages__container">
                <div>
                  <p className="stages__title2">4. Наполнение  контентом </p>
                  <p className="stages__description">Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.  </p>
                </div>
                <div className="stages__image-centr">
                  <img
                    className="stages__image"
                    src="./image/Group 176.svg"
                    width="220px"
                    alt="First slide"
                  />
                </div>
              </div>
           </Carousel.Item>
           <Carousel.Item>
              <div className="stages__container">
                <div>
                  <p className="stages__title2">5. Тестирование</p>
                  <p className="stages__description">Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения. </p>
                </div>
                <div className="stages__image-centr">
                  <img
                    className="stages__image"
                    src="./image/Group 177.svg"
                    width="220px"
                    alt="First slide"
                  />
                </div>
              </div>
           </Carousel.Item>
           </Carousel>
          </div>
        </div>
      </div>
      <img 
        src="./image/shape wave.257 copy.svg" 
        alt="shape" 
        className="stages__wave"
      />
      <img 
        src="./image/shape sphere.269.svg" 
        alt="shape" 
        className="stages__sphere"
      />
    </div>
  )
};