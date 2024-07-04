import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import Button from "./button";

export default function Footer(){
     return <div className="flex w-full pb-5 px-10 bg-[#1E1E1E] relative items-center">
        <div className="flex flex-col w-full sm:w-1/2 md:w-[35%] lg:w-[30%] xl:1/4">
            
            <img src="/static/images/joybreadlogo.png" alt="joybreadlogo" />
            <div className="flex justify-between items-center text-center md:text-sm lg:text-[10px] xl:text-sm">
                <h5 className="block lg:hidden">
                    © 2024 JOYBREAD <br />STUDIOS
                </h5>

                <h5 className="hidden lg:block">
                    © 2024 JOYBREAD STUDIOS
                </h5>
                
                <div className="flex justify-end">
                    <Button href="" className="ml-2"><FaLinkedin size={35}/></Button>
                    <Button href="" className="ml-2"><FaGithubSquare size={35} /></Button>
                    <Button href="" className="ml-2"><TbMailFilled size={35}/></Button>
                </div>
            </div>
        </div>
        <div className="absolute right-[5%] hidden sm:block ">
            <Button href=''><IoIosArrowUp size={60}/></Button>
        </div>
     </div>
    
}