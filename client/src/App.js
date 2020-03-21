import React from 'react';
import './style.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Switch } from "react-router-dom";
import Home from './Home.js';
import Bisection from './Root_Of_Equations/Bisection';
import FalsePosition from './Root_Of_Equations/FalsePosition';
import NewtonRaphson from './Root_Of_Equations/NewtonRaphson';
import OnePoint from './Root_Of_Equations/OnePoint';
import Secant from './Root_Of_Equations/Secant';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Bisection" component={Bisection}/>
          <Route exact path="/FalsePosition" component={FalsePosition}/>
          <Route exact path="/NewtonRaphson" component={NewtonRaphson}/>
          <Route exact path="/OnePoint" component={OnePoint}/>
          <Route exact path="/Secant" component={Secant}/>
        </Switch>
      </React.Fragment>
    </div>
  )
}

export default App;
