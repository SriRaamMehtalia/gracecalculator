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

    if (isNaN(compOptn.percent)) {
      alert("Percent must be a number")
    } else {
    this.setState((prevState) => {
      return {
        options: [
          ...prevState.options,
          compOptn
        ]
      }
    })
  }
  console.log(this.state.options)
  }

  allOptionsGood() {
    let count = 0;
    for(let i = 0; i < this.state.options.length; i++) {
      count += parseInt(this.state.options[i].percent)
    }
    if (count != 100) {
      alert("Percentages should add up to 100!");
      window.location.reload(false);
    }
  }

  render() {

    if (1 == 2) {

    }
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
      <Link to={{pathname: '/grades', breakdown: this.state.options}}><button type="button" onClick={() => this.allOptionsGood()}>Enter specifics</button></Link>

      </div>
    )
  }
}
