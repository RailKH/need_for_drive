import React from "react";
import Navigation from "./components/navigation";
import Content from "./components/content";
import Menu from "./components/menu";
import Slider from "./components/slider";
import Order from "./components/order";

import "./style/main.css";

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
      <div className="main">
        <Navigation openMenu={this.openMenu} burger={this.state.burger} />
        <Content burger={this.state.burger} />
        <Menu burger={this.state.burger} />
        <Slider burger={this.state.burger} />
        {/* <Order /> */}
      </div>
    );
  }
}

export default App;
