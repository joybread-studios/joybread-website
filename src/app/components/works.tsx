import Marquee from "react-fast-marquee";
import projects from './projects.json';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from 'next/image'
import next from "next";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function Works(){
    
    useEffect(() => {
        let ctx = gsap.context(() =>{
            gsap.registerPlugin(ScrollTrigger);
            let photos = document.querySelectorAll(".photo")
            let projectName = document.querySelectorAll(".projectname")
            let description = document.querySelectorAll(".descriptions")
            let links = document.querySelectorAll(".link")
            let arrows = document.querySelectorAll(".arrow")

            const animation = gsap.timeline()
            .set([photos[0], description[0], links[0]], {opacity: 1, scale:1},0)
            .set(projectName[0], {color:"#F9DEC1"}, 0)
            .set(arrows[0], {scale: 1}, 0)
            

            ScrollTrigger.create({
                trigger:".gallery",
                start: "top top",
                end:"bottom bottom",
                pin:".right",
                animation: animation,
                markers: false,
                snap: 1 / (projectName.length - 1)
            })

            
            projectName.forEach((projectlist, i ) => {
                let currentIndex = i
                let next = (currentIndex < projectName.length ? i + 1 : i)

                const animation = gsap.timeline()
                    
                    .set(photos[next], { yPercent:-200, scale: 1,}, 0)
                    .to(photos[i], {xPercent: 100, scale: 0, opacity:0, duration: 5 }, ) 
                    .to(photos[next], { yPercent:0, scale: 1, duration: 10}, 5)
                    
                    .set(description[next], {xPercent:-200, opacity:1, scale: 1}, 0)
                    .to(description[i], {xPercent: -200, opacity: 0, scale: 0, duration: 5}, 0)
                    .to(description[next], {xPercent:0, opacity:1, scale: 1, stagger: 3, delay: 5,duration: 10}, 5)
                    
                    .set(links[next], {yPercent:-50, opacity:0, scale: 0}, 0)
                    .to(links[i], {xPercent:200,opacity: 0, scale: 0, duration:5},0)
                    .to(links[next], {yPercent: 0, opacity:1,scale: 1, duration: 10, delay: 5}, 5)
                    
                    .set(projectName[next], {color:"#48443f"}, 0)
                    .to(projectName[i], {color:"#48443f", duration:5},0)
                    .to(projectName[next], {color:"#F9DEC1", duration: 10, delay: 5}, 5)

                    .set(arrows[next], {scale: 0}, 0)
                    .to(arrows[i], {scale: 0, duration:10 },0)
                    .to(arrows[next], {scale: 1, duration: 10, delay: 5}, 5)
                
                ScrollTrigger.create({
                    trigger: projectName[i],
                    start:"top top",
                    end:"bottom 10%",
                    animation: animation,
                    scrub: 1,
                    markers: false,
                })


            })

        })
        return () => ctx.revert();
    }, [])

   
    

    return(
        <div id='works' className="w-full bg-[#131217] mt-[200px] relative">
            <div className="-skew-y-6 lg:-skew-y-3 bg-[#131217] -translate-y-[100px] relative">
                <div className="z-20">
                    <h5 className="items-center flex justify-end font-bold text-[#F9DEC1] text-6xl sm:text-8xl">WORKS</h5>
                </div>
                <div className="-translate-y-[50px]">
                    <Marquee direction="right" autoFill={true} className="absolute -z-10 overflow-hidden">
                        <h1 className="p-3 font-bold text-[#8B5A26] blur-sm text-3xl sm:text-6xl -z-10">WORKS</h1>
                    </Marquee>
                </div>
            </div>

            <div className="flex bg-[#131217] box">     
                <div className="flex flex-col gallery justify-center w-1/2 text-center py-[30vh]">
                    {projects.map(project => (
                        <div className="projectname min-h-[40vh] content-center snap-start text-[#F9DEC1]">
                            <div key={project.id} id={`project${project.id}`} className=" text-6xl flex justify-center items-center"><BsArrowRightSquareFill className="arrow text-6xl text-[#F9DEC1] mr-10"/><h1>{project.name}</h1></div>
                        </div>
                    ))}
                </div>


                
                
                <div className="w-1/2 right relative max-h-[2000px] overflow-hidden">
                    {projects.map(project =>(
                        <div className="px-[5%] pt-[20%] absolute flex flex-col justify-center items-center">
                            <div className="p-1 w-fill overflow-hidden">
                                <div className="photo">
                                    <a className="" href=""><img src="/image 1.png" alt=""  className="object-contain w-screen" /></a>
                                </div>
                            </div>
                            <div className="w-full flex justify-between px-[5%] py-[2%]">
                                <div className="text-m descriptions">
                                    <div className="flex mb-10">
                                        {project.language.map(languages => (
                                            <img src={`./static/icons/${languages}.png`} alt={languages} className="mx-1 h-auto w-[8px] sm:w-[12px] md:w-[16px] lg:w-[32px] xl:w[64px]"/>
                                        ))}
                                    </div>
                                    <p>{project.description}</p>
                                </div>
                                <div className="text-2xl link">
                                    <a href={project.link}>Visit</a>
                                </div>
                            </div>
                        </div> 
                    ))}
                                        
                </div>
            </div>
            <div className='absolute w-full bg-[#131217] -translate-y-44 h-96'>

            </div>
        </div>
        
    )
}