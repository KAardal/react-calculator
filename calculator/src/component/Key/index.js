import React, { Component } from "react";
import { connect } from "react-redux";
import {
  clear,
  concat,
  square,
  percent,
  evaluate,
  negative,
  backspace,
  squareRoot
} from "./../../action/key-actions.js";
import RaisedButton from "material-ui/RaisedButton";

const buttonStyles = {
  margin: ".4em",
  borderRadius: "10em"
};

class Key extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.textContent === "CL") return this.props.clear();
    if (e.target.textContent === "^2") return this.props.square();
    if (e.target.textContent === "%") return this.props.percent();
    if (e.target.textContent === "<=") return this.props.backspace();
    if (e.target.textContent === "-/+") return this.props.negative();
    if (e.target.textContent === "sqr") return this.props.squareRoot();
    if (e.target.textContent === "=") return this.props.evaluate();
    this.props.concatKey(e.target.textContent);
  }

  render() {
    return (
      <RaisedButton
        label={this.props.label}
        backgroundColor={"#f5f5f5"}
        primary={this.props.label === "=" ? true : false}
        secondary={this.props.label === "CL" ? true : false}
        onClick={this.handleClick}
        style={buttonStyles}
      />
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clear()),
  square: () => dispatch(square()),
  percent: () => dispatch(percent()),
  evaluate: () => dispatch(evaluate()),
  negative: () => dispatch(negative()),
  backspace: () => dispatch(backspace()),
  concatKey: key => dispatch(concat(key)),
  squareRoot: () => dispatch(squareRoot())
});

export default connect(mapStateToProps, mapDispatchToProps)(Key);
