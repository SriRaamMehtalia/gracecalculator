import React from "react";
import {Link} from "react-router-dom";

export default class HomeComponent extends React.Component {
  state = {
    breakdown: this.props.location.breakdown,
    grades_per_subgroup: this.props.location.subgroups
  }
  render() {

    console.log(this.state.breakdown)
    console.log(this.state.grades_per_subgroup)
    return(
      <div className="container">
        <h2> Here are the results </h2>
      </div>
    )
  }
}
