import React from "react";
import "./admin-error.scss";

export default function AdminError() {
  return (
    <div className="admin-error">
      <div className="admin-error_content">
        <div className="content_title">500</div>
        <div className="content_suptitle">Что то пошло не так</div>
        <div className="content_text">Попробуйте перезагрузить страницу</div>
        <button className="admin_button active">Назад</button>
      </div>
    </div>
  );
}
