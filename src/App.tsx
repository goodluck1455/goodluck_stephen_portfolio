// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './assets/Components/AboutMe'
import Contact from './assets/Components/Contact'
import FrontPage from './assets/Components/FrontPage'
import Header from './assets/Components/Header'
import ProjectPage from './assets/Components/ProjectPage'
import ToolsPage from './assets/Components/ToolsPage'
import Work from './assets/Components/Work'

function App() {


  return (
    <>
    <Header />
    <FrontPage />
    <AboutMe />
    <Work />
    <ProjectPage />
    <ToolsPage />
    <Contact />
        
    </>
  )
}

export default App
