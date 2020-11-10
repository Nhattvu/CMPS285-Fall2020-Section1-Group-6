import React,{useState, useContext} from 'react';
import './index.css';
import Heading from "./heading";
import Home from "./Home";
import Appointment from "./Appointment";
import Contacts from "./Contacts";
import Login from "./Loginn";
import SignUp from "./SignUp";
import Admin from "./Admin";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {


  return (
     <Router>
    <div className="App">
      <Heading />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/appointment"component={Appointment}/>
      <Route path="/login"component={Login}/>
      <Route path="/signup"component={SignUp}/>
      <Route path="/admin"component={Admin}/>
      </Switch>
      <Contacts />
      </div>
       </Router>
  );
}

export default App;
