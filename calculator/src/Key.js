import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";

class Key extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return;
  }

  render() {
    return <RaisedButton label={this.props.label} onClick={this.handleClick} />;
  }
}

export default Key;
