import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import "./App.css";
import Row from "./Row.js";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="display">
            <TextField id="text-field-disabled" defaultValue="0" />
          </div>
          <Row labels={[7, 8, 9, "%"]} />
          <Row labels={[4, 5, 6, "X"]} />
          <Row labels={[1, 2, 3, "-"]} />
          <Row labels={[".", 0, "=", "+"]} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
