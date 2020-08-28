import React from "react";

export default function Login() {
  return (
    <div className="login_box">
      <div className="login_box_title admin_logo">Need for drive</div>
      <div className="login_box_wrap">
        <div className="box-title">Вход</div>
        <div className="box-registration">
          <p>Почта</p>
          <input type="text" />
          <p>Пароль</p>
          <input type="text" />
        </div>
        <div className="box-footer">
          <button className="admin_button">Запросить доступ</button>
          <button className="admin_button active">Войти</button>
        </div>
      </div>
    </div>
  );
}
