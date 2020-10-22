import React from "react";
import {Link} from "react-router-dom";

export default class GradeDisplayComponent extends React.Component {
  state = {
    optn: this.props.option
  }

  render() {
    console.log(this.state.optn)
    return(
      <tr>
      <td>{this.state.optn.name}</td>
      <td>{this.state.optn.percent}</td>
      </tr>
    )
  }
}
