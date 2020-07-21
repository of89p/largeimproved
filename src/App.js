import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./component/homepage";
import "./component/css/style.css";
import "./component/css/blog.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Homepage />
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;
