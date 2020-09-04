import React, { useEffect } from "react";
import classnames from "classnames";
import { useState } from "react";
const URL =
  "https://cors-anywhere.herokuapp.com/http://api-factory.simbirsoft1.com/api/";

export default function Login(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  let basicToken = "";

  useEffect(() => {
    setLoader(true);
    checkAuth()
      .then((res) => {
        props.changeAutorisation();
        props.setName(res);
      })
      .catch(() => setLoader(false));
  }, []);

  function getToken() {
    let token = "";
    const WORDS =
      "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    for (let i = 0; i < 7; i++) {
      const position = Math.floor(Math.random() * WORDS.length - 1);
      token += WORDS[position];
    }
    basicToken = btoa(`${token}:4cbcea96de`);
    return basicToken;
  }
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  function checkAuth() {
    return fetch(`${URL}auth/check`, {
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("access_token"),
      },
    }).then((response) => response.json());
  }
  function Auth() {
    return fetch(`${URL}auth/login`, {
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json",
        Authorization: "Basic " + getToken(),
      },
      body: JSON.stringify({ username: mail, password: password }),
    }).then((response) => response.json());
  }
  function Checking() {
    if (mail.length > 3 && password.length > 3) {
      setError(false);
      setLoader(true);
      Auth()
        .then((res) => {
          document.cookie = `basicToken=${basicToken}; max-age=${res.expires_in}; path='/need-for-drive/admin`;
          document.cookie = `access_token=${res.access_token}; max-age=${res.expires_in}; path='/need-for-drive/admin`;
          document.cookie = `refresh_token=${res.refresh_token}; max-age=${res.expires_in}; path='/need-for-drive/admin`;
          checkAuth().then((res) => {
            props.changeAutorisation();
            props.setName(res);
          });
        })
        .catch(() => {
          setError(true);
          setLoader(false);
        });
    } else {
      setError(true);
    }
  }

  return (
    <div className="login_box">
      <div className="login_box_title admin_logo">Need for drive</div>
      <div className="login_box_wrap">
        <div className="box-title">Вход</div>
        {error && <div className="box-error">Неверный логин или пароль</div>}
        <div className={classnames("box-registration", { error: error })}>
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
            {loader ? (
              <span className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </span>
            ) : (
              "Войти"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
