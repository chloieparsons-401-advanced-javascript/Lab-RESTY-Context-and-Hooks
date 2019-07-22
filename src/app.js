import "./style/reset.css";
import "./style/style.css";

import React from "react";

import Header from "./components/header/";
import Footer from "./components/footer/";
import RESTy from "./components/resty";

/**
 * App Class component
 * @description App class collects all the components for the application
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <RESTy />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
