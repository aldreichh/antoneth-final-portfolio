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
import AldreihcPortfolio from '../images/AldreichPortfolio.png'; 
import DromicSystem from '../images/DromicSystem.png';
import ExtenAlertSystem from '../images/ExtenAlertSystem.png';
import ExtenAlertAdmin from '../images/ExtenAlertAdmin.png';
import ReactPlayer from 'react-player'
import React from 'react';
import Box from '@mui/material/Box';

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
    
    return (
      <section className="flex-col justify-center h-full xl:w-[1280px] xl:mx-auto mx-10">
        <div className="justify-center items-center flex p-10">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-slate-700">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-cyan-900">Graphics Design</p>
            </div>
        </div>
        <div className="grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3">
            <div className="border p-2 flex justify-center items-center">
                <img src={Work1} alt="Work 1" className="h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work2} alt="Work 2" className="h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work3} alt="Work 3" className="h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work4} alt="Work 4" className="h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work5} alt="Work 5" className="h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work6} alt="Work 6" className="h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
        </div>

        <div className="mt-8 grid gap-8
            grid-cols-1
            sm:grid-cols-2">
            <div className="border p-2 flex justify-center items-center">
                <img src={Work7} alt="Work 7" className="h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work8} alt="Work 8" className="h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work9} alt="Work 9" className="h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border p-2 flex justify-center items-center">
                <img src={Work10} alt="Work 10" className="h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
        </div>


        <div className="justify-center items-center flex p-10 mt-24">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-slate-700">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-cyan-900">Video Editing</p>
            </div>
        </div>
        <div className="grid gap-5
            grid-cols-1
            sm:grid-cols-2">
            <div className="p-2 flex justify-center items-center">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px'}}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=PrdN0h601Cw' width="100%" height="100%"/>
                </Box>
            </div>
            <div className="p-2 flex justify-center items-center">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=0Ev6Dh4XaKc' width="100%" height="100%" />
                </Box>
            </div>
            <div className="p-2 flex justify-center items-center">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=8og1edPcUsQ' width="100%" height="100%"/>
                </Box>
            </div>
            <div className="p-2 flex justify-center items-center">
                <Box sx={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', p: 0, width: '600px', height: '400px' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=R3hnaYYYCoQ' width="100%" height="100%"/>
                </Box>
            </div>
        </div>


        <div className="justify-center items-center flex p-10 mt-24">
            <div className="flex-col">
            <p className="flex justify-center text-xl text-slate-700">Projects</p>
            <p className="flex justify-center text-4xl font-semibold text-cyan-900">Web Development</p>
            </div>
        </div>
        <div className="grid gap-8
            grid-cols-1
            lg:grid-cols-2">
            <div className="border flex justify-center items-center flex-col p-4">
                <img src={DromicSystem} alt="Work 6" className="object-fill transform transition-transform duration-300 hover:scale-110"/>
                <p className="mt-4 text-xl text-slate-700">Dromic System | OJT Project</p>
                <button
                    onClick={DromicGithub}
                    type="submit"
                    className="mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4">
                <img src={ExtenAlertSystem} alt="Work 6" className="object-fill transform transition-transform duration-300 hover:scale-110"/>
                <p className="mt-4 text-xl text-slate-700">ExtenAlert! Browser Extension | Capstone Project</p>
                <button
                    onClick={ExtenAlertGithub}
                    type="submit"
                    className="mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4">
                <img src={ExtenAlertAdmin} alt="Work 6" className="object-fill transform transition-transform duration-300 hover:scale-110"/>
                <p className="mt-4 text-xl text-slate-700">ExtenAlert! Admin View | Capstone Project</p>
                <button
                    onClick={ExtenAlertAdminGithub}
                    type="submit"
                    className="mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
            <div className="border flex justify-center items-center flex-col p-4">
                <img src={AldreihcPortfolio} alt="Work 6" className="object-fill transform transition-transform duration-300 hover:scale-110 "/>
                <p className="mt-4 text-xl text-slate-700">Website Portfolio</p>
                <button
                    onClick={AldreichPortfolioGithub}
                    type="submit"
                    className="mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Github Link    
                </button>
            </div>
        </div>
      </section>
    );
  }
  
export default Projects;