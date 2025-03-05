import HeadingPage from '../Reusableheading/HeadingPage';
import ProjectDisplay from './ProjectDisplay';
import '/src/css-folder/Project.css';
// import { FaCircleArrowRight as ArrowRight  } from "react-icons/fa6";
// import { BsArrowRight as ArrowRight } from "react-icons/bs";
// import { MdArrowRightAlt as ArrowRight } from "react-icons/md";
// import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";
// import { FaArrowAltCircleRight as ArrowRight} from "react-icons/fa";
// import { motion } from "framer-motion";
// import {fadeIn} from "../Components/Animation"


interface ProjectPageProps {
  // showTurnHeadsLater?: boolean;
  // containerClassName?: string;
  // projectName: string;
  // projectImage: string
}




 const ProjectPage: React.FC<ProjectPageProps> = () => {
  return (
    <>
      <div className=" h-[70rem] bg-[#F5F3F4] max-lg:h-auto max-sm:h-auto max-sm:pb-4 " id='project'>

            <div className=" mt-[2rem] ml-[4rem] mb-[2rem] mr-[4rem] max-xl:ml-[2rem] max-xl:mr-[2rem] max-sm:ml-[1rem] max-sm:mr-[1rem]">

            <HeadingPage HeadingName={"Project"} HeadingAfterColor={"text-[#FD853A]"}/>

             <div className="text-center  text-3xl mt-8">
           <h3> <span className="text-black font-bold ">My Latest </span> 
            <span className="text-[#FD853A] italic"> Projects</span></h3>
            </div>

              <div className='flex  gap-10 justify-center mt-10 max-lg:flex-col max-lg:items-center '>
              < ProjectDisplay projectName={" Advice Generator -  "} 
                      projectImage={'/advice-generator.png'} />

                     < ProjectDisplay projectName={" Advice Generator - Frontend Mentor"} 
                     projectImage={'/foot-wears-002.png'} />

                     {/* < ProjectDisplay projectName={" My Portfolio web site - Landing Page"} 
                     projectImage={"bg-[url('/portfolio-web.png')]"} /> */}

                     

              </div>

              <div className='flex gap-10 justify-center mt-10 max-lg:flex-col max-lg:items-center'>

                < ProjectDisplay projectName={" Advice Generator - Design by Frontend Mentor "} 
                projectImage={'/advice-generator.png'} />

                < ProjectDisplay projectName={" My Portfolio web site - Landing Page Design"} 
                projectImage={'/portfolio-web.png'} />

                </div>

            </div>



        </div>   
    </>
  )
}


export default ProjectPage;