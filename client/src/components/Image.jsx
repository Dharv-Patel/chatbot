import React from 'react'

function Image({images}) {
    if (images.length !=0) {
        return (
          <div className='w-full h-full flex justify-evenly'>
              <div className='w-[360px] h-[310px]'>
                  <img className='w-[360px] h-[310px] rounded-md' src={images[0] || images[5]} alt="" />
              </div>
              <div className='w-[390px] h-[320px] flex flex-wrap justify-evenly'>
                  <div className='w-[180px] h-[150px]'>
                      <img className='w-[180px] h-[150px] rounded-md' src={images[1] || images[6]} alt="" />
                  </div>
                  <div className='w-[180px] h-[150px]'>
                      <img className='w-[180px] h-[150px] rounded-md' src={images[2] || images[7]} alt="" />
                  </div>
                  <div className='w-[180px] h-[150px] '>
                      <img className='w-[180px] h-[150px] rounded-md' src={images[3] || images[8]} alt="" />
                  </div>
                  <div className='w-[180px] h-[150px]'>
                      <img className='w-[180px] h-[150px] rounded-md' src={images[5] || images[3]} alt='' />
                  </div>
              </div>
          </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Image