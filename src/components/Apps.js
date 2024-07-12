import PhotoshopLogo from '../images/Logo/PhotoshopLogo.png';
import VegasProLogo from '../images/Logo/VegasProLogo.png';
import CanvaLogo from '../images/Logo/CanvaLogo.png';
import ReactJSLogo from '../images/Logo/ReactJSLogo.png';
import HTMLLogo from '../images/Logo/HtmlLogo.png';
import TailwindCSSLogo from '../images/Logo/TailwindCSSLogo.png';

function Apps(){
    return(
    <>
    <div className="h-full flex flex-col justify-center items-center space-y-10 overflow-auto py-28">
        <div className="justify-center items-center flex">
          <div className="flex-col">
            <p className="flex justify-center text-xl text-slate-700">Apps</p>
            <p className="flex justify-center text-4xl font-semibold text-cyan-900">Used Technologies</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8 text-slate-700">
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto">
                <img src={PhotoshopLogo} alt="Photoshop Logo" className="h-16 object-contain rounded-md"/>
                <label className="text-lg">Photoshop</label>
            </div> 
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto">
                <img src={VegasProLogo} alt="Vegas Pro Logo" className="h-16 object-contain rounded-md"/>
                <label className="text-lg">Vegas Pro</label>
            </div>        
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={CanvaLogo} alt="Canva Logo" className="h-16 object-contain rounded-md"/>
                <label className="text-lg">Canva</label>
            </div>          
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={ReactJSLogo} alt="React Logo" className="h-16 object-contain rounded-md"/>
                <label className="text-lg">React</label>
            </div>      
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={HTMLLogo} alt="HTML Logo" className="h-16 object-contain rounded-md"/>
                <label className="text-lg">HTML</label>
            </div>    
            <div className="flex flex-col items-center justify-center space-y-2 w-1/2 lg:w-auto mt-8 lg:mt-0">
                <img src={TailwindCSSLogo} alt="Tailwind CSS Logo" className="h-16 object-contain rounded-md"/>
                <label className="text-lg">Tailwind CSS</label>
            </div>                        
        </div>
    </div>
    </>
    );
}

export default Apps;