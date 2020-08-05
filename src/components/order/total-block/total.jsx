import React, { useState } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { useEffect } from "react";

function Total(props) {
  // const [selectCar, setSelectCar] = useState("");
  // function test() {
  //   props.additional.forEach((item) => item == "Полный бак");
  // }
  // let selectCar = {};
  // useEffect(() => {
  //   props.cars.forEach(
  //     (item) => item.id === props.carId && setSelectCar(item)
  //     // Object.assign(selectCar, item)
  //   );
  // });
  return (
    <>
      {props.car.name && (
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
            <div className="total__form__name">{props.car.name}</div>
            <div className="total__form__number">
              {props.car.number.toUpperCase() || "K 761 HA 73"}
            </div>
            <div className="total__form__tank">
              <span>Топливо</span>

              {` ${props.car.tank}%`}
            </div>
            <div className="total__form__date">
              <span>Доступна с </span>
              {props.dateStart}
            </div>
          </div>
          <div className="total__img">
            <img
              src={`http://api-factory.simbirsoft1.com${props.car.thumbnail.path}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    car: state.mod.selectCar,
    // carId: state.send.carId,
    dateStart: state.ext.dateStart,
    additional: state.ext.additional,
  };
};
export default connect(mapStateToProps)(Total);
