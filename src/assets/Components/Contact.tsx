import '/src/css-folder/Contact.css';


export default function Contact() {
  return (
    <div className='contact__body bg-[white]'>
      
      <div className="contact___container">

      <div className='ContactMePage___Heading'>
            <h3 className='text-[#FD853A] text-3xl font-stretch-50%'>Contact</h3>
        </div>
            
            <div className='Contact___FormContainer flex'>
                    <div>
                       <h3 className='text-5xl tracking-widest leading-14'><span className='font-semibold'>Let's Talk for</span> 
                        <span className='text-[#FD853A] italic font-light'> Your <br/>
                       Next Project </span></h3>

                       <div>
                        
                       </div>

                    </div>
                    <div>
                        <div>
                        <label htmlFor="text">Name</label>
                        <input type="text" />

                        </div>
                       
                    </div>

            </div>
               
      </div>



    </div>
  )
}
