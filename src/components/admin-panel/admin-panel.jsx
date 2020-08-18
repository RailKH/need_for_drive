import React from "react";
import Login from "../login/login";
import MenuBlock from "../admin-menu/admin-menu";
import "../../assets/styles/admin-panel.scss";

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin_page">
        {/* <Login /> */}
        <MenuBlock />
      </div>
    );
  }
}

export default AdminPanel;
