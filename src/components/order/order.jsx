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

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      paramLocation: true,
      paramModel: true,
      paramExtra: true,
      paramOrder: false,
    };
    this.nextWrapper = this.nextWrapper.bind(this);
    this.changeProps = this.changeProps.bind(this);
  }
  changeProps(value, item) {
    this.setState({
      [item]: value,
    });
  }
  nextWrapper(item) {
    if (item == 4) {
      item = 3;
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
                <a href="#" className="content__header__logo">
                  Need for drive
                </a>
              </Link>
              <span className="content__header__location">Ульяновск</span>
            </header>
          </div>
          <div className="link">
            <div className="link__content">
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
                onClick={(e) => this.state.paramExtra && this.nextWrapper(3)}
                className={classnames(
                  "link__content__text",
                  id == "3" && "active",
                  paramExtra && "ready"
                )}>
                Итого
              </div>
            </div>
          </div>
          <section className="order__content">
            <div className="wrapper">
              <LocationBlock
                id={id}
                paramLocation={paramLocation}
                changeProps={this.changeProps}
              />
              <ModelBlock id={id} cars={this.props.cars} />
              <ExtraBlock id={id} />
              <TotalBlock id={id} />
              <CostBlock
                id={id}
                nextWrapper={this.nextWrapper}
                state={this.state}
              />
            </div>
          </section>
        </section>
      </Provider>
    );
  }
}
export default Order;
