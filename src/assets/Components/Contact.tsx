import '/src/css-folder/Contact.css';
import { ImPhone } from "react-icons/im";
import {  MdEmail as Email } from "react-icons/md";
import { FaXTwitter  as Twitter} from "react-icons/fa6";
import { IoLocation as Location } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoIosArrowDown as FaChevronDown } from "react-icons/io";
// import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import HeadingPage from '../Reusableheading/HeadingPage';
// import { NavLink } from 'react-router-dom';



export default function Contact() {

const onSubmit = async (event: any) => {
  event.preventDefault();
  toast.info("Sending information in progress...");

  const formData = new FormData(event.target);
  formData.append("access_key", "e64185f1-4934-410e-9de1-f2184d64d003");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("You are currently offline. Please check your network.");
  }
};





  return (
    <div className='contact__body bg-[#344E41] ' id='contact'>
      
      <div className="mt-[0rem] ml-[4rem] mb-[2rem] mr-[4rem] max-sm:ml-[1rem] max-sm:mr-[1rem] ">

          <HeadingPage HeadingName={"Contact"} HeadingAfterColor={"text-white"} />
      {/* <div className='ContactMePage___Heading'>
            <h3 className='text-[white] 
            
            text-3xl font-stretch-50%'>Contact</h3>
        </div> */}
            
            <div className='mt-[3rem] flex gap-20 justify-center max-lg:flex-col max-lg:gap-10'>
                    <div>
                       <h3 className='text-5xl max-lg:text-4xl max-lg:leading-12 max-xl:text-3xl tracking-widest leading-14 max-xl:leading-11'><span className='font-semibold text-white'>Let's Talk for</span> 
                        <span className='text-[#FD853A] italic font-light'> Your <br className='max-lg:hidden'/>
                       Next Project </span></h3>   
                        
                       <div className='text-white '>   
                        <ul className=' text-[20px] max-sm:text-[18px] max-sm:gap-3 mt-[1.5rem] max-lg:grid max-lg:grid-cols-2 max-lg:text-[1.3rem] max-lg:gap-6 max-sm:grid-cols-1'>
                          <li className='flex items-center  mb-[1rem] max-sm:mb-[0.3rem]'>
                        <span  className=' p-[8px] rounded-full text-[1.2rem] mr-[10px]  bg-[#FD853A]'><ImPhone className='text-[#344E41]' /></span>    (+234) 8137713110
                          </li>
                          <li className='flex max-lg:ml-[-4rem] items-center max-sm:mb-[0.3rem] mb-[1rem] max-sm:ml-[0rem]'>
                         <span className=' p-[8px] rounded-full text-[1.2rem] mr-[10px]  bg-[#FD853A]'><Email className='text-[#344E41]' /></span>   goodluckstephen237@gmail.com
                          </li>
                          <li className='flex   mb-[1rem] max-sm:mb-[0.3rem]' >
                           <a href="https://x.com/GoodluckSteph12" target="_blank" className='flex items-center' >
                            <span className=' p-[8px] rounded-full text-[1.2rem] mr-[10px] bg-[#FD853A]'><Twitter className='text-[#344E41]' /></span> Twitter
                            </a>
                          
                          </li>
                          <li className='flex max-lg:ml-[-4rem] items-center max-sm:ml-[0rem]'>
                          <span className=' p-[8px] rounded-full text-[1.2rem] mr-[10px]  bg-[#FD853A]'><Location className='text-[#344E41]'  /></span>Lagos, Nigeria
                          </li>
                        </ul>
                       </div>

                    </div>


                    <form onSubmit={onSubmit} >
                    <div>
                    {/* <div>{result}</div> */}
                    {/* First line of inputs */}
                   
                    <div className='flex gap-6 max-lg:w-full' >
                        
                        <div className='max-lg:w-full'>
                        <label htmlFor="text" className='text-[18px] text-white font-normal'>Name *</label> <br />
                        <input type="text" name='name' placeholder='John Doe' className='w-[16rem] max-lg:w-full 
                        rounded-[10px] h-[2.8rem] outline-none p-[20px] text-[white] border border-[#445A46] bg-[#445A46]' required/>
                        </div>

                        <div className='max-lg:w-full'>
                        <label htmlFor="text" className='text-[18px] text-white'>Email *</label> <br />
                        <input type="email" name='email' placeholder='exampl@gmail.com' className='w-[16rem] max-lg:w-full
                        rounded-[10px] h-[2.8rem] outline-none p-[20px] text-[white] border border-[#445A46] bg-[#445A46]' required/>
                        </div>  
                    </div>

                  {/* second line of inputs tags */}

                    <div className='flex gap-6 mt-5' >
                        <div className='max-lg:w-full'>
                        <label htmlFor="text" className='text-[18px] text-white '>Phone *</label> <br />
                        <input type="number" name='number' placeholder='Enter phone number' className='w-[16rem] max-lg:w-full
                        rounded-[10px] h-[2.8rem]  outline-none focus:outline-none focus:bg-none p-[20px] text-[white] border border-[#445A46] bg-[#445A46]' required/>
                        </div>

                        <div className='relative max-lg:w-full'>
                        <label htmlFor="text" className='text-[18px] text-white'>Budget Range *</label> <br />
                       
                        <select name="Budget_Range"   className='appearance-none max-lg:w-full
                        rounded-[10px] h-[2.8rem] outline-none p-[10px] text-[white] border border-[#445A46]
                         focus:outline-none  bg-[#445A46]  w-[16rem]' >
                          <option value="Select" disabled> Select </option>
                          <option value="Selectjbj"> Selecdcdct </option>
                        </select>
                        {/* Custom Dropdown Icon */}

                        <FaChevronDown size={21} className="absolute text-white top-12 right-3 -translate-y-1/2 text-w pointer-events-none" />
                        
                        <div>
                          
                        </div>
                        </div>
                     

                    </div>

                    <div className='mt-5'>
                    <label htmlFor="text" className='text-[18px] text-white'>Your message *</label> <br />
                    <textarea name="message" placeholder='Your message ...' className='resize-none Contact__input__textarea
                    outline-none text-[white] border border-[#445A46] bg-[#445A46] w-full' required>
                    </textarea>
                    </div>
                   
                    <div className='contact__btn__container flex rounded-[30px] items-center gap-2'>
                     <button className='AboutMePAge__button rounded-[30px] text-white bg-[#344E41]'>
                      Submit</button> <IoArrowForwardCircleSharp  size={30} className='AboutPage__arrowIcon  text-[white]'/>
            
                         </div>
                    </div>

                        <ToastContainer
                        autoClose={6000}
                        />

                    </form>

            </div>
               
      </div>



    </div>
  )
}
