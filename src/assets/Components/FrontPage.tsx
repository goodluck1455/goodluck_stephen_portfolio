import '/src/css-folder/FrontPage.css';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"




export default function FrontPage() {
  return (
    <>

        <div className=' mt-[2rem] ml-[4rem] max-sm:ml-[2rem] mr-[4rem] max-sm:mr-[2rem] max-2xl:mr-[2rem] mb-[2rem] max-2xl:ml-[2rem] bg-white' id='home'>
            <div className='flex justify-between max-xl:flex-col max-xl:items-center max-xl:place-content-center'>
        
        <motion.div 
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         whileInView={"show"}
        
        
        className=' text-[2.5rem] max-sm:text-[1.5rem] w-[40%] mt-[12rem] max-sm:mt-[5rem] max-xl:w-fit max-sm:w-fit max-xl:text-center  max-xl:mt-[8rem]'>
          <div className='leading-14 max-sm:leading-12'>
            <p>Hi👋</p>
          <h4>I'm <span className='relative p-[5px] italic
          before:left-0 before:bottom-0 before:bg-[#FD853A] text-[#FD853A] before:absolute before:w-full before:h-[3%]'>Goodluck Stephen </span></h4>
          <p className='text-5xl max-sm:text-2xl'>Frontend Developer</p>
          <p className='text-5xl max-sm:text-2xl'>Base in Lagos, Nigeria</p>
          <div className='mt-[1.3rem]'>
            <p className=' text-[18px] max-sm:text-[16px] leading-[28px] max-sm:leading-[20px] '>I’m a passionate front-end developer skilled 
             in creating <br className=' hidden max-xl:block max-sm:hidden'/> clean, responsive, and user-friendly web applications</p>
          </div>

          </div>


         

            <div className='after:absolute  after:bg-[#FD853A] after:w-[38%] 
             max-xl:after:w-[44%] max-sm:after:w-[9rem] max-sm:after:left-[1.5rem] max-2xl:after:w-[49%] max-xl:after:left-13
              after:h-full max-sm:after:h-[2rem] place-items-center 
            after:rounded-[30px] after:z-0 relative mt-[2rem] cursor-pointer flex rounded-[30px] max-xl:justify-center'>
            <button className='p-[4px] text-[20px] max-sm:p-[1px] max-sm:h-[2rem] max-sm:text-[16px] h-[3rem] cursor-pointer 
            w-[30%] max-sm:w-[8rem] max-2xl:w-[40%]  max-xl:w-[35%] z-10 items-center rounded-[30px] 
            text-white bg-[#344E41]'>
              View my Github</button> <IoMdArrowDroprightCircle  className='frontPage__arrowIcon text-[white]'/>

              <button className='ml-[1rem] max-xl:ml-10 text-[20px] max-sm:text-[16px] h-[3rem] cursor-pointer w-[20%] 
              max-sm:w-[8rem] max-sm:h-[2rem] max-2xl:w-[25%] z-10  rounded-[30px]  max-xl:w-[25%]  
              text-[#344E41] border-[#344E41] border-2'>
              Hire Me</button>
          </div>

              

           

          
        </motion.div>


        < motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className='mt-[4px]'>
            <img src="/portfolio design 002.png" alt="Developers Picture" className="w-full h-auto max-xl:w-min max-2xl:w-fit" loading="lazy" />
        </motion.div>

        </div>
        </div>
      


    </>
  )
}
