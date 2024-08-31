import React, { useEffect, useRef, useState } from 'react'
import Chat from '../components/Chat';
import Loading from '../components/Loading';
import Loading2 from '../components/Loading2';
import Image from '../components/Image';

function Chatbot() {
const [chatData, setChatData] = useState([])
const [history, setHistory] = useState([
  {
    role: "user",
    parts: [{ text: "give me answer if and only if it is related to travaling or any place in world in 500 words.if question is not related to travaling then show answer like only travaling related question allowed" }]
  },
  {
    parts: [{ text: `Understood. I'll provide travel-related responses, If the question is not travel-related, I'll simply respond with \"Travel-related questions only.\"Please feel free to ask your question.`}],
    role: "model"
  }
])

const [question, setQuestion] = useState('')
const [chatLoading, setChatLoading] = useState(false)
const [resourseLoading, setResourseLoading] = useState(false)
const [imageDisp, setImageDisp] = useState([])

const handelQuestion = (e)=>{
  setQuestion(e.target.value)
}

const handelSubmit = async (e)=>{
  setChatLoading(true); // loading...
  setResourseLoading(true)
  e.preventDefault();

  const res = await fetch('http://localhost:1000/chatbot/chatResult', {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({question, historyall:history})
  })
  const result = await res.json()
  console.log(result)
  setChatData([...chatData,{
    user:question,
    model: `${result}`, 
  }]);
  setHistory([...history,{
    role: "user",
    parts: [
        {
            "text": question
        }
    ]
},
{
    parts: [
        {
            "text": result
        }
    ],
    role: "model"
}])
  setChatLoading(false);


  if(!result.includes('Travel-related questions only.')){
    const imagesArr = await fetch('http://localhost:1000/chatbot/photosResult', {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({query:question})
    })
    const testImg = await imagesArr.json()
    console.log(testImg)
    setImageDisp(testImg);
  }else{
    setImageDisp([]);
  }
  setResourseLoading(false)

   // Loading done
  setQuestion('')
}

const chatContainerRef = useRef(null);

useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
}, [chatData]); // Auto-scroll when chatData changes

return (
  <div className='w-full h-[100vh] bg-gray-100 flex'>
    {chatLoading ? <Loading /> : ''}
    {resourseLoading ? <Loading2 /> : ''}
    
    {/* Chat resources side */}
    <div className='w-[4%]'></div>
    <div className='w-[48%] h-full bg-slate-200'>
      <div className='w-full h-[320px]'>
        <Image images={imageDisp} />
      </div>
    </div>

    {/* Chating side */}
    <div className='w-[48%] h-full flex flex-col items-center justify-evenly'>
      <div 
        className='w-full h-full overflow-y-scroll overflow-x-hidden scroll-smooth'
        ref={chatContainerRef} // Attach ref to the chat container
      >
        <div className='chatContainer w-[80%] m-auto'>
          <div className='w-full h-full'>
            {chatData.map((data, index) => (
              <Chat qna={data} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[10%] resize-none no-scrollbar flex'>
        <form 
          action='' 
          onSubmit={handelSubmit} 
          className='w-[70%] h-[70%] flex rounded-full border px-4 py-3 bg-slate-200 m-auto'
        >
          <textarea 
            className='w-[85%] h-[100%] resize-none no-scrollbar bg-transparent outline-none'
            onChange={handelQuestion}
            value={question}
            placeholder='Ask me your question . . .' 
            disabled={chatLoading}
          ></textarea>
          <button 
            type='submit' 
            className='w-[15%] h-[100%] bg-slate-200' 
            disabled={chatLoading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);
};

export default Chatbot