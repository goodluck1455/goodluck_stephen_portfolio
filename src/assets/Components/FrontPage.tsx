import '/src/css-folder/FrontPage.css';
import { IoMdArrowDroprightCircle } from "react-icons/io";
// import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"
import { IoLogoWhatsapp } from "react-icons/io";



export default function FrontPage() {
  return (
    <>

        <div className=' mt-[2rem] ml-[4rem] max-sm:ml-[2rem] mr-[4rem] max-sm:mr-[2rem] max-2xl:mr-[2rem] mb-[2rem] max-2xl:ml-[2rem] bg-white' id='home'>
            <div className='flex justify-between max-xl:flex-col max-xl:items-center  max-xl:place-content-center'>
        
        <motion.div 
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         whileInView={"show"}
        
        
        className=' text-[2.5rem] 2xl:text-5xl max-sm:text-[1.5rem] w-[40%] mt-[12rem] max-sm:mt-[5rem] max-xl:w-fit max-sm:w-fit max-xl:text-center  max-xl:mt-[8rem]'>
          <div className='leading-14 max-sm:leading-12'>
            <p>Hi👋</p>
          <h4>I'm <span className='relative p-[5px] italic
          before:left-0 before:bottom-0 before:bg-[#FD853A] text-[#FD853A] before:absolute before:w-full before:h-[3%]'>Goodluck Stephen </span></h4>
          <p className='text-5xl max-sm:text-2xl '>Frontend Developer</p>
          <p className='text-5xl max-sm:text-2xl'>Based in Lagos, Nigeria</p>
          <div className='mt-[1.3rem]'>
            <p className=' text-[18px] max-sm:text-[16px] leading-[28px] max-sm:leading-[20px] '>I’m a passionate front-end developer skilled 
             in creating <br className=' hidden max-xl:block max-sm:hidden'/> clean, responsive, and user-friendly web applications</p>
          </div>

          </div>


              {/* this particular section is trying to be stubborn  */}
              
                <div className='flex items-center mt-[2rem] max-xl:justify-center max-sm:flex-col '>  
                <a href="https://github.com/goodluck1455" target="_blank" rel="noopener noreferrer" className='max-sm:w-full'>
             <div className='  bg-[#FD853A]  gap-1
             place-items-center  max-sm:w-full
              cursor-pointer flex rounded-[30px]'>
              
              <div className='max-sm:w-full items-center'>

           
            <button className='flex text-[20px] py-2 px-2 cursor-pointer max-sm:w-full  max-sm:justify-center 
            items-center rounded-[30px] text-white bg-[#344E41]'  >
              View my Github </button> 

              </div>


              <div>
            
              <IoMdArrowDroprightCircle size={40} className='w-full z-20 text-[white]'/>  
              </div>
              
              </div>
              </a> 
              <a href="https://wa.me/2348137713110?text=Hello%2C%20I'm%20interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" className='max-sm:w-full flex items-center '>
             

             
              <button className='ml-[1rem]  text-[20px]  py-2 px-3  cursor-pointer gap-1.5 justify-center
              rounded-[30px] max-sm:mt-5 max-sm:w-full max-sm:ml-0 flex items-center place-items-center
              text-[#344E41] border-[#344E41] border-2'>
              WhatsApp me <IoLogoWhatsapp className='text-green-500' />  </button>
             
              </a>
              </div>
          


              

           

          
        </motion.div>


        < motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className='mt-[4px] max-sm:mt-5'>
            <img src="/portfolio design 002.png" alt="Developers Picture" 
            className="w-full h-auto max-xl:w-min max-2xl:w-fit max-sm:hidden" loading="lazy" />
            <img src="/portfolio_picture.png" alt="Developers Picture"
             className="w-full h-auto max-xl:w-min max-2xl:w-fit hidden max-sm:block" loading="lazy"/>
        </motion.div>

        </div>
        </div>
      


    </>
  )
}
