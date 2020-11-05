import React, { Component } from "react";
import './Login.css'; 


import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Form className="Login">
                <h1>
                    <span className="font-weight-bold">Ayanna's Lashes</span>
                </h1>
                <FormGroup>
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </FormGroup>
                <button className="btn-lg btn-dark btn-block">
                    Log in
                    </button>
                <div className="text-center">
                    <a href="sign-up">Sign up</a>
                    <span className="p-2">|</span>
                    <a href="forgot-password">Forgot password</a>
                </div>
            </Form>
        )
    }
}

export default Login; 