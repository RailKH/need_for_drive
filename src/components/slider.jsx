import React from "react";
import classnames from "classnames";

import car1 from "../img/bg_slider_1.jpg";
import car2 from "../img/bg_slider_2.jpg";
import car3 from "../img/bg_slider_3.jpg";

// swiper library
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination]);

export default function Slider(props) {
  const gradient = "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)";

  return (
    <section className={classnames("slider", props.burger && "disabled")}>
      <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className="slider__content">
            <div className="slider__content__wrapper">
              <div className="slider__content__title">Бесплатная парковка</div>
              <p className="slider__content__text">
                Оставляйте машину на платных городских парковках и разрешенных
                местах, не нарушая ПДД, а также в аэропортах.
              </p>
              <button className="slider__content__button button">
                Подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider__content"
            style={{ backgroundImage: `${gradient}, url(${car1})` }}>
            <div className="slider__content__wrapper">
              <div className="slider__content__title">Страховка</div>
              <p className="slider__content__text">
                Полная страховка страховка автомобиля
              </p>
              <button className="slider__content__button button">
                Подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider__content"
            style={{ backgroundImage: `${gradient}, url(${car2})` }}>
            <div className="slider__content__wrapper">
              <div className="slider__content__title">Бензин</div>
              <p className="slider__content__text">
                Полный бак на любой заправке города за наш счёт
              </p>
              <button
                className="slider__content__button button"
                style={{
                  backgroundColor:
                    "linear-gradient(90deg, #132949 0%, #0C7B67 100%)",
                }}>
                Подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider__content"
            style={{ backgroundImage: `${gradient}, url(${car3})` }}>
            <div className="slider__content__wrapper">
              <div className="slider__content__title">Обслуживание</div>
              <p className="slider__content__text">
                Автомобиль проходит еженедельное ТО
              </p>
              <button className="slider__content__button button">
                Подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
