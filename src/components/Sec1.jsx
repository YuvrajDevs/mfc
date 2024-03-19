import React from 'react'
import one from '../assets/main.png'
function Sec1() {
  return (
    <div className='mt-12 ml-12 mr-12 flex'>
           <div>
           <h1 className='text-[50px] font-bold' >Securing Online Spaces:<br></br>
Free from Explicit and Abusive Content</h1>
<p className='text-[26px] font-normal w-[700px] mt-3'>Safeguarding online spaces with rapid detection and filtering of explicit and abusive content, fostering a secure digital environment for 
all users.</p>
<button className=' border-blue-8 font-bold text-[20px] mt-10 w-[200px] bg-blue-600 text-white px-4 py-2 rounded-[50px]'>Get Started</button>
           </div>
<img className='h-[600px] mr-16' draggable="false" src={one} alt="" />
    </div>
  )
}

export default Sec1