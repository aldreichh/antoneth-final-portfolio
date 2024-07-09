import Work1 from '../works/poster2.jpg';
import Work2 from '../works/work5.jpg';
import Work3 from '../works/work2.jpg';
import Work4 from '../works/totebagdesign.png';
import Work5 from '../works/work9.jpg';
import Work6 from '../works/milkteaposter.jpg';
import Work7 from '../works/esportdesign.jpg';
import Work8 from '../works/work4.jpg';
import Work9 from '../works/work1.jpg';
import Work10 from '../works/work6.jpg'; 
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';

function Projects() {
    return (
      <section className="flex-col justify-center h-full">
        <div className="justify-center items-center flex p-10">
          <div className="flex-col">
            <p className="flex justify-center text-xl">Projects</p>
            <p className="flex justify-center text-4xl font-semibold">Graphics Design</p>
          </div>
        </div>
        <div className="grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            sm:px-10
            lg:px-5
            px-14">
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work1} alt="Work 1" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work2} alt="Work 2" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work3} alt="Work 3" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work4} alt="Work 4" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work5} alt="Work 5" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work6} alt="Work 6" className="h-full object-fill rounded-md"/>
          </div>
        </div>

        <div className="mt-8 grid gap-8
            grid-cols-1
            sm:grid-cols-2
            sm:px-10
            lg:px-20
            px-14">
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work7} alt="Work 7" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work8} alt="Work 8" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work9} alt="Work 9" className="h-full object-fill rounded-md"/>
          </div>
          <div className="border rounded-2xl p-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <img src={Work10} alt="Work 10" className="h-full object-fill rounded-md"/>
          </div>
        </div>


        <div className="justify-center items-center flex p-10 mt-8">
            <div className="flex-col">
                <p className="flex justify-center text-xl">Projects</p>
                <p className="flex justify-center text-4xl font-semibold">Video Editing</p>
            </div>
        </div>
        <div className="grid gap-2
            grid-cols-1
            sm:grid-cols-2
            sm:px-10
            lg:px-5
            px-14">
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
        
      </section>
    );
  }
  
export default Projects;