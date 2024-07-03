'use client'
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import onScreen from "../hooks/onScreen";

export default function AboutUs(){
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const isVisible = onScreen(ref);
    const isVisible2 = onScreen(ref2);
    const isVisible3 = onScreen(ref3);
    const isVisible4 = onScreen(ref4);

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isBigScreen, setIsBigScreen] = useState<boolean>(false);
	const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 640);
        setIsBigScreen(window.innerWidth > 1536);
    }

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    
    return (
        <div id='about' className={`relative overflow-hidden`}>
            <div className={`mt-24 relative w-[140%] sm:w-[110%] h-fit p-12 bg-[#454059] overflow-hidden -translate-x-5 2xl:rotate-3 rotate-6 z-20`}>
                <p className='text-4xl sm:text-6xl font-bold'>ABOUT US</p>
                <Marquee direction='right' autoFill={true} className='absolute -left-[1.56rem] sm:-left-[3.12rem] -top-[1.5rem] lg:-top-[1.25rem] text-[#21232F] text-2xl sm:text-4xl blur-[2px] sm:blur-sm -z-10'>
                    <p className='font-bold'>ABOUT US&nbsp;&nbsp;&nbsp;</p>
                </Marquee>
            </div>
            <div className={`relative w-full h-[150vh] bg-[#454059] flex justify-evenly items-center z-10 -translate-y-24`}>
                <div className='w-full h-full flex flex-col justify-evenly items-center translate-y-20'>
                    <div ref={ref} className='flex flex-col w-2/3 sm:w-1/2 items-center'>
                        <p className={`text-2xl sm:text-4xl font-bold flex text-start transition duration-1000 ease-in-out ${isVisible ? `${!isMobile ? '-translate-x-12' : ''}` : '-translate-x-[200%]'}`}>WHO WE ARE</p>
                        <p className={`text-sm sm:text-base text-[#B8A38D] text-justify transition duration-1000 ease-in-out ${isVisible ? '' : '-translate-x-[200%]'}`}>We are a team filled with passionate and determined computer science students based in the Philippines.</p>
                    </div>
                    <div ref={ref2} className='flex flex-col w-2/3 sm:w-1/2 items-center'>
                        <p className={`text-2xl sm:text-4xl font-bold flex text-start transition duration-1000 ease-in-out ${isVisible2 ? `${!isMobile ? '-translate-x-12' : ''}` : '-translate-x-[200%]'}`}>MEET THE TEAM</p>
                        <p className={`text-sm sm:text-base text-[#B8A38D] text-justify transition duration-1000 ease-in-out ${isVisible2 ? '' : '-translate-x-[200%]'}`}>Antonio Garcia Jr. | Co-Founder | Frontend<br/>Elaijah Sapla | Co-Founder | Backend<br/>Richmond Viloria | Co-Founder | Fullstack</p>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-evenly items-center -translate-y-20'>
                    <div ref={ref3} className='flex flex-col w-2/3 sm:w-1/2 items-center'>
                        <p className={`text-2xl sm:text-4xl font-bold flex text-start transition duration-1000 ease-in-out ${isVisible3 ? `${!isMobile ? 'translate-x-12' : ''}` : 'translate-x-[200%]'}`}>WHAT WE DO</p>
                        <p className={`text-sm sm:text-base text-[#B8A38D] text-justify transition duration-1000 ease-in-out ${isVisible3 ? '' : 'translate-x-[200%]'}`}>Our company do various software development projects including website applications, mobile applications, gaming application and desktop applications.</p>
                    </div>
                    <div ref={ref4} className='flex flex-col w-2/3 sm:w-1/2 items-center'>
                        <p className={`text-2xl sm:text-4xl font-bold flex text-start transition duration-1000 ease-in-out ${isVisible4 ? `${!isMobile ? 'translate-x-12' : ''}` : 'translate-x-[200%]'}`}>WHAT WE OFFER</p>
                        <p className={`text-sm sm:text-base text-[#B8A38D] text-justify transition duration-1000 ease-in-out ${isVisible4 ? '' : 'translate-x-[200%]'}`}>We offer a variety of benefits that includes giving an appropriate deadline, having a great and clear communication, and overall good and thorough quality of the application created by the team.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}