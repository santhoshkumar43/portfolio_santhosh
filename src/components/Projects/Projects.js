import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import chatbot from "../../images/chatbot.png"
import letsBlog from "../../images/blog.png"
import weather from "../../images/weather.png"
import laptopprice from "../../images/laptopprice.png";
import pro2 from "../../images/pro2.png"


export default function Projects() {
    const projectData = [
        {
            image:chatbot,
            title: "Buddy - Chat Bot",
            link: "https://i-am-buddy.netlify.app/",
        },{
            image:letsBlog,
            title: "Lets Blog",
            link: "https://letsblogai.netlify.app/",
        },
        {
            image:weather ,
            title: "Weather App",
            link: "https://santhosh-weather-app.netlify.app/",
        },
        {
            image:pro2 ,
            title: "Calculater",
            link: "https://santhosh-weather-app.netlify.app/",
        },
        {
            image:laptopprice ,
            title: "Laptop Price Predication - ML",
            link: "https://github.com/santhoshkumar43/laptops-prices-specs-analysis",
        }
    
    ];

    return (

        <div id="Projects" className="Projects_back">
            <h1 className="projects_title">Projects</h1>
            <div className="projects_box_container">
                {projectData.map((value, index) => (
                    <ProjectBox
                        title={value.title}
                        image={value.image}
                        sentences={value.sentences}
                        link={value.link}
                    />
                ))}
            </div>

        </div>

    )
}
