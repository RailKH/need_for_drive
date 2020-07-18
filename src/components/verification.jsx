import React from "react";

export default function Verification() {
  return (
    <div className="verification">
      <div className="verification__content">
        <p className="title">Подтвердить заказ</p>
        <div>
          <button className="button true">Подтвердить</button>
          <button className="button false">Вернуться</button>
        </div>
      </div>
    </div>
  );
}
