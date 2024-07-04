'use client'
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import onScreen from "../hooks/useScreen";
import AboutComponent from "../components/about-component";

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
                <p className='text-4xl sm:text-6xl 2xl:text-8xl font-bold'>ABOUT US</p>
                <Marquee direction='right' autoFill={true} className='absolute -left-[1.56rem] sm:-left-[3.12rem] -top-[1.5rem] 2xl:-top-[1.3rem] text-[#21232F] text-2xl sm:text-4xl 2xl:text-5xl blur-[2px] sm:blur-sm -z-10'>
                    <p className='font-bold'>ABOUT US&nbsp;&nbsp;&nbsp;</p>
                </Marquee>
            </div>
            <div className={`relative w-full h-[150vh] bg-[#454059] flex justify-evenly items-center z-10 -translate-y-24`}>
                <div className='w-full h-full flex flex-col justify-evenly items-center translate-y-20'>
                    <AboutComponent title={"WHO WE ARE"} text={"We are a team filled with passionate and determined computer science students based in the Philippines."} isMobile={isMobile} isBigScreen={isBigScreen} />
                    <AboutComponent title='MEET THE TEAM' text={`Antonio Garcia Jr. | Co-Founder | Frontend  Elaijah Sapla | Co-Founder | Backend  Richmond Viloria | Co-Founder | Fullstack`} isMobile={isMobile} isBigScreen={isBigScreen}/>
                </div>
                <div className='w-full h-full flex flex-col justify-evenly items-center -translate-y-16 2xl:-translate-y-20'>
                    <AboutComponent title='WHAT WE DO' text='Our company do various software development projects including website applications, mobile applications, gaming application and desktop applications.' isMobile={isMobile} isBigScreen={isBigScreen} reverse={true}/>
                    <AboutComponent title='WHAT WE OFFER' text='We offer a variety of benefits that includes giving an appropriate deadline, having a great and clear communication, and overall good and thorough quality of the application created by the team.' isMobile={isMobile} isBigScreen={isBigScreen} reverse={true}/>
                </div>
            </div>
        </div>
    )
}