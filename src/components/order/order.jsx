import React from "react";
import classnames from "classnames";
import "./order.scss";
import LocationBlock from "./location-block/location";
import ModelBlock from "./model-block/model";
import ExtraBlock from "./extra-block/extra";
import TotalBlock from "./total-block/total";
import CostBlock from "./cost-block/cost";
import { Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../store/reducers";
const store = createStore(rootReducer);
const URL = "http://api-factory.simbirsoft1.com/api/db/";

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      paramLocation: false,
      paramModel: false,
      paramExtra: false,
      city: [],
      point: [],
    };
    this.nextWrapper = this.nextWrapper.bind(this);
    this.changeProps = this.changeProps.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    if (this.props.paramOrder) {
      this.setState({
        id: 3,
      });
      return;
    }
    this.getData("city").then((json) => {
      let data = [];
      json.data.forEach((elem) => data.push(elem.name));
      data.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
      this.setState({
        city: data,
      });
    });

    this.getData("point").then((json) => {
      const cityPoint = json.data.filter((item) => item.name);
      this.setState({
        point: cityPoint,
      });
      console.log(this.state);
    });
  }

  getData = async (item) => {
    let data = await fetch(`${URL}${item}`, {
      method: "GET",
      headers: { "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b" },
    }).then((res) => res.json());

    return data;
  };

  changeProps(value, item) {
    this.setState({
      [item]: value,
    });
  }
  nextWrapper(item) {
    if (item == 4) {
      item = 3;
      if (this.props.paramOrder) {
        this.props.changeOrder();
      }
      this.props.changeVerification("verification");
    }
    this.setState({
      id: item,
    });
  }

  render() {
    const [car_1, car_2, car_3] = this.props.cars;
    const { id, paramLocation, paramExtra, paramModel } = this.state;
    return (
      <Provider store={store}>
        <section
          className={classnames("order", this.props.burger && "disabled")}>
          <div className="order__header">
            <header className="content__header">
              <Link to="/">
                <span href="#" className="content__header__logo">
                  Need for drive
                </span>
              </Link>
              <span className="content__header__location">Ульяновск</span>
            </header>
          </div>
          <div className="link">
            <div className="link__content">
              {this.props.paramOrder ? (
                <div className="link__content__title">
                  Заказ номер RU58491823
                </div>
              ) : (
                <>
                  <div
                    onClick={(e) => this.nextWrapper(0)}
                    className={classnames(
                      "link__content__text",
                      id == "0" && "active",
                      paramLocation && "ready"
                    )}>
                    Местоположение
                  </div>
                  <span></span>
                  <div
                    onClick={(e) => paramLocation && this.nextWrapper(1)}
                    className={classnames(
                      "link__content__text",
                      id == "1" && "active",
                      paramModel && "ready"
                    )}>
                    Модель
                  </div>
                  <span></span>
                  <div
                    onClick={(e) => paramModel && this.nextWrapper(2)}
                    className={classnames(
                      "link__content__text",
                      id == "2" && "active",
                      paramExtra && "ready"
                    )}>
                    Дополнительно
                  </div>
                  <span></span>
                  <div
                    onClick={(e) =>
                      this.state.paramExtra && this.nextWrapper(3)
                    }
                    className={classnames(
                      "link__content__text",
                      id == "3" && "active",
                      paramExtra && "ready"
                    )}>
                    Итого
                  </div>
                </>
              )}
            </div>
          </div>
          <section className="order__content">
            <div className="wrapper">
              <LocationBlock
                id={id}
                paramLocation={paramLocation}
                changeProps={this.changeProps}
                listCity={this.state.city}
                listPoint={this.state.point}
              />
              <ModelBlock id={id} cars={this.props.cars} />
              <ExtraBlock id={id} />
              <TotalBlock id={id} paramOrder={this.props.paramOrder} />
              <CostBlock
                id={id}
                nextWrapper={this.nextWrapper}
                state={this.state}
                paramOrder={this.props.paramOrder}
              />
            </div>
          </section>
        </section>
      </Provider>
    );
  }
}
export default Order;
