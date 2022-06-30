import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import pro1 from "../../images/pro1.png";
import pro2 from "../../images/pro2.png"


export default function Projects() {
    const projectData = [
        {
            image:pro1,
            title: "Student Enrollment Form",
            sentences: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
                "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
                "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
                "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
            ],
            link: "https://santhoshkumar43.github.io/StudentEnrollmentForm/",
        },
        {
            image:pro2 ,
            title: "Basic Calculator ",
            sentences: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
                "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
                "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
                "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
            ],
            link: "https://santhoshkumar43.github.io/calculator/",
        },
    
    ];

    return (

        <div className="Projects_back">
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