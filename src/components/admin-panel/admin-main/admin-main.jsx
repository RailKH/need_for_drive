import React from "react";
import "./admin-main.scss";
import car from "../../../assets/img/cars/image_2.png";
const additional = ["Полный бак", "Детско кресло", "Правый руль"];

export default function AdminMain() {
  return (
    <div className="admin-main">
      <div className="admin-main_content">
        <div className="admin-main_content_title">Заказы</div>
        <div className="admin-main_content_desc">
          <div className="filter">
            <div>
              <select name="daySelect">
                <option selected value="opt1">
                  За неделю
                </option>
                <option value="opt2">За месяц</option>
              </select>
              <select name="carSelect">
                <option selected value="opt1">
                  Elantra
                </option>
                <option value="opt2">Hundai</option>
              </select>
              <select name="citySelect">
                <option selected value="opt1">
                  Ульяновск
                </option>
                <option value="opt2">Казань</option>
                <option value="opt2">Питер</option>
              </select>
              <select name="waitSelect">
                <option selected value="opt1">
                  В процессе
                </option>
                <option value="opt2">Завершено</option>
              </select>
            </div>
            <div>
              <button className="admin_button">Применить</button>
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
                <span>Готово</span>
                <span>Отмена</span>
                <span>Изменить</span>
              </div>
            </div>
            <div className="description_item">
              <img src={car} alt="car" />
              <div className="item_descr">
                <div className="descr_title">
                  Elatra в Ульяновск, Нариманова 42
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
                <span>Готово</span>
                <span>Отмена</span>
                <span>Изменить</span>
              </div>
            </div>
          </div>
          <div className="page"></div>
        </div>
      </div>
    </div>
  );
}
