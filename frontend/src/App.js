import React, { Component, Fragment } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Pages from "./components/Pages";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Pages />
      </Fragment>
    );
  }
}

export default App;