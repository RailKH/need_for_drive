import React from "react";
import Login from "../login/login";
import "../../assets/styles/admin-panel.scss";

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Login />
      </div>
    );
  }
}

export default AdminPanel;
