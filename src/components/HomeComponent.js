import React from "react";
import {Link} from "react-router-dom";
import GradeDisplayComponent from "./GradeDisplayComponent";

export default class HomeComponent extends React.Component {

  state = {
    options: [],
    compinfo: {
      name: "",
      percent: ""
    }
  }

  handleChange(event) {
    return event.target.value
  }

  addComp() {
    console.log("Ayy")
    const compOptn = this.state.compinfo
    this.setState((prevState) => {
      return {
        options: [
          ...prevState.options,
          compOptn
        ]
      }
    })
    console.log(this.state.options)
  }

  render() {
    return(
      <div className="container">
      <h2> Please input your grade breakdown here </h2>
      <table>
        <thead>
          <tr>
            <th> Grade Options </th>
            <th> Percent of grade </th>
          </tr>
        </thead>
        <tbody>
        {

        this.state.options.map(optn =>
        <GradeDisplayComponent
          option={optn}/>)
        }
        </tbody>
      </table>
      <input type="text" placeholder="e.g. Assignments" title="Name of subgroup of grades"
        value={this.state.compinfo.name}
        onChange={(e) => this.setState({compinfo: {percent: this.state.compinfo.percent, name: this.handleChange(e)}})}/>
      <input type="text" pattern="[0-9]*" title="How much it is worth"
        value={this.state.compinfo.percent}
        onChange={(e) => this.setState({compinfo: {name: this.state.compinfo.name, percent: this.handleChange(e)}})}/>
      <button className="btn" onClick={() => this.addComp()}>Add This</button>
      <button className="btn">Enter assignment and test grades</button>

      </div>
    )
  }
}
