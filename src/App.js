import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Menu from "./components/menu/menu";
import Order from "./components/order/order";
import FirstPage from "./components/first-page/first-page";

import car_1 from "./assets/img/cars/image_1.png";
import car_2 from "./assets/img/cars/image_2.png";
import car_3 from "./assets/img/cars/image_3.png";

import "./assets/styles/main.scss";
import Verification from "./components/verification";

const cars = [car_1, car_2, car_3];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      burger: false,
    };
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.setState((state) => ({
      burger: !state.burger,
    }));
  }
  render() {
    return (
      <Router>
        <div className="main">
          <Navigation openMenu={this.openMenu} burger={this.state.burger} />
          <Menu burger={this.state.burger} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <FirstPage burger={this.state.burger} {...props} />
              )}
            />
            <Route
              exact
              path="/order"
              render={(props) => (
                <Order cars={cars} burger={this.state.burger} {...props} />
              )}
            />
          </Switch>
          {/* <Verification /> */}
        </div>
      </Router>
    );
  }
}

export default App;
