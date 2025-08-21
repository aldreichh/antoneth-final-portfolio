import React from 'react';
import KajabiLogo from '../images/Logo/KajabiLogo.png';
import ClickFunnels from '../images/Logo/clickfunnelsLogo.jpg';
import CanvaLogo from '../images/Logo/CanvaLogo.png';
import SquareSpace from '../images/Logo/squarespaceLogo.png';
import CapCut from '../images/Logo/capcutLogo.jpg';
import ZendeskLogo from '../images/Logo/zendeskLogo.png';
import Asana from '../images/Logo/AsanaLogo.png';

function Apps() {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-14 overflow-auto py-28 bg-gradient-to-b from-pink-50 via-rose-50 to-orange-50 rounded-2xl shadow-sm">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <p className="text-lg md:text-xl text-rose-400 tracking-wide" data-aos="fade-up">
          Apps
        </p>
        <p 
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Used Technologies
        </p>
      </div>

      {/* Apps Grid */}
      <div className="flex flex-wrap lg:flex-nowrap lg:space-x-10 gap-10 lg:gap-0 text-slate-700 justify-center items-center">
        
        {[
          { img: KajabiLogo, label: "Kajabi" },
          { img: ClickFunnels, label: "ClickFunnels" },
          { img: Asana, label: "Asana" },
          { img: SquareSpace, label: "Square Space" },
          { img: ZendeskLogo, label: "Zendesk" },
          { img: CanvaLogo, label: "Canva" },
          { img: CapCut, label: "CapCut" },
        ].map((app, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center space-y-3 w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <img 
              src={app.img} 
              alt={`${app.label} Logo`} 
              className="h-12 md:h-14 object-contain"
            />
            <label className="text-sm md:text-base font-medium text-slate-600">
              {app.label}
            </label>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Apps;
