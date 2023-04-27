import React from "react";
import "../TechStackContainer/TechStackContainer.css"
export default function TechStackContainer({ name, image, altProperty }) {
    return (
      <div  className="techstack_icons">
        <img src={image} alt={altProperty} />
        <p> {name} </p>
      </div>
    );
  }