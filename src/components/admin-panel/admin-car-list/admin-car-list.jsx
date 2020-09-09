import React, { useEffect, useState } from "react";
import "./admin-car-list.scss";
import Pagination from "./pagination";
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
const modelOptions = ["Все модели", "Hyundai", "Nissan"];
const categoryOptions = ["Все категории", "Эконом", "Премиум"];
const tableHeaders = ["Модель", "Категория", "Цвет", "Цена"];
export default function AdminCarList() {
  const [carsList, setCarsList] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [model, setModel] = useState("Все модели");
  const [category, setCategory] = useState("Все категории");

  useEffect(() => {
    setTimeout(() => {
      setCarsList(test);
    }, 1000);
    // api.getData("car").then((res) => setCarsList(res.data));
  }, []);

  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = carsList.slice(firstPostIndex, lastPostIndex);

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function test2() {
    currentPosts.forEach((item) => {
      console.log(item);
    });
  }
  return (
    <div className="admin-main">
      <div className="admin-main_content">
        <div className="admin-main_content_title" onClick={test2}>
          Список авто
        </div>
        <div className="admin-main_content_desc">
          {!carsList.length ? (
            <Loader />
          ) : (
            <>
              <div className="filter">
                <div>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}>
                    {modelOptions.map((item, ind) => (
                      <option selected={ind === 0} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    {categoryOptions.map((item, ind) => (
                      <option selected={ind === 0} value={item}>
                        {item}
                      </option>
                    ))}
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
                      {currentPosts.map((item, id) => (
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
          <Pagination
            postsCount={carsList.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            changePage={changePage}
          />
        </div>
      </div>
    </div>
  );
}
