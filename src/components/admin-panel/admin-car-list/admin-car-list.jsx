import React, { useEffect, useState } from "react";
import "./admin-car-list.scss";
import api from "../../../api/api";
import Loader from "../../loader";
let test = [
  {
    categoryId: { name: "Эконом" },
    colors: ["голубой", "красный"],
    name: "Hyndai, Elantra",
    priceMax: 2500,
    priceMin: 1200,
  },
  {
    categoryId: { name: "Эконом" },
    colors: ["голубой", "красный", "black"],
    name: "Hyndai, Sonata",
    priceMax: 2500,
    priceMin: 1200,
  },
  {
    categoryId: { name: "Премиум" },
    colors: ["голубой", "красный", "blue"],
    name: "Hyndai, Corssa",
    priceMax: 2500,
    priceMin: 1200,
  },
  {
    categoryId: { name: "Эконом" },
    colors: ["голубой", "красный"],
    name: "Hyndai, Elantra",
    priceMax: 2500,
    priceMin: 1200,
  },
  {
    categoryId: { name: "Эконом" },
    colors: ["голубой", "красный", "black"],
    name: "Hyndai, Sonata",
    priceMax: 2500,
    priceMin: 1200,
  },
  {
    categoryId: { name: "Эконом" },
    colors: ["голубой", "красный"],
    name: "Hyndai, Elantra",
    priceMax: 2500,
    priceMin: 1200,
  },
  {
    categoryId: { name: "Эконом" },
    colors: ["голубой", "красный", "black"],
    name: "Hyndai, Sonata",
    priceMax: 2500,
    priceMin: 1200,
  },
];
const tableHeaders = ["Модель", "Категория", "Цвет", "Цена"];
export default function AdminCarList() {
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setCarsList(test);
    }, 1000);
    // api.getData("car").then((res) => setCarsList(res.data));
  }, []);
  return (
    <div className="admin-main">
      <div className="admin-main_content">
        <div className="admin-main_content_title">Список авто</div>
        <div className="admin-main_content_desc">
          {!carsList.length ? (
            <Loader />
          ) : (
            <>
              <div className="filter">
                <div>
                  <select name="car">
                    <option selected value="opt1">
                      Elantra
                    </option>
                    <option value="opt2">Hundai</option>
                  </select>
                  <select name="category">
                    <option selected value="opt1">
                      Все категории
                    </option>
                    <option value="opt2">Эконом</option>
                    <option value="opt3">Премиум</option>
                  </select>
                </div>
                <div>
                  <button className="admin_button active">Применить</button>
                </div>
              </div>
              <div className="admin-car-list description">
                <div className="description_item">
                  <table>
                    <thead>
                      <tr>
                        {tableHeaders.map((item) => (
                          <th key={item}>{item}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {carsList.map((item, id) => (
                        <tr key={`${item}_${id}`}>
                          <td data-label="Модель">{item.name}</td>
                          <td data-label="Категория">{item.categoryId.name}</td>
                          <td data-label="Цвет">{item.colors.join(", ")}</td>
                          <td data-label="Цена">{`${item.priceMin} - ${item.priceMax} ₽`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
