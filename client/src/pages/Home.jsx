import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



function Home() {
  return (
    <div className='w-full h-full flex'>
        {/* <div className='w-[4%] h-full'>s</div> */}

        {/* website content */}
        <div>
          <div className='absolute top-[-30%] -z-20'>
            <img className='w-full ' src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>


          <div className='w-[650px] h-[600px] bg-slate-300 absolute top-[10%] left-[4%] bg-opacity-40 rounded-r-3xl'>
            <div className='text-5xl font-bold font-sans leading-[46px] ml-10 mt-16 text-slate-900'>
              <span>AI </span><span className='text-amber-600'>Assistant</span><br />
              <span className='text-amber-600'>Chatbots </span><span>that</span><br />
              <span>enhance the traveler experience</span>
            </div>
            <div className='font-mono font-bold mx-10 mt-10 text-slate-900 leading-5'>
            Discover the world with ease! Our intelligent travel chatbot is your personal guide, ready to assist you in planning the perfect trip. Whether you're seeking hidden gems, need real-time recommendations, or want to navigate your journey smoothly.
            </div>
            <div className='font-mono font-bold mx-10 mt-4 text-slate-900 leading-5'>
            our chatbot is here to make your travel experience seamless and unforgettable. Explore, ask, and embark on your next adventure with confidence!
            </div>

            <div className='flex justify-center w-full my-14'>
              <Link to='/chatbot' className='w-64 h-12 bg-amber-600 text-center py-2 text-xl font-bold text-slate-900 rounded-lg bg-opacity-70 flex justify-evenly align-middle hover:bg-opacity-100'>
                <div>Start Chat</div>
                <FontAwesomeIcon id='home' icon={faArrowRight} className='text-2xl text-slate-900 mt-1' />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home