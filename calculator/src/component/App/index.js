import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Row from "./../Row";

const muiTheme = getMuiTheme({});

const paperStyles = {
  backgroundColor: "#9e9e9e",
  height: "48%",
  width: "25%",
  margin: "5em",
  padding: "1em",
  borderRadius: "10px"
};

const textFieldStyles = {
  width: "24em",
  margin: "1em",
  backgroundColor: "#e0e0e0",
  borderRadius: "5px"
};

const inputStyles = {
  textAlign: "right"
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper style={paperStyles} zDepth={5}>
          <div className="App">
            <div className="display">
              <TextField
                id="text-field-disabled"
                value={this.props.values ? this.props.values : "0"}
                inputStyle={inputStyles}
                style={textFieldStyles}
              />
            </div>
            <Row labels={["CL", "sqr", "^2", "-/+"]} />
            <Row labels={["<=", "(", ")", "%"]} />
            <Row labels={["7", "8", "9", "/"]} />
            <Row labels={["4", "5", "6", "*"]} />
            <Row labels={["1", "2", "3", "-"]} />
            <Row labels={["=", "0", ".", "+"]} />
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export const mapStateToProps = state => ({
  values: state.keyValues
});

export const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
