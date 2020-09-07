import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classnames from "classnames";
import api from "../../../api/api.js";
import Notification from "../notification";

import "./admin-point.scss";

let listCity = [
  {
    updatedAt: 1579589928849,
    createdAt: 1579589928849,
    name: "Ульяновск",
    id: "5e26a128099b810b946c5d87",
  },
  {
    updatedAt: 1587575507555,
    createdAt: 1587575507555,
    name: "Саранск",
    id: "5ea07ad3099b810b946c6254",
  },
  {
    updatedAt: 1587575726937,
    createdAt: 1587575726937,
    name: "Самара",
    id: "5ea07bae099b810b946c6271",
  },
  {
    updatedAt: 1587575824452,
    createdAt: 1587575824452,
    name: "Казань",
    id: "5ea07c10099b810b946c627a",
  },
  {
    updatedAt: 1587575867061,
    createdAt: 1587575867061,
    name: "Саратов",
    id: "5ea07c3b099b810b946c627b",
  },
  {
    updatedAt: 1587575926133,
    createdAt: 1587575926133,
    name: "Волгоград",
    id: "5ea07c76099b810b946c627e",
  },
  {
    updatedAt: 1587575956283,
    createdAt: 1587575956283,
    name: "Воронеж",
    id: "5ea07c94099b810b946c6285",
  },
  {
    updatedAt: 1587576031643,
    createdAt: 1587576031643,
    name: "Уфа",
    id: "5ea07cdf099b810b946c628a",
  },
];
let listPointCity = [
  {
    address: "Нариманова 1, корп.2",
    name: "База",
    cityId: { name: "Ульяновск" },
    id: "5e26a148099b810b946c5d88",
  },
  {
    address: "Московское шоссе 34",
    name: "Центральный филиал",
    cityId: { name: "Ульяновск" },
    id: "5ea9b994099b810b946c71cf",
  },
  {
    address: "Гончарова 27",
    name: "Главная парковка",
    cityId: { name: "Саранск" },
    id: "5ea9b9dd099b810b946c71d2",
  },
  {
    address: "Гагарина 99А",
    name: "Парковка тц Макс",
    cityId: { name: "Саранск" },
    id: "5ea9ba42099b810b946c71d7",
  },
  {
    address: "Ленина 24",
    name: "Пункт 1",
    cityId: { name: "Самара" },
    id: "5ea9ba69099b810b946c71d8",
  },
  {
    address: "Рабочая 183",
    name: "Главный офис ",
    cityId: { name: "Самара" },
    id: "5ea9ba90099b810b946c71d9",
  },
  {
    address: "Петербургская 1",
    cityId: { name: "Казань" },
    name: "ТРК Кольцо",
    id: "5f53321a9d3a610b850fd4dd",
  },
];
let cityId = "";
export default function AdminPoint() {
  const [city, setCity] = useState("");
  const [dropCity, setDropCity] = useState([]);
  const [point, setPoint] = useState([]);

  const [changeName, setchangeName] = useState("");
  const [changeAddress, setchangeAddress] = useState("");
  const [changeId, setchangeId] = useState("");

  useEffect(() => {
    api.getData("city").then((json) => {
      listCity = json.data;
    });
    api.getData("point").then((json) => {
      listPointCity = json.data;
    });
  }, []);

  function inputChange(e) {
    setCity(e.target.value);
    if (e.target.value.length > 0) {
      let filterCity = listCity.filter((item) => {
        const fixItem = item.name.toLowerCase();
        return fixItem.startsWith(e.target.value.toLowerCase());
      });
      setDropCity(filterCity);
    } else {
      setDropCity([]);
      setPoint([]);
      setchangeId("");
    }
  }

  function selectCity(value) {
    setCity(value.name);
    cityId = value.id;
    setDropCity([]);
    const filterPoint = listPointCity.filter((item) => {
      return item.cityId.name === value.name;
    });
    setPoint(filterPoint);
  }
  function AddPoint() {
    setchangeId("test");
    setchangeName("");
    setchangeAddress("");
  }
  function changePoint(value, name, address) {
    setchangeId(value);
    setchangeName(name);
    setchangeAddress(address);
  }
  async function saveValue() {
    if (changeName && changeAddress) {
      if (changeId === "test") {
        await api
          .postDataPoint(changeName, changeAddress, {
            name: city,
            id: cityId,
          })
          .then(() => alert("Пункт успешно создан"))
          .catch(() => alert("Ошибка"));
      } else {
        await api
          .putDataPoint(changeName, changeAddress, changeId)
          .then(() => alert("Пункт успешно редактирован"))
          .catch(() => alert("Ошибка"));
      }
      setchangeId("");
      api.getData("point").then((json) => {
        listPointCity = json.data;
        selectCity({
          name: city,
          id: cityId,
        });
      });
    } else alert("Пустое(ые) значения");
  }
  return (
    <div className="admin-main">
      {/* <Notification /> */}
      <div className="admin-main_content">
        <div className="admin-main_content_title">
          Добавление и изменение пунктов выдачи
        </div>
        <div className="admin-car_content_desc">
          {/* <div className="admin-point "> */}
          <div className="admin-point_select-city box-registration car-cart">
            <p>Город</p>
            <input
              type="text"
              placeholder="Введите название города"
              value={city}
              onChange={(e) => inputChange(e)}
            />
            <button
              onClick={() => {
                city && AddPoint();
              }}
              className={classnames("admin_button", {
                active: city.length > 2,
              })}>
              Add
            </button>
            <ul className="dropdown-list">
              {dropCity.map((item, id) => (
                <li
                  className="dropdown"
                  key={`${item}_${id}`}
                  onClick={() => selectCity(item)}>
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="admin-point_add-point">
              {changeId && (
                <>
                  <p>Новый пункт</p>
                  <input
                    type="text"
                    value={changeName}
                    placeholder="Название"
                    onChange={(e) => {
                      setchangeName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Улица"
                    value={changeAddress}
                    onChange={(e) => {
                      setchangeAddress(e.target.value);
                    }}
                  />
                  <button onClick={saveValue} className="admin_button active">
                    Save
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="admin-point_list-point car-setting">
            <p>Пункты выдачи автомобиля</p>
            <ul>
              {point.map((item, id) => {
                return (
                  <li
                    onClick={() =>
                      changePoint(item.id, item.name, item.address)
                    }
                    key={`${item}_${id}`}>{`${item.name} / ${item.address}`}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
