import React, { useState } from "react";

const CITY = ["Москва", "Ульяновск", "Санкт-Петербург", "Казань", "Самара"];

export default function Location(props) {
  // список с городами
  // const list = yprops.filterCity.map((item, id) => {
  //   return (
  //     <li
  //       onClick={(e) => selectCity(e.target.textContent)}
  //       key={id}
  //       className="dropdown">
  //       {item}
  //     </li>
  //   );
  // });

  return (
    <div className="order__content__location">
      <div className="form">
        <div className="form__input">
          <label htmlFor="city">Город</label>
          <div className="wrap__location">
            <input
              id="city"
              type="text"
              placeholder="Начните вводить город..."
            />
            {/* {city && (
              <span class="close" onClick={() => setCity("")}>
                &times;
              </span>
            )} */}
            {/* <ul className="dropdown-list">{list}</ul> */}
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="delivery_point">Пункт выдачи</label>
          <div className="wrap__location">
            <input
              id="delivery_point"
              type="text"
              // value={this.state.valueCityPoint}
              placeholder="Начните вводить пункт..."
            />
            <span class="close">&times;</span>
            <ul className="dropdown-list delivery"></ul>
          </div>
        </div>
        <div className="map">
          <p>Выбрать на карте:</p>

          <div className="map__area"></div>
        </div>
      </div>
    </div>
  );
}
