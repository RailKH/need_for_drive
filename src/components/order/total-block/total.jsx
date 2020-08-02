import React, { useState } from "react";
import classnames from "classnames";
import car_1 from "../../../assets/img/cars/image_1.png";

export default function Total(props) {
  return (
    <div
      className={classnames("order__content__total", {
        disabled: props.id !== 3,
      })}>
      <div className="total__form">
        {props.paramOrder && (
          <div className="total__form__title">
            <div>Ваш заказ подтверждён</div>
          </div>
        )}
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
  );
}
