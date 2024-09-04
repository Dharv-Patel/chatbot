import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookmark, faComment, faHouse, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'



function Header() {
  const [hint, setHint] = useState(null);

  const handelHint = (e) =>{
    setHint(e.target.id)
  }
  return (
    <div className='bg-slate-300 w-[4%] h-full sm:h-[100vh] fixed z-50 bg-opacity-50 shadow-xl'>
      <div className='flex flex-col ml-4 items-start'>

      <Link to='/' className='text-center mt-6 flex' onMouseOver={handelHint}>
        <FontAwesomeIcon id='home' icon={faHouse} className='text-2xl text-blue-900' />
        {/* {hint == 'home' ? <div className='bg-slate-300 w-20 ml-2 h-7 rounded' >Home</div> : ''} */}
        
      </Link>


      <Link to='/chatbot' className='text-center mt-6 flex'>
        <FontAwesomeIcon id='chatbot' icon={faComment} className='text-2xl text-blue-900 ml-1' />
        {/* <div className='bg-slate-300 w-20 ml-2 h-7 rounded'>Chat</div> */}
      </Link>

      <Link to='/' className='text-center mt-6 flex'>
        <FontAwesomeIcon id='bookmark' icon={faBookmark} className='text-2xl text-blue-900 ml-2' onMouseOver={handelHint}/>
        {/* <div className='bg-slate-300 w-24 ml-2 h-7 rounded'>Bookmark</div> */}
      </Link>

      <Link to='/aunthicate' className='text-center mt-6 flex'>
        <FontAwesomeIcon id='login' icon={faRightToBracket} className='text-2xl text-blue-900 border-b-2 border-slate-300 pb-3 w-8' onMouseOver={handelHint}/>
        {/* <div className='bg-slate-300 w-20 h-7 ml-2 rounded'>login</div> */}
      </Link>

      <Link to='/profile' className='text-center mt-6 flex'>
        <FontAwesomeIcon id='profile' icon={faUser} className='text-2xl text-blue-900 border-t-2 border-slate-300 pt-3 w-8 mt-[350px]' onMouseOver={handelHint}/>
        {/* <div className='bg-slate-300 w-20 mt-[360px] h-7 ml-2 rounded'>Profile</div> */}
      </Link>

      <Link to='/' className='text-center mt-6 flex'>
        <FontAwesomeIcon id='history' icon={faBook} className='text-2xl text-blue-900 ml-1' onMouseOver={handelHint}/>
        {/* <div className='bg-slate-300 w-20 ml-2 h-7 rounded'>History</div> */}
      </Link>

      
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