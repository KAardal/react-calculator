import React, { Component } from "react";
import { connect } from "react-redux";
import {
  concat,
  evaluate,
  clear,
  backspace
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
    if (e.target.textContent === "=") return this.props.evaluate();
    if (e.target.textContent === "CL") return this.props.clear();
    if (e.target.textContent === "<=") return this.props.backspace();
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
  concatKey: key => dispatch(concat(key)),
  evaluate: () => dispatch(evaluate()),
  clear: () => dispatch(clear()),
  backspace: () => dispatch(backspace())
});

export default connect(mapStateToProps, mapDispatchToProps)(Key);
