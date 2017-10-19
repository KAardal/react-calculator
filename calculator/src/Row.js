import React, { Component } from "react";
import Key from "./Key.js";

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Key label={this.props.labels[0]} />
        <Key label={this.props.labels[1]} />
        <Key label={this.props.labels[2]} />
        <Key label={this.props.labels[3]} />
      </div>
    );
  }
}

export default Row;
