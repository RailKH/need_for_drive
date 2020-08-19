import React from "react";
import "../admin-menu/admin-menu.scss";

export default function MenuBlock() {
  return (
    <div className="menu-block">
      <div className="menu-block_logo admin_logo">Need for car</div>
      <div className="menu-block_auto admin_cart">Карточка автомобиля</div>
      <div className="menu-block_auto admin_list">Список авто</div>
      <div className="menu-block_auto admin_order">Заказы</div>
      <div className="menu-block_auto admin_menu1">Menu 4</div>
      <div className="menu-block_auto admin_menu2">Menu 5</div>
    </div>
  );
}
