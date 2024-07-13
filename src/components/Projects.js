import React from 'react';
import Work1 from '../works/poster2.jpg';
import Work2 from '../works/work5.jpg';
import Work3 from '../works/work2.jpg';
import Work4 from '../works/totebagdesign.png';
import Work5 from '../works/work3.jpg';
import Work6 from '../works/milkteaposter.jpg';
import Work7 from '../works/esportdesign.jpg';
import Work8 from '../works/work4.jpg';
import Work9 from '../works/work1.jpg';
import Work10 from '../works/work6.jpg';
import DromicSystem1 from '../images/DROMICSystem/DromicSystem1.png';
import DromicSystem2 from '../images/DROMICSystem/DromicSystem2.png';
import DromicSystem3 from '../images/DROMICSystem/DromicSystem3.png';
import DromicSystem4 from '../images/DROMICSystem/DromicSystem4.png';
import DromicSystem5 from '../images/DROMICSystem/DromicSystem5.png';
import ExtenAlertSystem1 from '../images/ExtenAlertSystem/ExtenAlertSystem1.png';
import ExtenAlertSystem2 from '../images/ExtenAlertSystem/ExtenAlertSystem2.png';
import ExtenAlertSystem3 from '../images/ExtenAlertSystem/ExtenAlertSystem3.png';
import ExtenAlertSystem4 from '../images/ExtenAlertSystem/ExtenAlertSystem4.png';
import ExtenAlertSystem5 from '../images/ExtenAlertSystem/ExtenAlertSystem5.png';
import ExtenAlertSystem6 from '../images/ExtenAlertSystem/ExtenAlertSystem6.png';
import ExtenAlertSystem7 from '../images/ExtenAlertSystem/ExtenAlertSystem7.png';
import ExtenAlertAdmin1 from '../images/ExtenAlertAdmin/ExtenAlertAdmin1.png';
import ExtenAlertAdmin2 from '../images/ExtenAlertAdmin/ExtenAlertAdmin2.png';
import ExtenAlertAdmin3 from '../images/ExtenAlertAdmin/ExtenAlertAdmin3.png';
import ExtenAlertAdmin4 from '../images/ExtenAlertAdmin/ExtenAlertAdmin4.png';
import ExtenAlertAdmin5 from '../images/ExtenAlertAdmin/ExtenAlertAdmin5.png';
import AldreichPortfolio1 from '../images/AldreichPortfolio/AldreichPortfolio1.png'; 
import AldreichPortfolio2 from '../images/AldreichPortfolio/AldreichPortfolio2.png'; 
import AldreichPortfolio3 from '../images/AldreichPortfolio/AldreichPortfolio3.png';
import AldreichPortfolio4 from '../images/AldreichPortfolio/AldreichPortfolio4.png';
import AldreichPortfolio5 from '../images/AldreichPortfolio/AldreichPortfolio5.png';
import AGB1 from '../images/AGB/AGB1.png';
import AGB2 from '../images/AGB/AGB2.png';
import AGB3 from '../images/AGB/AGB3.png';
import AGB4 from '../images/AGB/AGB4.png';
import AGB5 from '../images/AGB/AGB5.png';
import AGB6 from '../images/AGB/AGB6.png';
import AGB7 from '../images/AGB/AGB7.png';
import Skwelahome1 from '../images/Skwelahome/Skwelahome1.png';
import Skwelahome2 from '../images/Skwelahome/Skwelahome2.png';
import Skwelahome3 from '../images/Skwelahome/Skwelahome3.png';
import Skwelahome4 from '../images/Skwelahome/Skwelahome4.png';
import Skwelahome5 from '../images/Skwelahome/Skwelahome5.png';
import Skwelahome6 from '../images/Skwelahome/Skwelahome6.png';
import Skwelahome7 from '../images/Skwelahome/Skwelahome7.png';
import Skwelahome8 from '../images/Skwelahome/Skwelahome8.png';
import Skwelahome9 from '../images/Skwelahome/Skwelahome9.png';
import Skwelahome10 from '../images/Skwelahome/Skwelahome10.png';
import Skwelahome11 from '../images/Skwelahome/Skwelahome11.png';
import Skwelahome12 from '../images/Skwelahome/Skwelahome12.png';
import Skwelahome13 from '../images/Skwelahome/Skwelahome13.png';
import Skwelahome14 from '../images/Skwelahome/Skwelahome14.png';
import Skwelahome15 from '../images/Skwelahome/Skwelahome15.png';
import Skwelahome16 from '../images/Skwelahome/Skwelahome16.png';
import Skwelahome17 from '../images/Skwelahome/Skwelahome17.png';
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Projects() {
    const DromicGithub = () => {
        window.open('https://github.com/aldreichh/DSWDDromic.git', '_blank'); 
    };
    const ExtenAlertGithub = () => {
        window.open('https://github.com/aldreichh/Extenalert.git', '_blank'); 
    };
    const ExtenAlertAdminGithub = () => {
        window.open('https://github.com/aldreichh/ExtenAlert-Admin.git', '_blank'); 
    };
    const AldreichPortfolioGithub = () => {
        window.open('https://github.com/aldreichh/aldreich-final-portfolio.git', '_blank'); 
    };
    const AGBGithub = () => {
        window.open('https://github.com/aldreichh/AGB.git', '_blank'); 
    };
    const SkwelahomeGithub = () => {
        window.open('https://github.com/aldreichh/Skwelahome.git', '_blank'); 
    };

    return (
      <section className="flex-col justify-center h-full xl:w-[1280px] xl:mx-auto mx-10">
        <div className="justify-center items-center flex p-10 text-center">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-slate-700" data-aos="fade-up">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-cyan-900" data-aos="fade-up">Graphics Design</p>
            </div>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work1} alt="Work 1" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work2} alt="Work 2" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work3} alt="Work 3" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work4} alt="Work 4" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work5} alt="Work 5" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work6} alt="Work 6" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
        </div>

        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work7} alt="Work 7" className="shadow-md h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work8} alt="Work 8" className="shadow-md h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work9} alt="Work 9" className="shadow-md h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work10} alt="Work 10" className="shadow-md h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
        </div>


        <div className="justify-center items-center flex p-10 mt-24 text-center">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-slate-700" data-aos="fade-up">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-cyan-900" data-aos="fade-up">Video Editing</p>
            </div>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="p-2 flex justify-center items-center" data-aos="fade-up">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px'}}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=PrdN0h601Cw' width="100%" height="100%"/>
                </Box>
            </div>
            <div className="p-2 flex justify-center items-center" data-aos="fade-up">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=0Ev6Dh4XaKc' width="100%" height="100%" />
                </Box>
            </div>
            <div className="p-2 flex justify-center items-center" data-aos="fade-up"> 
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=8og1edPcUsQ' width="100%" height="100%"/>
                </Box>
            </div>
            <div className="p-2 flex justify-center items-center" data-aos="fade-up">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=R3hnaYYYCoQ' width="100%" height="100%"/>
                </Box>
            </div>
        </div>

        <div className="justify-center items-center flex p-10 mt-24 text-center">
            <div className="flex-col">
            <p className="flex justify-center text-xl text-slate-700" data-aos="fade-up">Projects</p>
            <p className="flex justify-center text-4xl font-semibold text-cyan-900" data-aos="fade-up">Web Development</p>
            </div>
        </div>
        <div className="grid gap-8
            grid-cols-1
            lg:grid-cols-2">
            <div className="border flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={DromicSystem1} alt="DromicSystem1"/>
                    <img src={DromicSystem2} alt="DromicSystem2"/>
                    <img src={DromicSystem3} alt="DromicSystem3"/>
                    <img src={DromicSystem4} alt="DromicSystem4"/>
                    <img src={DromicSystem5} alt="DromicSystem5"/>
                </Carousel>
                <p className="mt-4 text-xl text-slate-700">Dromic System | OJT Project</p>
                <button
                    onClick={DromicGithub}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={ExtenAlertSystem1} alt="ExtenAlertSystem1"/>
                    <img src={ExtenAlertSystem2} alt="ExtenAlertSystem2"/>
                    <img src={ExtenAlertSystem3} alt="ExtenAlertSystem3"/>
                    <img src={ExtenAlertSystem4} alt="ExtenAlertSystem4"/>
                    <img src={ExtenAlertSystem5} alt="ExtenAlertSystem5"/>
                    <img src={ExtenAlertSystem6} alt="ExtenAlertSystem6"/>
                    <img src={ExtenAlertSystem7} alt="ExtenAlertSystem7"/>
                </Carousel>
                <p className="mt-4 text-xl text-slate-700">ExtenAlert! Browser Extension | Capstone Project</p>
                <button
                    onClick={ExtenAlertGithub}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={ExtenAlertAdmin1} alt="ExtenAlertAdmin1"/>
                    <img src={ExtenAlertAdmin2} alt="ExtenAlertAdmin2"/>
                    <img src={ExtenAlertAdmin3} alt="ExtenAlertAdmin3"/>
                    <img src={ExtenAlertAdmin4} alt="ExtenAlertAdmin4"/>
                    <img src={ExtenAlertAdmin5} alt="ExtenAlertAdmin5"/>
                </Carousel>
                <p className="mt-4 text-xl text-slate-700">ExtenAlert! Admin View | Capstone Project</p>
                <button
                    onClick={ExtenAlertAdminGithub}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={AldreichPortfolio1} alt="AldreichPortfolio1"/>
                    <img src={AldreichPortfolio2} alt="AldreichPortfolio2"/>
                    <img src={AldreichPortfolio3} alt="AldreichPortfolio3"/>
                    <img src={AldreichPortfolio4} alt="AldreichPortfolio4"/>
                    <img src={AldreichPortfolio5} alt="AldreichPortfolio5"/>
                </Carousel>
                <p className="mt-4 text-xl text-slate-700">Website Portfolio</p>
                <button
                    onClick={AldreichPortfolioGithub}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={AGB1} alt="AGB1"/>
                    <img src={AGB2} alt="AGB2"/>
                    <img src={AGB3} alt="AGB3"/>
                    <img src={AGB4} alt="AGB4"/>
                    <img src={AGB5} alt="AGB5"/>
                    <img src={AGB6} alt="AGB6"/>
                    <img src={AGB7} alt="AGB7"/>
                </Carousel>
                <p className="mt-4 text-xl text-slate-700">AGB Inventory System</p>
                <button
                    onClick={AGBGithub}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={Skwelahome1} alt="Skwelahome1"/>
                    <img src={Skwelahome2} alt="Skwelahome2"/>
                    <img src={Skwelahome3} alt="Skwelahome3"/>
                    <img src={Skwelahome4} alt="Skwelahome4"/>
                    <img src={Skwelahome5} alt="Skwelahome5"/>
                    <img src={Skwelahome6} alt="Skwelahome6"/>
                    <img src={Skwelahome7} alt="Skwelahome7"/>
                    <img src={Skwelahome8} alt="Skwelahome8"/>
                    <img src={Skwelahome9} alt="Skwelahome9"/>
                    <img src={Skwelahome10} alt="Skwelahome10"/>
                    <img src={Skwelahome11} alt="Skwelahome11"/>
                    <img src={Skwelahome12} alt="Skwelahome12"/>
                    <img src={Skwelahome13} alt="Skwelahome13"/>
                    <img src={Skwelahome14} alt="Skwelahome14"/>
                    <img src={Skwelahome15} alt="Skwelahome15"/>
                    <img src={Skwelahome16} alt="Skwelahome16"/>
                    <img src={Skwelahome17} alt="Skwelahome17"/>
                </Carousel>
                <p className="mt-4 text-xl text-slate-700">Skwelahome LMS</p>
                <button
                    onClick={SkwelahomeGithub}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
        </div>
      </section>
    );
  }
  
export default Projects;