/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Path from "../img/description/Path 665.png"
import Register from "../img/description/register.png"
import Campaign from "../img/description/campaign.png"
import Support from "../img/description/money.png"

const Management = () => {
    return (
        <div>
            <div className="block">
                <div>
                    <img src={Path} alt=""/>
                    <img className="regisLogo" src={Register} alt=""/>
                    <p className="subscribe">Register</p>
                    <p className="detail">Let us know your basic details and genres that you are interested in. And then you're good to go. You can link and access all your social media accounts at our platform.</p>
                </div>
                <div>
                    <img src={Path} alt=""/>
                    <img className="regisLogo" src={Campaign} alt=""/>
                    <p className="subscribe">Apply for campaigns</p>
                    <p className="detail">Apply for the latest campaigns from your favourite brands and start creating some amazing content on approval of your application from the brand.</p>
                </div>
                <div>
                    <img src={Path} alt=""/>
                    <img className="regisLogo" src={Support} alt=""/>
                    <p className="subscribe">Analyze & Grow</p>
                    <p className="detail">You can analyze your performance  for each campaign! And learn to work on your shortcomings. You can also register with influencer academy to  grow into a top creator!</p>
                </div>
            </div>
            <p className="contact"><a href="">Contact Us</a> for more details on the entire range of services that we offer! </p>
        </div>
        
    )
}

export default Management