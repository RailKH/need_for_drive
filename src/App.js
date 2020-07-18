import React from "react";
import Navigation from "./components/navigation/navigation";
import Content from "./components/content/content";
import Menu from "./components/menu/menu";
import Slider from "./components/slider/slider";
import Order from "./components/order";
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
  // смена state burger, открытие/закрытие меню
  openMenu() {
    this.setState((state) => ({
      burger: !state.burger,
    }));
  }
  render() {
    return (
      <div className="main">
        <Navigation openMenu={this.openMenu} burger={this.state.burger} />
        {/* <Content burger={this.state.burger} /> */}
        <Menu burger={this.state.burger} />
        {/* <Slider burger={this.state.burger} /> */}
        <Order burger={this.state.burger} cars={cars} />
        {/* <Verification /> */}
      </div>
    );
  }
}

export default App;
