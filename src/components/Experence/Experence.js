import React from "react";
import "./Experence.css";
import brands from "../../images/brands.png"
import css from "../../images/css.png"
import html from "../../images/html.png"
import js from "../../images/js.png";
import ExperienceCard from "./ExperenceCard/ExperienceCard.js";


export default function Experence() {
    const statements = [
        "1. For six months, I was an intern at a busy technology company.",
        "2. Being a front end developer was an excellent experience for me.",
       " 3. My first lesson involved using gitlab to collaborate with a team. a guide to merging requests and pushing code to branches.",
        "4. My primary tools for creating web applications and SEO were vue js and nuxt js.",
        "5. Working with them made me feel wonderful, and I learned many new things.",
    ];

    const iconImages = [js, html, brands, css];

    return (
        <div id="Experence" className="experience_container">
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