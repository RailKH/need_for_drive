import React from "react";
import classnames from "classnames";

export default function Navigation(props) {
  return (
    <nav className="nav">
      <div
        onClick={props.openMenu}
        className={classnames("nav__burger", props.burger && "active")}>
        <span className="menu-top"></span>
        <span className="menu-middle"></span>
        <span className="menu-bottom"></span>
      </div>
      <div className="nav__lanSwitch">Eng</div>
    </nav>
  );
}
