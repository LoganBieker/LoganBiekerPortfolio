import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Home from './Components/Home'

//https://coolors.co/040403-5b7553-8eb897-c3e8bd-9ddbad
// https://coolors.co/243010-87a330-a1c349-cad593-2a3c24

function App() {


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