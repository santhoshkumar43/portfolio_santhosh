import React from "react";
import "./Navigation.css";
import { HashLink as  Link } from "react-router-hash-link";



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
                    <li><a href="/">Home</a></li>
                    <li>  <Link to="#tech" smooth>TechStack</Link></li>
                    <li><Link to="#Experence" smooth >Experence</Link></li>
                    <li> <Link to="#Hire" smooth>Hire</Link> </li>
                    <li> <Link to="#Projects" smooth>Projects</Link> </li>
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