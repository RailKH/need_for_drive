import React from "react";
import Login from "./login/login";
import MenuBlock from "./admin-menu/admin-menu";
import AdminHeader from "./admin-header/admin-header";
import AdminMain from "./admin-main/admin-main";
import AdminFooter from "./admin-footer/admin-footer";
import AdminError from "./admin-error/admin-error";
import AdminCarSetting from "./admin-car-setting/admin-car-setting";
import "../../assets/styles/admin-panel.scss";
import { Route, Switch } from "react-router-dom";

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
          <div className="admin_page_content_edit">
            <AdminHeader />
            <Switch>
              <Route path="/admin/admin-main" component={AdminMain} />
              <Route path="/admin/admin-error" component={AdminError} />
              <Route
                path="/admin/admin-car-setting"
                component={AdminCarSetting}
              />
            </Switch>
            <AdminFooter />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPanel;
