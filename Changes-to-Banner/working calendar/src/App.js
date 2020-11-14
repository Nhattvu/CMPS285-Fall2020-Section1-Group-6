import React,{useState, useContext} from 'react';
import './index.css';
import Heading from "./heading";
import Home from "./Home";
import Appointment from "./Appointment";
import Contacts from "./Contacts";
import Login from "./Loginn";
import Admin from "./Admin";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginInfo} from "./LoginContext";
import Signup from './signup';


function App() {


   
   
  


  return (
     <Router>
    <div className="App">
      <LoginInfo>
      <Heading/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/appointment"component={Appointment}/>
      <Route path="/login"component={Login}/>
      <Route path="/admin"component={Admin}/>
      <Route path = "/signup" component = {Signup}/>
      </Switch>
      <Contacts />
      </LoginInfo>
      </div>
       </Router>
  );
}

export default App;
