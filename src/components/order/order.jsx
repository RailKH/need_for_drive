import React from "react";
import classnames from "classnames";
import "./order.scss";
import LocationBlock from "./location-block/location";
import ModelBlock from "./model-block/model";
import ExtraBlock from "./extra-block/extra";
import TotalBlock from "./total-block/total";
import CostBlock from "./cost-block/cost";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const URL = "http://api-factory.simbirsoft1.com/api/db/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

class Order extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: 0,
      paramLocation: true,
      paramModel: true,
      paramExtra: true,
      city: [],
      point: [],
      cars: [],
      rate: [],
      // orderStatusId: "",
    };
    this.nextWrapper = this.nextWrapper.bind(this);
    this.changeProps = this.changeProps.bind(this);
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    // this.setStatusId = this.setStatusId.bind(this);
  }
  componentDidMount() {
    if (this.props.paramOrder) {
      this.setState({
        id: 3,
      });
      return;
    }
    this.getData("city").then((json) => {
      json.data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      this.setState({
        city: json.data,
      });
    });

    this.getData("point").then((json) => {
      const cityPoint = json.data.filter((item) => item.name);
      this.setState({
        point: cityPoint,
      });
    });
  }

  getData = async (item) => {
    let data = await fetch(`${PROXY}${URL}${item}`, {
      method: "GET",
      headers: { "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b" },
    }).then((res) => res.json());

    return data;
  };

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

  changeProps(value, item) {
    this.setState({
      [item]: value,
    });
  }

  nextWrapper(item, textButton) {
    if (item === 4) {
      item = 3;
      if (this.props.paramOrder) {
        this.props.changeOrder();
      }
      this.props.changeVerification("verification");
    }
    switch (textButton) {
      case "Выбрать модель":
        this.getData("car").then((json) => {
          this.setState({
            cars: json.data,
          });
        });
        break;
      case "Дополнительно":
        this.getData("rate").then((json) => {
          this.setState({
            rate: json.data,
          });
        });
        break;
    }

    this.setState({
      id: item,
    });
  }

  render() {
    const [car_1, car_2, car_3] = this.props.cars;
    const { id, paramLocation, paramExtra, paramModel } = this.state;

    return (
      <section className={classnames("order", { disabled: this.props.burger })}>
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
            {this.props.statusId ? (
              <div className="link__content__title">{this.props.statusId}</div>
            ) : (
              <>
                <div
                  onClick={(e) => this.nextWrapper(0)}
                  className={classnames("link__content__text", {
                    active: id === 0,
                    ready: paramLocation,
                  })}>
                  Местоположение
                </div>
                <span />
                <div
                  onClick={(e) => paramLocation && this.nextWrapper(1)}
                  className={classnames("link__content__text", {
                    active: id === 1,
                    ready: paramModel,
                  })}>
                  Модель
                </div>
                <span />
                <div
                  onClick={(e) => paramModel && this.nextWrapper(2)}
                  className={classnames("link__content__text", {
                    active: id === 2,
                    ready: paramExtra,
                  })}>
                  Дополнительно
                </div>
                <span />
                <div
                  onClick={(e) => paramExtra && this.nextWrapper(3)}
                  className={classnames("link__content__text", {
                    active: id === 3,
                    ready: paramExtra,
                  })}>
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
            <ModelBlock
              id={id}
              cars={this.state.cars}
              changeProps={this.changeProps}
            />
            <ExtraBlock
              id={id}
              listRate={this.state.rate}
              changeProps={this.changeProps}
            />

            <TotalBlock
              id={id}
              paramOrder={this.props.paramOrder}
              cars={this.state.cars}
              loader={this.props.loader}
            />
            <CostBlock
              id={id}
              nextWrapper={this.nextWrapper}
              state={this.state}
              paramOrder={this.props.paramOrder}
              postData={this.postData}
              setStatusId={this.setStatusId}
            />
          </div>
        </section>
      </section>
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
    dateCount: state.ext.dateCount,
    dateStart: state.ext.dateStart,
    dateFinish: state.ext.dateFinish,
    orderStatusId: state.ext.orderStatusId,
  };
};

export default connect(mapStateToProps)(Order);
