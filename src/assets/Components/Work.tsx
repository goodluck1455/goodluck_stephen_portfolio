// this component was created on Saturday 15th Feb 2025

// import {  MdEmail as Email } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6"
import { FaGraduationCap } from "react-icons/fa6";
import '/src/css-folder/WorkPage.css';



export default function Work() {
  return (
    <>
      
      <div className="work___container">
      <div className='ContactMePage___Heading'>
            <h3 className='text-[#FD853A] text-3xl font-stretch-50%'>
              Work & Education
              </h3>
        </div>


            <div className="text-center  text-3xl mt-8">
           <h3> <span className="text-black font-bold ">My </span> <span className="italic text-[#FD853A]"> Academic  and <br /> Proffessional </span>
            <span className="text-black font-bold"> Journey </span></h3>
            </div>

          <div className="flex justify-center gap-5">
            
            <div className="Work___Education bg-[#F5F5F5]">
              <div className="flex">
              <span className='Work__Logo bg-[#FD853A]'><FaGraduationCap /></span>
               <p className=" Work___EdHeading font-bold text-2xl ">Education</p>
              </div>
              <hr  className="Work__bottom-line"/>

                <div className="Work___EDucation_details">
                  <p className="text-[#95979c]">2014 - 2025</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>

                <div className="Work___EDucation_details">
                  <p className="text-[#95979c]">2014 - 2025</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>
                <div className="Work___EDucation_details">
                  <p className="text-[#95979c]">2014 - 2025</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>
          
            </div>


            <div className="Work___Experience bg-[#F5F5F5]">
            <div className="flex">
              <span className=' Work__Logo bg-[#FD853A]'>  <FaBriefcase /> </span>
               <p className="Work___EdHeading font-bold text-2xl"> Work Experience</p>
              </div>
              <hr  className="Work__bottom-line"/>

              <div className="Work___EDucation_details">
                  <p className="text-[#95979c]">2014 - 2025</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>

                <div className="Work___EDucation_details">
                  <p className="text-[#95979c]">2014 - 2025</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>

                <div className="Work___EDucation_details">
                  <p className="text-[#95979c]">2014 - 2025</p>
                  <h2 className="font-bold text-[18px]">Yaba College of Technology </h2>
                  <p className="text-[#95979c]">HND(Computer Science)</p>
                </div>

            </div>


          </div>
  


      </div>


    </>
  )
}
