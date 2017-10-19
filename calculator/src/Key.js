import React, { Component } from "react";
import { connect } from "react-redux";
import { concat } from "./action/key-actions.js";
import RaisedButton from "material-ui/RaisedButton";

class Key extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  //concat()

  //evaluate()

  //clear()

  handleClick(e) {
    this.props.concatKey(e.target.label);
  }

  render() {
    return <RaisedButton label={this.props.label} onClick={this.handleClick} />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  concatKey: key => dispatch(concat(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Key);
