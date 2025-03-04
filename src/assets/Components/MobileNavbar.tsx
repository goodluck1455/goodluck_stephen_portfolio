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
           className= "hidden  absolute max-sm:block" >

            <div className="bg-[#344E41] p-4 w-full max-lg:block rounded-bl-[10px] rounded-br-[10px] ">
             
             <div className="">             
                           <nav>
                         <ul className=' text-white  text-center'>
                     <HashLink smooth to="#home" ><li className="mb-4" onClick={()=>setOpenNav(false)}>Home</li></HashLink> 
                     <HashLink smooth to="#about"> <li className="mb-4" onClick={()=>setOpenNav(false)}>About</li> </HashLink> 
                     <HashLink smooth to="#work">      <li className="mb-4">Work</li> </HashLink> 
                     <HashLink smooth to="#project">     <li className="mb-4">Project</li> </HashLink> 
                         </ul>
                         </nav>
       
                       </div>
       
                     
                                   <div className="flex justify-center">
       
                                   <HashLink smooth to="#contact" >   
                          <div className=' bg-white rounded-[15px] cursor-pointer pt-[0px] pl-[20px] pb-[0px] p-[20px] text-center w-fit'>
                         <p className='text-[#344E41] font-bold text-[1rem] '>Contact Me</p>
                       </div>
                       </HashLink> 
       
                                   </div>
                       
                       
                      
                    
       
                                   </div>
       
           </motion.div>


)}

   
    </AnimatePresence>
  )
}
