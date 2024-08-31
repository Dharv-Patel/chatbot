import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Chat({qna}) {
  return (
    <>
        <div className='float-right mr-2 ml-60 my-4 rounded-lg bg-slate-200 px-4 py-2 break-all'>
            {qna.user}
        </div>
        <br />
        <div className='float-left ml-2 my-4 px-4 py-2 prose prose-md'>
            <ReactMarkdown children={qna.model} />
        </div>
        {/* <div className='float-left overflow-x-scroll overflow-y-hidden'>
            <div className='flex'>
                {
                qna.img.length !== 0 ?  
                        qna.img.map((img, index)=>{
                            console.log(img)
                            return <Imagedisp image={img} key={index}/>
                        }) 
                        : ''
                }
            </div>
        </div> */}
    </>
  )
}

function Imagedisp({image}) {
    return (
        <img className='w-[70%] h-[300px] p-3' src={image} alt='' />
    )
  }

export default Chat