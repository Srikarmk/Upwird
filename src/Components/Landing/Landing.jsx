import React from 'react'
import logo from "../../assets/upwird-logo.png"
import imgcar from "../../assets/imgcar.png"
const Landing = () => {
  return (
    <div className='max-h-screen max-w-screen'>
        {/*NAV*/}
        <nav className='flex justify-between px-5 py-3'>
      <img src={logo} alt="logo" width={100} />
      <button className='bg-black text-white px-2 rounded-xl'>SIGN UP/LOGIN AS TALENT</button>
      </nav>

      <section className='flex h-[700px] bg-[#D77676] px-5 py-3 mx-5 rounded-xl'>
        <div className='mt-20 w-[60%]'>
            <div className=''>
                <p className='text-xl font-bold ml-10'>10+ Artists Listed</p>
                <div><img src={imgcar} alt="" /></div>
            </div>
            <p className='relative top-[60%] text-5xl font-bold'>DISCOVER, CONNECT & HIRE ARTISTS AND CREATORS GLOBALLY</p>
        </div>
        <div className='w-[40%]'>
          <div className='w-[70%] bg-white h-[80%] mx-auto relative top-[10%] rounded-xl text-center p-2'>
           <p className='mb-5 text-2xl'> Login</p>
            <form className=''>
              <label htmlFor="">Username</label>
              <input type="text" className='border-2 ml-2 border-black rounded-lg' />
              <br /><label htmlFor="">Password</label>
              <input type="text" className='border-2 ml-2 mt-5 border-black rounded-lg' />
            </form>
          </div>
        </div>
        </section>
        
    </div>
  )
}

export default Landing
