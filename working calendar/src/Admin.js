import React,{useState, useContext} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import RequestHistory from "./RequestHistory";



function Admin() {
  return (
    <div id="adminback">
      <RequestHistory />
       </div>
  );
}

export default Admin;
