import React from "react";
import "./admin-footer.scss";
import { Link } from "react-router-dom";

export default function AdminFooter() {
  return (
    <div className="admin-footer">
      <div className="admin-footer_link">
        <Link to="/">
          <span>Главная страница</span>
        </Link>
        <Link to="/">
          <span>Страница заказов</span>
        </Link>
      </div>
      <div className="admin-footer_copyright">Copyright © 2020 Simbirsoft</div>
    </div>
  );
}
