/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import SocialIcons from "./SocialIcons"

const Form = () => {
    return (
        <div className="form">
            <p className="brandSign">Brand Sign-In</p>
            <div className="formData">
                <div>
                    <label className="label" htmlFor="email">Email ID</label>
                    <br/>
                    <br/>
                    <input type="text" name="email" className="input" placeholder="Enter your email address"/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div>
                    <label className="label" htmlFor="pwd">Password</label>
                    <br/>
                    <br/>
                    <input type="text" name="pwd" className="input" placeholder="Enter your password"/>
                    <br/>
                    <br/>
                </div>
            </div>
            <button className="signBtn">
                <a href="">SIGN UP/ IN</a>
            </button>
            <p className="OR">OR</p>
            <p className="SMC">Sign Up/ In with Social Media Account</p>
            <SocialIcons />
        </div>
    )
}

export default Form