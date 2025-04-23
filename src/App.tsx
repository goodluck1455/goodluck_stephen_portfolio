// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './assets/Components/AboutMe'
import Contact from './assets/Components/Contact'
// import UserInfoForm from './assets/Components/Form'
import FrontPage from './assets/Components/FrontPage'
import Header from './assets/Components/Header'
import ProjectPage from './assets/Components/ProjectPage'
import ToolsPage from './assets/Components/ToolsPage'
import Work from './assets/Components/Work'
import TawkMessenger from './assets/Utilities/Chat'
import { Helmet } from "react-helmet";

function App() {


  return (
    <>
<Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Goodluck Stephen",
              "url": "https://goodluck-stephen-portfolio.vercel.app/",
              "jobTitle": "Frontend Engineer",
              "sameAs": [
                "https://github.com/goodluck1455",
                "https://linkedin.com/in/goodluck-stephen-427362126/"
              ]
            }
          `}
        </script>
      </Helmet>
    <Header />
    <FrontPage />
    <AboutMe />
    <Work />
    <ProjectPage />
    <ToolsPage />
    <Contact />
    <TawkMessenger />
        
    </>
  )
}

export default App
