import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Menu from "./components/menu/menu";
import Order from "./components/order/order";
import FirstPage from "./components/first-page/first-page";

import car_1 from "./assets/img/cars/image_1.png";
import car_2 from "./assets/img/cars/image_2.png";
import car_3 from "./assets/img/cars/image_3.png";

import "./assets/styles/main.scss";
import Verification from "./components/verification";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
const cars = [car_1, car_2, car_3];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      burger: false,
      verification: false,
      paramOrder: false,
    };
    this.changeVerification = this.changeVerification.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }
  changeVerification() {
    this.setState((state) => ({
      verification: !state.verification,
    }));
  }
  changeOrder() {
    this.setState((state) => ({
      paramOrder: !state.paramOrder,
      verification: !state.verification,
    }));
    if (!this.state.paramOrder) {
      console.log("getORDER");
    } else {
      this.setState((state) => ({
        status: "",
      }));
    }
  }

  openMenu() {
    this.setState((state) => ({
      burger: !state.burger,
    }));
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main">
            <Navigation openMenu={this.openMenu} burger={this.state.burger} />
            <Menu burger={this.state.burger} />
            <Switch>
              <Route
                exact
                path="/need_for_drive"
                render={(props) => (
                  <FirstPage burger={this.state.burger} {...props} />
                )}
              />
              <Route
                exact
                path="/order"
                render={(props) => (
                  <Order
                    cars={cars}
                    changeVerification={this.changeVerification}
                    burger={this.state.burger}
                    paramOrder={this.state.paramOrder}
                    changeOrder={this.changeOrder}
                    {...props}
                  />
                )}
              />
              <Redirect from="/" to="/need_for_drive" />
            </Switch>
            {this.state.verification && (
              <Verification
                changeVerification={this.changeVerification}
                changeOrder={this.changeOrder}
              />
            )}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
