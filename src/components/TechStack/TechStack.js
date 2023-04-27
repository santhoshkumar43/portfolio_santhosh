import React from "react";
import "./TechStack.css"
import "./TechStackContainer/TechStackContainer"
import brands from "../../images/brands.png"
import c from "../../images/c.png"
import css from "../../images/css.png"
import html from "../../images/html.png"
import java from "../../images/java.png"
import js from "../../images/js.png"
import react from "../../images/react.png"
import python from "../../images/python.png"
import TechStackContainer from "./TechStackContainer/TechStackContainer";





export default function TechStack() {
    const techStackData = [
        {
            iconName: "vue",
            iconImage: brands,
            IconAltProperty: "VueImage",
        },
        {
            iconName: "C",
            iconImage: c,
            IconAltProperty:" CImage",
        },
        {
            iconName: "HTML",
            iconImage: html,
            IconAltProperty: "HtmlImage",
        },
        {
            iconName: "JAVA",
            iconImage: java,
            IconAltProperty: "JavaImage",
        }, 
        {
            iconName: "javascript",
            iconImage: js,
            IconAltProperty: "JSImage",
        },
        {
            iconName:"CSS",
            iconImage: css,
            IconAltProperty:"CssImage",
        },
        {
            iconName:"Python",
            iconImage: python,
            IconAltProperty:"PythonImage",
        },
        {
            iconName:"React",
            iconImage: react,
            IconAltProperty:"reactImage",
        }





    ]
    return (
        <div id="tech" className="techstack_container">
            <h1 className="techstack_title">Tech Stack</h1>
            <div className="techstack_icon_container">
                {
                    techStackData.map((item, index)=>{
                        return(
                            <TechStackContainer
                            name ={item.iconName}
                            altPropert ={item.IconAltProperty}
                            image ={item.iconImage}

                            
                            
                            />


                        );
                    }
                    )
                }
            </div>

        </div>
    )
}