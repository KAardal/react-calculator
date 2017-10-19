import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

class Main extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
