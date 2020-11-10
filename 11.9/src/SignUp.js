import React, { Component, useRef } from "react";
import './Login.css'; 
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { AuthProvider } from "./context/AuthContext"



function SignUp(){
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

        return (
            
     <AuthProvider>
            <div className="back">
            <Form id="signup" className="Login">
                <h1 className="cool">
                    <span>Ayanna's Lashes</span>
                </h1>
                <FormGroup>
                    <input type="firstName" placeholder="First Name"  ref={firstNameRef} className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="lastName" placeholder="Last Name"  ref={lastNameRef} className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="email" placeholder="Email"  ref={emailRef} className = "textboxes"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password" ref={passwordRef} className = "textboxes"/>
                </FormGroup>
                <button className="LoginButton">
                    Sign Up
                    </button>
            </Form>
            </div>
            </AuthProvider>
        )
    }


export default SignUp; 