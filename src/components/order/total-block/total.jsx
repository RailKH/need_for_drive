import React, { useState } from "react";
import classnames from "classnames";
import car_1 from "../../../assets/img/cars/image_1.png";
import { connect } from "react-redux";

function Total(props) {
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
        <div className="total__form__name">{props.car}</div>
        <div className="total__form__number">K 761 HA 73</div>
        <div className="total__form__tank">
          <span>Топливо</span> 100%
        </div>
        <div className="total__form__date">
          <span>Доступна с</span>
          {props.dateStart}
        </div>
      </div>
      <div>
        <img src={car_1} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    car: state.mod.selectCar,

    dateStart: state.ext.dateStart,
  };
};
export default connect(mapStateToProps)(Total);
