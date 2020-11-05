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


function App() {


   
   
  
   const [counter, setCounter] = useState(0)


   const increase = () => {
      setCounter((prev) => prev + 1);
   }




  return (
     <Router>
    <div className="App">
      <Heading />
      <h1>{counter}</h1>
      <button onClick={increase}>Click</button>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/appointment"component={Appointment}/>
      <Route path="/login"component={Login}/>
      <Route path="/admin"component={Admin}/>
      </Switch>
      <Contacts />
      </div>
       </Router>
  );
}

export default App;
