import Button from "../components/button"
import { FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

export default function HireUs(){
    return(
        <div className="bg-[1D192B] ">

            <div className="flex justify-center mb-20 text-9xl font-bold text-color-[F9DEC1]">
                <h5>HIRE US</h5>
                
            </div>

            <div className="flex justify-center items-center divide-x divide-solid">
                <div className="flex flex-col w-full sm:w-1/2">
                    <div className="mb-6 px-20">
                        <form action="">

                            <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input required type="text" id="Name" placeholder="Name" className="w-full p-2 mb-5 border border-[#413861] rounded-lg bg-[#1D192B] text-base focus:border-white" />
                            
                            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input required type="text" id="Email" placeholder="Email Address" className="w-full p-2 mb-7 border border-[#413861] rounded-lg bg-[#1D192B] focus:border-white" />
                            
                            <textarea required name="Message" placeholder="Message" id="Message" className="w-full p-2 min-h-[80px] mb-2 border border-[#413861] rounded-lg bg-[#1D192B] focus:border-white"></textarea>

                            <div className="flex justify-center sm:justify-end">
                                <Button href={""} withBorder={true}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 hidden sm:block">
                    <ul className="flex flex-col justify-center h-fill items-center">
                        <li className="flex mb-4 items-center">
                            <FaLinkedin className="text-4xl" />
                            <h1>link.linkedin.com.link</h1>
                        </li>

                        <li className="flex mb-4 items-center">
                            <TbMailFilled className="text-4xl" />
                            <h1>info@joybread.com</h1>
                        </li>
                        <li className="flex mb-4 items-center">
                            
                            <p>0999999999999<br />
                            0999999999999</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}