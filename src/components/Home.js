import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);
    return (
    <section className="flex justify-center items-center h-full">
        <div className="flex-col w-full xl:pt-48 xl:pb-40 pt-32 pb-16 rounded-2xl">
            <div className="h-96 flex-col flex justify-center items-center py-56 bg-slate-200 xl:mx-0 sm:mx-10 md:mx-10">
                <div className="text-center" data-aos="fade-up">
                    <p className="text-7xl font-bold">
                        <span className="text-slate-700">John </span>
                        <span className="text-cyan-900">Aldreich </span>
                        <span className="text-slate-700">Rosales</span>
                    </p>
                </div>
                <div className="mt-2 flex items-center justify-center" data-aos="fade-up">
                    <div className="w-3/4 md:w-full">
                        <p className="text-xl h-14 flex items-center justify-center text-center text-slate-700 space-x-3">
                            <span>Video Editor</span>
                            <span>•</span>
                            <span>Photo Editor</span>
                            <span>•</span>
                            <span>UI/UX Designer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
  
  export default Home;