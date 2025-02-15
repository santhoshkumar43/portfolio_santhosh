import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({
  companyName,
  designation,
  statements,
  iconImages,
}) {
  console.log(statements)
  return (
    <div className="ex_card_container">
      <p className="ex_card_title"> {companyName} </p>
      <p className="ex_card_subtitle">Designation: {designation} </p>

   
      <span style={{ whiteSpace: "pre-line" }}>{statements}</span>

      <p className="ex_card_tech_used_title">Tech Stack Used</p>
      <div className="ex_card_icon_images_container">
        {iconImages.map((value, index) => (
          <img src={value} />
        ))}
      </div>
    </div>
  );
}