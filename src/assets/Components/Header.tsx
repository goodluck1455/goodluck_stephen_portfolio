// import React from 'react'
import { useState, useEffect } from 'react';
import '/src/css-folder/header.css';
import { HashLink } from "react-router-hash-link";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNavbar from './MobileNavbar';
import { IoMdClose } from "react-icons/io";
// import { AnimatePresence } from 'framer-motion';


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openNav, setOpenNav] = useState(false);


 const hamburger =()=>{
  setOpenNav(!openNav)   
 }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Change background after 50px scroll
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // flex justify-between 


  return (
    <>
      <div className={`fixed w-screen transition-all duration-300 z-50 ${scrolled ? "bg-[#344E41]/70 backdrop-blur-md translate-y-0  top-0  h-fit max-lg:h-auto":""}`}>
         <div className={`bg-[#344E41] p-[10px] ${scrolled && "mt-[1rem] mb-0"}
         mt-[0rem] ml-[4rem] max-sm:ml-[1rem] max-sm:mr-[1rem] max-2xl:ml-[2rem] mb-[2rem] max-lg:mb-0 mr-[4rem] max-2xl:mr-[2rem]  rounded-[20px] 
         text-white flex justify-between place-content-center max-lg:items-center`}>
          <div className='flex gap-2 cursor-pointer max-2xl:text-[18px]'>
          <div className=' border-[#FD853A] border-[4px] 
        items-center place-content-center  p-[2px] text-[#FD853A] flex rounded-full w-[30px] h-[30px]' >
            <h3 className='font-bold text-[1rem] p-[10px]'>G</h3>
           </div>
           <div className='font-bold'>
           <h2>Goodluck Stephen</h2>
           </div>
          </div>

       {openNav ? 
       (<div className='hidden max-lg:block max-lg:cursor-pointer'>
        <IoMdClose size={25} className=' text-white' onClick={hamburger}/>
     </div>):(<div className='hidden max-lg:block max-lg:cursor-pointer'>
        <FaBarsStaggered size={25} className=' text-white' onClick={hamburger}/>
     </div>)}
              
           
          <div className='max-lg:hidden'>
           
              <nav>
            <ul className='flex cursor-pointer max-2xl:text-[18px] gap-20 max-lg:flex-col max-lg:gap-3.5 max-lg:absolute'>
        <HashLink smooth to="#home" ><li>Home</li></HashLink> 
        <HashLink smooth to="#about"> <li>About</li> </HashLink> 
        <HashLink smooth to="#work">      <li>Work</li> </HashLink> 
        <HashLink smooth to="#project">     <li>Project</li> </HashLink> 
            </ul>
            </nav>
          </div>
          <HashLink smooth to="#contact" className="max-lg:hidden">   
             <div className='contact-containe bg-white rounded-[15px] 
             max-2xl:pb-[3px] max-2xl:pt-[3px]
             cursor-pointer pt-[0px] pl-[20px] pb-[0px] p-[20px]'>
            <p className='text-[#344E41] font-bold text-[1rem] max-2xl:text-[18px] '>Contact Me</p>
          </div>
          </HashLink> 
       
      
          
        
         </div>


      
        <div className=''>
          <MobileNavbar setOpenNav={setOpenNav} openNav={openNav}/>
  
          </div>
       
  
      
     
         
       

      </div>
    </>
  )
}
