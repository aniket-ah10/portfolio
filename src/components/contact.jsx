import "../styles/contact.css";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <>
        <div>
        <div className="ml-10">
            <h1 className="contact-heading text-4xl  md:text-5xl lg:text-5xl">Contact</h1>
            <div className="flex">
            <hr className="w-15 md:w-25 border-2 md:border-4 mt-8 md:mt-10 border-blue-400"></hr>
            <div className="contact-catchy text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2">&nbsp; Say Hello</div>
        </div>
        <div className="flex md:flex-row flex-col  justify-between items-center mt-5 gap-5">
            <div className="unwrap md:w-1/2">
                <h1 className="contact-heading mr-5 text-xl md:text-3xl lg:text-5xl">Let’s Code Something Amazing ....</h1>
            </div>
            <div className="message-section md:w-5/12 w-11/12 mr-10">
                <div>
                    <form className=" flex flex-col gap-2 md:gap-4">
                        <label className="text-2xl md:text-3xl oswald-family">Name</label>
                        <input type="text" name="name" className="border-b-2 md:border-b-4 border-blue-400 focus:outline-none text-lg md:text-xl text-blue-400  oswald-family p-2"/>
                        <label className="text-2xl md:text-3xl oswald-family"> E-mail</label>
                            <input type ="email" name="email"  className="border-b-2 md:border-b-4 border-blue-400 focus:outline-none text-lg md:text-xl text-blue-400  oswald-family p-2"></input>
                        <label className="text-2xl md:text-3xl oswald-family">Message </label>
                            <textarea className="resize-none overflow-visible required border-b-2 md:border-b-4 border-blue-400 focus:outline-none text-md md:text-lg text-blue-400  oswald-family p-2"></textarea>
                        <button type="submit" name="submit" value="submit" className="border-2  p-2  border-blue-400 bg-white text-gray-950 text-xl md:text-2xl lg:text-3xl hover:bg-gray-700 hover:text-white">Drop Message</button>
                    </form>
                </div>
             <div className="flex justify-center gap-10 mt-7">
            <a target="_blank" href="https://github.com/aniket-ah10"><FaGithub className="text-white text-4xl md:text-5xl hover:scale-85"/></a>
            <FaLinkedin className="text-white text-4xl md:text-5xl hover:scale-85"/>
            <MdEmail className="text-white text-4xl md:text-5xl hover:scale-85"/>
        </div>
        </div>
            
        </div>
        </div>
        </div>
        </>
    )   
}