import React, { Component } from "react";
import './Login.css'; 
import {Link} from 'react-router-dom';

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
                <div className="text-center">
                    <Link to='/signup'>
                    <a href="sign-up" className = "SignUp">Sign up</a>
                    </Link>
                    
                    <a href="forgot-password" className = "ForgotPass">Forgot password</a>
                </div>
            </Form>
            </div>
        )
    }
}

export default Login; 