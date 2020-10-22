import React from "react";
import {Link} from "react-router-dom";
import GradeBreakdowns from "./GradeBreakdowns";

export default class GradeComponent extends React.Component {

  state = {
    breakdowns: this.props.location.breakdown,
    genlist: []
  }


  render() {
    console.log(this.props.location.breakdown)
    return(
      <div className="container">
      <h2> Please input grades for each category </h2>

      <ul>
        {

        this.state.breakdowns.map(optn =>
        <GradeBreakdowns
          breakdown={optn}/>)
        }
      </ul>
      </div>
    )
  }
}
