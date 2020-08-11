import React, { useState } from "react";
import classnames from "classnames";

import { connect } from "react-redux";
import { setStatusIdText } from "../../../store/extra/action";

function Cost(props) {
  const { additional, dateCount, setStatusId } = props;
  const { id, paramLocation, paramExtra, paramModel } = props.state;
  let textButton = "";
  let paramButton;
  let value = id;

  function calcPrice() {
    let price = "...";
    props.car.name && (price = props.car.priceMin);
    if (dateCount && props.rate.price) {
      if (props.rate.rateTypeId.name === "Поминутно") {
        let time = Math.floor(
          new Date(new Date(props.dateFinish) - new Date(props.dateStart)) /
            (1000 * 60)
        );
        price += props.rate.price * time;
      } else {
        let time = Math.floor(
          new Date(new Date(props.dateFinish) - new Date(props.dateStart)) /
            (1000 * 60 * 60)
        );

        if (time < 24) {
          price += props.rate.price;
        } else {
          price += props.rate.price * Math.ceil(time / 24);
        }
      }
    }
    props.additional.forEach((item) => {
      if (item.checked === true) {
        price += item.price;
      }
    });

    return price;
  }
  {
    switch (id) {
      case 0:
        textButton = "Выбрать модель";
        paramButton = paramLocation;
        break;
      case 1:
        textButton = "Дополнительно";
        paramButton = paramModel;
        break;
      case 2:
        textButton = "Итого";
        paramButton = paramExtra;
        break;
      case 3:
        textButton = "Заказать";
        paramButton = paramExtra;
        break;
    }
    if (props.paramOrder) {
      textButton = "Отменить";
    }
  }
  return (
    <div className="order__content__cost">
      <p className="title">Ваш заказ:</p>
      <div className="param">
        {props.city.name && (
          <div className="delivery_point">
            <span className="delivery_point__prop feature-left">
              Пункт выдачи
            </span>
            <span className="delivery_point__value feature-right">
              {`${props.city.name} ${props.cityPoint.address}`}
            </span>
          </div>
        )}
        {props.car.name && (
          <div className="model">
            <span className="model__prop feature-left">Модель</span>
            <span className="model__value feature-right">{props.car.name}</span>
          </div>
        )}
        {props.color && (
          <div className="color">
            <span className="color__prop feature-left">Цвет</span>
            <span className="color__value feature-right">{props.color}</span>
          </div>
        )}
        {dateCount && (
          <div className="duration">
            <span className="duration__prop feature-left">
              Длительность аренды
            </span>
            <span className="duration__value feature-right">{dateCount}</span>
          </div>
        )}
        {props.rate.rateTypeId && (
          <div className="rate">
            <span className="rate__prop feature-left">Тариф</span>
            <span className="rate__value feature-right">
              {props.rate.rateTypeId.name}
            </span>
          </div>
        )}

        {additional.map((item, id) => {
          if (item.checked === true) {
            return (
              <div key={item.props}>
                <span className="oil__prop feature-left">{item.name}</span>
                <span className="oil__value feature-right">Да</span>
              </div>
            );
          }
        })}
      </div>
      <p className="cost">
        <span>Цена: </span>
        {calcPrice()} ₽
      </p>
      <button
        className={classnames("button", {
          disabled: !paramButton,
          false: props.paramOrder,
        })}
        onClick={(e) => paramButton && props.nextWrapper(++value, textButton)}>
        {textButton}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    city: state.loc.valueCity,
    cityPoint: state.loc.valueOfPoint,
    car: state.mod.selectCar,
    color: state.ext.color,
    rate: state.ext.rate,
    additional: state.ext.additional,
    dateCount: state.ext.dateCount,
    dateStart: state.ext.dateStart,
    dateFinish: state.ext.dateFinish,
    orderStatusId: state.ext.orderStatusId,
  };
};
const mapDispatchToProps = {
  setStatusIdText,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cost);

// "cityId": {id: "5e26a128099b810b946c5d87"},
//   "pointId": {id: "5e26a148099b810b946c5d88"},
//   "carId": {id: "5e25ca0d099b810b946c5d65"},
//   "color": "Голубой",
//   "dateFrom": 5,
//   "dateTo": 7,
//   "rateId": {id: "5e26a0d2099b810b946c5d85"},
//   "price": 5000,
//   "isFullTank": true,
//   "isNeedChildChair": false,
//   "isRightWheel": true};
