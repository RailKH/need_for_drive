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
import { connect } from "react-redux";
import { setStatusIdText, setParamOrderText } from "./store/extra/action";

const cars = [car_1, car_2, car_3];
const URL = "http://api-factory.simbirsoft1.com/api/db/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      burger: false,
      verification: false,
      loader: false,
    };
    this.changeVerification = this.changeVerification.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.postData = this.postData.bind(this);
  }
  changeVerification() {
    this.setState((state) => ({
      verification: !state.verification,
    }));
  }
  postData = async (item, order) => {
    let data = await fetch(`${PROXY}${URL}${item}`, {
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) => res.json());

    return data;
  };
  changeOrder() {
    this.props.setParamOrderText(!this.props.paramOrder);
    this.setState((state) => ({
      verification: !state.verification,
    }));

    if (!this.props.paramOrder) {
      let order = {
        orderStatusId: {},
        cityId: { id: this.props.city.id },
        pointId: { id: this.props.cityPoint.id },
        carId: { id: this.props.car.id },
        color: this.props.color,
        dateFrom: this.props.dateStart,
        dateTo: this.props.dateFinish,
        rateId: { id: this.props.rate.id },
        price: this.props.price,
        isFullTank: this.props.tank,
        isNeedChildChair: this.props.chair,
        isRightWheel: this.props.wheel,
      };
      this.setState((state) => ({
        loader: true,
      }));

      this.postData("order", order).then((json) => {
        this.props.setStatusIdText(json.data.id);
        this.setState((state) => ({
          loader: false,
        }));
        localStorage.setItem("statusId", json.data.id);
      });
    } else {
      this.props.setParamOrderText(false);
      this.props.setStatusIdText("");
      localStorage.removeItem("statusId");
    }
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
                  changeOrder={this.changeOrder}
                  loader={this.state.loader}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.loc.valueCity,
    cityPoint: state.loc.valueOfPoint,
    car: state.mod.selectCar,
    color: state.ext.color,
    rate: state.ext.rate,
    additional: state.ext.additional,
    orderStatusId: state.ext.orderStatusId,
    paramOrder: state.ext.paramOrder,
    dateStart: state.ext.dateStart,
    dateFinish: state.ext.dateFinish,
    price: state.ext.price,
    tank: state.ext.tank,
    wheel: state.ext.wheel,
    chair: state.ext.chair,
  };
};
const mapDispatchToProps = {
  setStatusIdText,
  setParamOrderText,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
