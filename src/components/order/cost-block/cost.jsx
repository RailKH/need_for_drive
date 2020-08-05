import React, { useState } from "react";
import classnames from "classnames";

import { connect } from "react-redux";

function Cost(props) {
  const { additional, dateCount } = props;
  const { id, paramLocation, paramExtra, paramModel } = props.state;
  let textButton = "";
  let paramButton;
  let value = id;

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
          return (
            <div key={`${item}${id}`}>
              <span className="oil__prop feature-left">{item}</span>
              <span className="oil__value feature-right">Да</span>
            </div>
          );
        })}
      </div>
      <p className="cost">
        <span>Цена:</span> от 8 000 до 12 000 ₽
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
    // cityId: state.send.cityId,
    // pointId: state.send.pointId,
  };
};
export default connect(mapStateToProps)(Cost);
