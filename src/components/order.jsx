import React from "react";
class Order extends React.Component {
  render() {
    return (
      <section className="order">
        <header className="content__header">
          <a href="#" className="content__header__logo">
            Need for drive
          </a>
          <span className="content__header__location">Ульяновск</span>
        </header>
        <div className="link">
          <div className="link__location active">Местоположение</div>
          <span></span>
          <div className="link__model">Модель</div>
          <span></span>
          <div className="link__extra">Дополнительно</div>
          <span></span>
          <div className="link__total">Итого</div>
        </div>
        <section className="order__content">
          <div className="order__content__location"></div>
          <div className="order__content__model disabled"></div>
          <div className="order__content__extra disabled"></div>
          <div className="order__content__total disabled"></div>
          <div className="order__content__cost"></div>
        </section>
      </section>
    );
  }
}
export default Order;
