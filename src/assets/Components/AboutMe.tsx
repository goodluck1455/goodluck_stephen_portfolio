import '/src/css-folder/AboutMe.css';
// import { IoMdArrowDroprightCircle } from "react-icons/io";
// import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export default function AboutMe() {
  return (
    <>
      <div className='AboutMePage___container'>

      <div className="AboutMePage___ContainerB">

        <div className='AboutMePage___Heading'>
            <h3 className='text-white text-3xl'>About Me</h3>
        </div>


      <div className='flex gap-9  AboutMe___portfolioContainer'>

      <div className='AboutMe__Image'>
          <img src="/portfolio_picture.png" alt=""  />
        </div>
        <div className='AboutMe___profilInfo'>
          <div>
          <p className='text-white'>
          I’m a passionate front-end developer skilled in creating clean, responsive, 
          and user-friendly web applications. With a strong eye for design and functionality, 
          I aim to deliver impactful and efficient web solutions while staying updated on modern 
          technologies and trends. Dedicated to continuous learning and contributing to impactful projects
          that enhance user experiences and align with organizational objectives.
          </p>
          </div>
        

          <div className='flex gap-10 portFolio__infor'>

            <div className='text-center leading-0'>
              <h1 className='text-4xl text-[#FD853A]'>48+</h1>
              <p className='text-white'>Project Completed</p>
            </div>

            <div className='text-center leading-0'>
              <h1 className='text-4xl text-[#FD853A]'>2+</h1>
              <p className='text-white'>Years of Experience</p>
            </div>

            <div className='text-center leading-0'>
              <h1  className='text-4xl text-[#FD853A]'>48+</h1>
              <p className='text-white'>Project Completed</p>
            </div>
          </div>
             
          <div className='AboutMe__btn__container flex rounded-[30px] items-center gap-2'>
            <button className='AboutMePAge__button rounded-[30px] text-white bg-[#344E41]'>
            Download CV</button> <IoArrowForwardCircleSharp  size={30} className='AboutPage__arrowIcon  text-[white]'/>
            
            </div>

        </div>

      </div>
       

      </div>

      </div>
     



    </>
  )
}
