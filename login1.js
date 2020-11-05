import React from "react";
import loginImg from "../../login.svg";

export class login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            "div",
            { className: "base.container" },
            React.createElement(
                "div",
                { className: "header" },
                "Login"
            ),
            React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "div",
                    { className: "image" },
                    React.createElement("img", { src: loginImg })
                ),
                React.createElement(
                    "div",
                    { className: "form" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "username" },
                            "Username"
                        ),
                        React.createElement("input", { type: "text", name: "username", placeholder: "username" })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Password"
                        ),
                        React.createElement("input", { type: "password", name: "password", placeholder: "password" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "footer" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn" },
                    "Login"
                )
            )
        );
    }
}

