import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./sections/about-us";
import Intro from "./sections/intro";

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Intro/>
      <AboutUs/>
      <Footer />
    </div>
  );
}
