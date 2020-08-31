import React from "react";
import "./admin-car-setting.scss";
import car from "../../../assets/img/cars/image_2.png";

export default function AdminCarSetting() {
  return (
    <div className="admin-car admin-main">
      <div className="admin-car_content admin-main_content">
        <div className="admin-main_content_title">Карточка автомобиля</div>
        <div className="admin-car_content_desc">
          <div className="car-cart">
            <div className="car-cart_photo">
              <img src={car} alt="car" />
              <div className="title">Hyndai, i30 N</div>
              <div className="suptitle">Компакт-кар</div>
              <label HtmlFor="custom-file-upload" class="filupp">
                <span class="filupp-file-name">Выберите файл...</span>
                <input
                  type="file"
                  name="attachment-file"
                  id="custom-file-upload"
                />
                <span class="filupp-file-button">Обзор</span>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                eaque, quidem, commodi soluta qui quae quod dolorum sint alias,
                possimus illum assumenda eligendi cumque?
              </div>
            </div>
          </div>
          <div className="car-setting">
            <div className="car-setting_title"></div>
            <div className="car-setting_content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
