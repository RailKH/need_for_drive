import React from "react";
import { useState } from "react";
import getData from "../../../api/api.js";
import { useEffect } from "react";
let listCity = [];
// import "./admin-menu.scss";

export default function AdminPoint() {
  const [city, setCity] = useState("");
  const [dropCity, setDropCity] = useState([]);
  const [point, setPoint] = useState("");

  useEffect(() => {
    getData("city").then((json) => {
      listCity = json.data;
    });
  }, []);
  function saveValue() {
    console.log(listCity);
    setPoint("");
  }
  function inputChange(e) {
    setCity(e.target.value);
    // setDropCity(listCity);
  }
  const listItem = listCity.map((item, id) => {
    return <li key={`${item}_${id}`}>{item.name}</li>;
  });

  return (
    <div className="admin-point">
      <div className="admin-point_select-city">
        <input
          type="text"
          placeholder="Write city"
          value={city}
          onChange={(e) => inputChange(e)}
        />
        <ul className="dropdown-list">{listItem}</ul>
      </div>
      {city && (
        <div className="admin-point_list-point">
          <div>
            <ul>
              <li onClick={() => setPoint("test")}>sdsdd</li>
              <li>sdsdd</li>
              <li>sdsdd</li>
              <li>sdsdd</li>
            </ul>
          </div>
        </div>
      )}
      {point && (
        <div className="admin-point_change-point">
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
          />
          <button onClick={saveValue}>Save</button>
        </div>
      )}
    </div>
  );
}
