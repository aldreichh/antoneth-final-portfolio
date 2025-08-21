import ProfilePicture from "../images/ProfilePicture.jpg";
import FacebookLogo from "../images/Logo/FacebookLogo.png";
import LinkedInLogo from "../images/Logo/LinkedInLogo.png";
import InstagramLogo from "../images/Logo/InstagramLogo.png";
import Button from '@mui/material/Button';
import AntonethCV from '../files/Antoneth_Bacalla_Resume.pdf'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

function About() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = AntonethCV;
        link.download = 'AntonethBacallaCV.pdf';
        link.click();
    };

    return (
        <section className="flex justify-center items-center xl:w-[1280px] xl:mx-auto mx-10">
            <div className="lg:flex bg-gradient-to-r from-pink-50 via-rose-50 to-orange-50 rounded-2xl shadow-sm">
                {/* Profile + Socials */}
                <div className="lg:w-2/5 w-full h-full flex flex-col justify-center items-center border-r border-pink-100">
                    <div className="w-full h-4/5 flex justify-center items-center lg:px-8 md:px-40 md:py-4 py-8 px-20">
                        <img 
                            src={ProfilePicture} 
                            alt="Profile" 
                            className="object-contain rounded-2xl shadow-md" 
                            data-aos="fade-up"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center space-x-4 mb-4 py-2" data-aos="fade-up">
                        <a href="https://www.facebook.com/bacallantoneth" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookLogo} alt="Facebook Logo" className="h-10 md:h-12 object-contain"/>
                        </a>
                        <a href="https://www.linkedin.com/in/antoneth-bacalla-12a490372/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInLogo} alt="LinkedIn Logo" className="h-10 md:h-12 object-contain"/>
                        </a>      
                        <a href="https://www.instagram.com/antonething/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="Instagram Logo" className="h-10 md:h-12 object-contain"/>
                        </a>    
                    </div>
                </div>

                {/* About Content */}
                <div className="lg:w-3/5 flex-col justify-center items-center p-5 lg:px-10 space-y-6">
                    {/* Intro Title */}
                    <div 
                        className="flex text-center xl:text-start md:text-center items-center text-3xl md:text-5xl 
                            xl:text-6xl font-bold leading-relaxed text-rose-400 px-6 lg:px-0"
                data-aos="fade-up"
                >
                    <p>
                        Hi, I'm Antoneth, <br/> 
                        Virtual Assistant & Customer Support Specialist!
                    </p>
                </div>
                    {/* About me */}
                    <div className="flex text-rose-400 px-6 lg:px-0 gap-6 text-base md:text-lg xl:text-xl tracking-wide" data-aos="fade-up">
                        <div className="w-1/2">
                            <ul className="space-y-3">
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> VA & Admin Support</li>
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> CS & Email Management</li>
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> Video Editing</li>
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> Website Design</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className="space-y-3">
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> Graphic Design & Branding</li>
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> Email & Chat Support</li>
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> CS & Email Handling</li>
                            <li><KeyboardArrowRightOutlinedIcon className="text-rose-300"/> Creative Layouts</li>                          
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="w-full flex flex-col justify-start items-start pt-4 text-rose-500 space-y-2 border-t border-pink-100 px-6 lg:px-0">
                    <div className="flex w-full space-x-4 items-center" data-aos="fade-up">
                        <SchoolOutlinedIcon sx={{width:'30px', height:'30px', color:'#fb7185'}}/>
                        <div>
                        <p className="text-base md:text-lg font-semibold">Bachelor of Science in Customs Administration</p>  
                        <p className="text-sm md:text-base text-rose-400">Holy Cross of Davao College</p> 
                        </div>                       
                    </div>
                    </div>

                    {/* Button */}
                    <div className="mt-4 flex justify-center xl:justify-start md:justify-center items-center px-6 lg:px-0" data-aos="fade-up">
                        <Button 
                            variant="contained"
                            sx={{
                                width: 200, 
                                height: 50,
                                outline:"none",
                                backgroundColor: '#fb7185', // rose-400
                                boxShadow:"none",
                                borderRadius:'12px',
                                textTransform: "none",
                                fontWeight: "bold",
                                fontSize: "16px",
                                '&:hover': {
                                    boxShadow: 'none',
                                    backgroundColor: '#fca5a5', // rose-300
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

