import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";

class Key extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RaisedButton label={this.props.label} />;
  }
}

export default Key;
