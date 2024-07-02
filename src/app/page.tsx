import Footer from "./components/footer";
import HireUs from "./sections/hireus";
import Header from "./components/header";
import Intro from "./sections/intro";

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Intro/>
      <Footer />
    </div>
  );
}
