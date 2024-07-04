import Image from 'next/image'
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee'
import { useParallax } from 'react-scroll-parallax';

export default function Intro(){
    const {ref} = useParallax<HTMLDivElement>({
        translateY: [-200, 200]
    })
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

    const marquee = () => {
        return <Marquee className='relative w-full h-full -z-10 overflow-hidden' autoFill={true}>
                <Image src='/image 1.png' alt='placeholder' height={isMobile ? 400 : 600} width={isMobile ? 400 : 600} className='blur-sm object-contain'/>
                <Image src='/image 3.png' alt='placeholder 2' height={isMobile ? 300 : 400} width={isMobile ? 300 : 400} className='blur-sm object-contain'/>
            </Marquee>
    }
    
    return (
        <div ref={ref} className='w-full h-screen mb-8 flex justify-center items-center -z-20'>
            <Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={isMobile ? 250 : (isBigScreen ? 600 : 350)} width={isMobile ? 250 : (isBigScreen ? 600 : 350)} className='absolute -z-20'/>
            <div className='relative w-screen h-5/6'>
                
            </div>
        </div>
    )
}