import React from "react";
import {Link} from "react-router-dom";

export default class GradeBreakdowns extends React.Component {

  state = {
    breakdown: this.props.breakdown
  }

  render() {
    return(
        <li>{this.state.breakdown.name} is worth {this.state.breakdown.percent} percent</li>
    )
  }
}
