import React, { useState } from "react";
import classnames from "classnames";

import { connect } from "react-redux";
import { setCityText, setCityPointText } from "../../../store/location/action";
const CITY = ["Москва", "Ульяновск", "Санкт-Петербург", "Казань", "Самара"];
const wordLength = 2;

function Location(props) {
  const [filterCity, setfilterCity] = useState([]);

  function onCityChange(event) {
    props.setCityText(event.target.value);
    if (event.target.value.length == wordLength) {
      addCities(event.target.value);
    }
  }
  function onCityPointChange(event) {
    props.changeProps(true, "paramLocation");
    props.setCityPointText(event.target.value);
    if (event.target.value == "") {
      props.changeProps(false, "paramLocation");
    }
  }

  function addCities(value) {
    setfilterCity([]);
    if (value !== "") {
      setfilterCity(CITY);
    }
  }
  function selectCity(value) {
    setfilterCity([]);
    props.setCityText(value);
  }
  function clearInput(item) {
    item == "city" ? props.setCityText("") : props.setCityPointText("");
    setfilterCity([]);
    props.changeProps(false, "paramLocation");
  }

  const list = filterCity.map((item, id) => {
    return (
      <li
        onClick={(e) => selectCity(e.target.textContent)}
        key={id}
        className="dropdown">
        {item}
      </li>
    );
  });

  return (
    <div
      className={classnames(
        "order__content__location",
        props.id != "0" && "disabled"
      )}>
      <div className="form">
        <div className="form__input">
          <label htmlFor="city">Город</label>
          <div className="wrap__location">
            <input
              id="city"
              type="text"
              value={props.city}
              placeholder="Начните вводить город..."
              onChange={onCityChange}
            />
            {props.city && (
              <span onClick={() => clearInput("city")} class="close">
                &times;
              </span>
            )}
            <ul className="dropdown-list">{list}</ul>
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="delivery_point">Пункт выдачи</label>
          <div className="wrap__location">
            <input
              id="delivery_point"
              type="text"
              value={props.cityPoint}
              placeholder="Начните вводить пункт..."
              onChange={onCityPointChange}
            />
            {props.cityPoint && (
              <span onClick={() => clearInput("cityPoint")} class="close">
                &times;
              </span>
            )}
            <ul className="dropdown-list delivery"></ul>
          </div>
        </div>
        <div className="map">
          <p>Выбрать на карте:</p>

          <div className="map__area">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    city: state.loc.valueCity,
    cityPoint: state.loc.valueOfPoint,
  };
};
const mapDispatchToProps = {
  setCityText,
  setCityPointText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
