import React, { Component } from "react";
import Navbar from "./layout/mainnavbar/navbar";
import Maincard from "./layout/index_maincard/indexmaincard";
import Subcard from "./layout/index_subcard/card";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar />
          <Maincard />
          <div className="row mb-2">
            <div className="col-md-6">
              <Subcard />
            </div>
            <div className="col-md-6">
              <Subcard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
