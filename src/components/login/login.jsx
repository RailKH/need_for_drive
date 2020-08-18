import React from "react";

export default function Login() {
  return (
    <div className="login_box">
      <div className="login_box_title">Need for drive</div>
      <div className="login_box_wrap">
        <div className="box-title">Вход</div>
        <div className="box-registration">
          <p>Почта</p>
          <input type="text" />
          <p>Пароль</p>
          <input type="text" />
        </div>
        <div className="box-footer">
          <button className="box-footer_button">Запросить доступ</button>
          <button className="box-footer_button">Войти</button>
        </div>
      </div>
    </div>
  );
}
