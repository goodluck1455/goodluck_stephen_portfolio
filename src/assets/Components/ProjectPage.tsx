import ProjectDisplay from './ProjectDisplay';
import '/src/css-folder/Project.css';
// import { FaCircleArrowRight as ArrowRight  } from "react-icons/fa6";
// import { BsArrowRight as ArrowRight } from "react-icons/bs";
// import { MdArrowRightAlt as ArrowRight } from "react-icons/md";
// import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";
// import { FaArrowAltCircleRight as ArrowRight} from "react-icons/fa";



interface ProjectPageProps {
  // showTurnHeadsLater?: boolean;
  // containerClassName?: string;
  projectName: string;
  projectImage: string
}




 const ProjectPage: React.FC<ProjectPageProps> = () => {
  return (
    <>
      <div className="project___body bg-[#F5F3F4]">

            <div className="project___container">

            <div className='ContactMePage___Heading'>
            <h3 className='text-[#FD853A] text-3xl font-stretch-50%'>Project</h3>
             </div>

             <div className="text-center  text-3xl mt-8">
           <h3> <span className="text-black font-bold ">My Latest </span> 
            <span className="text-[#FD853A] italic"> Projects</span></h3>
            </div>

              <div className='flex gap-8 justify-center mt-10'>

                     < ProjectDisplay projectName={" Foot Wears Shop - Ecommerce website"} 
                     projectImage={"bg-[url('/foot-wears-002.png')]"} />

                     < ProjectDisplay projectName={" My Portfolio web site - Landing Page"} 
                     projectImage={"bg-[url('/portfolio-web.png')]"} />

              </div>

              <div className='flex gap-8 justify-center mt-10'>

                < ProjectDisplay projectName={" Advice Generator - Design by Frontend Mentor "} 
                projectImage={"bg-[url('/advice-generator.png')]"} />

                < ProjectDisplay projectName={" My Portfolio web site - Landing Page Design"} 
                projectImage={"bg-[url('/portfolio-web.png')]"} />

                </div>

            </div>



        </div>   
    </>
  )
}


export default ProjectPage;