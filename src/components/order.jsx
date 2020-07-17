import React from "react";
import classnames from "classnames";

const CITY = ["Москва", "Ульяновск", "Санкт-Петербург", "Казань", "Самара"];

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCity: "",
      valueCityPoint: "",
      filterCity: [],
      valueCar: "",
    };
    this.addCity = this.addCity.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.clearInput = this.clearInput.bind(this);
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
  //очистка inputs
  clearInput(item) {
    if (item == "valueCity") {
      this.setState({
        valueCity: "",
      });
    } else {
      this.setState({
        valueCityPoint: "",
      });
    }
  }

  render() {
    const [car_1, car_2, car_3] = this.props.cars;
    const list = this.state.filterCity.map((item, id) => {
      return (
        <li onClick={(e) => this.selectCity(e)} key={id} className="dropdown">
          {item}
        </li>
      );
    });
    return (
      <section className={classnames("order", this.props.burger && "disabled")}>
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
            <div className="link__content__location ready">Местоположение</div>
            <span></span>
            <div className="link__content__model active">Модель</div>
            <span></span>
            <div className="link__content__extra">Дополнительно</div>
            <span></span>
            <div className="link__content__total">Итого</div>
          </div>
        </div>
        <section className="order__content">
          <div className="wrapper">
            <div className="order__content__location disabled">
              <div className="form">
                <div className="form__input">
                  <label htmlFor="city">Город</label>
                  <div className="wrap__location">
                    <input
                      id="city"
                      type="text"
                      onChange={this.addCity}
                      value={this.state.valueCity}
                      placeholder="Начните вводить город..."
                    />
                    {this.state.valueCity && (
                      <span
                        class="close"
                        onClick={() => this.clearInput("valueCity")}>
                        &times;
                      </span>
                    )}
                    <ul className="dropdown-list">{list}</ul>
                  </div>
                </div>
                <div className="form__input">
                  <label htmlFor="delivery_point">Пункт выдачи</label>
                  <div className="wrap__location">
                    <input
                      id="delivery_point"
                      type="text"
                      // value={this.state.valueCityPoint}
                      placeholder="Начните вводить пункт..."
                    />
                    <span
                      class="close"
                      onClick={() => this.clearInput("valueCityPoint")}>
                      &times;
                    </span>
                    <ul className="dropdown-list delivery"></ul>
                  </div>
                </div>
                <div className="map">
                  <p>Выбрать на карте:</p>

                  <div className="map__area"></div>
                </div>
              </div>
            </div>
            <div className="order__content__model">
              <div className="form__radio">
                <input type="radio" id="r1" name="rr" />
                <label for="r1">
                  <span></span>Все модели
                </label>
                <input type="radio" id="r2" name="rr" />
                <label for="r2">
                  <span></span>Эконом
                </label>
                <input type="radio" id="r3" name="rr" />
                <label for="r3">
                  <span></span>Премиум
                </label>
              </div>
              <div className="form__selectCar">
                <div className="form__selectCar__item">
                  <p className="title">Elantra</p>
                  <p className="cost">12000-25000P</p>
                  <img src={car_1} />
                </div>
                <div className="form__selectCar__item active">
                  <p className="title">i30 N</p>
                  <p className="cost">10000-32000P</p>
                  <img src={car_2} />
                </div>
                <div className="form__selectCar__item">
                  <p className="title">CRETA</p>
                  <p className="cost">12000-25000P</p>
                  <img src={car_3} />
                </div>
              </div>
            </div>
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
