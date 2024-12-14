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

      <Router>
        <Navigation />
        <Homepage />
        <Experence />
        <Hire />
        <TechStack />
        <Projects />
        <SocialMedia />
        {/* <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/TechStack' element={<TechStack/>}/>
          <Route path='Hire' element={<Hire/>}/>
          <Route path='Experence' element={<Experence/>}/>
          <Route path='Projjects' element = {<Projects/>}/>
          <Route path='SocialMedia' element={<SocialMedia/>}/>
            </Routes> */}
      </Router>








    </div>

  );
}

export default App;
