'use client'
import { useState, useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./sections/about-us";
import Intro from "./sections/intro";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const imageTimer = setTimeout(() => {
      setImageLoaded(true); // Set imageLoaded to true after 100ms delay
  }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(imageTimer);
    }
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(false);
	const checkIfMobile = () => {
		if(window.innerWidth < 640) setIsMobile(true);
		else setIsMobile(false);
	}

	useEffect(() => {
		window.addEventListener('resize', checkIfMobile);
		return (() => {
			window.removeEventListener('resize', checkIfMobile);
		})
	}, [isMobile]);


  return (
    <ParallaxProvider>
      <div className="w-full h-full">
      <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity ease-out duration-1000 ${isLoading ? 'opacity-1' : 'opacity-0 hidden'}`}>
          <Image src="/JOYBREADLOGO.png" alt="Splash Screen Image" height={isMobile ? 350 : 250} width={isMobile ? 350 : 250} className={`transition-opacity ease-out duration-500 ${imageLoaded ? 'opacity-1' : 'opacity-0'}`}/>
      </div>
      <Header />
      <Intro />
      <AboutUs />
      <Footer />
    </div>
    </ParallaxProvider>
  );
}
