import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent"
import ResultComponent from "./ResultComponent"

class GradeCalculator extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <h1> Grade Calculator</h1>

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
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
