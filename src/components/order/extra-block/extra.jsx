import React, { useState } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import {
  setColorText,
  setDateStartText,
  setDateFinishText,
  setRateText,
  setAdditionalText,
} from "../../../store/extra/action";

function Extra(props) {
  const [additional, setAdditional] = useState({
    sel1: true,
    sel2: false,
    sel3: true,
  });
  let colorsCar = props.listCars.find((item) => item.name == props.car);
  function selectColor(color) {
    props.setColorText(color[0].toUpperCase() + color.slice(1));
  }
  function selectAddit() {
    setAdditional(!sel1);
    console.log(additional.sel1);
  }
  return (
    <div
      className={classnames(
        "order__content__extra",
        props.id != "2" && "disabled"
      )}>
      <div className="extra__form">
        <div className="extra__form__color">
          <p>Цвет</p>
          <input
            type="radio"
            id="m0"
            name="color"
            onClick={() => selectColor("Любой")}
          />
          <label htmlFor="m0">
            <span></span>Любой
          </label>
          {colorsCar &&
            colorsCar.colors.map((item, id) => (
              <>
                <input
                  type="radio"
                  id={`m${++id}`}
                  name="color"
                  onClick={() => selectColor(item)}
                />
                <label htmlFor={`m${id}`}>
                  <span></span>
                  {item[0].toUpperCase() + item.slice(1)}
                </label>
              </>
            ))}
        </div>
        <div className="extra__form__date">
          <p>Дата аренды</p>
          <div>
            <label>С</label>
            <input type="text" placeholder="Введите дату и время"></input>
          </div>
          <label>По</label>
          <input type="text" placeholder="Введите дату и время"></input>
        </div>
        <div className="extra__form__rate">
          <p>Тариф</p>
          {props.listRate && (
            <>
              {props.listRate.map((item, id) => {
                return (
                  <div className="wrap">
                    <input
                      type="radio"
                      id={`t${id}`}
                      name="rate"
                      onClick={() => props.setRateText(item.rateTypeId.name)}
                    />
                    <label htmlFor={`t${id}`}>
                      <span></span>
                      {`${item.rateTypeId.name}, ${item.price}₽/${item.rateTypeId.unit}`}
                    </label>
                  </div>
                );
              })}
            </>
          )}
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
              checked={additional.sel1}
              onClick={selectAddit}
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
              checked={additional.sel2}
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
              checked={additional.sel3}
            />
            <label htmlFor="wheel">
              <span></span>Правый руль, 1600р
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    color: state.ext.color,
    dateStart: state.ext.dateStart,
    dateFinish: state.ext.dateFinish,
    rate: state.ext.rate,
    additional: state.ext.additional,
    car: state.mod.selectCar,
  };
};
const mapDispatchToProps = {
  setColorText,
  setDateStartText,
  setDateFinishText,
  setRateText,
  setAdditionalText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Extra);
