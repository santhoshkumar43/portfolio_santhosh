import React from "react";
import "./Experence.css";
import brands from "../../images/brands.png"
import css from "../../images/css.png"
import html from "../../images/html.png"
import js from "../../images/js.png";
import python from "../../images/python.png";
import ExperienceCard from "./ExperenceCard/ExperienceCard.js";


export default function Experence() {
    const statements = [
        "1. For six months, I was an intern at a busy technology company.",
        "2. Being a front end developer was an excellent experience for me.",
       " 3. My first lesson involved using gitlab to collaborate with a team. a guide to merging requests and pushing code to branches.",
        "4. My primary tools for creating web applications and SEO were vue js and nuxt js.",
        "5. Working with them made me feel wonderful, and I learned many new things.",
    ];
    const statement2 = [
        "1. Perform end-to-end testing for chatbot solutions to ensure seamless functionality.",
        "2. Test and validate multiple modules, including Knowledge Management (KM), Conversation Management (CM), Engage Surveys, and Workflows.",
       " 3. Collaborate with developers to identify and resolve issues, improving user experience.",
        "4. Participate in configuring workflows to meet business requirements and optimize efficiency.",
        "5. Automate manual processes using Python to enhance operational efficiency.",
    ];

    const iconImages = [js, html, brands, css];
    const iconImage2 =[python, js]

    return (
        <div id="Experence" className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_cards_container">
                <ExperienceCard 
                    companyName="Leena AI"
                    designation="ChatBot QA"
                    statements={statement2}
                    iconImages={iconImage2}
                />
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
