/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import BrandLogo from "../img/influencerlogo/Brand-Page-Banner-graphics.png"
import Form from "./Form"
import Counting from "./Counting"

const Section = () => {
    return (
        <div>
            <div className="flex">
                <div>
                    <img className="InfluencerLogo" src={BrandLogo} alt=""/>
                    <Counting />
                </div>
                <div>
                    <h1 className="signIn">Sign into explore New CAMPAIGNS!</h1>
                    <Form />
                </div>
            </div>
            <p className="register">If you want to register or talk to us, drop us an email at <a href="">bd@galleri5.com</a></p>
        </div>
        
    )
}

export default Section