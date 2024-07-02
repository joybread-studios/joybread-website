import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer(){
     return <div className="flex w-full pb-5 px-10 bg-[#1E1E1E] relative items-center">
        <div className="flex flex-col w-full sm:w-1/2 md:w-[35%] lg:w-[30%] xl:1/4">
            
                <img src="/static/images/joybreadlogo.png" alt="joybreadlogo" className="w-screen" />
            <div className="flex relative items-center text-center md:text-sm lg:text-[10px] xl:text-sm">
                <h5 className="block lg:hidden">
                    © 2024 JOYBREAD <br />STUDIOS
                </h5>

                <h5 className="hidden lg:block">
                    © 2024 JOYBREAD STUDIOS
                </h5>
                
                <div className="flex absolute right-0 justify-evenly text-[40px] sm:text-[35px] md:text-[30px] lg:text-4xl xl:text-5xl">
                    <a href="" className="ml-2"><FaLinkedin /></a>
                    <a href="" className="ml-2"><FaGithubSquare /></a>
                    <a href="" className="ml-2"><TbMailFilled /></a>
                </div>
            </div>
        </div>
        <div className="absolute right-[5%] text-6xl hidden sm:block">
            <button className="rounded-none"><IoIosArrowUp /></button>
        </div>
     </div>
    
}