import React from "react";
import "./Hire.css";
import interpersonal from "../../images/interpersonal.jpg";
import management from"../../images/management.jpg";
import selfmotivated from "../../images/selfmotivated.jpg";
import problemsolve from "../../images/problemsolve.jpg"
export default function Hire() {
    return (
        <div className="Hire">
            <h1>Why Hire Me<span>?</span></h1>
            <div className="Hire-box">
                <div className="Hire-container">
                    <div>
                        <img src={interpersonal} alt="img" />

                    </div>
                    <div>
                        <h2>Interpersonal skills</h2>
                        <p>Interpersonal skills are traits you rely on when you interact and communicate with others.</p>
                    </div>

                </div>


                <div class="Hire-container">
                    <div>
                        <img src={management} alt="img"/>

                    </div>
                    <div>
                        <h2>Management skills</h2>
                        <p>Managerial skills are qualities that help you govern both tasks and people.</p>
                    </div>

                </div>


                <div class="Hire-container">
                    <div>
                        <img src={selfmotivated} alt="img"/>

                    </div>
                    <div>
                        <h2>Self Motivated</h2>
                        <p>Interpersonal skills are traits you rely on when you interact and communicate with others.</p>
                    </div>

                </div>


                <div class="Hire-container">
                    <div>
                        <img src={problemsolve} alt="img"/>

                    </div>
                    <div>
                        <h2>Problem-solving skills</h2>
                        <p>Problem-solving skills are qualities that help you determine the source of a problem and quickly find an effective solution</p>
                    </div>

                </div>
            </div>
        </div>
    )
}