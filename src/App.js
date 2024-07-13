import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Apps from './components/Apps';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 700, 
        easing: 'ease-in-out', 
        once: true,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);
  
  return (
    <>
    <Navbar/>
    <div className="flex-col flex justify-center items-center font-montserrat overflow-x-hidden">
      <Element name="home" className="xl:w-[1280px] w-screen">
          <Home/>
      </Element>
      <Element name="about" className="w-screen h-full">
          <About/>
      </Element>
      <Element name="apps" className="my-24 w-screen h-full bg-slate-200">
          <Apps/>
      </Element>
      <Element name="projects" className="w-screen h-full">
          <Projects/>
      </Element>
      <Element name="contact" className="xl:w-[1280px] w-screen h-full">
          <Contact/>
      </Element >
      <Footer className="w-screen h-full bg-slate-200"
      />
    </div>
    </>
  );
}

export default App;
