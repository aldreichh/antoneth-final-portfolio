import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Apps from './components/Apps';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className="flex-col flex justify-center items-center h-vh font-montserrat overflow-x-hidden">
      <Element name="home" className="xl:w-[1280px] w-screen">
          <Home/>
      </Element>
      <Element name="about" className="xl:w-[1280px] w-screen h-full">
          <About/>
      </Element>
      <Element name="apps" className="xl:w-[1280px] w-screen h-full">
          <Apps/>
      </Element>
      <Element name="projects" className="xl:w-[1280px] w-screen h-full">
          <Projects/>
      </Element>
      <Element name="contact" className="xl:w-[1280px] w-screen h-full">
          <Contact/>
      </Element >
      <Footer className="xl:w-[1280px] w-screen h-full"
      />
    </div>
    </>
  );
}

export default App;
