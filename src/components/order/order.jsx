import React from "react";
import classnames from "classnames";
import "./order.scss";
import LocationPage from "./location-page/location";
import { Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../store/reducers";
const CITY = ["Москва", "Ульяновск", "Санкт-Петербург", "Казань", "Самара"];
const store = createStore(rootReducer);

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
    };
    this.nextWrapper = this.nextWrapper.bind(this);
  }
  nextWrapper(item) {
    this.setState({
      id: item,
    });
  }

  render() {
    const [car_1, car_2, car_3] = this.props.cars;
    const { id } = this.state;
    return (
      <Provider store={store}>
        <section
          className={classnames("order", this.props.burger && "disabled")}>
          <div className="order__header">
            <header className="content__header">
              <Link to="/">
                <a href="#" className="content__header__logo">
                  Need for drive
                </a>
              </Link>
              <span className="content__header__location">Ульяновск</span>
            </header>
          </div>
          <div className="link">
            <div className="link__content">
              <div
                onClick={(e) => this.nextWrapper("0")}
                className={classnames(
                  "link__content__text",
                  id == "0" && "active"
                )}>
                Местоположение
              </div>
              <span></span>
              <div
                onClick={(e) => this.nextWrapper("1")}
                className={classnames(
                  "link__content__text",
                  id == "1" && "active"
                )}>
                Модель
              </div>
              <span></span>
              <div
                onClick={(e) => this.nextWrapper("2")}
                className={classnames(
                  "link__content__text",
                  id == "2" && "active"
                )}>
                Дополнительно
              </div>
              <span></span>
              <div
                onClick={(e) => this.nextWrapper("3")}
                className={classnames(
                  "link__content__text",
                  id == "3" && "active"
                )}>
                Итого
              </div>
            </div>
          </div>
          <section className="order__content">
            <div className="wrapper">
              <LocationPage id={id} />
              <div
                className={classnames(
                  "order__content__model",
                  id != "1" && "disabled"
                )}>
                <div className="form__model">
                  <input type="radio" id="r1" name="model" />
                  <label for="r1">
                    <span></span>Все модели
                  </label>
                  <input type="radio" id="r2" name="model" />
                  <label for="r2">
                    <span></span>Эконом
                  </label>
                  <input type="radio" id="r3" name="model" />
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
              <div
                className={classnames(
                  "order__content__extra",
                  id != "2" && "disabled"
                )}>
                <div className="extra__form">
                  <div className="extra__form__color">
                    <p>Цвет</p>
                    <input type="radio" id="m1" name="color" />
                    <label for="m1">
                      <span></span>Любой
                    </label>
                    <input type="radio" id="m2" name="color" />
                    <label for="m2">
                      <span></span>Красный
                    </label>
                    <input type="radio" id="m3" name="color" />
                    <label for="m3">
                      <span></span>Голубой
                    </label>
                  </div>
                  <div className="extra__form__date">
                    <p>Дата аренды</p>
                    <div>
                      <label>С</label>
                      <input
                        type="text"
                        placeholder="Введите дату и время"></input>
                    </div>
                    <label>По</label>
                    <input
                      type="text"
                      placeholder="Введите дату и время"></input>
                  </div>
                  <div className="extra__form__rate">
                    <p>Тариф</p>
                    <div className="wrap">
                      <input type="radio" id="t1" name="rate" />
                      <label for="t1">
                        <span></span>Поминутно, 7₽/мин
                      </label>
                    </div>
                    <input type="radio" id="t2" name="rate" />
                    <label for="t2">
                      <span></span>На сутки, 1999 ₽/сутки
                    </label>
                  </div>
                  <div className="extra__form__additional">
                    <p>Доп услуги</p>
                    <div className="additional__checkbox">
                      <input
                        type="checkbox"
                        className="additional__checkbox__custom"
                        id="tank"
                        name="tank"
                        value="tank"
                      />
                      <label htmlFor="tank">
                        <span></span>Полный бак, 500р
                      </label>
                    </div>
                    <div className="additional__checkbox">
                      <input
                        type="checkbox"
                        className="additional__checkbox__custom"
                        id="chair"
                        name="chair"
                        value="chair"
                      />
                      <label htmlFor="chair">
                        <span></span>Детское кресло, 200р
                      </label>
                    </div>
                    <div className="additional__checkbox">
                      <input
                        type="checkbox"
                        className="additional__checkbox__custom"
                        id="wheel"
                        name="wheel"
                        value="wheel"
                      />
                      <label htmlFor="wheel">
                        <span></span>Правый руль, 1600р
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classnames(
                  "order__content__total",
                  id != "3" && "disabled"
                )}>
                <div className="total__form">
                  <div className="total__form__name">Hyndai, i30 N</div>
                  <div className="total__form__number">K 761 HA 73</div>
                  <div className="total__form__tank">
                    <span>Топливо</span> 100%
                  </div>
                  <div className="total__form__date">
                    <span>Доступна с</span> 12.06.2019 12:00
                  </div>
                </div>
                <div>
                  <img src={car_1} />
                </div>
              </div>
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
      </Provider>
    );
  }
}
export default Order;
