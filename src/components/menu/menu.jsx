import React from "react";
import classnames from "classnames";
import "./menu.scss";
import { ReactComponent as Icon1 } from "../../assets/icons/Telegram_white.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/Facebook_white.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/Instagram_white.svg";

const listMenu = ["ПАРКОВКА", "СТРАХОВКА", "БЕНЗИН", "ОБСЛУЖИВАНИЕ"];

export default function Menu(props) {
  return (
    <section className={classnames("menu", { disabled: !props.burger })}>
      <div className="menu__content">
        <ul>
          {listMenu.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="menu__content__icons">
          <a href="#">
            <Icon1 />
          </a>
          <a href="#">
            <Icon2 />
          </a>
          <a href="#">
            <Icon3 />
          </a>
        </div>
      </div>
    </section>
  );
}
