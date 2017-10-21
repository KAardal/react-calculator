import React, { Component } from "react";
import Key from "./../Key";

class Row extends Component {
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
