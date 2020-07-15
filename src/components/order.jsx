import React from "react";

const CITY = ["Москва", "Ульяновск", "Санкт-Петербург", "Казань", "Самара"];

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      valueCity: "",
      filterCity: [],
    };
    this.addCity = this.addCity.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }
  //актвирует выпадающий список
  addCity(e) {
    this.state.filterCity = [];
    if (e.target.value !== "") {
      this.state.filterCity = CITY;
    }
    this.setState({
      valueCity: e.target.value,
    });
  }
  //срабатывает при нажатии на город из списка
  selectCity(e) {
    this.setState({
      filterCity: [],
      valueCity: e.target.textContent,
    });
  }
  render() {
    const list = this.state.filterCity.map((item, id) => {
      return (
        <li onClick={(e) => this.selectCity(e)} key={id} className="dropdown">
          {item}
        </li>
      );
    });
    return (
      <section className="order">
        <div className="order__header">
          <header className="content__header">
            <a href="#" className="content__header__logo">
              Need for drive
            </a>
            <span className="content__header__location">Ульяновск</span>
          </header>
        </div>
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
                  <label htmlFor="city">Город</label>
                  <div className="wrap__location">
                    <input
                      id="city"
                      type="text"
                      onChange={this.addCity}
                      value={this.state.valueCity}
                      placeholder="Начните вводить город..."></input>
                    <ul className="dropdown-list">{list}</ul>
                  </div>
                </div>
                <div>
                  <label htmlFor="delivery_point">Пункт выдачи</label>
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
                <div className="delivery_point">
                  <span className="delivery_point__prop feature-left">
                    Пункт выдачи
                  </span>
                  <span className="delivery_point__value feature-right">
                    Ульяновск, Нариманова 42
                  </span>
                </div>
                <div className="model">
                  <span className="model__prop feature-left">Модель</span>
                  <span className="model__value feature-right">
                    Hyndai, i30 N
                  </span>
                </div>
                <div className="color">
                  <span className="color__prop feature-left">Цвет</span>
                  <span className="color__value feature-right">Голубой</span>
                </div>
                <div className="duration">
                  <span className="duration__prop feature-left">
                    Длительность аренды
                  </span>
                  <span className="duration__value feature-right">1д 2ч</span>
                </div>
                <div className="rate">
                  <span className="rate__prop feature-left">Тариф</span>
                  <span className="rate__value feature-right">На сутки</span>
                </div>
                <div className="oil">
                  <span className="oil__prop feature-left">Полный бак</span>
                  <span className="oil__value feature-right">Да</span>
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
