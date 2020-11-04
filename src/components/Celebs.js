/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Myntra from "../img/company logos/Myntra.png"
import Galleri from "../img/company logos/galleri5.png"
import Flipkart from "../img/company logos/Flipkart.png"
import Amar from "../img/celeb logos/Amaram.png"
import Aashna from "../img/celeb logos/Aashna.png"
import Vikas from "../img/celeb logos/Vikas.png"
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const Celebs = () => {
    return (
        <div className="celebBox">
            <p className="celebNote">What People Say About Us</p>
            <hr className="newLine"/>
            <div className="celebFlex">
                <div className="box">
                    <img className="companyLogo" src={Myntra} alt=""/>
                    <img className="celebLogo" src={Amar} alt=""/>
                    <div className="celebDetails">
                        <p className="celebName">Amar Nagaram</p>
                        <p className="celebDesign">Myntra CEO</p>
                        <p className="celebThoughts">We connect people active on social media - Influencers with big brands to create a win-win scenario for both.AI enabled tech platform that enables brands to integrate common people with huge fan followings on different social media channels - as a commerce channel to power both offline and online sales - all within no time!</p>
                    </div>
                    
                </div>
                <div className="box">
                    <img className="companyLogo" src={Galleri} alt=""/>
                    <img className="celebLogo" src={Aashna} alt=""/>
                    <div className="celebDetails">
                        <p className="celebName">Aashna Shroff</p>
                        <p className="celebDesign">Celeb Influencer, Galleri5</p>
                        <p className="celebThoughts">We connect people active on social media - Influencers with big brands to create a win-win scenario for both.AI enabled tech platform that enables brands to integrate common people with huge fan followings on different social media channels - as a commerce channel to power both offline and online sales - all within no time!</p>
                    </div>
                    
                </div>
                <div className="box">
                    <img className="companyLogo" src={Flipkart} alt=""/>
                    <img className="celebLogo" src={Vikas} alt=""/>
                    <div className="celebDetails">
                        <p className="celebName">Vikas Gupta</p>
                        <p className="celebDesign">Flipkart, CEO</p>
                        <p className="celebThoughts">We connect people active on social media - Influencers with big brands to create a win-win scenario for both.AI enabled tech platform that enables brands to integrate common people with huge fan followings on different social media channels - as a commerce channel to power both offline and online sales - all within no time!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Celebs