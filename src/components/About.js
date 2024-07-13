import React from 'react';

import ProfilePicture from "../images/ProfilePicture.jpg";
import FacebookLogo from "../images/Logo/FacebookLogo.png";
import LinkedInLogo from "../images/Logo/LinkedInLogo.png";
import TwitterLogo from "../images/Logo/TwitterLogo.png";
import GithubLogo from "../images/Logo/GithubLogo.png";
import Button from '@mui/material/Button';
import RosalesCV from '../files/JohnAldreichRosalesCV.pdf'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

function About() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = RosalesCV;
        link.download = 'JohnAldreichRosalesCV.pdf';
        link.click();
    }

    return (
    <section className="flex justify-center items-center xl:w-[1280px] xl:mx-auto mx-10">
        <div className="lg:flex">
            <div className="lg:w-2/5 w-full h-full flex flex-col justify-center items-center border">
                <div className="w-full h-4/5 flex justify-center items-center lg:p-8 md:px-40 md:py-4 py-8 px-28">
                    <img src={ProfilePicture}  alt="Profile" className="object-contain shadow-md" data-aos="fade-up"/>
                </div>
                <div className="w-3/4 flex justify-center items-center text-3xl lg:text-2xl p-2 text-cyan-900 border-t" data-aos="fade-up">
                    <p>John Aldreich Rosales</p>  
                </div>
                <div className="w-full flex justify-center items-center space-x-4 mb-4" data-aos="fade-up">
                    <a href="https://www.facebook.com/aldreichj" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookLogo} alt="Facebook Logo" className="h-9 object-contain"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aldreichj/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo}  alt="LinkedIn Logo" className="h-9 object-contain"/>
                    </a>   
                    <a href="https://twitter.com/otamakibi" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterLogo}  alt="LinkedIn Logo" className="h-9 object-contain"/>
                    </a>     
                    <a href="https://github.com/aldreichh" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo}  alt="Github Logo" className="h-9 object-contain"/>
                    </a>         
                </div>
            </div>
            <div className="lg:w-3/5 flex-col justify-center items-center p-5 lg:px-10 space-y-5">
                <div className="flex text-start items-center sm:text-6xl px-24 lg:px-0 text-5xl" data-aos="fade-up">
                    <p className="leading-tight text-cyan-900">Hi, I'm Aldreich, Photo/Video Editor, and UI/UX Designer</p>
                </div>
                <div className="flex text-slate-700 px-24 lg:px-0" data-aos="fade-up">
                    <div className="w-1/2 text-xl">
                        <ul className="leading-9 ">
                            <li><KeyboardArrowRightOutlinedIcon/> Design and Branding</li>
                            <li><KeyboardArrowRightOutlinedIcon/> Creative Poster Design</li>
                            <li><KeyboardArrowRightOutlinedIcon/> Video Editing</li>
                            <li><KeyboardArrowRightOutlinedIcon/> Website Design</li>
                        </ul>
                    </div>
                    <div className="w-1/2 text-xl">
                        <ul className="leading-9">
                            <li><KeyboardArrowRightOutlinedIcon/> Vexel and Vector Art Design</li>
                            <li><KeyboardArrowRightOutlinedIcon/> Photo Editing and Retouching</li>
                            <li><KeyboardArrowRightOutlinedIcon/> Computer Troubleshooting</li>
                            <li><KeyboardArrowRightOutlinedIcon/> Front-end Development</li>                          
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start pt-4 text-slate-700 space-y-2 border-t px-24 lg:px-0">
                    <div className="flex w-full space-x-4 items-center" data-aos="fade-up">
                        <SchoolOutlinedIcon sx={{width:'30px', height:'30px'}}/>
                        <div>
                            <p className="text-xl lg:text-md">Bachelor of Science in Information Technology</p>  
                            <p>University of Southeastern Philippines</p> 
                        </div>                       
                    </div>
                    <div className="flex w-full space-x-4 items-center" data-aos="fade-up">
                    <SchoolOutlinedIcon sx={{width:'30px', height:'30px'}}/>
                        <div>
                            <p className="text-xl lg:text-md">Computer Systems Servicing NCII</p>  
                            <p>Davao City National High School</p> 
                        </div>  
                    </div>
                </div>
                <div className="mt-2 flex justify-start items-center px-24 lg:px-0" data-aos="fade-up">
                    <Button variant="contained"
                        sx={{
                        width:200, 
                        height:50,
                        outline:"none",
                        backgroundColor: '#155e75',
                        boxShadow:"none",
                        borderRadius:'0px',
                        '&:hover': {
                            boxShadow: 'none',
                            backgroundColor: '#164e63',                          
                        },
                        }}
                        onClick={handleDownload}
                    >
                        Download CV
                    </Button>
                </div>
            </div>
        </div>
    </section>
    );
}
  
export default About;