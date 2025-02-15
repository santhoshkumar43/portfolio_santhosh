import React, { useState, useEffect, useRef } from "react";

import "./Buddy.css";
import notificationIcon from "../../images/bell (1).png";
import sendBtn from "../../images/sendBtn.png";
import chatboticon from "../../images/chatbot (1).png";
import Loader from "../Loader/Loader.js";
import close from "../../images/icons8-close-48.png"

function Buddy({ isOpen, setIsChatOpen }) {
  const [inputText, setInputText] = useState(""); // To store user input
  const [chatHistory, setChatHistory] = useState([]); // To store chat history (key-value pairs)
  const [error, setError] = useState(null); // To store errors
  const chatContainerRef = useRef(null);


  // Load chat history from local storage when component mounts
  useEffect(() => {
    const savedChatHistory = localStorage.getItem("chatHistory");
    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }
  }, []);
  const handleKeyPress = (event) => {
    
    if (event.key === "Enter") {
      fetchAIContent();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  const parseText = (text) => {
    // Match bold and italic text with regex
    const boldPattern = /\*\*(.*?)\*\*/g;
    const italicPattern = /\*(.*?)\*/g;

    // Replace bold and italic text with corresponding HTML elements
    let parsedText = text
      .replace(boldPattern, (match, p1) => `<strong>${p1}</strong>`)
      .replace(italicPattern, (match, p1) => `<em>${p1}</em>`);

    // Split the text by newlines for paragraphs and lists
    parsedText = parsedText.split("\n").map((line, index) => {
      if (line.trim().startsWith("* ")) {
        return (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: line.replace("* ", "") }}
          />
        );
      } else if (line.trim() !== "") {
        return <p key={index} dangerouslySetInnerHTML={{ __html: line }} />;
      } else {
        return <p key={index}></p>;
      }
    });

    return parsedText;
  };

  const fetchAIContent = async () => {
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC-m-RJd8aZVRZeArNTbO09hYAImDcT4ks";


    const payload = {
      contents: [
        {
          parts: [
            {
              text: `You are an AI assistant integrated into Santhosh Kumar Pitta's portfolio website. Your role is to introduce him, showcase his expertise, and assist visitors in learning about his skills, projects, and experience.

              About Santhosh Kumar Pitta:
              📍 Location: Gurgaon, India
              📧 Email: pittasanthoshkumar4321@gmail.com
              📞 Phone: 9398176168
              🌐 Portfolio: santhosh-portfolio-43.netlify.app
              🔗 LinkedIn: linkedin.com/in/santhosh-kumar-pitta
              💻 GitHub: github.com/santhoshkumar43
              
              Summary
              Santhosh is a Front-End Developer & QA Engineer with a passion for building user-friendly web experiences. With expertise in React.js, JavaScript, Python, and AI-driven applications, he combines technical skills with a creative mindset to develop high-quality digital products. Currently, he is exploring Agentic AI solutions and integrating AI-powered automation into his projects.
              
              Professional Experience
              👨‍💻 Software Engineer - QA, Leena AI (Aug 2023 - Present)
              
              Conducts end-to-end testing for HR/IT chatbots.
              Works with modules like Knowledge Management, Case Management, Workflows, Engage Surveys, and Onboarding/Offboarding.
              Automates manual tasks using Python and builds workflows with JavaScript.
              Engages in API testing and chatbot behavior analysis.
              👨‍💻 Front-End Web Developer Intern, Oyebusy Technologies (Oct 2021 - Apr 2022)
              
              Worked on the Hascodec Project, improving UI/UX using Vue.js, HTML, CSS, and JavaScript.
              Developed a test case generation tool for XML validation.
              Education
              🎓 Lovely Professional University (Sept 2020 – May 2024)
              
              B.Tech in Computer Science and Engineering (Data Science, AI & ML)
              Projects
              🤖 Buddy - Chatbot (i-am-buddy.netlify.app)
              
              Built a chatbot using React.js & Node.js.
              Integrated Gemini API for AI-powered responses.
              Developing Agentic AI features, allowing the bot to analyze data, perform keyword searches, and manipulate databases.
              📝 Blog App - Let’s Blog
              
              Developed a React.js & Firebase blog application.
              Features include user authentication, blog creation, and AI-powered content rewriting.
              ☁️ Weather App
              
              Built a React.js weather application using the OpenWeather API.
              Provides real-time weather updates and forecasts.
              🖥️ Portfolio Website (santhosh-portfolio-43.netlify.app)
              
              Designed a clean, responsive, and user-friendly portfolio using React.js.
              📊 Other Projects:
              
              Laptop Price Prediction (Machine Learning-based)
              Sentiment Analysis (NLP-based project)
              Technologies & Skills
              💡 Languages: React.js, JavaScript, HTML, CSS, Python, Java, SQL, C
              🛠️ Tools & Technologies: Machine Learning, Deep Learning, Exploratory Data Analysis, Selenium, JIRA, Git, Google Apps Script
              🏆 Achievements: Received the Cultural Ambassador Award at Leena AI for fostering teamwork and collaboration.
              
              Soft Skills & Interests | Interpersonal Skills
              ✅ Team Player & Problem Solver
              ✅ Creative & Analytical Thinker
              ✅ Passionate about AI & Front-End Development
              ✅ Enjoys exploring Agentic AI applications
              
              Your Role as the Chatbot
As the AI assistant for this portfolio website, your responsibilities include:

Small Talk: Provide a short and precise introduction to Santhosh based on the query.
Answer Queries: Respond to questions about his skills, projects, and experience concisely and accurately.
Provide Technical Explanations: If asked, offer structured and clear explanations of his work and technologies.
Guide Users: Help visitors explore his portfolio, projects, and achievements based on their interests.
Engage in Conversations: Ensure interactions are meaningful, seamless, and informative.
dont respond with long responses.
"Why Should We Hire You?" Explain how Santhosh's skill set, interests, and experience make him the right fit for the role.
Always keep responses engaging, professional, and to the point while using relevant context to enhance replies.` + "user promp:" + inputText + "Context:" + chatHistory, // Use user input here
            },
          ],
        },
      ],
    };

    const botResponse = "Bot is typing";
    const newChatHistory = [
      ...chatHistory,
      {
        user: inputText,
        bot: botResponse,
      },
    ];
    setChatHistory(newChatHistory);
    setInputText("");


    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    response
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newChatHistory = [
          ...chatHistory,
          {
            user: inputText,
            bot: data.candidates[0].content.parts[0].text,
          },
        ];
        setChatHistory(newChatHistory);


        // Save updated chat history to local storage
        localStorage.setItem("chatHistory", JSON.stringify(newChatHistory));


        setInputText(""); // Clear input field after sending
        setError(null);
      });
  };
  function onClose() {
    setIsChatOpen(false)
  }

  if (!isOpen) return null;

  return (
    <div className="main">

      <div className="containerMain">
        <div className="topBannerMain">
          <div className="LogoMain">
            <img src={chatboticon} />
            <span>Buddy</span>
          </div>
          <div className="rightTopbannermain">
            <button onClick={onClose}><img src={close} /></button>
          </div>
        </div>
        <div className="chatArea" ref={chatContainerRef}>
          {chatHistory.length === 0 ? (
            <div className="outerbotChat">
            <img src={chatboticon} />
            <div className="botChat">
            
                <div className="botResponsebulbe">
                👋 Hello! Welcome to Santhosh Kumar Pitta's portfolio. I'm his 🤖 AI assistant, here to guide you through his 🔥 skills and 💼 experience. Let me know how I can help! 😊
                </div>
         
            </div>
          </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className="chats" style={{ marginBottom: "15px" }}>
                <div className="outeruserChat">
                  <div className="userChat">{chat.user}</div>
                </div>
                <div className="outerbotChat">
                  <img src={chatboticon} />
                  <div className="botChat">
                    {chat.bot === "Bot is typing" ? (
                      <div>
                        <Loader />
                      </div>
                    ) : (
                      <div className="botResponsebulbe">

                        {parseText(chat.bot)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="bottomSpace">
          <div className="bottomBar">
            <input
              className="chatInput"
              type="text"
              placeholder="Ask something..."
              value={inputText}
              onKeyDown={handleKeyPress}
              onChange={(e) => setInputText(e.target.value)} // Update state on input change
            />

            <button
              className="chatSend"
              onClick={fetchAIContent}
              disabled={!inputText.trim()}
            >
              <img src={sendBtn} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buddy;
