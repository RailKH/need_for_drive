import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "./admin-car-list.scss";
import Pagination from "./pagination";
import api from "../../../api/api";
import Loader from "../admin-loader";

const categoryOptions = ["Все категории", "Эконом", "Премиум"];
const tableHeaders = ["Модель", "Категория", "Цвет", "Цена"];
let originList = [];

export default function AdminCarList() {
  const history = useHistory();
  const [carsList, setCarsList] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [modelOptions, setModelOptions] = useState([]);
  const [model, setModel] = useState("Все модели");
  const [category, setCategory] = useState("Все категории");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let modelOptions = [];

    api
      .getData("car")
      .then((res) => {
        setCarsList(res.data);
        originList = res.data;
        originList.forEach((item) => {
          let value = item.name.split(",")[0];
          !modelOptions.includes(value) && modelOptions.push(value);
        });
        modelOptions.unshift("Все модели");
        setModelOptions(modelOptions);
        setLoader(false);
      })
      .catch((error) => {
        console.log("ERRORRRRRR", error);
        history.push("/admin/admin-error");
      });
  }, []);

  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = carsList.slice(firstPostIndex, lastPostIndex);

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function changeFilter() {
    const fixModel = model === "Все модели" ? "" : model;
    const fixCategory = category === "Все категории" ? "" : category;
    const fixList = originList
      .filter((item) => item.name.startsWith(fixModel))
      .filter((item) => item.categoryId.name.startsWith(fixCategory));
    setCarsList(fixList);
    changePage(1);
  }
  function editCar(id) {
    window.open(`admin-car-setting/${id}`);
  }
  return (
    <div className="admin-main">
      <div className="admin-main_content">
        <div className="admin-main_content_title">Список авто</div>
        <div className="admin-main_content_desc">
          {loader ? (
            <Loader />
          ) : (
            <>
              <div className="filter">
                <div>
                  <select
                    defaultValue={model}
                    onChange={(e) => setModel(e.target.value)}>
                    {modelOptions.map((item, ind) => (
                      <option value={item} key={`${item}_${ind}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    defaultValue={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    {categoryOptions.map((item, ind) => (
                      <option value={item} key={`${item}_${ind}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    className="admin_button active"
                    onClick={changeFilter}>
                    Применить
                  </button>
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
                        <tr
                          key={`${item}_${id}`}
                          onClick={() => test(item.id)}
                          onClick={() => editCar(item.id)}>
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
