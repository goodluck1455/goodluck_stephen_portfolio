// import React from 'react'
import ProjectDisplay from "./ProjectDisplay";
import { motion } from "framer-motion";
import {fadeIn} from "../Components/Animation"
import { LiaTimesSolid } from "react-icons/lia";
import { useProjectStore } from "../../store/useProjectStore";



export default function ViewMoreProject() {
const {setMorePoroject} = useProjectStore()

  return (
    <motion.div
      variants={fadeIn("down", 0.0, "zoom")}
      initial="hidden"
      whileInView={"show"}
      className="fixed h-screen inset-0 flex z-20 justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll"
    >
      <div className=" h-fit bg-[#F5F3F4] w-full mt-25  ml-[4rem] mb-[2rem] mr-[4rem] max-xl:ml-[2rem] max-xl:mr-[2rem] max-sm:ml-[1rem] max-sm:mr-[1rem]">
        <div className="ml-[4rem] mb-[2rem] mr-[4rem] max-xl:ml-[2rem] max-xl:mr-[2rem] max-sm:ml-[1rem] max-sm:mr-[1rem]">
          <section>
            <div className="text-center max-sm:text-left  text-3xl mt-8">
              <h3>
                <span className="text-black font-bold ">My</span>
                <span className="text-[#FD853A] italic"> Projects</span>
              </h3>
            </div>
          </section>

          <section className="relative max-sm:mr-3">
            <div
              className="absolute  items-center top-0 right-0 w-[40px] mt-[-2rem]
           cursor-pointer aspect-square border-white border-1 shadow bg-[#344E41] "
            >
              <div
                className="flex items-center w-full h-full justify-center  "
                onClick={setMorePoroject}
              >
                <LiaTimesSolid className="text-3xl max-2xl:text-3xl text-center text-white" />
              </div>
            </div>
          </section>

          <section>
            <div className="flex  gap-10 justify-center mt-10 max-lg:flex-col max-lg:items-center ">
              <ProjectDisplay
                projectName={"Lapo Web App   "}
                projectImage={"/lapoWebApp.png"}
                projectLink={"https://stephen-lapo-web-app.netlify.app/"}
              />

              <ProjectDisplay
                projectName={"Advice Generator - Frontend Mentor"}
                projectImage={"/advice generator.png"}
                projectLink={"https://advice-generator-alpha-green.vercel.app/"}
              />
            </div>
          </section>

          <section className="mb-10">
            <div className="flex gap-10 justify-center mt-10 max-lg:flex-col max-lg:mb-[1rem] max-lg:items-center">
              <ProjectDisplay
                projectName={"Fixeroni Website - Community Project "}
                projectImage={"/community_project.png"}
                projectLink={""}
              />

              <ProjectDisplay
                projectName={"Bookmark Landing Page - Frontend Mentor "}
                projectImage={"/bookmark_Landing_Page.png"}
                projectLink={
                  "https://goodluck-bookmarklandingpage.netlify.app/"
                }
              />
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
