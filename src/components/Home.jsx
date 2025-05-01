import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-800  min-h-screen min-w-screen '> 
    
    <div className='flex h-70 -mb-30 w-full justify-center items-center'>
    <div className=' gap-8 flex' >

    <Link to="/"className='px-4 py-2 border-2 border-2 bg-slate-700 hover:bg-purple-500 hover:text-yellow-500 rounded-md  shadow-md'>Home</Link>
    <Link to="/About" className='px-4 py-2 border-2 border-2 bg-slate-700 hover:bg-purple-500  hover:text-yellow-500 rounded-md shadow-md'>About</Link>
    <Link to="/Contact" className='px-4 py-2 border-2 border-2 bg-slate-700 hover:bg-purple-500  hover:text-yellow-500 rounded-md shadow-md'>Contact</Link>
    
</div>
</div>
<div className='h-70 -mb-30 w-full justify-center items-center  flex text-[100px] font-black text-slate-700 opacity-10 hover:opacity-100 hover:text-yellow-500 '>
      <h1 className='shadow-md select-none'> Home page </h1>
    </div>
   <div>  <h1 className=" ml-75 text-[200px] font-bold text-red-600 opacity-5 z-0 hover:opacity-100 hover:text-slate-700 select-none">
          Sagar Now
        </h1></div>

   
    
    </div>



   
  )
}

export default Home