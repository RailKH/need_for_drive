import React, { useState } from "react";
import classnames from "classnames";

import { connect } from "react-redux";
import { setCityText, setCityPointText } from "../../../store/location/action";
const wordLength = 2;

function Location(props) {
  const [filterCity, setfilterCity] = useState([]);
  const [filterCityPoint, setfilterCityPoint] = useState([]);

  function inputChange(event, item) {
    props[item](event.target.value);

    if (event.target.value === "") {
      item === "setCityText" ? setfilterCity([]) : setfilterCityPoint([]);
      props.changeProps(false, "paramLocation");
    }
    if (event.target.value.length >= wordLength) {
      if (item === "setCityText") {
        setfilterCity(props.listCity);
      } else {
        setfilterCityPoint([]);
        let filterCityPoint = props.listPoint.filter((item) => {
          const fixItem = item.cityId.name.toLowerCase();
          return fixItem.startsWith(props.city.toLowerCase());
        });
        setfilterCityPoint(filterCityPoint);
        props.changeProps(true, "paramLocation");
      }
    }
  }

  function selectCity(value, item) {
    item === "setCityText" ? setfilterCity([]) : setfilterCityPoint([]);
    props[item](value);
  }
  function clearInput(item) {
    if (item === "city") {
      props.setCityText("");
      setfilterCity([]);
    } else {
      props.setCityPointText("");
      setfilterCityPoint([]);
    }

    props.changeProps(false, "paramLocation");
  }

  const list_City = filterCity.map((item, id) => {
    return (
      <li
        onClick={(e) => selectCity(e.target.textContent, "setCityText")}
        key={id}
        className="dropdown">
        {item}
      </li>
    );
  });
  const list_CityPoint = filterCityPoint.map((item, id) => {
    return (
      <li
        onClick={(e) => selectCity(e.target.textContent, "setCityPointText")}
        key={id}
        className="dropdown">
        {item.address}
      </li>
    );
  });

  return (
    <div
      className={classnames("order__content__location", {
        disabled: props.id !== 0,
      })}>
      <div className="form">
        <div className="form__input">
          <label htmlFor="city">Город</label>
          <div className="wrap__location">
            <input
              id="city"
              type="text"
              value={props.city}
              placeholder="Начните вводить город..."
              onChange={(e) => inputChange(e, "setCityText")}
            />
            {props.city && (
              <span onClick={() => clearInput("city")} className="close">
                &times;
              </span>
            )}
            <ul className="dropdown-list">{list_City}</ul>
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
              onChange={(e) => inputChange(e, "setCityPointText")}
            />
            {props.cityPoint && (
              <span onClick={() => clearInput("cityPoint")} className="close">
                &times;
              </span>
            )}
            <ul className="dropdown-list delivery">{list_CityPoint}</ul>
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
