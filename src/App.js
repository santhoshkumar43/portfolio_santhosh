import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/HomePage';
import TechStack from './components/TechStack/TechStack';
import Experence from './components/Experence/Experence.js';

import SocialMedia from './components/SocialMedia/SocialMedia';
import Projects from './components/Projects/Projects.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hire from './components/Hire/Hire';




function App() {
  return (
    
      <div className="App">
        
          <Navigation />

          <Homepage />


          <TechStack />

          <Hire />

          <SocialMedia />
          <Experence />
          <Projects />
        




      </div>
    
  );
}

export default App;
