/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

import "./index.scss";

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app-contaier">
        <SideBar />
        <div className="content">
          <TopBar />
          <div className="main-body">
            {React.Children.toArray(children)} <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
