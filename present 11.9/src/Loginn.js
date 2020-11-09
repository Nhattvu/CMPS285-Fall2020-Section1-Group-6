import React, { Component } from "react";
import './Login.css'; 


import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <div className="back">
            <Form className="Login">
                <h1 className="cool">
                    <span>Ayanna's Lashes</span>
                </h1>
                <FormGroup>
                    <input type="email" placeholder="Email" className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password" className = "textboxes"/>
                </FormGroup>
                <button className="LoginButton">
                    Log in
                    </button>
            </Form>
            </div>
        )
    }
}

export default Login; 