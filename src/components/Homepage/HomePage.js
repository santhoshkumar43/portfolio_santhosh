import React from "react";
import "./HomePage.css";


export default function Homepage() {

    const words = ["Full Stack WEB DEVELOPER",];
    let i = 0;
    let counter;
    window.onload = function () { typeNow() }
    function typeNow() {
        let word = words[i].split("");
        var loopTyping = function () {
            if (word.length > 0) {
                
                document.getElementById('text').innerHTML += word.shift();
            } else {
                deleteNow();
                return false;
            };
            counter = setTimeout(loopTyping, 200);
        };
        loopTyping();
    };

    function deleteNow() {
        let word = words[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                document.getElementById('text').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typeNow();
                return false;
            };
            counter = setTimeout(loopDeleting, 200);
        };
        loopDeleting();
    };

    return (
        <div>
            <div className="container">
                <h2>I'M</h2>
                <h1>SANTHOSH KUMAR</h1>
                <h3>
                    <p>I work as a</p>&nbsp;<p id="text"></p ><p >_</p>

                </h3>
                <div class="cont-btn">
                    <a href="mailto:pittasanthoshkumar4321@gmail.com"><input type="button" className="c-btn" value="Contact me" /></a>
                    <input type="button" className="d-btn" value="Download CV" />
                    <span>you can find more about my portfolio <br />and personal life experence here.</span>
                </div>

            </div>


        </div>


    )



}