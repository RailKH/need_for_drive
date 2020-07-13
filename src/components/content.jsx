import React from "react";
import classnames from "classnames";

export default function Content(props) {
  return (
    <section className={classnames("content", props.burger && "disabled")}>
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
        <button className="content__desc__button button">Забронировать</button>
      </main>
      <footer className="content__footer">
        <span>© 2016-2019 «Need for drive»</span>8 (495) 234-22-44
      </footer>
    </section>
  );
}
