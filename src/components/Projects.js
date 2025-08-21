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
import kristymia1 from '../images/kristymia/kristymia1.png';
import kristymia2 from '../images/kristymia/kristymia2.png';
import kristymia3 from '../images/kristymia/kristymia3.png';
import kristymia4 from '../images/kristymia/kristymia4.png';
import kristymia5 from '../images/kristymia/kristymia5.png';
import kristymia6 from '../images/kristymia/kristymia6.png';
import kristymia7 from '../images/kristymia/kristymia7.png';
import impacttruth1 from '../images/impacttruth/impacttruth1.png';
import impacttruth2 from '../images/impacttruth/impacttruth2.png';
import impacttruth3 from '../images/impacttruth/impacttruth3.png';
import impacttruth4 from '../images/impacttruth/impacttruth4.png';
import impacttruth5 from '../images/impacttruth/impacttruth5.png';
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { InstagramEmbed } from "react-social-media-embed";

function Projects() {
    const impacttruth = () => {
        window.open('https://impacttruth.myclickfunnels.com/breakthrough-branding-masterclass', '_blank'); 
    };
    const kristymia = () => {
        window.open('https://www.kristymia.com/', '_blank'); 
    };

    return (
      <section className="flex-col justify-center h-full xl:w-[1280px] xl:mx-auto mx-10">
        <div className="justify-center items-center flex p-10 text-center">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-rose-400" data-aos="fade-up">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-rose-400" data-aos="fade-up">
                    Graphics Design
                </p>
            </div>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-pink-100 p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work2} alt="Work 2" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border border-pink-100 p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work5} alt="Work 5" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border border-pink-100 p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work6} alt="Work 6" className="shadow-md h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
        </div>

        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
            <div className="border border-pink-100 p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work8} alt="Work 8" className="shadow-md h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="border border-pink-100 p-2 flex justify-center items-center" data-aos="fade-up">
                <img src={Work10} alt="Work 10" className="shadow-md h-full w-full object-fill transform transition-transform duration-300 hover:scale-110"/>
            </div>
            <div className="flex justify-center" data-aos="fade-up">
                <InstagramEmbed url="https://www.instagram.com/p/C_df8bphfHx/" width={680} />
            </div>
            <div className="flex justify-center" data-aos="fade-up">
                <InstagramEmbed url="https://www.instagram.com/p/DBHFNsLzeTC/" width={680} />
            </div>
        </div>


        <div className="justify-center items-center flex p-10 mt-24 text-center">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-rose-400" data-aos="fade-up">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-rose-400" data-aos="fade-up">
                    Video Editing
                </p>
            </div>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-center" data-aos="fade-up">
                <InstagramEmbed url="https://www.instagram.com/reel/DBt-jgghKjk/" width={600} />
            </div>
            <div className="flex justify-center" data-aos="fade-up">
                <InstagramEmbed url="https://www.instagram.com/reel/DA7GNeQyTON/" width={600} />
            </div>
        </div>

        <div className="justify-center items-center flex p-10 mt-24 text-center">
            <div className="flex-col">
                <p className="flex justify-center text-xl text-rose-400" data-aos="fade-up">Projects</p>
                <p className="flex justify-center text-4xl font-semibold text-rose-400" data-aos="fade-up">
                    Web Development
                </p>
            </div>
        </div>
        <div className="grid gap-8
            grid-cols-1
            lg:grid-cols-2">
            <div className="border border-pink-100 flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={kristymia1} alt="kristymia1"/>
                    <img src={kristymia2} alt="kristymia2"/>
                    <img src={kristymia3} alt="kristymia3"/>
                    <img src={kristymia4} alt="kristymia4"/>
                    <img src={kristymia5} alt="kristymia5"/>
                    <img src={kristymia6} alt="kristymia6"/>
                    <img src={kristymia7} alt="kristymia7"/>
                </Carousel>
                <p className="mt-4 text-xl text-rose-600">VA Website Project</p>
                <button
                    onClick={kristymia}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-rose-500 rounded-md hover:bg-rose-400"
                >
                  Website Link   
                </button>
            </div>
            <div className="border border-pink-100 flex justify-center items-center flex-col p-4 text-center" data-aos="fade-up">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    className="shadow-md"
                >
                    <img src={impacttruth1} alt="impacttruth1"/>
                    <img src={impacttruth2} alt="impacttruth2"/>
                    <img src={impacttruth3} alt="impacttruth3"/>
                    <img src={impacttruth4} alt="impacttruth4"/>
                    <img src={impacttruth5} alt="impacttruth5"/>
                </Carousel>
                <p className="mt-4 text-xl text-rose-600">VA Website Project</p>
                <button
                    onClick={impacttruth}
                    type="submit"
                    className="flex justify-center mt-2 w-1/4 py-3 px-4 shadow-sm text-sm font-medium text-white bg-rose-500 rounded-md hover:bg-rose-400"
                >
                  Website Link   
                </button>
            </div>
        </div>
      </section>
    );
  }
  
export default Projects;