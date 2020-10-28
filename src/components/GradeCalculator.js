import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent"
import ResultComponent from "./ResultComponent"
import GradeComponent from "./GradeComponent"

class GradeCalculator extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <h1> Grade Calculator</h1>

          <Route
            path='/gracecalculator'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/gracecalculator/grades'
            exact={true}
            component={GradeComponent}
          />

          <Route
            path='/results'
            exact={true}
            component={ResultComponent}/>

          </div>
        </Router>
    )
  }
}

export default GradeCalculator
