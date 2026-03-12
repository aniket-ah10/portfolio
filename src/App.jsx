import { useRef } from 'react'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Skill from './components/skill.jsx'
import Project from './components/project.jsx'
import './styles/app.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import {FaHome} from 'react-icons/fa';
import { BadgeInfo,UserRoundCog } from 'lucide-react';
import { IoMdContact } from "react-icons/io";
import {MdOutlineWorkOutline} from 'react-icons/md';
import {useState} from "react";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
      setMenu(!menu);
  }
  return (
    <>
    <nav className="navigation-bar flex justify-between items-center gap-5 p-3 bg-gray-900 text-white align-super fixed top-0 w-full z-0 left-0 border-b-2 border-gray-700">
        <div className="mobile-nav-menu md:hidden pl-2">
            { menu===false?<button type="button" onClick={()=>toggleMenu()} className="cursor-pointer" > <GiHamburgerMenu className="text-2xl" ></GiHamburgerMenu></button>:
                <button type="button" onClick={()=>toggleMenu()} className="cursor-pointer"><IoCloseOutline className="text-2xl"></IoCloseOutline> </button>}
        </div>
        <div className='name-font text-lg md:text-xl lg:text-2xl text-blue-300 m-auto'>Aniket Singh</div>
        <ul className="gap-5 text-normal text-md hidden md:flex pr-5">
            <li><button onClick={()=>scrollToSection(homeRef)} className='nav-bt flex gap-1.5'><FaHome className="text-center text-2xl"></FaHome>Home</button></li>
            <li><button onClick={()=>scrollToSection(aboutRef)} className='nav-bt flex gap-1.5'><BadgeInfo className="text-center"></BadgeInfo>About</button></li>
            <li><button onClick={()=>scrollToSection(skillRef)} className='nav-bt flex gap-1.5'><UserRoundCog className="text-center"></UserRoundCog>Skills</button></li>
            <li><button onClick={()=>scrollToSection(projectRef)} className='nav-bt flex gap-1.5'><MdOutlineWorkOutline className="text-center text-2xl"></MdOutlineWorkOutline>Project</button></li>
            <li><button onClick={()=>scrollToSection(contactRef)} className='nav-bt flex gap-1.5'><IoMdContact className="text-center text-2xl"></IoMdContact>Contact</button></li>
        </ul>
    </nav>
        <div>
            {menu===true?
                <div className="fixed mt-13 w-full h-screen  grid md:hidden backdrop-blur-xl">
                    <ul className="gap-50 text-normal text-lg  pr-5">
                <li><button onClick={()=>{scrollToSection(homeRef);toggleMenu();}} className='nav-bt flex gap-2'><FaHome className="text-center m-auto text-2xl"></FaHome>Home</button></li>
                <li><button onClick={()=>{scrollToSection(aboutRef);toggleMenu();}} className='nav-bt flex gap-2'><BadgeInfo className="text-center m-auto"></BadgeInfo>About</button></li>
                <li><button onClick={()=>{scrollToSection(skillRef);toggleMenu();}} className='nav-bt flex gap-2'><UserRoundCog className="text-center m-auto"></UserRoundCog>Skills</button></li>
                <li><button onClick={()=>{scrollToSection(projectRef);toggleMenu();}} className='nav-bt flex gap-2'><MdOutlineWorkOutline className="text-center text-2xl m-auto"></MdOutlineWorkOutline>Project</button></li>
                <li><button onClick={()=>{scrollToSection(contactRef);toggleMenu()}} className='nav-bt flex gap-2'><IoMdContact className="text-center m-auto text-2xl"></IoMdContact>Contact</button></li>
                    </ul>
                </div>:
                null}
        </div>
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
