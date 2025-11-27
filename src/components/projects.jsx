import "../styles/projects.css";

export default function Projects(props){
    return(
    <div className="project-card  p-2 sm:p-3 border-2 border-blue-400 flex-col justify-center items-center lg:w-6/20 md:w-5/12 sm:w-10/12 bg-gray-900 shadow-lg shadow-gray-700">
        <h1 className="sm:text-xl text-lg oswald-family ml-1  mb-2 sm:mb-5 md:text-2xl ">{props.title}</h1>
        <img src={props.img} alt="img" className=" border-b-4 border-blue-600"/>
        <p className="text-center mt-2 mb-2 roboto-family font-light text-sm sm:text-md lg:text-lg text-gray-200">{props.desc}</p>
        <div className="flex justify-end mr-2 gap-3 sm:gap-5 mt-3 sm:mt-5 mb-2">
        <a target="_blank" href={props.github} className="p-1 border-2 border-blue-400 bg-gray-950 hover:bg-gray-700 text-sm md:text-md lg:text-lg hover:scale-95">Github</a>
        <a target="_blank" href={props.page} className="p-1 border-2 border-blue-400 bg-white text-gray-950 text-sm md:text-md lg:text-lg hover:scale-95 hover:bg-gray-700">Live Page</a></div>
    </div>
    )
}