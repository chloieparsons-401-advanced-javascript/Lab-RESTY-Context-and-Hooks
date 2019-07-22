import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RestyProvider from "./context/restyContext";

import App from "./app.js";

/**
 * Main Class component
 * @description Main Class renders the app and attaches it to the DOM
 */
class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RestyProvider>
          <App />
        </RestyProvider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
