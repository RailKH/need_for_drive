import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import {
  setColorText,
  setDateStartText,
  setDateFinishText,
  setRateText,
  setAdditionalText,
} from "../../../store/extra/action";
let checkboxData = [];
function Extra({
  id,
  listCars,
  listRate,
  setAdditionalText,
  setColorText,
  car,
  setRateText,
  additional,
}) {
  const [additional77, setAdditional] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  // const [checkboxData, setCheckboxData] = useState([]);

  let colorsCar = listCars.find((item) => item.name == car);
  function selectColor(color) {
    setColorText(color[0].toUpperCase() + color.slice(1));
  }

  function selectAdditional(item, name) {
    let value = !additional77[item];
    setAdditional((prevState) => {
      return { ...prevState, [item]: value };
    });

    if (value) {
      checkboxData.push(name);
    } else {
      let deletItem = checkboxData.indexOf(name);
      checkboxData.splice(deletItem, 1);
    }
    // console.log(checkboxData);

    setAdditionalText(checkboxData);
    console.log("extra", additional);

    // console.log(additional);
  }
  return (
    <div
      className={classnames("order__content__extra", {
        disabled: id != "2",
      })}>
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
            <span />
            Любой
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
                  <span />
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
          {listRate && (
            <>
              {listRate.map((item, id) => {
                return (
                  <div className="wrap">
                    <input
                      type="radio"
                      id={`t${id}`}
                      name="rate"
                      onClick={() => setRateText(item.rateTypeId.name)}
                    />
                    <label htmlFor={`t${id}`}>
                      <span />
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
              checked={additional77.checkbox1}
              onClick={() => selectAdditional("checkbox1", "Полный бак")}
            />
            <label htmlFor="tank">
              <span />
              Полный бак, 500р
            </label>
          </div>
          <div className="additional__checkbox">
            <input
              type="checkbox"
              className="additional__checkbox__custom"
              id="chair"
              name="chair"
              value="chair"
              checked={additional77.checkbox2}
              onClick={() => selectAdditional("checkbox2", "Детское кресло")}
            />
            <label htmlFor="chair">
              <span />
              Детское кресло, 200р
            </label>
          </div>
          <div className="additional__checkbox">
            <input
              type="checkbox"
              className="additional__checkbox__custom"
              id="wheel"
              name="wheel"
              value="wheel"
              checked={additional77.checkbox3}
              onClick={() => selectAdditional("checkbox3", "Правый руль")}
            />
            <label htmlFor="wheel">
              <span />
              Правый руль, 1600р
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
