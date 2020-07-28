import React, { useState } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { setCarText } from "../../../store/model/action";

function Model(props) {
  const [modelCar, setModelCar] = useState("Все модели");
  const [carName, setCarName] = useState("");
  const filterCars = props.cars.filter((item) =>
    modelCar == "Все модели" ? true : item.categoryId.name == modelCar
  );
  function selectCar(name) {
    setCarName(name);
    props.setCarText(name);
    props.changeProps(true, "paramModel");
  }

  return (
    <div
      className={classnames(
        "order__content__model",
        props.id != "1" && "disabled"
      )}>
      <div className="form__model">
        <input
          type="radio"
          id="r1"
          name="model"
          defaultChecked
          onClick={() => setModelCar("Все модели")}
        />
        <label htmlFor="r1">
          <span />
          Все модели
        </label>
        <input
          type="radio"
          id="r2"
          name="model"
          onClick={() => setModelCar("Эконом")}
        />
        <label htmlFor="r2">
          <span />
          Эконом
        </label>
        <input
          type="radio"
          id="r3"
          name="model"
          onClick={() => setModelCar("Премиум")}
        />
        <label htmlFor="r3">
          <span />
          Премиум
        </label>
      </div>
      {props.cars && (
        <div className="form__selectCar">
          {filterCars.map((item, id) => {
            return (
              <div
                className={classnames(
                  "form__selectCar__item",
                  carName == item.name && "active"
                )}
                onClick={() => selectCar(item.name)}>
                <p className="title">{item.name}</p>
                <p className="cost">
                  {item.priceMin}-{item.priceMax}P
                </p>
                <img
                  src={`http://api-factory.simbirsoft1.com${item.thumbnail.path}`}
                />
              </div>
            );
          })}
        </div>
      )}
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
