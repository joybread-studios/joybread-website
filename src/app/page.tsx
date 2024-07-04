'use client'
import { useState, useEffect } from "react";
import Footer from "./components/footer";
import HireUs from "./sections/hireus";
import Header from "./components/header";
import AboutUs from "./sections/about-us";
import Intro from "./sections/intro";
import Works from "./components/works";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const imageTimer = setTimeout(() => {
      setImageLoaded(true); // Set imageLoaded to true after 100ms delay
  }, 500);

    const hidden = setTimeout(() => {
      setHidden(false);
    }, 3000)

    return () => {
      clearTimeout(timer);
      clearTimeout(imageTimer);
      clearTimeout(hidden);
    }
  }, []);

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
    <ParallaxProvider>
      <div className={`w-full h-full ${isLoading ? 'overflow-y-hidden' : ''} ${hidden ? '' : 'overflow-y-visible'}`}>
        <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity ease-out duration-1000 ${isLoading ? 'opacity-1' : 'opacity-0'} ${hidden ? '' : 'hidden overflow-visible'}`}>
            <Image src="/JOYBREADLOGO.png" alt="Splash Screen Image" height={isMobile ? 250 : (isBigScreen ? 600 : 350)} width={isMobile ? 250 : (isBigScreen ? 600 : 350)} className={`transition-opacity ease-out duration-500 ${imageLoaded ? 'opacity-1' : 'opacity-0'}`}/>
        </div>
        <Header />
        <Intro />
        <Works />
        <AboutUs />
        <HireUs />
        <Footer />
      </div>

    </ParallaxProvider>
  );
}
