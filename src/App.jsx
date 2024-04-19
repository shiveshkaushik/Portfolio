import React from "react"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return(
    <>
    <Navbar></Navbar>
    <div>
      <Home></Home>
    </div>
    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Resume></Resume>
    <Contact></Contact>
    <Footer></Footer>
    </>

  )
}

export default App
