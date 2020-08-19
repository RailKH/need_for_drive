import React from "react";
import "../admin-menu/admin-menu.scss";
import { ReactComponent as Icon1 } from "../../assets/icons/admin-menu/pen.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/admin-menu/form1.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/admin-menu/order.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/admin-menu/form2.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/admin-menu/form3.svg";

export default function MenuBlock() {
  return (
    <div className="menu-block">
      <div className="menu-block_logo admin_logo">Need for car</div>
      <div className="menu-block_auto admin_cart">
        <Icon1 className="block-logo" />
        Карточка автомобиля
      </div>
      <div className="menu-block_auto admin_list">
        <Icon2 className="block-logo" />
        Список авто
      </div>
      <div className="menu-block_auto admin_order">
        <Icon3 className="block-logo" />
        Заказы
      </div>
      <div className="menu-block_auto admin_menu1">
        <Icon4 className="block-logo" />
        Menu 4
      </div>
      <div className="menu-block_auto admin_menu2">
        <Icon5 className="block-logo" />
        Menu 5
      </div>
    </div>
  );
}
