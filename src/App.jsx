
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>g
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </>
        }/>
        <Route path="/ProjectDetails/:id" element={
          <>
            <ProjectDetails/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
