import React from "react";
import "./admin-car-setting.scss";
import Loader from "../../loader";
import api from "../../../api/api";
import { useHistory } from "react-router-dom";

import Notification from "../notification";
import car from "../../../assets/img/cars/image_2.png";
import { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

// const color = ["Красный", "Белый", "Черный"];

export default withRouter(function AdminCarSetting(props) {
  let history = useHistory();
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({});
  const [notific, setNotific] = useState(false);
  const [selectColor, setSelectColor] = useState("");

  useEffect(() => {
    getCar();
  }, []);

  function getCar() {
    let carId = props.match.params.id;
    if (carId) {
      setLoader(true);
      api
        .getData(`car/${carId}`)
        .then((res) => setState(res.data))
        .catch((error) => {
          console.log(error);
          history.push("/admin/admin-error");
        })
        .finally(() => setLoader(false));
    }
  }
  function showNotif() {
    setNotific(true);
    setTimeout(() => setNotific(false), 3000);
  }
  function handleChange(event) {
    console.log(state);
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }
  function addColor() {
    state.colors
      ? setState({ ...state, colors: [...state.colors, selectColor] })
      : setState({ ...state, colors: [selectColor] });
    setSelectColor("");
  }
  function deleteColor(ind) {
    let changeArray = state.colors;
    changeArray.splice(ind, 1);
    setState({ ...state, colors: changeArray });
  }
  return (
    <div className="admin-car admin-main">
      {notific && <Notification />}
      {loader ? (
        <Loader />
      ) : (
        <div className="admin-car_content admin-main_content">
          <div
            className="admin-main_content_title"
            onClick={() => console.log(state)}>
            Карточка автомобиля
          </div>
          <div className="admin-car_content_desc">
            <div className="car-cart">
              <div className="car-cart_photo">
                <img src={car} alt="car" />
                <div className="title">
                  {state.name || "Название автомобиля"}
                </div>
                <label htmlFor="custom-file-upload" className="filupp">
                  <span className="filupp-file-name">Выберите файл...</span>
                  <input
                    type="file"
                    name="attachment-file"
                    id="custom-file-upload"
                  />
                  <span className="filupp-file-button">Обзор</span>
                </label>
              </div>
              <div className="car-cart_load-bar">
                <div className="car-cart_load-bar_wrap">
                  <span className="car-cart_suptitle">Заполнено</span>
                  <span>74%</span>
                </div>
                <div className="car-cart_load-bar_wrap-loader">
                  <div className="car-cart_load-bar_loader"></div>
                </div>
              </div>
              <div className="car-cart_desc">
                <div className="car-cart_suptitle">Описание</div>
                <div className="car-cart_text">
                  {state.description ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?"}
                </div>
              </div>
            </div>
            <div className="car-setting">
              <div className="car-setting_title">Настройки автомобиля</div>
              <div className="car-setting_content">
                <div className="car-setting_content_item box-registration">
                  <p>Модель автомобиля</p>
                  <input
                    type="text"
                    value={state.name}
                    name="name"
                    placeholder="Введите название автомобиля"
                    onChange={handleChange}
                  />
                </div>
                <div className="car-setting_content_item box-registration">
                  <p>Номер автомобиля</p>
                  <input
                    type="text"
                    value={state.number}
                    name="number"
                    placeholder="Введите номер автомобиля"
                    onChange={handleChange}
                  />
                </div>
                <div className="car-setting_content_item box-registration">
                  <p>Максимальная цена</p>
                  <input
                    type="text"
                    value={state.priceMax}
                    name="priceMax"
                    placeholder="Введите максимальная цену"
                    onChange={handleChange}
                  />
                </div>
                <div className="car-setting_content_item box-registration">
                  <p>Минимальная цена</p>
                  <input
                    type="text"
                    value={state.priceMin}
                    name="priceMin"
                    placeholder="Введите минимальную цену"
                    onChange={handleChange}
                  />
                </div>
                <div className="car-setting_content_item box-registration">
                  <p>Класс автомобиля</p>
                  {[
                    { name: "Премиум", id: "5e25c99a099b810b946c5d63" },
                    { name: "Эконом", id: "5e25c98d099b810b946c5d62" },
                  ].map((item, id) => (
                    <div key={item.id} className="categoryId">
                      <input
                        type="radio"
                        id={`m${id}`}
                        name="categoryId"
                        value={`{name: ${item.name}, id: ${item.id}}`}
                        defaultChecked={
                          state.categoryId && item === state.categoryId.name
                        }
                        onClick={handleChange}
                      />
                      <label htmlFor={`m${id}`}>
                        <span />
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="car-setting_content_item box-registration">
                  <p>Добавить цвет</p>
                  <div className="wrapper">
                    <input
                      type="text"
                      value={selectColor}
                      placeholder="Введите цвет"
                      onChange={(e) => setSelectColor(e.target.value)}
                    />
                    <div className="plus-box" onClick={addColor}>
                      +
                    </div>
                  </div>
                  {state.colors &&
                    state.colors.map((item, ind) => {
                      return (
                        <div
                          className="additional__checkbox"
                          key={`${ind}_${item}`}>
                          <input
                            type="checkbox"
                            className="additional__checkbox__custom"
                            id={item}
                            defaultChecked
                          />
                          <label
                            htmlFor={item}
                            onClick={() => deleteColor(ind)}>
                            <span />
                            {item}
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="car-footer">
                <div className="car-footer_wrapper">
                  <button className="admin_button active">Сохранить</button>
                  <button className="admin_button active cancel">
                    Отменить
                  </button>
                </div>
                <button className="admin_button active delete">Удалить</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
