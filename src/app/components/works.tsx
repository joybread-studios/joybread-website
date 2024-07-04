import Marquee from "react-fast-marquee";
import projects from './projects.json';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Works(){
    

        // gsap.registerPlugin(ScrollTrigger);
        
        // gsap.set(".projectphoto:not(:first-child)", {opacity: 0, scale: 0.5})

        // const animation = gsap.to(".projectphoto:not(:first-child)", {
        //     opacity:1, scale: 1, duration:1, stagger:1
        // })

        // ScrollTrigger.create({
        //     trigger:".gallery",
        //     start:"top top",
        //     end: "bottom bottom",
        //     pin: ".right",
        //     animation:animation,
        //     scrub:true,
        //     markers:true
        // })
    useEffect(() => {
        let ctx = gsap.context(() =>{
            gsap.registerPlugin(ScrollTrigger);
            let photos = document.querySelectorAll(".photo")
            let nextPhotos = document.querySelectorAll(".photo:not(:first-child)")
            let projectName = document.querySelectorAll(".projectname")

            const animation = gsap.timeline()
            .set(photos[0], {opacity: 1, scale:1})

            ScrollTrigger.create({
                trigger:".gallery",
                start: "top top",
                end:"bottom bottom",
                pin:".right",
                animation: animation,
                markers: false,
            })
            projectName.forEach((projectlist, index) => {
                console.log(projectName)
                const animation = gsap.timeline()
                    .set(nextPhotos[index], { xPercent:100, scale: 1})
                    .to(photos[index], {scale: 0, opacity:0})   
                    .to(nextPhotos[index], { xPercent:0, scale: 1})
                    
                ScrollTrigger.create({
                    trigger: projectName[index],
                    start:"50% 30%",
                    end:"bottom top",
                    animation: animation,
                    scrub: 1,
                    markers: false,
                })
            })

        })
        return () => ctx.revert();
    }, [])

   
    

    return(
        <div className="w-full bg-[#131217] mt-[200px] relative">
            <div className="-skew-y-6 lg:-skew-y-3 bg-[#131217] -translate-y-[100px] relative">
                <div className="z-20">
                    <h5 className="items-center flex justify-end font-bold text-[#F9DEC1] text-6xl sm:text-8xl">WORKS</h5>
                </div>
                <div className="-translate-y-[50px]">
                    <Marquee direction="right" autoFill={true} className="absolute -z-10 overflow-hidden">
                        <h1 className="p-3 mb-10 font-bold text-[#8B5A26] blur-sm text-3xl sm:text-6xl -z-10">WORKS</h1>
                    </Marquee>
                </div>
            </div>

            <div className="flex my-[100px] bg-[#131217]">
                
                <div className="flex flex-col gallery justify-center w-1/2 text-center">
                    {projects.map(project => (
                        <div className="projectname min-h-screen content-center">
                            <div key={project.id} id={`project${project.id}`} className="text-6xl"><h1>{project.name}</h1></div>
                        </div>
                    ))}
                </div>


                <div className="w-1/2 right relative max-h-[2000px] overflow-hidden">
                    {projects.map(project =>(
                        <div className="photo px-[5%] pt-[20%] absolute flex flex-col justify-center items-center ">
                            <div className="">
                            <a className="" href=""><img src="/image 1.png" alt=""  className="object-contain w-screen" /></a>
                            </div>
                            <div className="w-full flex justify-between px-[5%] py-[2%]">
                                <div className="text-m"><h1>mga bagay bagay</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dicta eius praesentium nisi minus delectus ratione! Doloribus qui quam, architecto animi cupiditate reiciendis exercitationem aut corrupti placeat unde id corporis. euphoria</p></div>
                                <div className="text-2xl"><a href="">Visit</a></div>
                            </div>
                        </div> 
                    ))}
                                        
                </div>
            </div>

        </div>
        
    )
}