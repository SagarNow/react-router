import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-purple-500 via-amber-blue-500 to-zinc-600  min-h-screen min-w-screen flex justify-center items-center flex-col '>



    <div className='flex  w-full justify-center items-center'>
    <h1 className=" ml- text-[150px] font-bold text-amber-400 opacity-8 z-0 hover:opacity-100 hover:text-slate-700 select-none"> CONTACT SECTION
            </h1>
    </div>
    
    
    <div className='h-50 w-full flex justify-center items-center font-bold'> 
    <p >go to <Link to="/" className='font-bold text-slate-700 hover:text-purple-500'>Home</Link> or <Link to="/About" className='font-bold text-slate-700 hover:text-purple-500'>About</Link></p>
    </div>
    
        </div>

   
  )
}












    
export default Contact