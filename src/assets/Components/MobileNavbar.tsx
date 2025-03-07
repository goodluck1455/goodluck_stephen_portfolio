// import React from 'react'
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion  } from 'framer-motion';
// import { FaBarsStaggered } from "react-icons/fa6";

interface MobileNavbar{
  setOpenNav:React.Dispatch<React.SetStateAction<boolean>>;
  openNav:boolean;
}



export default function MobileNavbar({setOpenNav, openNav}:MobileNavbar) {
  return (
    <AnimatePresence mode="wait">
{openNav && (
             <motion.div 
             initial={{opacity:0, y:-100}}
             animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-100}}
           className= "hidden  absolute w-full left-0 right-0 max-sm:block max-lg:block max-md:block" >

            <div className="bg-[#344E41] p-4   rounded-bl-[10px] rounded-br-[10px] ">
             
             <div className="">             
                           <nav>
                         <ul className=' text-white  text-center text-2xl'>
                     <HashLink smooth to="#home" ><li className="mb-4" onClick={()=>setOpenNav(false)}>Home</li></HashLink> 
                     <HashLink smooth to="#about"> <li className="mb-4" onClick={()=>setOpenNav(false)}>About</li> </HashLink> 
                     <HashLink smooth to="#work">      <li className="mb-4" onClick={()=>setOpenNav(false)}>Work</li> </HashLink> 
                     <HashLink smooth to="#project">     <li className="mb-4" onClick={()=>setOpenNav(false)}>Project</li> </HashLink> 
                         </ul>
                         </nav>
       
                       </div>
       
                     
                                   <div className="flex justify-center">
       
                                   <HashLink smooth to="#contact" >   
                          <div className=' bg-white rounded-[15px] cursor-pointer pt-[0px] pl-[20px] pb-[0px] p-[20px] text-center w-fit'>
                         <p className='text-[#344E41] font-bold text-[1.3rem] ' onClick={()=>setOpenNav(false)}>Contact Me</p>
                       </div>
                       </HashLink> 
       
                                   </div>
                       
                       
                      
                    
       
                                   </div>
       
           </motion.div>


)}

   
    </AnimatePresence>
  )
}
