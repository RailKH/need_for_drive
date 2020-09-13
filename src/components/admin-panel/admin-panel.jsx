import React from "react";
import Login from "./login/login";
import MenuBlock from "./admin-menu/admin-menu";
import AdminHeader from "./admin-header/admin-header";
import AdminMain from "./admin-main/admin-main";
import AdminFooter from "./admin-footer/admin-footer";
import AdminError from "./admin-error/admin-error";
import AdminPoint from "./admin-point/admin-point";
import AdminCarList from "./admin-car-list/admin-car-list";
import AdminCarSetting from "./admin-car-setting/admin-car-setting";
import "../../assets/styles/admin-panel.scss";
import { Route, Switch } from "react-router-dom";

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autorisation: false,
      adminName: "",
    };
    this.changeAutorisation = this.changeAutorisation.bind(this);
    this.setName = this.setName.bind(this);
  }
  setName(res) {
    this.setState({
      adminName: res.role.name,
    });
  }
  changeAutorisation() {
    this.setState((state) => ({
      autorisation: !state.autorisation,
    }));
  }
  render() {
    return (
      <div className="admin_page">
        {!this.state.autorisation ? (
          <Login
            changeAutorisation={this.changeAutorisation}
            setName={this.setName}
          />
        ) : (
          <div className="admin_page_content">
            <MenuBlock />
            <div className="admin_page_content_edit">
              <AdminHeader
                name={this.state.adminName}
                changeAutorisation={this.changeAutorisation}
              />
              <Switch>
                <Route path="/admin/admin-main" component={AdminMain} />
                <Route path="/admin/admin-error" component={AdminError} />
                <Route path="/admin/admin-point" component={AdminPoint} />
                <Route path="/admin/admin-car-list" component={AdminCarList} />
                <Route
                  path="/admin/admin-car-setting"
                  component={AdminCarSetting}
                />
              </Switch>
              <AdminFooter />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default AdminPanel;
