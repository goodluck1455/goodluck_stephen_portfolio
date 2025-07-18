// this component was created on Saturday 15th Feb 2025

// import {  MdEmail as Email } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6"
import { FaGraduationCap } from "react-icons/fa6";
import '/src/css-folder/WorkPage.css';
import HeadingPage from '../Reusableheading/HeadingPage';


export default function Work() {
  return (
    <>
      



      <div className=" mt-[0rem] ml-[4rem] mr-[4rem] mb-[2.5rem] max-md:ml-[2rem] max-md:mr-[2rem] max-xl:ml-[2rem] max-xl:mr-[2rem]
          max-md:h-auto max-md:pb-[1rem] max-sm:ml-[1rem] max-sm:mr-[1rem]" id="work">


       <HeadingPage HeadingName={"Work & Education "} HeadingAfterColor={"text-[#FD853A]"}/>
      


            <div className="text-center  text-3xl mt-8">
           <h3> <span className="text-black font-bold ">My </span> <span className="italic text-[#FD853A]"> Academic  and <br /> Professional </span>
            <span className="text-black font-bold"> Journey </span></h3>
            </div>

          <div className="flex justify-center gap-5 max-sm:flex-col">
            
            <div className=" w-[30rem] h-auto pb-2.5 max-sm:w-full max-sm:h-auto
            border border-[#E1E1E2] max-md:h-auto
            rounded-[10px] mt-[2rem] bg-[#F5F5F5]">
              <div className="flex">
              <span className='Work__Logo bg-[#FD853A]'><FaGraduationCap /></span>
               <p className=" Work___EdHeading font-bold text-2xl ">Education</p>
              </div>
              <hr  className="Work__bottom-line"/>

                <div className="mt-[1.5rem] ml-[1.5rem] hover:scale-101 hover:border-[#FD853A] cursor-pointer mb-[0.8rem] 
                mr-[2rem] p-[10px] border-l-[6px] border-[#d0d2d6] rounded-tl-[10px] rounded-bl-[10px]  ">
                  <p className="text-[#95979c]">2021 - 2024</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>

                <div className="mt-[1.5rem] ml-[1.5rem] hover:scale-101 hover:border-[#FD853A] cursor-pointer  mb-[0.8rem] mr-[2rem] p-[10px] border-l-[6px] border-[#d0d2d6] rounded-tl-[10px] rounded-bl-[10px] ">
                  <p className="text-[#95979c]">2020 </p>
                  <h2 className="font-bold text-[18px]">IGHUB Developers and Netpreneurs Fellowship 4.0</h2>
                  <p className="text-[#95979c]">Front-End Development</p>
                </div>
                <div className="mt-[1.5rem] ml-[1.5rem] hover:scale-101 hover:border-[#FD853A] cursor-pointer  mb-[0.8rem] mr-[2rem] p-[10px] border-l-[6px] border-[#d0d2d6] rounded-tl-[10px] rounded-bl-[10px] ">
                  <p className="text-[#95979c]">2014 </p>
                  <h2 className="font-bold text-[18px]">Trido Computer College</h2>
                  <p className="text-[#95979c]">Diploma in Professional Computer Studies</p>
                </div>
          
            </div>


            <div className="w-[30rem] h-auto pb-2.5 max-sm:w-full max-sm:h-auto
            border border-[#E1E1E2] max-md:h-auto
            rounded-[10px] mt-[2rem] bg-[#F5F5F5]">
            <div className="flex">
              <span className=' Work__Logo bg-[#FD853A]'>  <FaBriefcase /> </span>
               <p className="Work___EdHeading font-bold text-2xl"> Work Experience</p>
              </div>
              <hr  className="Work__bottom-line"/>

              <div className="mt-[1.5rem] ml-[1.5rem] hover:scale-101 hover:border-[#FD853A] cursor-pointer mb-[0.8rem] mr-[2rem] p-[10px] border-l-[6px] border-[#d0d2d6] rounded-tl-[10px] rounded-bl-[10px] ">
                  <p className="text-[#95979c]">2022 - till date</p>
                  <h2 className="font-bold text-[18px]">Fixeroni Tech Hub </h2>
                  <p className="text-[#95979c]">Frontend Dev </p>
                </div>

                <div className="mt-[1.5rem] ml-[1.5rem] hover:scale-101 hover:border-[#FD853A] cursor-pointer mb-[0.8rem] mr-[2rem] p-[10px] border-l-[6px] border-[#d0d2d6] rounded-tl-[10px] rounded-bl-[10px] ">
                  <p className="text-[#95979c]">2021 - till date</p>
                  <h2 className="font-bold text-[18px]">Developia Discord Community</h2>
                  <p className="text-[#95979c]">Frontend Dev - Volunteer</p>
                </div>

                <div className="mt-[1.5rem] ml-[1.5rem] hover:scale-101 hover:border-[#FD853A] cursor-pointer mb-[0.8rem] mr-[2rem] p-[10px] border-l-[6px] border-[#d0d2d6] rounded-tl-[10px] rounded-bl-[10px] ">
                  <p className="text-[#95979c]">2020</p>
                  <h2 className="font-bold text-[18px]">IGHUB Developers and Netpreneurs Fellowship 4.0 </h2>
                  <p className="text-[#95979c]">Frontend dev - Intern</p>
                </div>

            </div>


          </div>
  


      </div>


    </>
  )
}
