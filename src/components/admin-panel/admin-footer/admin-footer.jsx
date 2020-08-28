import React from "react";
import "./admin-footer.scss";

export default function AdminFooter() {
  return (
    <div className="admin-footer">
      <div className="admin-footer_link">
        <span>Главная страница</span>
        <span>Ссылка</span>
      </div>
      <div className="admin-footer_copyright">Copyright © 2020 Simbirsoft</div>
    </div>
  );
}
