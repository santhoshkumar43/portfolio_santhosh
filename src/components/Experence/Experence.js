import React from "react";
import "./Experence.css";
import brands from "../../images/brands.png"
import css from "../../images/css.png"
import html from "../../images/html.png"
import js from "../../images/js.png";
import ExperienceCard from "./ExperenceCard/ExperienceCard.js";


export default function Experence() {
    const statements = [
        "1. I have worked as a intern in oye busy technoloies for 6 months",
        "2. It was a great experence for me to work as a front end developer. ",
        "3. I was firstly taught that how to work with team using gitlab . how to push your code to branches and make merge requests. ",
        "4. I was mainly working with vue js and nuxt js to build web applications and SEO . ",
        "5. I felt so great to work with them and i have learned a lot of new things.",
    ];

    const iconImages = [js, html, brands, css];

    return (
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_cards_container">
                <ExperienceCard 
                    companyName="Oyebusy Technolies Pvt Ltd"
                    designation="Front-end Web Developer Intern"
                    statements={statements}
                    iconImages={iconImages}
                />
                
            </div>
        </div>
    );
}