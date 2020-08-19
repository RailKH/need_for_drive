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
        <div className="admin_page_content">
          <MenuBlock />
        </div>
      </div>
    );
  }
}

export default AdminPanel;
