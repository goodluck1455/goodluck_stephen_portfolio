// import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"



interface ToolsComponentProps{
    Image:string;
    Name:string;
    percentage:string
}



export default function ToolsComponent({Image, Name, percentage}:ToolsComponentProps) {
  return (
    <>
              
                <motion.div 
                
                variants={fadeIn("down", 0.3, "scale")}
                initial="hidden"
                whileInView={"show"}
                
                className="text-center">

                <div className="bg-[#F5F5F5] h-[16rem] w-[10rem] rounded-full flex flex-col justify-between  items-center pb-10">
                    <div className="flex justify-center">
                    <div className="bg-white h-[8rem] w-[8rem] rounded-full mt-2.5 p-7 overflow-hidden">
                    <img src={Image} alt="" className="w-full h-full object-cover" />
                    </div>
                    </div>
                    
                    <div>
                    <h3 className="text-3xl font-medium">{percentage}</h3>
                    </div>

                    
                </div>
                <p className="pt-2 text-2xl">{Name}</p>

                </motion.div>

               


    </>
  )
}
