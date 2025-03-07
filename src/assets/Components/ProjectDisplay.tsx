import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"


// Define props type
interface ProjectDisplayProps {
    projectName: string;
    projectImage: string;
    projectLink: string;
  }



export default function ProjectDisplay({ projectName, projectImage, projectLink }: ProjectDisplayProps) {
  return (
    <>
      
          <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
          
          
          className=' p-[12px] h-[28rem] rounded-[12px] w-[32rem] bg-[white] max-sm:w-full max-sm:h-auto'>

                      <div className={` hidden bg-no-repeat bg-center w-full bg-contain h-[18rem]   bg-[#F5F3F4] ${projectImage}
                  overflow-hidden   scale-100 hover:scale-102  transition duration-500` } >
                      {/* <img src="/foot-wears.png" alt="project_display" className='rounded-2xl' /> */}
                      </div>
                      <div className="bg-[#F5F3F4]  w-full  h-[18rem]  overflow-hidden max-sm:h-[12rem]">
                      <img src={projectImage} alt="project_display" className='rounded-2xl object-cover  scale-100 hover:scale-102  transition duration-500' />
                      </div>
                      <div className='flex gap-2.5 mt-3 justify-center'>
                        <div className='project___terminology bg-[#344E41] rounded-2xl  text-center text-[#FD853A] '>
                          <h2>HTML</h2>
                        </div>
                        <div className='project___terminology bg-[#344E41] rounded-2xl  text-center  text-[#FD853A] '>
                          <h2>CSS</h2>
                        </div>
                        <div className='project___terminology bg-[#344E41] rounded-2xl  text-center text-[#FD853A] '>
                          <h2>React Js</h2>
                        </div>
                        <div className='project___terminology bg-[#344E41] rounded-2xl  
                        text-center text-[#FD853A] '>
                          <h2 className='my-auto'>Typscript</h2>
                        </div>
                      </div>

                        <div className='flex justify-between gap-10 align-middle mt-5'>  
                          <div className="w-">
                          <p className='text-2xl  font-medium'>
                            {projectName}
                          </p>
                            </div>      
                          
                          <div className='bg-[#344E41] flex items-center h-fit p-2  cursor-pointer rounded-full mr-3 max-sm:my-auto'>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer"> 
                    < ArrowRight  className=' project__right_arro text-[1.5rem]  text-white' /> </a>  
                          </div>
                        
                             
                        </div>


                    </motion.div>




    </>
  )
}
