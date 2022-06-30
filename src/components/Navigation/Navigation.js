import React from "react";
import "./Navigation.css"



export default function Navigation() {
    function msg() {
        console.log("helloo")
        document.getElementById("myDropdown").classList.toggle("show");

    }
    window.onclick = function (e) {
        if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }
    return (
        <div className="b-n" >
            <div className="nav-bar">
                <h1>PORT<span>FOLIO</span></h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>  <a href="#">TechStack</a></li>
                    <li><a href="#">Experence</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Social media</a></li>
                    <div className="drp">
                        <button className="dropbtn" onClick={msg} >Menu

                        </button>
                        <div className="dropdown-content" id="myDropdown">
                            <a href="index.html">Home</a>
                            <a href="#">TeckStack</a>
                            <a href="#">Experence</a>
                            <a href="#">Skills</a>
                            <a href="#">Social media</a>
                        </div>
                    </div>
                </ul>

            </div>
        </div>
    )
}