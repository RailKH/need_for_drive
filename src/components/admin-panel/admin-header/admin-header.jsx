import React from "react";
import "./admin-header.scss";

export default function AdminHeader() {
  return (
    <div className="admin-header">
      <div className="admin-header_search-block">
        <input type="text" placeholder="Поиск ..." />
      </div>
      <div className="admin-header_notification">
        <span className="notification-count">2</span>
      </div>
      <div className="admin-header_user-block"></div>
    </div>
  );
}
