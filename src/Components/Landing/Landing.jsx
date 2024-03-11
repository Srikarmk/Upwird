import React from 'react'
import logo from "../../assets/upwird-logo.png"
import imgcar from "../../assets/imgcar.png"
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className='max-h-screen max-w-screen'>
        {/*NAV*/}
        <nav className='flex justify-between px-5 py-3'>
      <img src={logo} alt="logo" width={100} />
      <Link to="/comingsoon" className='bg-black text-white px-3 rounded-xl'>
      <button className='mt-3'>SIGN UP/LOGIN AS TALENT</button></Link>
      </nav>

      <section className='flex h-[700px] landingbg px-5 py-3 mx-5 rounded-xl'>
        <div className='mt-20 w-[60%]'>
            <div className=''>
                <p className='text-xl font-bold ml-8'>100+ Artists Listed</p>
                <div><img src={imgcar} alt="" /></div>
            </div>
            <p className='relative top-[50%] text-6xl font-bold w-[80%] drop-shadow-[0px_6px_2px_rgba(0,0,0,0.2)]'>DISCOVER, CONNECT & HIRE ARTISTS AND CREATORS GLOBALLY</p>
        </div>
        <div className='w-[40%]'>
          <div className='w-[70%] bg-orange-100 h-[80%] mx-auto relative top-[10%] rounded-xl p-5'>
           <p className='mb-3 text-3xl font-bold '> Login</p>
           <p className='text-l'>Don't have an account yet? <a href="#" className='text-orange-500 underline'>Sign Up</a>
           </p>
           <div className=''>
            <form className='mt-10'>
              <p className='font-bold'>Email/Username</p>
              <input type="text" className='border-b-2 mt-2 border-black rounded-sm mb-5 w-[100%] h-[40px] p-2' placeholder='Enter your Username/Email..' />
              <br />
              <p className='font-bold'>Password</p>
              <input type="text" className='border-b-2 mt-2 border-black rounded-sm w-[100%] h-[40px] p-2' placeholder='Enter Your Password'/>
            </form>
            </div>
            <div className='w-full'>
            <button className='mt-10 w-[100%] h-[40px] bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg font-bold text-white'>LOGIN</button>
            <p className='mt-5 mb-5 font-semibold text-center'>OR LOGIN WITH</p>
            <div className="px-6 sm:px-0 max-w-sm">
              <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
            </div>
            <div className="px-6 sm:px-0 max-w-sm">
              <button type="button" className="text-white w-full  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>Sign up with Facebook<div></div></button>
            </div>
            
            </div>
          </div>
        </div>
        </section>
        
    </div>
  )
}

export default Landing
