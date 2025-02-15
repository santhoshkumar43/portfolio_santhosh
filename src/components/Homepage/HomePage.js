import { React, useEffect, useState } from "react";
import "./HomePage.css";
import Buddy from "../Buddy/Buddy.js"
import chatboticon from "../../images/chatbot (1).png";

export default function Homepage() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const words = ["Hello!", "Welcome to my site!", "Enjoy your stay!"];
    const TYPING_SPEED = 100; // Speed of typing (ms per letter)
    const ERASING_SPEED = 50; // Speed of deleting
    const DELAY_BEFORE_ERASING = 1000; // Pause before deleting (ms)
    
    
      const [text, setText] = useState("");
      const [wordIndex, setWordIndex] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      const [charIndex, setCharIndex] = useState(0);
    
      useEffect(() => {
        const handleTyping = () => {
          const currentWord = words[wordIndex];
    
          if (!isDeleting) {
            // Typing effect
            if (charIndex < currentWord.length) {
              setText((prev) => prev + currentWord[charIndex]);
              setCharIndex((prev) => prev + 1);
            } else {
              // Pause before deleting
              setTimeout(() => setIsDeleting(true), DELAY_BEFORE_ERASING);
            }
          } else {
            // Backspacing effect
            if (charIndex > 0) {
              setText((prev) => prev.slice(0, -1));
              setCharIndex((prev) => prev - 1);
            } else {
              // Move to next word after backspacing
              setIsDeleting(false);
              setWordIndex((prev) => (prev + 1) % words.length);
            }
          }
        };
    
        const timeout = setTimeout(handleTyping, isDeleting ? ERASING_SPEED : TYPING_SPEED);
        return () => clearTimeout(timeout);
      }, [charIndex, isDeleting, wordIndex]);
    
    return (
        <div>
            <div className="container">
                <h2>I'M</h2>
                <h1>SANTHOSH KUMAR</h1>
                <h3>
                    <p id="text">{text}</p ><p >_</p>

                </h3>
                <div class="cont-btn">
                    <a href="mailto:pittasanthoshkumar4321@gmail.com"><input type="button" className="c-btn" value="Contact me" /></a>
                    <a target="_blank" href="https://drive.google.com/file/d/1-ESMQzOFKQT_q1q96DjNHoxBHIRHiAhu/view?usp=drivesdk" download><input type="button" className="d-btn" value="Download CV" /></a>

                </div>
                <div className="buddybtn">
                    <button className="chatOpenButton futuristicButton" onClick={() => setIsChatOpen(true)}>

                        <h5>Chat with me</h5><img src={chatboticon} />
                    </button>
                </div>
                <div className="buddyPlace"> <Buddy isOpen={isChatOpen} setIsChatOpen={setIsChatOpen} /></div>


            </div>


        </div>


    )



}
