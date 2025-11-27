import '../styles/about.css';
import frontendIcon from '../assets/frontendDevelopment.png';
import backendIcon from '../assets/backendDevelopment.png';
import problemSolvingIcon from '../assets/problemSolving.png';

export default function About() {
  return (
    <>
    <div className='flex items-center'>
    <div className="about-page bg-gray-950 ">
      
      <div className=" text-white flex flex-col items-center">
      <h1 className="about-text flex text-4xl  md:text-5xl lg:text-5xl md:mb-3">About Me</h1>
      <div className='flex'>
        <hr className='w-15 md:w-20 border-2 md:border-4 mt-7 md:mt-10 border-blue-400'/>
      <div className='about-catchy text-2xl md:text-3xl lg:text-4xl mt-1'>&nbsp; Who I am</div>
      </div>
      </div>
    <div className="md:mt-10 mt-5 flex flex-col md:flex-row md:gap-7 flex-unwrap items-center">
      <div className='flex flex-col md:w-1/2 md:ml-10 m-5'>
      <div className='flex gap-5 mb-5 items-center'>
        <img className='about-icon md:w-18 md:h-18 w-15 h-15 rounded-2xl' src={problemSolvingIcon}></img><button className='about-bt md:text-xl lg:text-2xl'>Problem Solving</button>
      </div>
      <div className='flex gap-5 mb-5 items-center'>
        <img className='about-icon md:w-18 md:h-18 w-15 h-15 rounded-2xl' src={frontendIcon}></img><button className='about-bt md:text-xl lg:text-2xl'>Frontend Development</button>
      </div>
      <div className='flex gap-5 mb-5 md:mb-0 items-center'>
        <img className='about-icon md:w-18 md:h-18 w-15 h-15 rounded-2xl' src={backendIcon}></img><button className='about-bt md:text-xl lg:text-2xl'>Backend Development</button>
      </div>
      </div>
      <div className='flex md:w-2/3 m-7 md:mt-0 flex-col'>
      <p className="about-desc  lg:text-xl">I'm Aniket Singh college student at Dr. Ram Manohar Lohia Awadh University and currently pursuing Bachelor of Technology  in Computer Science. </p>
      <p className=' mt-4 about-desc  lg:text-xl'>I have strong Problem Solving Skill and I’m focusing on improving my backend skills with Java using Spring Boot framework to build fullstack web Applications with interactive react UI.</p>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}