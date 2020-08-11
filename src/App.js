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
import Loader from "./components/loader";

import car_1 from "./assets/img/cars/image_1.png";
import car_2 from "./assets/img/cars/image_2.png";
import car_3 from "./assets/img/cars/image_3.png";

import "./assets/styles/main.scss";
import Verification from "./components/verification";
import { connect } from "react-redux";

const cars = [car_1, car_2, car_3];
const URL = "http://api-factory.simbirsoft1.com/api/db/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      burger: false,
      verification: false,
      paramOrder: false,
      statusId: "",
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
    this.setState((state) => ({
      paramOrder: !state.paramOrder,
      verification: !state.verification,
    }));
    if (!this.state.paramOrder) {
      let order = {
        orderStatusId: {},
        cityId: { id: this.props.city.id },
        pointId: { id: this.props.cityPoint.id },
        carId: { id: this.props.car.id },
        color: "Голубой",
        dateFrom: this.props.dateStart,
        dateTo: this.props.dateFinish,
        rateId: { id: this.props.rate.id },
        price: 5000,
        isFullTank: true,
        isNeedChildChair: false,
        isRightWheel: true,
      };
      this.setState((state) => ({
        loader: true,
      }));
      // let order = {
      //   orderStatusId: {},
      //   cityId: { id: "5e26a128099b810b946c5d87" },
      //   pointId: { id: "5e26a148099b810b946c5d88" },
      //   carId: { id: "5e25ca0d099b810b946c5d65" },
      //   color: "Голубой",
      //   dateFrom: 5,
      //   dateTo: 7,
      //   rateId: { id: "5e26a0d2099b810b946c5d85" },
      //   price: 5000,
      //   isFullTank: true,
      //   isNeedChildChair: false,
      //   isRightWheel: true,
      // };

      this.postData("order", order).then((json) => {
        this.setState((state) => ({
          statusId: json.data.id,
          loader: false,
        }));
      });
    } else {
      this.setState((state) => ({
        statusId: "",
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
                  statusId={this.state.statusId}
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
    dateStart: state.ext.dateStart,
    dateFinish: state.ext.dateFinish,
  };
};

export default connect(mapStateToProps)(App);
