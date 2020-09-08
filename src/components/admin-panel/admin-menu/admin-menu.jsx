import React from "react";
import "./admin-menu.scss";
import classnames from "classnames";
import { ReactComponent as Pen } from "../../../assets/icons/admin-menu/pen.svg";
import { ReactComponent as Form1 } from "../../../assets/icons/admin-menu/form1.svg";
import { ReactComponent as Order } from "../../../assets/icons/admin-menu/order.svg";
import { ReactComponent as Form2 } from "../../../assets/icons/admin-menu/form2.svg";
import { ReactComponent as Form3 } from "../../../assets/icons/admin-menu/form3.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuBlock() {
  const [idMenu, setIdMenu] = useState("");
  return (
    <div className="menu-block">
      <div className="menu-block_logo admin_logo">Need for car</div>
      <Link to="/admin/admin-car-setting">
        <div
          className={classnames("menu-block_auto admin_cart", {
            active: idMenu === 0,
          })}
          onClick={() => setIdMenu(0)}>
          <Pen className="block-logo" />
          Карточка автомобиля
        </div>
      </Link>
      <Link to="/admin/admin-car-list">
        <div
          className={classnames("menu-block_auto admin_list", {
            active: idMenu === 1,
          })}
          onClick={() => setIdMenu(1)}>
          <Form1 className="block-logo" />
          Список авто
        </div>
      </Link>
      <Link to="/admin/admin-main">
        <div
          className={classnames("menu-block_auto admin_order", {
            active: idMenu === 2,
          })}
          onClick={() => setIdMenu(2)}>
          <Order className="block-logo" />
          Заказы
        </div>
      </Link>
      <Link to="/admin/admin-point">
        <div
          className={classnames("menu-block_auto admin_menu1", {
            active: idMenu === 3,
          })}
          onClick={() => setIdMenu(3)}>
          <Form2 className="block-logo" />
          Добавление пунктов выдачи
        </div>
      </Link>
      <Link to="/admin/admin-error">
        <div
          className={classnames("menu-block_auto admin_menu2", {
            active: idMenu === 4,
          })}
          onClick={() => setIdMenu(4)}>
          <Form3 className="block-logo" />
          Menu 5
        </div>
      </Link>
    </div>
  );
}
