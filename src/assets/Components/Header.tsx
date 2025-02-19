// import React from 'react'
import '/src/css-folder/header.css';

export default function Header() {
  return (
    <>
      <div className='fixed w-screen z-10'>
         <div className="header-container text-white flex justify-between place-content-center ">
          <div className='flex gap-2 cursor-pointer'>
          <div className='myBranding-Logo ' >
            <h3 className='font-bold '>G</h3>
           </div>
           <div className='Portfolio-name'>
           <h2>Goodluck Stephen</h2>
           </div>
          </div>

          <div>
            <ul className='Menu gap-20'>
               <li>Home</li>
              <li>About</li>
              <li>Work</li>
              <li>Project</li>
            </ul>
          </div>
          <div className='contact-container'>
            <p>Contact Me</p>
          </div>
           
         </div>
          

      </div>
    </>
  )
}
