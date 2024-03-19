import React from 'react'
import logo from '/logo.png'
function Login() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <img className='h-[50px] mt-2' src={logo} alt="" />
    <div className="max-w-md mx-auto mt-8">
      <form className="mt-[60px] space-y-4">
         <div className='flex flex-col justify-center items-center'> <h3 className='font-bold text-[40px]'>Login</h3></div>
        <div>
          <label htmlFor="email" className="block mb-2 ml-5 font-semibold text-[20px]">Email</label>
          <input placeholder='Enter your Email'
            type="email"
            id="email"
            name="email"
            className=" border-black border-[2px]  rounded-[30px] w-[400px] px-5 py-2"
            required
          />
        </div>
        <div >
          <label htmlFor="password" className="block mb-2 ml-5 font-semibold text-[20px]">Password</label>
          <input placeholder='Enter your Password'
            type="password"
            id="password"
            name="password"
            className=" border-black border-[2px]  rounded-[30px] w-[400px] px-5 py-2"
            required />
            <p className='ml-[230px] mt-1 text-[17px] underline'>forgot your password ?</p>
        </div>
          <div className='flex flex-col items-center'>
          <button type="submit" className="bg-black mt-6 text-white  font-bold text-[25px] py-2 px-4 rounded-[30px] w-[200px] hover:bg-blue-600">
        Sign in
      </button>
      <p className=' text-[18px] mt-5 '>Don't have an account ? <span className=' font-bold'>Register</span></p>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Login