import React, { useState } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { setCarText } from "../../../store/model/action";

function Model(props) {
  const [car_1, car_2, car_3] = props.cars;
  function selectModel(e) {
    console.log(e.target);
  }
  return (
    <div
      className={classnames(
        "order__content__model",
        props.id != "1" && "disabled"
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
        <div className="form__selectCar__item" onClick={selectModel}>
          <p className="title">Elantra</p>
          <p className="cost">12000-25000P</p>
          <img src={car_1} />
        </div>
        <div className="form__selectCar__item active" onClick={selectModel}>
          <p className="title">i30 N</p>
          <p className="cost">10000-32000P</p>
          <img src={car_2} />
        </div>
        <div className="form__selectCar__item" onClick={selectModel}>
          <p className="title">CRETA</p>
          <p className="cost">12000-25000P</p>
          <img src={car_3} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    car: state.mod.selectCar,
  };
};
const mapDispatchToProps = {
  setCarText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);
