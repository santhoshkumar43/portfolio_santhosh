import React from "react";
import "./Experence.css";
import brands from "../../images/brands.png"
import css from "../../images/css.png"
import html from "../../images/html.png"
import js from "../../images/js.png";
import python from "../../images/python.png";
import ExperienceCard from "./ExperenceCard/ExperienceCard.js";


export default function Experence() {
    const statement1 = `• Conducted testing for HR/IT chatbots to enhance overall performance for various clients. 
    • Gained expertise in multiple modules, including Knowledge Management, Case Management, Workflows,
    Engage Surveys, and Onboarding/Offboarding processes.
    • Collaborated closely with developers, actively participating in development activities such as bot setup and
    workflow configuration.
    • Utilized tech stacks like Python for automating manual tasks and JavaScript for building workflows.
    • Worked with APIs for both testing and integration into workflows.
    • Engaged in testing autonomous agents, analyzing their behavior, and contributing to performance
    improvements.`
    const statement2 = `• Contributed to the Hascodec Project, focusing on enhancing the user interface (UI) and overall user experience
    • Utilized HTML, CSS, JavaScript, and the Vue.js framework as the primary tech stack for development.
    • Gained hands-on experience with GitLab for version control and collaborative development.
    • Created a test case generation tool that creates random XML docs from XML Schema
    • Played a key role in improving the project’s UI, ensuring a modern and responsive design`
console.log(statement1)
    const iconImages = [js, html, brands, css];
    const iconImage2 =[python, js]

    return (
        <div id="Experence" className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_cards_container">
                <ExperienceCard 
                    companyName="Leena AI"
                    designation="Software Engineer - QA"
                    statements={statement1}
                    iconImages={iconImage2}
                />
                <ExperienceCard 
                    companyName="Oyebusy Technolies Pvt Ltd"
                    designation="Front-end Web Developer Intern"
                    statements={statement2}
                    iconImages={iconImages}
                />
                
            </div>
        </div>
    );
}
