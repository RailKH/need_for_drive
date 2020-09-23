import React, { useEffect } from "react";
import "./admin-main.scss";
import api from "../../../api/api";
import car from "../../../assets/img/cars/image_2.png";
import mark from "../../../assets/icons/admin-menu/true.svg";
import cross from "../../../assets/icons/admin-menu/false.svg";
import ellipsis from "../../../assets/icons/admin-menu/ellipsis.svg";
const additional = ["Полный бак", "Детско кресло", "Правый руль"];

export default function AdminMain() {
  useEffect(() => {
    api.getData("order?page=1&limit=4", true).then((res) => console.log(res));
  }, []);

  return (
    <div className="admin-main">
      <div className="admin-main_content">
        <div className="admin-main_content_title">Заказы</div>
        <div className="admin-main_content_desc">
          <div className="filter">
            <div>
              <select name="citySelect">
                <option selected value="opt1">
                  Ульяновск
                </option>
                <option>Казань</option>
                <option>Питер</option>
              </select>
              <select name="waitSelect">
                <option selected>В процессе</option>
                <option>Завершено</option>
              </select>
            </div>
            <div>
              <button className="admin_button active">Применить</button>
            </div>
          </div>
          <div className="description">
            <div className="description_item">
              <img src={car} alt="car" />
              <div className="item_descr">
                <div className="descr_title">
                  <span>Elatra</span> в <span>Ульяновск</span>, Нариманова 42
                </div>
                <div className="descr_time">
                  12.06.2019 12:00 — 13.06.2019 12:00
                </div>
                <div className="descr_color">
                  Цвет: <span>Голубой</span>
                </div>
              </div>
              <div>
                {additional.map((item, ind) => {
                  return (
                    <div
                      className="additional__checkbox"
                      key={`${ind}_${item}`}>
                      <input
                        type="checkbox"
                        className="additional__checkbox__custom"
                        id={item}
                      />
                      <label htmlFor={item}>
                        <span />
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="price">4 300 ₽</div>
              <div className="change-button">
                <span>
                  <img src={mark} />
                  Готово
                </span>
                <span>
                  <img src={cross} />
                  Отмена
                </span>
                <span>
                  <img src={ellipsis} />
                  Изменить
                </span>
              </div>
            </div>
          </div>
          <div className="page">
            <div className="page_content">
              <span className="left-side">&#171;</span>
              <span className="fist-page">1 ...</span>
              <span className="main-pages">
                <span className="main-pages_first">4</span>
                <span className="main-pages_second">5</span>
                <span className="main-pages_third">6</span>
              </span>
              <span className="last-page">... 31</span>
              <span className="right-side">&#187;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
