import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Heading() {
  return (
    <div>
      <div id= "banner">
         <img src={require("./images/banner.png")}/>
       </div>
       <div id= "menu">
         <ul> 
            <Link to='/'>
            <li><a>Home</a></li>
            </Link>
            <Link to='/appointment'>
            <li><a>Appointmnets</a></li>
            </Link>
            <Link to='/login'>
            <li><a>Login</a></li>
            </Link>
        </ul>
       </div>
       </div>
  );
}

export default Heading;
