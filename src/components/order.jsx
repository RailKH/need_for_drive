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
          <div className="link__content">
            <div className="link__content__location active">Местоположение</div>
            <span></span>
            <div className="link__content__model">Модель</div>
            <span></span>
            <div className="link__content__extra">Дополнительно</div>
            <span></span>
            <div className="link__content__total">Итого</div>
          </div>
        </div>
        <section className="order__content">
          <div className="wrapper">
            <div className="order__content__location">
              <div className="form">
                <div>
                  <label for="city">Город</label>
                  <div>
                    <input
                      id="city"
                      type="text"
                      placeholder="Начните вводить город..."></input>
                  </div>
                </div>
                <div>
                  <label for="delivery_point">Пункт выдачи</label>
                  <div>
                    <input
                      id="delivery_point"
                      type="text"
                      placeholder="Начните вводить пункт..."></input>
                  </div>
                </div>
                <div className="map">
                  <p>Выбрать на карте:</p>
                  <div className="map__area"></div>
                </div>
              </div>
            </div>
            <div className="order__content__model disabled"></div>
            <div className="order__content__extra disabled"></div>
            <div className="order__content__total disabled"></div>
            <div className="order__content__cost">
              <p className="title">Ваш заказ:</p>
              <div className="param">
                <div class="delivery_point">
                  <span class="delivery_point__prop feature-left">
                    Пункт выдачи
                  </span>
                  <span class="delivery_point__value feature-right">
                    Ульяновск, Нариманова 42
                  </span>
                </div>
                <div class="model">
                  <span class="model__prop feature-left">Модель</span>
                  <span class="model__value feature-right">Hyndai, i30 N</span>
                </div>
                <div class="color">
                  <span class="color__prop feature-left">Цвет</span>
                  <span class="color__value feature-right">Голубой</span>
                </div>
                <div class="duration">
                  <span class="duration__prop feature-left">
                    Длительность аренды
                  </span>
                  <span class="duration__value feature-right">1д 2ч</span>
                </div>
                <div class="rate">
                  <span class="rate__prop feature-left">Тариф</span>
                  <span class="rate__value feature-right">На сутки</span>
                </div>
                <div class="oil">
                  <span class="oil__prop feature-left">Полный бак</span>
                  <span class="oil__value feature-right">Да</span>
                </div>
              </div>
              <p className="cost">
                <span>Цена:</span> от 8 000 до 12 000 ₽
              </p>
              <button className="button disabled">Выбрать модель</button>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default Order;
