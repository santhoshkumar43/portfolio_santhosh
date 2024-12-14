import React from "react";
import "./HomePage.css";


export default function Homepage() {

    const words = ["ChatBot QA",];
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
                    <p>I am a</p>&nbsp;<p id="text"></p ><p >_</p>

                </h3>
                <div class="cont-btn">
                    <a href="mailto:pittasanthoshkumar4321@gmail.com"><input type="button" className="c-btn" value="Contact me" /></a>
                    <a target="_blank" href="https://drive.google.com/file/d/1tIgvj0VYA_zf1X8Gs9YrY3HQTHF7nO_R/view?usp=sharing" download><input type="button" className="d-btn" value="Download CV" /></a>
                    
                </div>

            </div>


        </div>


    )



}
