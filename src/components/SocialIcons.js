/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Google from "../img/social icons/Google.png"
import Instagram from "../img/social icons/Instagram.png"
import Facebook from "../img/social icons/Facebook.png"
import Twitter from "../img/social icons/Twitter.png"

const SocialIcons = () => {
    return (
        <div className="socialIcons">
            <a className="links" href="https://www.google.com"><img src={Google} alt=""/></a>
            <a className="links" href="https://www.instagram.com"><img src={Instagram} alt=""/></a>
            <a className="links" href="https://www.facebook.com"><img src={Facebook} alt=""/></a>
            <a className="links" href="https://www.twitter.com"><img src={Twitter} alt=""/></a>
        </div>
    )
}

export default SocialIcons
