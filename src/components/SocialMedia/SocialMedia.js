import React from "react";
import "./SocialMedia.css";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";



export default function SocialMedia(){
    return(
        <div className="socialmedia_container">
            <h1>Social Media</h1>
            <div className="socialmedia_container_icons">
            <a href="https://www.instagram.com/p_santhosh_kumar_/">
                <img src={instagram}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100021659569775">
                <img src={facebook}/>
            </a>
            <a href="https://github.com/santhoshkumar43">
                <img src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/santhosh-kumar-pitta-452986201/">
                <img src={linkedin}/>
            </a>
            <a href="https://twitter.com/santhos30910659">
                <img src={twitter}/>
            </a>
            </div>

        </div>
    )
}