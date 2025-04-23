import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='bg-gradient-to-r from-purple-500 via-amber-500 to-slate-800  min-h-screen min-w-screen flex justify-center items-center flex-col '>



<div className='flex  w-full justify-center items-center'>
<h1 className=" ml- text-[200px] font-bold text-red-600 opacity-5 z-0 hover:opacity-100 hover:text-slate-700 select-none"> ABOUT SECTION
        </h1>
</div>


<div className='h-50 w-full flex justify-center items-center font-bold'> 
<p>go to <Link to="/" className='font-bold text-slate-700 hover:text-purple-500'>Home</Link> or <Link to="/Contact" className='font-bold text-slate-700 hover:text-purple-500'>Contact</Link></p>
</div>

    </div>
  )
}







export default About