import '/src/css-folder/AboutMe.css';
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"
// import { IoMdArrowDroprightCircle } from "react-icons/io";
// import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import HeadingPage from '../Reusableheading/HeadingPage';


export default function AboutMe() {
  return (
    <>
      <div className='AboutMePage___container bg-[#344E41] max-sm:overflow-hidden max-lg:overflow-hidden  h-auto pb-[10px]' id='about' data-scroll>

      <div className=" mt-[2rem] max-sm:mt-[0rem] ml-[4rem] mb-[2rem] mr-[4rem] max-xl:ml-[2rem] max-xl:mr-[1rem] max-sm:ml-[1rem]">


          <HeadingPage HeadingName={"About Me"} HeadingAfterColor={"text-white"}/>
       


      <div className='flex gap-9 mt-[0.5rem] ml-[10rem] mr-[10rem] mb-[2rem] max-lg:flex-col
      max-2xl:ml-[2rem] max-2xl:mr-[0.8rem] max-xl:gap-5 max-sm:mt-[1rem]
      max-xl:ml-[1rem] max-xl:mr-[1rem] max-xl:mb-[1rem] '>

      <motion.div 
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}

      className="w-full h-auto max-xl:my-auto max-lg:flex max-lg:justify-center" >
          <img src="/portfolio_picture.png" alt="" className='object-cover' loading="lazy"/>
        </motion.div>

        <motion.div 
         variants={fadeIn("left", 0.3, "zoom")}
         initial="hidden"
         whileInView={"show"}
        
        
        className=''>
          <div>
            <p className='text-3xl'> <span className='font-bold text-white'>Who is</span> <span className='italic text-[#FD853A]'>Goodluck Stephen ?</span></p>
          <p className='text-white mt-[5px] text-justify max-2xl:text-[18px]'>
          I’m a passionate front-end developer skilled in creating clean, responsive, 
          and user-friendly web applications. With a strong eye for design and functionality, 
          I aim to deliver impactful and efficient web solutions while staying updated on modern 
          technologies and trends. Dedicated to continuous learning and contributing to impactful projects
          that enhance user experiences and align with organizational objectives.
          </p>
          </div>
        

          <div className='flex gap-10 mt-[1.5rem] max-sm:gap-3.5'>

            <div className='text-center leading-0 max-sm:leading-6'>
              <h1 className='text-4xl text-[#FD853A]'>48+</h1>
              <p className='text-white mt-[15px] max-sm:mt-[8px]'>Project Completed</p>
            </div>

            <div className='text-center leading-0 max-sm:leading-6'>
              <h1 className='text-4xl text-[#FD853A]'>2+</h1>
              <p className='text-white mt-[15px] max-sm:mt-[8px]'>Years of Experience</p>
            </div>

            <div className='text-center leading-0 max-sm:leading-6'>
              <h1  className='text-4xl text-[#FD853A]'>48+</h1>
              <p className='text-white mt-[15px] max-sm:mt-[8px]'>Project Completed</p>
            </div>
          </div>

    


             
          <div className=' relative mt-[3rem] text-[14px] after:absolute after:w-[25%] after:max-sm:w-[9.8rem]
          after:bg-[#FD853A] after:rounded-[30px] after:z-0 after:top-[-2px] max-xl:after:w-[26%]
          after:h-[2.3rem] cursor-pointer flex rounded-[30px] items-center gap-2 max-xl:gap-1.5 max-sm:gap-0'>
            <button className='p-[4px]  text-[17px] h-auto cursor-pointer max-sm:px-2.5 max-sm:w-fit w-[20%] items-center z-10 rounded-[30px] text-white bg-[#344E41]'>
            Download CV</button> <IoArrowForwardCircleSharp  size={30} className='AboutPage__arrowIcon  text-[white]'/>
            
            </div>

        </motion.div>




      </div>
       

      </div>

      </div>
     



    </>
  )
}
