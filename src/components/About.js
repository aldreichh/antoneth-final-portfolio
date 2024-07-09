import React from 'react';
import ProfilePicture from "../images/ProfilePicture.jpg";
import FacebookLogo from "../images/FacebookLogo.png";
import LinkedInLogo from "../images/LinkedInLogo.png";
import TwitterLogo from "../images/TwitterLogo.png";
import GithubLogo from "../images/GithubLogo.png";
import Button from '@mui/material/Button';
import RosalesCV from '../files/JohnAldreichRosalesCV.pdf'

function About() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = RosalesCV;
        link.download = 'JohnAldreichRosalesCV.pdf';
        link.click();
    }
    return (
    <section className="flex justify-center items-center">
        <div className="lg:flex">
            <div className="lg:w-2/5 w-full h-full flex-col justify-center items-center border rounded-3xl">
                <div className="w-full h-4/5 flex justify-center items-center lg:p-8 md:px-40 md:py-4 py-8 px-24">
                    <img src={ProfilePicture}  alt="Profile" className="object-contain rounded-3xl shadow-md"/>
                </div>
                <div className="w-full flex justify-center items-center text-3xl lg:text-2xl p-2 text-slate-600">
                    <p>John Aldreich Rosales</p>  
                </div>
                <div className="w-full flex justify-center items-center space-x-4 p-2 mb-6">
                    <a href="https://www.facebook.com/aldreichj" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookLogo} alt="Facebook Logo" className="h-10 object-contain rounded-md"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aldreichj/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo}  alt="LinkedIn Logo" className="h-10 object-contain rounded-md"/>
                    </a>   
                    <a href="https://twitter.com/otamakibi" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterLogo}  alt="LinkedIn Logo" className="h-10 object-contain rounded-md"/>
                    </a>     
                    <a href="https://github.com/aldreichh" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo}  alt="Github Logo" className="h-10 object-contain rounded-md"/>
                    </a>         
                </div>
            </div>
            <div className="lg:w-3/5 flex-col justify-center items-center p-5 lg:px-10 space-y-5">
                <div className="flex text-start items-center text-6xl px-24 lg:px-0">
                    <p className="leading-tight">Hi, I'm Aldreich, Photo/Video Editor, and UI/UX Designer</p>
                </div>
                <div className="flex text-slate-600 px-24 lg:px-0">
                    <div className="w-1/2 text-xl">
                        <ul className="leading-9">
                            <li>● Logo Design</li>
                            <li>● Poster Design</li>
                            <li>● Video Editing</li>
                            <li>● Web Design</li>
                        </ul>
                    </div>
                    <div className="w-1/2 text-xl">
                        <ul className="leading-9">
                            <li>● Vlog Edit</li>
                            <li>● Vexel/Vector Art Design</li>
                            <li>● Front-end Development</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-2 flex justify-start items-center px-24 lg:px-0">
                    <Button variant="contained"
                        sx={{
                        width:200, 
                        height:50,
                        outline:"none",
                        backgroundColor: '#60a5fa',
                        boxShadow:"none",
                        '&:hover': {
                            boxShadow: 'none',
                            backgroundColor: '#3b82f6',
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