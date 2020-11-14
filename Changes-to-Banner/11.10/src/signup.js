import React, { Component } from "react";
import './signup.css'; 
import {Link} from 'react-router-dom';

import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class signup extends Component {
    render() {
        return (
            <div className="back">
            <Form className="Login">
                <h1 className="cool">
                    <span>Ayanna's Lashes</span>
                </h1>
                <FormGroup>
                    <input type="Name" placeholder="Full Name" className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="PhoneNumber" placeholder="Phone number" className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="email" placeholder="Email" className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password" className = "textboxes"/>
                </FormGroup>
                <button className="LoginButton">
                    Create User
                    </button>
                
            </Form>
            </div>
        )
    }
}

export default signup; 