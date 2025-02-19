import '/src/css-folder/Contact.css';
import { ImPhone } from "react-icons/im";
import {  MdEmail as Email } from "react-icons/md";
import { FaXTwitter  as Twitter} from "react-icons/fa6";
import { IoLocation as Location } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoIosArrowDown as FaChevronDown } from "react-icons/io";
// import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';



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
    <div className='contact__body bg-[white]'>
      
      <div className="contact___container">

      <div className='ContactMePage___Heading'>
            <h3 className='text-[#FD853A] text-3xl font-stretch-50%'>Contact</h3>
        </div>
            
            <div className='Contact___FormContainer flex gap-20 justify-center'>
                    <div>
                       <h3 className='text-5xl tracking-widest leading-14'><span className='font-semibold'>Let's Talk for</span> 
                        <span className='text-[#FD853A] italic font-light'> Your <br/>
                       Next Project </span></h3>
                        
                       <div>
                        <ul className='contact__ulList'>
                          <li className='flex'>
                        <span  className=' Contact__phone bg-[#FD853A]'><ImPhone className='text-[#344E41]' /></span>    (+234) 8137713110
                          </li>
                          <li className='flex'>
                         <span className=' Contact__phone bg-[#FD853A]'><Email /></span>   goodluckstephen237@gmail.com
                          </li>
                          <li  >
                            <a href="https://x.com/GoodluckSteph12"  className='flex'>
                            <span className=' Contact__phone bg-[#FD853A]'><Twitter /></span> Twitter
                            </a>
                          
                          </li>
                          <li className='flex'>
                          <span className=' Contact__phone bg-[#FD853A]'><Location  /></span>Lagos, Nigeria
                          </li>
                        </ul>
                       </div>

                    </div>


                    <form onSubmit={onSubmit} >
                    <div>
                    {/* <div>{result}</div> */}
                    {/* First line of inputs */}
                   
                    <div className='flex gap-6' >
                        
                        <div>
                        <label htmlFor="text" className='conntact__label'>Name *</label> <br />
                        <input type="text" name='name' placeholder='John Doe' className='Contact__input bg-[#E9ECEF]' required/>
                        </div>

                        <div>
                        <label htmlFor="text" className='conntact__label'>Email *</label> <br />
                        <input type="email" name='email' placeholder='exampl@gmail.com' className='Contact__input bg-[#E9ECEF]' required/>
                        </div>  
                    </div>

                  {/* second line of inputs tags */}

                    <div className='flex gap-6 mt-5' >
                        <div>
                        <label htmlFor="text" className='conntact__label'>Phone *</label> <br />
                        <input type="number" name='number' placeholder='Enter phone number' className='Contact__input bg-[#E9ECEF]' required/>
                        </div>

                        <div className='relative'>
                        <label htmlFor="text" className='conntact__label'>Budget Range *</label> <br />
                       
                        <select name="Budget_Range"   className='appearance-none Contact__input 
                        p-3 pr-10 Contact__input__select_btn bg-[#E9ECEF] text-black w-full'>
                          <option value="Select"> Select </option>
                          <option value="Selectjbj"> Selecdcdct </option>
                        </select>
                        {/* Custom Dropdown Icon */}

                        <FaChevronDown size={21} className="absolute top-14 right-3 -translate-y-1/2  pointer-events-none" />
                        
                        <div>
                          
                        </div>
                        </div>
                     

                    </div>

                    <div className='mt-5'>
                    <label htmlFor="text" className='conntact__label '>Your message *</label> <br />
                    <textarea name="message" placeholder='Your message ...' className='resize-none Contact__input__textarea bg-[#E9ECEF] w-full'>
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
