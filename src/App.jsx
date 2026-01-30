import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AnchorLink from "react-anchor-link-smooth-scroll";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App