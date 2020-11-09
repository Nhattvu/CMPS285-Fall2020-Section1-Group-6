import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Contacts() {
  return (
    <div className = "footer">  
      <a href="https://twitter.com/" className = "contacts">Twitter</a>
      <a href="https://www.instagram.com/" className = "contacts">Instagram</a>
      <a href="https://mail.google.com/" className = "contacts">Gmail</a>
    </div>
  );
}

export default Contacts;
