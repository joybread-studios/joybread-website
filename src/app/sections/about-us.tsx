'use client'
import Marquee from "react-fast-marquee";
import onScreen from "../hooks/onScreen";
import { useRef } from "react";

export default function AboutUs(){
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = onScreen(sectionRef);

    return (
        <div ref={sectionRef} className={`relative overflow-hidden transition ease-in-out duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-48'}`}>
            <div className={`mt-24 relative w-[110%] h-fit p-12 bg-[#454059] overflow-hidden -translate-x-5 rotate-6 z-10`}>
                <p className='text-6xl font-bold'>ABOUT US</p>
                <Marquee direction='right' autoFill={true} className='absolute -left-[50px] -top-[24px] text-[#21232F] text-4xl blur-sm -z-10'>
                    <p className='font-bold'>ABOUT US&nbsp;&nbsp;&nbsp;</p>
                </Marquee>
            </div>
            <div className={`relative w-full h-[150vh] bg-[#454059] flex justify-evenly items-center -z-10 -translate-y-24`}>
                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                    <div className='flex flex-col w-1/2 items-center'>
                        <p className='text-4xl font-bold flex text-start'>WHO WE ARE</p>
                        <p className='text-[#B8A38D] text-justify'>We are a team filled with passionate and determined computer science students based in the Philippines.</p>
                    </div>
                    <div>
                        MEET THE TEAM
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                    <div>
                        WHAT WE DO
                    </div>
                    <div>
                        WHAT WE OFFER
                    </div>
                </div>
            </div>
        </div>
    )
}