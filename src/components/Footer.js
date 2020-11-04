/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Galleri5 from "../img/logo/Group 52.png"
import Facebook from "../img/footer logos/facebook.png"
import Instagram from "../img/footer logos/instagram.png"
import Twitter from "../img/footer logos/twitter.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerFlex">
                <div>
                    <img className="footerGalleri" src={Galleri5} alt=""/>
                    <div className="footerGrid">
                        <div>
                            <p><a href="">ABOUT US</a></p>
                            <p><a href="">PRICING</a></p>
                            <p><a href="">FAQ</a></p>
                        </div>
                        <div>
                            <p><a href="">CONTACT US</a></p>
                            <p><a href="">PRIVACY POLICY</a></p>
                            <p><a href="">TERMS OF SERVICE</a></p>
                        </div>
                        <div>
                            <p><a href="">CASE STUDEIS</a></p>
                            <p><a href="">TESTIMONALS</a></p>
                            <p><a href="">BLOG</a></p>
                        </div>
                    </div>
                </div>
                <div className="footerData">
                    <p className="footerExplore">Explore Us</p>
                    <button className="footerButton"><p className="footerEnd">I'M INFLUENCER</p></button><br/>
                    <button className="footerButton"><p className="footerEnd">I REPRESENT A BRAND</p></button>
                </div>
            </div>
            <div className="footerLogo">
                <a href="https://www.facebook.com"><img src={Facebook} alt=""/></a>
                <a href="https://www.instagram.com"><img src={Instagram} alt=""/></a>
                <a href="https://www.twitter.com"><img src={Twitter} alt=""/></a>
            </div>
            <button className="viewMore"><p>VIEW MORE</p></button>
        </div>
    )
}

export default Footer