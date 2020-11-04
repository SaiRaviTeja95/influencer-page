import React from "react"
import Rectangle from "../img/logo/Rectangle 250.png"
import Group from "../img/logo/Group 1163.png"

const Check = () => {
    return (
        <div>
            <div className="things">
                <p><i className="arrow down"></i></p>
                <p className="check">Check out the things you can do at galleri5!</p>
                <img className="Rectangle" src={Rectangle} alt="" />
                <img className="Group" src={Group} alt="" />
                <p className="data">With galleri5, you can do EVERYTHING that you can think of, in the world of influencers!</p>
                <button><p>CONTACT US</p></button>
                <p className="demo">for a detailed demo</p>
            </div>
            <p className="posts">17,242 posts and counting</p>
            <p className="hashtag">#galleri5influencestar</p>
        </div>
        
    )
}

export default Check