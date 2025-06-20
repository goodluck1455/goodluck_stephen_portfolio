// import { useState } from "react";
import HeadingPage from "../Reusableheading/HeadingPage";
import ProjectDisplay from "./ProjectDisplay";
import "/src/css-folder/Project.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import ViewMoreProject from "./ViewMoreProject";
import { useProjectStore } from "../../store/useProjectStore";
// import { FaCircleArrowRight as ArrowRight  } from "react-icons/fa6";
// import { BsArrowRight as ArrowRight } from "react-icons/bs";
// import { MdArrowRightAlt as ArrowRight } from "react-icons/md";
// import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";
// import { FaArrowAltCircleRight as ArrowRight} from "react-icons/fa";
// import { motion } from "framer-motion";
// import {fadeIn} from "../Components/Animation"

interface ProjectPageProps {
  // showTurnHeadsLater?: boolean;
  // containerClassName?: string;
  // projectName: string;
  // projectImage: string
}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const { moreProject, setMorePoroject } = useProjectStore();

  return (
    <>
      <div
        className=" h-fit bg-[#F5F3F4] max-lg:h-auto max-lg:pb-[1rem] max-sm:h-auto max-sm:pb-1 "
        id="project"
      >
        <div className=" mt-[2rem] ml-[4rem] mb-[2rem] mr-[4rem] max-xl:ml-[2rem] max-xl:mr-[2rem] max-sm:ml-[1rem] max-sm:mr-[1rem]">
          <HeadingPage
            HeadingName={"Project"}
            HeadingAfterColor={"text-[#FD853A]"}
          />

          <div className="text-center  text-3xl mt-8">
            <h3>
              <span className="text-black font-bold ">My Latest </span>
              <span className="text-[#FD853A] italic"> Projects</span>
            </h3>
          </div>

          <div className="flex  gap-10 justify-center mt-10 max-lg:flex-col max-lg:items-center ">
            <ProjectDisplay
              projectName={"Product Listing - Frontend Mentor  "}
              projectImage={"/product-listing.jpg"}
              projectLink={"https://goodluck-product-listing.netlify.app/"}
            />

            <ProjectDisplay
              projectName={"Ecommerce website for Foot wears"}
              projectImage={"/foot-wears-002.png"}
              projectLink={"https://foot-wears-fashion-shop.netlify.app/"}
            />
          </div>

          <div className="flex gap-10 justify-center mt-10 max-lg:flex-col max-lg:mb-[1rem] max-lg:items-center">
            <ProjectDisplay
              projectName={"Dlex Dashboard "}
              projectImage={"/dlex.png"}
              projectLink={"https://goodluck-dlex-dashboarb.netlify.app/"}
            />

            <ProjectDisplay
              projectName={"Country Rest API - Frontend Mentor "}
              projectImage={"/country-rest-api.png"}
              projectLink={"https://goodluck-country-rest-api.netlify.app/"}
            />
          </div>

          <div className="flex justify-center items-center pb-6 max-sm:pb-0">
            <div
              className=" relative mt-[1rem] text-[14px] after:absolute after:w-full after:max-sm:w-full 
                      after:bg-[#FD853A] after:rounded-[30px] after:z-0 after:top-[-2px] max-xl:after:w-full
                      after:h-[2.5rem] cursor-pointer flex  rounded-[30px] items-center gap-1 max-xl:gap-1.5 max-sm:gap-1"
            >
              <button
                className="p-[5px] font-semibold flex justify-center text-center items-center text-[17px] h-full cursor-pointer max-sm:px-2.5 max-sm:w-fit w-full  z-10 rounded-[30px] text-white bg-[#344E41]"
                onClick={setMorePoroject}
              >
                View more
              </button>{" "}
              <IoArrowForwardCircleSharp
                size={35}
                className="AboutPage__arrowIcon  text-[white] "
              />
            </div>
          </div>

          {moreProject && <ViewMoreProject />}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
