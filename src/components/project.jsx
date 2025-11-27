import "../styles/project.css";
import Projects from "./projects.jsx";
import binoImg from "../assets/binoImg.png"
import clockImg from "../assets/clockImg.png";
import numImg from "../assets/numImg.png";

export default function Project(){
    return(
        <>
        <div className="flex items-center bg-gray-950">
            <div>
            <div className=" text-white flex flex-col items-center">
      <h1 className="about-text flex text-4xl  md:text-5xl lg:text-5xl md:mb-3">Project</h1>
      <div className='flex'>
        <hr className='w-10 md:w-15 border-2 md:border-4 mt-7 md:mt-10 border-blue-400'/>
      <div className='about-catchy text-2xl md:text-3xl lg:text-4xl mt-1'>&nbsp; Builds </div>
      </div>
      </div>
      <div className="flex gap-10 ml-5 mr-5 mt-5 sm:ml-2 sm:mr-2 sm:mt-15 flex-wrap justify-center">
      <Projects
      img={binoImg}
      title="Bino Page"
      desc="Watched Movies & Web Series Tracker"
      github="https://github.com/aniket-ah10/bino/"
      page="https://aniket-ah10.github.io/bino/"
      />
      <Projects
      img={clockImg}
      title="Clock"
      desc="Real-Time Digital Clock"
      github="https://github.com/aniket-ah10/clock"
      page="https://aniket-ah10.github.io/clock/"
      />
      <Projects
      img={numImg}
      title="Num"
      desc="Basic Number Operations Tool"
      github="https://github.com/aniket-ah10/num"
      page="https://aniket-ah10.github.io/clock/"
      />
    </div>
    </div>
    </div>
        </>
            )
}