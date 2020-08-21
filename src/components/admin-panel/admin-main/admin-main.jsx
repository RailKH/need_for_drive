import React from "react";
import "./admin-main.scss";

export default function AdminMain() {
  return (
    <div className="admin-main">
      <div className="admin-main_content">
        <div className="admin-main_content_title">Заказы</div>
        <div className="admin-main_content_desc">
          <div className="filter">
            <select name="citySelect">
              <option selected value="opt1">
                За неделю
              </option>
              <option value="opt2">За месяц</option>
            </select>
          </div>
          <div className="description"></div>
          <div className="page"></div>
        </div>
      </div>
    </div>
  );
}
