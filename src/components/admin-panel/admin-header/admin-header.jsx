import React from "react";
import "./admin-header.scss";
import userAvatar from "../../../assets/icons/admin-menu/user-avatar.jpg";

export default function AdminHeader() {
  return (
    <div className="admin-header">
      <div className="admin-header_search-block">
        <input type="text" placeholder="Поиск ..." />
      </div>
      <div className="admin-header_notification">
        <span className="notification-count">2</span>
      </div>
      <div className="admin-header_user-block">
        <img src={userAvatar} alt="user" />
        <span className="user-name">Admin</span>
        <span className="user-dropdown" />
      </div>
    </div>
  );
}
