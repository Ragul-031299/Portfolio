import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Components/Header/Header';
import Home from './Components/Home/Home';
import Skill from './Components/Skill/Skill';
import Education from './Components/Education/Education';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <BasicExample/>
    <Home/>
    <Skill/>
    <Education/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
