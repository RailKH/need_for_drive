import React from "react";
import "./admin-header.scss";
import userAvatar from "../../../assets/icons/admin-menu/user-avatar.jpg";

export default function AdminHeader(props) {
  function LogOut() {
    deleteCookie();
    props.changeAutorisation();
  }
  function deleteCookie() {
    document.cookie = `basicToken=''; max-age=-1; path='/need-for-drive/admin`;
    document.cookie = `access_token=''; max-age=-1; path='/need-for-drive/admin`;
    document.cookie = `refresh_token=''; max-age=-1; path='/need-for-drive/admin`;
  }
  return (
    <div className="admin-header">
      <div className="admin-header_search-block">
        <input type="text" placeholder="Поиск ..." />
      </div>
      <div className="admin-header_notification">
        <span className="notification-count">2</span>
      </div>
      <div className="admin-header_user-block">
        <div className="admin-header_user-block_wrap">
          <img src={userAvatar} alt="user" />
          <span className="user-name">{props.name}</span>
          <span className="user-dropdown" />
        </div>
        <div className="user-dropdown-box" onClick={LogOut}>
          Выйти
        </div>
      </div>
    </div>
  );
}
