import React from "react";
import {Link} from "react-router-dom";
import GradeBreakdowns from "./GradeBreakdowns";

export default class GradeComponent extends React.Component {

  state = {
    breakdowns: this.props.location.breakdown,
    grades_per_subgroup: {},
    current_grade: {
      category: "",
      grade: ""
    }
  }

  handleChange(event) {
    return event.target.value
  }

  addComp() {
    console.log("Ayy")
    const curr_grade = this.state.current_grade

    if (isNaN(curr_grade.grade)) {
      alert("Grade must be a number")
    } else {
      if(curr_grade.category in this.state.grades_per_subgroup) {
         console.log("HERE")
         console.log(this.state.grades_per_subgroup[curr_grade.category])
         const newArray = this.state.grades_per_subgroup[curr_grade.category].concat([curr_grade.grade])

         console.log(newArray)

         var updatedDict = this.state.grades_per_subgroup
         updatedDict[curr_grade.category] = newArray
         this.setState({ grades_per_subgroup: updatedDict})

         console.log(this.state.grades_per_subgroup)
      } else {
        var newInput = Object.assign({}, this.state.grades_per_subgroup, {[curr_grade.category]: [curr_grade.grade]})
        this.setState({ grades_per_subgroup: newInput})
      }
    }
  }

  allOptionsGood() {
    console.log(this.state)
    let count = 0;
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

      <input type="text" placeholder="e.g. Assignments" title="Name of subgroup of grades"
        value={this.state.current_grade.category}
        onChange={(e) => this.setState({current_grade: {grade: this.state.current_grade.grade, category: this.handleChange(e)}})}/>
      <input type="text" pattern="[0-9]*" title="How much it is worth"
        value={this.state.current_grade.grade}
        onChange={(e) => this.setState({current_grade: {category: this.state.current_grade.category, grade: this.handleChange(e)}})}/>
      <button className="btn" onClick={() => this.addComp()}>Add This</button>
      <Link to={{pathname: '/results', breakdown: this.state.breakdown, subgroups: this.state.grades_per_subgroup }}><button type="button" onClick={() => this.allOptionsGood()}>Enter specifics</button></Link>
      </div>
    )
  }
}
