import { Link } from 'react-scroll';
import React, { useState } from 'react';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
    <>
    <nav className="bg-white shadow-sm w-screen fixed z-50">
        <div className="items-center w-screen xl:w-[1280px] flex m-auto h-16 font-montserrat">
            <div className="w-1/4 text-start text-xl text-cyan-900 xl:pl-0 pl-10">
                <h1 className="text-2xl font-bold">ALD</h1>
            </div>
            <div className="w-3/4 text-end text-md space-x-10 text-slate-700 hidden md:block xl:pr-5 pr-16">
                <Link to="home" spy={true} smooth={true} duration={700} className="cursor-pointer hover:text-cyan-900">
                    Home
                </Link>
                <Link to="about" spy={true} smooth={true} duration={700} offset={-150} className="cursor-pointer hover:text-cyan-900">
                    About
                </Link>
                <Link to="apps" spy={true} smooth={true} duration={700} offset={-50} className="cursor-pointer hover:text-cyan-900">
                    Apps
                </Link>
                <Link to="projects" spy={true} smooth={true} duration={700} offset={-100} className="cursor-pointer hover:text-cyan-900">
                    Projects
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={700} className="cursor-pointer hover:text-cyan-900">
                    Contact
                </Link>
            </div>
            <div className="w-3/4 md:hidden flex justify-end items-center pr-10">
                <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 focus:outline-none">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-center text-lg text-slate-700 space-y-2 p-5">
          <Link to="home" spy={true} smooth={true} duration={700} className="block cursor-pointer hover:text-cyan-900">
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} duration={700} className="block cursor-pointer hover:text-cyan-900">
            About
          </Link>
          <Link to="apps" spy={true} smooth={true} duration={700} className="block cursor-pointer hover:text-cyan-900">
            Apps
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={700} className="block cursor-pointer hover:text-cyan-900">
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={700}  className="block cursor-pointer hover:text-cyan-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </>
    );
}

export default Navbar;