import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import "./main.css";

function App() {
  return (
    <div className="main">
      <nav className="nav">
        <div className="nav__box"></div>
        <div className="nav__lanSwitch">Eng</div>
      </nav>
      <section className="content">
        <header className="content__header">
          <a href="#" className="content__header__logo">
            Need for drive
          </a>
          <span className="content__header__location">Ульяновск</span>
        </header>
        <main className="content__desc">
          <div className="content__desc__title">
            Каршеринг <br />
            <span>Need for drive</span>
          </div>
          <p className="content__desc__text">
            Поминутная аренда авто твоего города
          </p>
          <button className="content__desc__button">Забронировать</button>
        </main>
        <footer className="footer">
          <span>© 2016-2019 «Need for drive»</span>8 (495) 234-22-44
        </footer>
      </section>
      <section className="slider">
        <div className="slider_1">
          <div className="slider__title">Бесплатная парковка</div>
          <p className="slider__text">
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <button className="slider__button">Подробнее</button>
        </div>
      </section>
    </div>
  );
}

export default App;
