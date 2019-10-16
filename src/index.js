import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import "./index.css";

// Import story
import store from "./redux/store";

// Import AppRoute
import AppRoute from "./route";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
