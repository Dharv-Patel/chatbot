import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-indigo-200 w-[4%] h-full sm:h-[100vh] fixed '>
      <div className='flex flex-col'>
        {/* <div className='font-bold sm:text-2xl text-xl cursor-pointer'>
          
          <Link to='/'>
            <span className='text-blue-900'>Travale</span>
            <span className='text-blue-700'>With</span>
            <span className='text-blue-500'>Me</span>
          </Link>
        </div> */}


        {/* <div className='flex flex-col w-1/2 sm:w-1/3 justify-evenly text-md sm:text-xl font-medium text-slate-700'>
            <span className='cursor-pointer hover:font-bold'>
              <Link to='/'>Home</Link>
            </span>
            <span className='cursor-pointer hover:font-bold'>
              <Link to='/chatbot'>Start Chat</Link>
            </span>
            <span className='cursor-pointer hover:font-bold'>
              <Link to='/aunthicate'>Signin</Link>
            </span>
        </div> */}
        {/* <Link to='/profile'>
          <div className='w-8 h-8 sm:w-11 sm:h-11 bg-red-300 rounded-full'></div>
        </Link> */}
        </div>
    </div>
  )
}

export default Header