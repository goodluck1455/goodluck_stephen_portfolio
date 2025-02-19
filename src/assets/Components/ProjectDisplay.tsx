import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";


// Define props type
interface ProjectDisplayProps {
    projectName: string;
    projectImage: string;
  }



export default function ProjectDisplay({ projectName, projectImage }: ProjectDisplayProps) {
  return (
    <>
      
          <div className='Project_display___container bg-[white]'>

                      <div className={`project___image-container bg-[#F5F3F4] ${projectImage}` } >
                      {/* <img src="/foot-wears.png" alt="project_display" className='rounded-2xl' /> */}
                      </div>
                      <div className='flex gap-2.5 mt-3'>
                        <div className='project___terminology bg-[#FD853A] rounded-2xl  text-center text-black font-bold'>
                          <h2>HTML</h2>
                        </div>
                        <div className='project___terminology bg-[#FD853A] rounded-2xl  text-center  text-black font-bold'>
                          <h2>CSS</h2>
                        </div>
                        <div className='project___terminology bg-[#FD853A] rounded-2xl  text-center text-black font-bold'>
                          <h2>React Js</h2>
                        </div>
                        <div className='project___terminology bg-[#FD853A] rounded-2xl  
                        text-center text-black font-bold'>
                          <h2 className='my-auto'>Typscript</h2>
                        </div>
                      </div>

                        <div className='flex justify-between gap-10 align-middle mt-5'>
                          <p className='text-2xl break-after-right text-balance font-medium'>
                            {projectName}
                          </p>
                          <div className='bg-[#344E41] proect__terminoly_logo my-auto cursor-pointer'>
                          < ArrowRight className=' project__right_arrow text-[22rem] text-white' />
                          </div>
                        
                             
                        </div>


                    </div>




    </>
  )
}
