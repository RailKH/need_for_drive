import React, { useState } from "react";
import classnames from "classnames";

import { connect } from "react-redux";
import { setCityText, setCityPointText } from "../../../store/location/action";
const wordLength = 2;

function Location(props) {
  const [filterCity, setfilterCity] = useState([]);
  const [filterCityPoint, setfilterCityPoint] = useState([]);

  function inputChange(event, item) {
    item === "setCityText"
      ? props[item]({ name: event.target.value })
      : props[item]({ address: event.target.value });

    // props[item]({ name: event.target.value });

    if (event.target.value === "") {
      item === "setCityText" ? setfilterCity([]) : setfilterCityPoint([]);
      props.changeProps(false, "paramLocation");
    }
    if (event.target.value.length >= wordLength) {
      if (item === "setCityText") {
        let filterCity = props.listCity.filter((item) => {
          const fixItem = item.name.toLowerCase();
          return fixItem.startsWith(event.target.value.toLowerCase());
        });

        setfilterCity(filterCity);
      } else {
        setfilterCityPoint([]);
        let filterCityPoint = props.listPoint.filter((item) => {
          const fixItem = item.cityId.name.toLowerCase();
          return fixItem.startsWith(props.city.name.toLowerCase());
        });
        setfilterCityPoint(filterCityPoint);
      }
    }
  }

  function selectCity(item, value) {
    props[value](item);
    console.log(props);
    console.log(item);

    if (value === "setCityText") {
      setfilterCity([]);
    } else {
      setfilterCityPoint([]);
      props.changeProps(true, "paramLocation");
    }
    // value === "setCityText"
    //   ? setfilterCity([])
    //   : {setfilterCityPoint([]); props.changeProps(true, "paramLocation")};
  }
  function clearInput(item) {
    if (item === "city") {
      props.setCityText({ name: "" });
      setfilterCity([]);
    } else {
      props.setCityPointText({ address: "" });
      setfilterCityPoint([]);
    }
    props.changeProps(false, "paramLocation");
  }

  const list_City = filterCity.map((item, id) => {
    return (
      <li
        onClick={() => selectCity(item, "setCityText")}
        key={id}
        className="dropdown">
        {item.name}
      </li>
    );
  });
  const list_CityPoint = filterCityPoint.map((item, id) => {
    return (
      <li
        onClick={(e) => selectCity(item, "setCityPointText")}
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
              value={props.city.name}
              placeholder="Начните вводить город..."
              onChange={(e) => inputChange(e, "setCityText")}
            />
            {props.city.name && (
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
              value={props.cityPoint.address}
              placeholder="Начните вводить пункт..."
              onChange={(e) => inputChange(e, "setCityPointText")}
            />
            {props.cityPoint.address && (
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
  // setCityId,
  // setPointId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
