import { useRef } from 'react'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Skill from './components/skill.jsx'
import Project from './components/project.jsx'
import './styles/app.css'


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <nav className="navigation-bar flex justify-around items-center gap-5 p-3 bg-gray-900 text-white align-super fixed top-0 w-full z-0 left-0 border-b-2 border-gray-700">
      <div className='name-font text-lg md:text-xl lg:text-2xl text-blue-300'>Aniket Singh</div>
      <ul className="gap-7 text-normal text-md hidden md:flex">
        <li><button onClick={()=>scrollToSection(homeRef)} className='nav-bt'>Home</button></li>
        <li><button onClick={()=>scrollToSection(aboutRef)}className='nav-bt'>About</button></li>
        <li><button onClick={()=>scrollToSection(skillRef)} className='nav-bt'>Skills</button></li>
        <li><button onClick={()=>scrollToSection(projectRef)} className='nav-bt'>Project</button></li>
        <li><button onClick={()=>scrollToSection(contactRef)} className='nav-bt'>Contact</button></li>
      </ul>
    </nav>

    <section ref={homeRef} className="pt-20">
      <Home/>
    </section>

    <section ref={aboutRef} className="pt-20">
      <About/>
    </section>

    <section ref={skillRef} className="pt-20">
      <Skill/>
    </section>

  <section ref={projectRef} className='pt-20'>
      <Project/>
    </section>

    <section ref={contactRef} className='pt-20'>
      <Contact/>
    </section>

    <footer className="text-center p-2 bg-gray-900 text-white mt-8">
      <p className='text-xl pb-2 name-font text-blue-400'>Aniket Singh</p>
      &copy; 2025 DarkE3. All rights reserved.
    </footer>
    </>
  )
}

export default App
