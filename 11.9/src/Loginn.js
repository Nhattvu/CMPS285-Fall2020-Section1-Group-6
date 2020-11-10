import React, { Component } from "react";
import './Login.css'; 
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {

    state = {
        email: '',
        password:'',


    }
    handleChange = (e) =>{
        this.setState({
            [e.target.type]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="back">
            <Form onSubmit={this.handleSubmit} id="login" className="Login">
                <h1 className="cool">
                    <span>Ayanna's Lashes</span>
                </h1>
                <FormGroup>
                    <input type="email" placeholder="Email" onChange={this.handleChange} className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password" onChange={this.handleChange} className = "textboxes"/>
                </FormGroup>
                <button className="LoginButton">
                    Log in
                    </button>
                    <a href="signup" className = "SignUp">Sign up</a>
            </Form>
            </div>
        )
    }
}

export default Login; 