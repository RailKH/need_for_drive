import React, { useState } from "react";

export default function Cost(props) {
  return (
    <div className="order__content__cost">
      <p className="title">Ваш заказ:</p>
      <div className="param">
        <div className="delivery_point">
          <span className="delivery_point__prop feature-left">
            Пункт выдачи
          </span>
          <span className="delivery_point__value feature-right">
            Ульяновск, Нариманова 42
          </span>
        </div>
        <div className="model">
          <span className="model__prop feature-left">Модель</span>
          <span className="model__value feature-right">Hyndai, i30 N</span>
        </div>
        <div className="color">
          <span className="color__prop feature-left">Цвет</span>
          <span className="color__value feature-right">Голубой</span>
        </div>
        <div className="duration">
          <span className="duration__prop feature-left">
            Длительность аренды
          </span>
          <span className="duration__value feature-right">1д 2ч</span>
        </div>
        <div className="rate">
          <span className="rate__prop feature-left">Тариф</span>
          <span className="rate__value feature-right">На сутки</span>
        </div>
        <div className="oil">
          <span className="oil__prop feature-left">Полный бак</span>
          <span className="oil__value feature-right">Да</span>
        </div>
      </div>
      <p className="cost">
        <span>Цена:</span> от 8 000 до 12 000 ₽
      </p>
      <button className="button disabled">Выбрать модель</button>
    </div>
  );
}
