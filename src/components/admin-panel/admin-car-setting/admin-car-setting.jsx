import React from "react";
import "./admin-car-setting.scss";
import classnames from "classnames";
import defaultCar from "../../../assets/img/defaultCar.png";
import Loader from "../admin-loader";
import api from "../../../api/api";
import { useHistory } from "react-router-dom";

import Notification from "../notification";
import { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const defaultValue = {
  name: "",
  number: "",
  categoryId: { name: "Эконом", id: "5e25c98d099b810b946c5d62" },
  colors: "",
  description: "",
  priceMax: "",
  priceMin: "",
  thumbnail: "",
};

export default withRouter(function AdminCarSetting(props) {
  let history = useHistory();
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState(defaultValue);
  const [notific, setNotific] = useState(false);
  const [selectColor, setSelectColor] = useState("");
  const [progressBar, setProgressBar] = useState(0);
  const [photo, setPhoto] = useState({});
  const [carId, setCarId] = useState("");
  const [permit, setPermit] = useState(false);
  const categoryId = [
    { name: "Премиум", id: "5e25c99a099b810b946c5d63" },
    { name: "Эконом", id: "5e25c98d099b810b946c5d62" },
  ];
  useEffect(() => {
    getCar();
  }, []);
  useEffect(() => {
    calcBar();
    checkData();
  });

  function getCar() {
    const value = props.match.params.id;
    setCarId(value);
    if (value) {
      setLoader(true);
      api
        .getData(`car/${value}`)
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
    setTimeout(() => setNotific(false), 5000);
  }
  function calcBar() {
    let progress = 0;

    for (let key in state) {
      if (key === "tank" || (state[key] && key !== "colors")) {
        progress += 100 / Object.keys(state).length;
      }
      if (key === "colors" && state.colors.length) {
        progress += 100 / Object.keys(state).length;
      }
    }

    setProgressBar(Math.ceil(progress) > 100 ? 100 : Math.ceil(progress));
  }
  function handleChange(event) {
    console.log(state);
    const { name, value, id } = event.target;
    name == "categoryId"
      ? setState({ ...state, [name]: { name: value, id: id } })
      : setState({ ...state, [name]: value });
  }
  function addColor() {
    if (selectColor.length) {
      state.colors
        ? setState({ ...state, colors: [...state.colors, selectColor] })
        : setState({ ...state, colors: [selectColor] });
      setSelectColor("");
    }
  }
  function deleteColor(ind) {
    let changeArray = state.colors;
    changeArray.splice(ind, 1);
    setState({ ...state, colors: changeArray });
  }
  function addPhoto(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setState({
        ...state,
        thumbnail: {
          mimetype: file.type,
          originalname: file.name,
          path: {
            content: {
              "image/png": {
                schema: {
                  type: "string",
                  format: reader.result,
                },
              },
            },
          },
          size: file.size,
        },
      });
    };
    reader.readAsDataURL(file);
    setPhoto(e.target.files[0]);
  }
  function checkData() {
    state.name && state.priceMax && state.priceMin && state.thumbnail
      ? setPermit(true)
      : setPermit(false);
  }
  async function saveValue() {
    setLoader(true);
    let result = carId
      ? api.updateDataCar(state, carId, "PUT")
      : api.postDataCar(state);
    result
      .then((res) => {
        showNotif();
        setDefaultValue();
      })
      .catch((error) => {
        console.log("ERRORRRR", error);
        history.push("/admin/admin-error");
      })
      .finally(() => setLoader(false));
  }
  function setDefaultValue() {
    history.push("/admin/admin-car-setting");
    setState(defaultValue);
    setPhoto("");
    setCarId("");
  }
  function deleteCar() {
    setLoader(true);
    api
      .updateDataCar(state, carId, "DELETE")
      .then(() => {
        showNotif();
        setDefaultValue();
      })
      .catch((error) => {
        console.log("ERRORRRR", error);
        history.push("/admin/admin-error");
      })
      .finally(() => setLoader(false));
  }
  return (
    <div className="admin-car admin-main">
      {notific && <Notification />}

      <div className="admin-car_content admin-main_content">
        <div className="admin-main_content_title" onClick={() => showNotif()}>
          Карточка автомобиля
        </div>
        <div className="admin-car_content_desc">
          {loader && <Loader />}

          <div className="car-cart">
            <div className="car-cart_photo">
              <img
                src={
                  photo.name
                    ? URL.createObjectURL(photo)
                    : state.thumbnail
                    ? `http://api-factory.simbirsoft1.com${state.thumbnail.path}`
                    : defaultCar
                }
                alt="car"
              />
              <div className="title">{state.name || "Название автомобиля"}</div>
              <label htmlFor="custom-file-upload" className="filupp">
                <span className="filupp-file-name">
                  {photo.name ? photo.name : "Выберите файл..."}
                </span>
                <input
                  type="file"
                  name="attachment-file"
                  id="custom-file-upload"
                  onChange={addPhoto}
                />
                <span className="filupp-file-button">Обзор</span>
              </label>
            </div>
            <div className="car-cart_load-bar">
              <div className="car-cart_load-bar_wrap">
                <span className="car-cart_suptitle">Заполнено</span>
                <span>{`${progressBar}%`}</span>
              </div>
              <div className="car-cart_load-bar_wrap-loader">
                <div
                  className="car-cart_load-bar_loader"
                  style={{
                    width: `${progressBar}%`,
                  }}></div>
              </div>
            </div>
            <div className="car-cart_desc">
              <div className="car-cart_suptitle">Описание</div>
              <textarea
                name="description"
                placeholder="Введите описание автомобиля"
                cols="30"
                rows="5"
                value={state.description}
                className="car-cart_text"
                onChange={handleChange}
              />
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
                {categoryId.map((item, id) => (
                  <div key={item.id} className="categoryId">
                    <input
                      type="radio"
                      id={item.id}
                      name="categoryId"
                      value={item.name}
                      checked={item.name === state.categoryId.name}
                      onClick={handleChange}
                    />
                    <label htmlFor={item.id}>
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
                        <label htmlFor={item} onClick={() => deleteColor(ind)}>
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
                <button
                  className={classnames("admin_button active", {
                    disabled: !permit,
                  })}
                  onClick={() => {
                    permit && saveValue();
                  }}>
                  Сохранить
                </button>
                <button
                  className="admin_button active cancel"
                  onClick={setDefaultValue}>
                  Отменить
                </button>
              </div>
              {carId && (
                <button
                  className="admin_button active delete"
                  onClick={deleteCar}>
                  Удалить
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
