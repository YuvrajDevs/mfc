import React from 'react'
import link from '../assets/link.png'
import linkdocs from '../assets/linkdocs.png'
function Card() {
  return (
  <div className='flex gap-[90px] justify-center'>
      <div className='w-[300px] h-[400px] rounded-[50px] flex flex-col  items-center bg-blue-100 '>
       <p className='text-[35px]  font-bold mt-6'> Free</p>
       <img className='mt-10 h-[80px] mb-10' src={link} alt="" />
       <p className='text-center text-[20px] font-semibold mb-8'>Ensure your URL is safe from Explicit content</p>
    <button className='w-[300px] h-[80px] rounded-b-[50px] font-bold text-white text-[30px] flex justify-center items-center bg-[#0069FF]' >
        FREE
    </button>
    </div>

<div className='w-[300px] h-[400px] rounded-[50px] flex flex-col  items-center bg-blue-100 '>
<p className='text-[35px]  font-bold mt-6'> Creators</p>
<img className='mt-10 h-[80px] mb-10' src={linkdocs} alt="" />
<p className='text-center text-[20px] font-semibold mb-8'>Ensure your URL is safe from Explicit content</p>
<button className='w-[300px] h-[80px] rounded-b-[50px] font-bold text-white text-[30px] flex justify-center items-center bg-[#0069FF]' >
₹499/Mo
</button>
</div>

<div className='w-[300px] h-[400px] rounded-[50px] flex flex-col  items-center bg-blue-100 '>
       <p className='text-[35px]  font-bold mt-6'> Businesses</p>
       <img className='mt-10 h-[80px] mb-10' src={linkdocs} alt="" />
       <p className='text-center text-[20px] font-semibold mb-8'>Ensure your URL is safe from Explicit content</p>
    <button className='w-[300px] h-[80px] rounded-b-[50px] font-bold text-white text-[30px] flex justify-center items-center bg-[#0069FF]' >
    ₹9,999/Mo
    </button>
    </div>

    
  </div>
  )
}

export default Card