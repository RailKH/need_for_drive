import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Login(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  function Checking() {
    if (mail === "test" && password === "test") {
      props.changeAutorisation();
    }
  }

  return (
    <div className="login_box">
      <div className="login_box_title admin_logo">Need for drive</div>
      <div className="login_box_wrap">
        <div className="box-title">Вход</div>
        <div className="box-registration">
          <p>Почта</p>
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <p>Пароль</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="box-footer">
          <button className="admin_button">Запросить доступ</button>
          <button className="admin_button active" onClick={Checking}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}
