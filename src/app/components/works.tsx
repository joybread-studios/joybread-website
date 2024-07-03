import Marquee from "react-fast-marquee";

export default function Works(){
    return(
        <div className="w-full ">

            <div className="-skew-y-6 lg:-skew-y-3 bg-[#131217]">
                <div className="z-20">
                    <h5 className="items-center flex justify-end font-bold text-[#F9DEC1] text-6xl sm:text-8xl">WORKS</h5>
                </div>
                <div className="-translate-y-[50px] z-10">
                    <Marquee direction="right" autoFill={true}>
                        <h1 className="p-3 mb-10 font-bold text-[#8B5A26] blur-sm text-3xl sm:text-6xl ">WORKS</h1>
                    </Marquee>
                </div>
                
                
            </div>

        </div>
        
    )
}