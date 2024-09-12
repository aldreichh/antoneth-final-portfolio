import React from 'react';
import PhotoshopLogo from '../images/Logo/PhotoshopLogo.png';
import VegasProLogo from '../images/Logo/VegasProLogo.png';
import CanvaLogo from '../images/Logo/CanvaLogo.png';
import ReactJSLogo from '../images/Logo/ReactJSLogo.png';
import HTMLLogo from '../images/Logo/HtmlLogo.png';
import TailwindCSSLogo from '../images/Logo/TailwindCSSLogo.png';
import PremiereProLogo from '../images/Logo/PremiereProLogo.png';
import CSSLogo from '../images/Logo/CSSLogo.png';

function Apps(){
    return(
    <>
    <div className="h-full flex flex-col justify-center items-center space-y-10 overflow-auto py-28">
        <div className="justify-center items-center flex">
          <div className="flex-col">
            <p className="flex justify-center text-xl text-slate-700" data-aos="fade-up">Apps</p>
            <p className="flex justify-center text-4xl font-semibold text-cyan-900" data-aos="fade-up">Used Technologies</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-9 text-slate-700">
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto">
                <img src={PhotoshopLogo} alt="Photoshop Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">Photoshop</label>
            </div> 
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto">
                <img src={VegasProLogo} alt="Vegas Pro Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">Vegas Pro</label>
            </div>        
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={PremiereProLogo} alt="Premiere Pro Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">Premiere Pro</label>
            </div>     
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={CanvaLogo} alt="Canva Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">Canva</label>
            </div>          
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={ReactJSLogo} alt="React Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">ReactJS</label>
            </div>      
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={HTMLLogo} alt="HTML Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">HTML</label>
            </div>    
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={CSSLogo} alt="CSS Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">CSS</label>
            </div>    
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={TailwindCSSLogo} alt="Tailwind CSS Logo" className="h-16 object-contain rounded-md" data-aos="fade-up"/>
                <label className="text-lg" data-aos="fade-up">Tailwind CSS</label>
            </div>                                  
        </div>
    </div>
    </>
    );
}

export default Apps;