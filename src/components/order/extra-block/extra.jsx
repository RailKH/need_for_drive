import React, { useState } from "react";
import classnames from "classnames";

export default function Extra(props) {
  return (
    <div
      className={classnames(
        "order__content__extra",
        props.id != "2" && "disabled"
      )}>
      <div className="extra__form">
        <div className="extra__form__color">
          <p>Цвет</p>
          <input type="radio" id="m1" name="color" />
          <label htmlFor="m1">
            <span></span>Любой
          </label>
          <input type="radio" id="m2" name="color" />
          <label htmlFor="m2">
            <span></span>Красный
          </label>
          <input type="radio" id="m3" name="color" />
          <label htmlFor="m3">
            <span></span>Голубой
          </label>
        </div>
        <div className="extra__form__date">
          <p>Дата аренды</p>
          <div>
            <label>С</label>
            <input type="text" placeholder="Введите дату и время"></input>
          </div>
          <label>По</label>
          <input type="text" placeholder="Введите дату и время"></input>
        </div>
        <div className="extra__form__rate">
          <p>Тариф</p>
          <div className="wrap">
            <input type="radio" id="t1" name="rate" />
            <label htmlFor="t1">
              <span></span>Поминутно, 7₽/мин
            </label>
          </div>
          <input type="radio" id="t2" name="rate" />
          <label htmlFor="t2">
            <span></span>На сутки, 1999 ₽/сутки
          </label>
        </div>
        <div className="extra__form__additional">
          <p>Доп услуги</p>
          <div className="additional__checkbox">
            <input
              type="checkbox"
              className="additional__checkbox__custom"
              id="tank"
              name="tank"
              value="tank"
            />
            <label htmlFor="tank">
              <span></span>Полный бак, 500р
            </label>
          </div>
          <div className="additional__checkbox">
            <input
              type="checkbox"
              className="additional__checkbox__custom"
              id="chair"
              name="chair"
              value="chair"
            />
            <label htmlFor="chair">
              <span></span>Детское кресло, 200р
            </label>
          </div>
          <div className="additional__checkbox">
            <input
              type="checkbox"
              className="additional__checkbox__custom"
              id="wheel"
              name="wheel"
              value="wheel"
            />
            <label htmlFor="wheel">
              <span></span>Правый руль, 1600р
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
