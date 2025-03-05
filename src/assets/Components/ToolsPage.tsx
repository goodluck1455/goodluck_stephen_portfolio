// import React from 'react'

import HeadingPage from "../Reusableheading/HeadingPage";
import ToolsComponent from "../Reusableheading/ToolsComponent";

export default function ToolsPage() {
  return (
    <div className=" h-auto pb-2.5 max-lg:h-auto  max-sm:h-auto max-sm:pb-4 " id='toolsPage'>
      
      <div className=" mt-[0rem] ml-[4rem] mb-[2rem] mr-[4rem] max-xl:ml-[2rem] max-xl:mr-[2rem] max-sm:ml-[1rem] max-sm:mr-[1rem]">

      <HeadingPage HeadingName={"My Tools"} HeadingAfterColor={"text-[#FD853A]"}/>

      <div className="text-center  text-3xl mt-8 mb-8">
           <h3> <span className=" text-[#FD853A]  ">Exploring the Tools </span>  <br />
            <span className="text-black font-bold"> Behind My Web Development</span></h3>
            </div>
        
        <div className="w-fit mx-auto ">

        <div className="grid grid-cols-4 gap-16  max-lg:gap-5 max-sm:grid-cols-2 max-md:grid-cols-3">
        <ToolsComponent Image={"/html.png"} Name={"HTML"} percentage={"100%"} />
        <ToolsComponent Image={"/react.png"} Name={"REACT JS"} percentage={"91%"}/>
        <ToolsComponent Image={"/typescript.png"} Name={"Typescript"} percentage={"98%"}/>
        <ToolsComponent Image={"/taildwindcss.png"} Name={"Taildwind css"} percentage={"97%"} />



        <ToolsComponent Image={"/css3.png"} Name={"CSS3"} percentage={"100%"} />
        <ToolsComponent Image={"/git.png"} Name={"GIT"} percentage={"91%"}/>
        <ToolsComponent Image={"/javscript.png"} Name={"Javascript"} percentage={"98%"}/>
        <ToolsComponent Image={"/github.png"} Name={"Github"} percentage={"97%"} />
        </div>
        </div>
       
       


      </div>
        

      
    </div>
  )
}

