import { useRef } from "react";
import onScreen from "../hooks/onScreen";

interface AboutComponentProps{
    title: string;
    text: string;
    isMobile: boolean;
    isBigScreen: boolean;
    reverse?: boolean;
}

const AboutComponent : React.FC<AboutComponentProps> = ({title, text, isMobile, isBigScreen, reverse = false}) => {
    const ref = useRef(null);
    const isVisible = onScreen(ref);
    
    return (
        <div ref={ref} className='flex flex-col w-2/3 sm:w-1/2 items-center'>
            <p className={`text-2xl sm:text-4xl 2xl:text-5xl font-bold flex transition duration-1000 ease-in-out ${isVisible ? `${isMobile ? '' : (reverse ? 'translate-x-12' : '-translate-x-12')}` : (reverse ? 'text-end translate-x-[200%]' : 'text-start -translate-x-[200%]')}`}>{title}</p>
            <p className={`text-sm sm:text-base 2xl:text-xl text-[#B8A38D] text-justify transition duration-1000 ease-in-out ${isVisible ? '' : (reverse ? 'text-end translate-x-[200%]' : 'text-start -translate-x-[200%]')}`}>{text}</p>
        </div>
    )
}

export default AboutComponent