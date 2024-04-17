import React from "react"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return(
    <>
    <Navbar></Navbar>
    <div>
      <Home></Home>
    </div>
    <About></About>
    <Skills></Skills>
    </>
  )
}

export default App
