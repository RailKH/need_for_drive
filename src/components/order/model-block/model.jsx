import React, { useState } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { setCarText } from "../../../store/model/action";

function Model(props) {
  const models = ["Все модели", "Эконом", "Премиум"];
  const [modelCar, setModelCar] = useState("Все модели");
  const [carName, setCarName] = useState("");
  const filterCars = props.cars.filter((item) =>
    modelCar === "Все модели" ? true : item.categoryId.name === modelCar
  );
  function selectCar(item) {
    setCarName(item.name);
    props.setCarText(item);
    props.changeProps(true, "paramModel");
  }

  return (
    <div
      className={classnames("order__content__model", {
        disabled: props.id !== 1,
      })}>
      <div className="form__model">
        {models.map((item, id) => {
          return (
            <>
              <input
                type="radio"
                id={`r${id}`}
                name="model"
                defaultChecked={id === 0 ? true : false}
                onClick={() => setModelCar(item)}
              />
              <label htmlFor={`r${id}`}>
                <span />
                {item}
              </label>
            </>
          );
        })}
      </div>
      {props.cars && (
        <div className="form__selectCar">
          {filterCars.map((item, id) => {
            return (
              <div
                className={classnames("form__selectCar__item", {
                  active: carName == item.name,
                })}
                onClick={() => selectCar(item)}
                key={`${id}_${item}`}>
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
