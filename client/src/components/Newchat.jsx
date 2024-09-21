import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Startchat from "./Startchat";

function Newchat() {
    const [startChat, setStartChat] = useState(false)
  return (
    <div >
        {
            startChat ? <Startchat /> : ''
        }
      <div className={startChat?'blur-2xl flex flex-col justify-center items-center h-[100vh]':'flex flex-col justify-center items-center h-[100vh]'}>
        <span className="text-lg font-mono text-slate-900 opacity-50">You can use me to help you with your travel planning!</span>
        <span className="font-mono py-4 px-10 text-center text-slate-800 opacity-40">
             I can give you details about places to
          visit, things to do, where to eat, and how to get around. I can help you organize your trip, including
          transportation, accommodation, and activities.I can answer any questions you have about travel, from visa
          requirements to packing tips. So, tell me, what are you thinking about
          traveling?
        </span>
        <button className="py-2 px-10 border-2 rounded-lg text-xl font-semibold border-black hover:outline-red-300 hover:outline flex justify-evenly items-center" onClick={()=>setStartChat(true)} disabled={startChat}>
          <div>Start Chat</div>
          <FontAwesomeIcon icon={faArrowRight} className="pl-6 text-xl"/>
        </button>
      </div>
    </div>
  );
}

export default Newchat;
