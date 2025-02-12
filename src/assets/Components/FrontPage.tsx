import '/src/css-folder/FrontPage.css';
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function FrontPage() {
  return (
    <>

        <div className='frontpage_name_container'>
            <div className='flex justify-between'>
        <div className='portfolio_frontpage_name '>
          <div className='leading-14'>
            <p>Hi👋</p>
          <h4>I'm <span className='frontPage_name'>Goodluck Stephen </span></h4>
          <p className='text-5xl '>Frontend Developer</p>
          <p className='text-5xl'>Base in Lagos, Nigeria</p>
          <div className='frontPage-bio'>
            <p className='   pt-4'>I’m a passionate front-end developer skilled 
             in creating clean, responsive, and user-friendly web applications</p>
          </div>

          </div>


         

            <div className='frontPage__btn__container flex rounded-[30px]'>
            <button className='frontpage__button  rounded-[30px] text-white bg-[#344E41]'>
              View my Github</button> <IoMdArrowDroprightCircle  className='frontPage__arrowIcon text-[white]'/>

              <button className='frontpage__button_B  rounded-[30px] 
              text-[#344E41] border-[#344E41] border-2'>
              Hire Me</button>
          </div>

              

           

          
        </div>


        <div className='frontPage___picture'>
            <img src="/portfolio design 002.png" alt="Developers Picture" />
        </div>

        </div>
        </div>
      


    </>
  )
}
