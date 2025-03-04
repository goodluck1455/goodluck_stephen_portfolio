
interface HeadingPageProps {
    HeadingName:string;
    HeadingAfterColor: string;

}

// HeadingName={"Contact"} HeadingAfterColor={"bg-[#FD853A]"}


export default function HeadingPage({HeadingName, HeadingAfterColor}:HeadingPageProps) {
  return (
    <>
     <div className=' '>
            <h3 className={`${HeadingAfterColor} text-3xl font-stretch-50% relative pt-[1rem] before:absolute before:w-[1%] before:h-[70%]
             before:bg-[#FD853A] before:pr-[10px] before:left-[-22px] before:rounded-bl-[10px]  before:rounded-br-[10px] before:top-0

             max-sm:ml-[1.5rem]
             
             after:absolute after:w-[1%] after:rounded-full after:h-[23%] after:bg-[#FD853A] after:bottom-0 after:left-[-22px]
             max-sm:after:w-[3.5%]
             `}>{HeadingName}</h3>
             </div> 


    </>
  )
}
