import "../styles/skills.css";
import { FaJava,FaHtml5,FaCss3,FaJs,FaReact,FaGit, FaGithub} from "react-icons/fa";
import { SiSpringboot,SiTailwindcss} from "react-icons/si";
import leetCodeIcon from "../assets/leetCodeIcon.png";
import redirect  from "../assets/redirect.png";
export default function Skill() {
    return (
        <>
        <div className="skillPage bg-grey-950">
        <div className="skill-title ml-10">
            <h1 className="skill-heading text-4xl  md:text-5xl lg:text-5xl">Skills</h1>
            <div className="flex">
            <hr className="w-15 md:w-25 border-2 md:border-4 mt-8 border-blue-400"></hr>
            <div className="skill-catchy text-2xl md:text-3xl lg:text-4xl mt-1">&nbsp; My Tech Stack</div>
            </div>
        </div>
        <div>
            <div className="flex flex-wrap gap-10 md:gap-15 justify-center mt-5 md:mt-10 p-5">
                <div className="skill-bt text-xl md:text-2xl"><FaHtml5 className="text-orange-600 text-7xl sm:text-8xl md:text-9xl"/>HTML</div>
                <div className="skill-bt text-xl md:text-2xl"><FaCss3 className="text-blue-600 text-7xl sm:text-8xl md:text-9xl"/>CSS</div>
                <div className="skill-bt text-xl md:text-2xl"><FaJs className="text-yellow-500 text-7xl sm:text-8xl md:text-9xl"/>JavaScript</div>
                <div className="skill-bt text-xl md:text-2xl"><FaReact className="text-blue-400 text-7xl sm:text-8xl md:text-9xl"/>ReactJS</div>
                <div className="skill-bt text-xl md:text-2xl"><SiTailwindcss className="text-blue-600 text-7xl sm:text-8xl md:text-9xl"/>TailwindCSS</div>
                <div className="skill-bt text-xl md:text-2xl"><FaJava className="text-blue-400 text-7xl sm:text-8xl md:text-9xl"/>Java</div>
                <div className="skill-bt text-xl md:text-2xl"><SiSpringboot className="text-green-700 text-7xl sm:text-8xl md:text-9xl"/>Spring Boot</div>
                <div className="skill-bt text-xl md:text-2xl"><FaGit className="text-red-500 text-7xl sm:text-8xl md:text-9xl"/>Git</div>
            </div>
        </div>
        <div className="sm:mt-10 md:mt-20 flex sm:flex-row flex-col justify-around">
            <a href="https://leetcode.com/u/aniket_ah10/" target="_blank" className="flex md:w-1/3 border-2 md:border-4  border-blue-400 m-5 gap-6 hover:bg-gray-700 hover:scale-95">
            <img src={leetCodeIcon} className="w-20 h-20 md:w-20 md:h-20 lg:w-30 lg:h-30 "></img>
            <div className=" justify-center items-center flex gap-3">
                <h1 className="text-2xl md:text-2xl lg:text-3xl oswald-family">LeetCode</h1>
                <img src={redirect} className="md:w-7 md:h-7 w-5 h-5 rounded-xl border-blue-400 border-2 redirect mr-5 hover:scale-110"></img>
            </div>
        </a>
        

        <a href="https://github.com/aniket-ah10" target="_blank" className="flex md:w-1/3  border-2 md:border-4  border-blue-400 mt-0 sm:mt-5 m-5 gap-6 hover:bg-gray-700 hover:scale-95">
            <FaGithub className=" text-black bg-white w-20 h-20 md:w-20 md:h-20 lg:w-30 lg:h-30"/>
            <div className="flex justify-center items-center gap-3">
                <h1 className="text-2xl md:text-2xl lg:text-3xl oswald-family">GitHub</h1>
                <img src={redirect} className="md:w-7 md:h-7 w-5 h-5 rounded-xl border-blue-400 border-2 redirect mr-5 hover:scale-110"></img>
            </div>
            </a>
        </div>
        </div>
    </>
    )
}