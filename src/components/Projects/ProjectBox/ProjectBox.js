import React from "react";
import "./ProjectBox.css";

export default function ProjectBox({ image, title, sentences, link }) {


    return (
        <div className="project_box_container">
            <div className="project_box_image_container">
                <img src={image} />
            </div>
            <div className="project_box_description_container">
                <p className="project_box_title">{title} </p>
                <p className="project_box_link">
                    <span> Link </span>
                    <a href={link} target="_blank">
                        {link}
                    </a>
                </p>
            </div>
        </div>
    )
}