import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'
import NavBar from './Components/Navbar';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Home from './Components/Home'

//https://coolors.co/040403-5b7553-8eb897-c3e8bd-9ddbad
// https://coolors.co/243010-87a330-a1c349-cad593-2a3c24

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <NavBar></NavBar>
      <Home id='Home'></Home> 
      <AboutMe id='AboutMe'></AboutMe>
      <Experience id='Experience'></Experience>
      <Projects id='Projects'></Projects>
    </>
  );
}

export default App;