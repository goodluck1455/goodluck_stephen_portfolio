import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";

// import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Define props type
interface ProjectDisplayProps {
    projectName: string;
    projectImage: string;
    projectLink: string;
  }



export default function ProjectDisplay({ projectName, projectImage, projectLink }: ProjectDisplayProps) {
            
  const [visible, setVisible] = useState(false);
  const [nvisible, setNvisible] = useState(false);





  return (
    <>
    
          <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
          
          
          className=' p-[12px] h-[28rem] rounded-[12px] w-[32rem] bg-[white] max-sm:w-full max-sm:h-auto'>

                      {/* <div className={` hidden bg-no-repeat bg-center w-full bg-contain h-[18rem]   bg-[#F5F3F4] ${projectImage}
                  overflow-hidden   scale-100 hover:scale-102  transition duration-500` } >
                      <img src="/foot-wears.png" alt="project_display" className='rounded-2xl' />
                      </div> */}
                      <div className="relative bg-[#F5F3F4]  w-full  h-[18rem]  overflow-hidden group max-sm:h-[12rem]">
                      <img src={projectImage} alt="project_display" className='rounded-2xl object-cover  scale-100 hover:scale-102  transition duration-500' />
                      
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                    
               <a href="" 
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
               
               >  
               <div className="rounded-full bg-[#FD853A] p-2 w-fit mb-2"><FaGithub  className="text-white"/>  
               </div></a> 
             {visible && (
                 <div className="absolute right-full top-2 text-center transform -translate-y-1/2 mr-4 w-50 py-1.5 bg-gray-900 rounded-lg shadow-lg text-sm text-gray-300">  
                 <p className="">
                   Available on request
                 </p>
                 <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-900"></div>
               </div>
             )}
             
             
               <a href={projectLink} target="_blank" rel="noopener noreferrer"
                  onMouseEnter={() => setNvisible(true)}
                  onMouseLeave={() => setNvisible(false)}
               > 
                <div className="rounded-full bg-[#FD853A] p-2 w-fit mb-2"><RiShareBoxLine  className="text-white"/>  
                </div> </a>  
                {nvisible && (
                 <div className="absolute right-full top-13 text-center transform -translate-y-1/2 mr-4 w-50 py-1.5 bg-gray-900 rounded-lg shadow-lg text-sm text-gray-300">  
                 <p className="">
                   Click to view the site
                 </p>
                 <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-900"></div>
               </div>
             )}
             

               
                <a href={projectLink} target="_blank" rel="noopener noreferrer">   
                <div className="rounded-full bg-[#FD853A] p-2 w-fit"><IoInformationCircle className="text-white"/>  
                </div> </a> 
                      
                      </div>

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
