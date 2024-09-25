import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Startchat from "./Startchat";
import {
  setChat,
  setHistory,
  setTitle,
  setChatId,
} from "../redux/user/chatSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function History() {
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { title } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let todayChat = chats.filter((value, i) => {
    if (value.days <= 1) return value;
  });
  let yesterdayChat = chats.filter((value, i) => {
    if (value.days === 2) return value;
  });
  let thisweekChat = chats.filter((value, i) => {
    if (value.days < 7 && value.days > 2) return value;
  });
  let thismonthChat = chats.filter((value, i) => {
    if (value.days < 31 && value.days >= 7) return value;
  });
  let fewmonthsagoChat = chats.filter((value, i) => {
    if (value.days >= 31 && value.days > 2) return value;
  });

  const findallchats = async () => {
    const allchats = await fetch("http://localhost:1000/userchats/allchats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser._id }),
    });
    const data = await allchats.json();
    if (data.success !== false) {
      const chatsData = data.chats;
      const finalData = chatsData.map((value, i) => {
        let todaysdate = new Date();
        const chatDate = new Date(value.date);
        let Difference_In_Time = todaysdate.getTime() - chatDate.getTime();
        let Difference_In_Days = Math.round(
          Difference_In_Time / (1000 * 3600 * 24)
        );
        return { ...value, days: Difference_In_Days };
      });
      setChats(finalData);
    }
  };
  useEffect(() => {
    findallchats();
  }, []);
  const handelChat = async (e) => {
    const chatId = e.target.id;
    const allchats = await fetch("http://localhost:1000/userchats/onechats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser._id, chatId }),
    });
    const data = await allchats.json();
    // console.log(data.chats[0])
    if (data.success !== false) {
      dispatch(setTitle(data.chats[0].title));
      dispatch(setChatId(data.chats[0]._id));
      dispatch(setChat(data.chats[0].chatData));
      dispatch(setHistory(data.chats[0].history));
      navigate('/chatbot')
    }
  };
  return (
    <>
      <div className="bg-white w-[20%] h-full fixed left-[62px] z-40 border-2 border-slate-400 shadow-keyNumber overflow-x-hidden overflow-y-scroll">
        <div className="h-full w-full flex flex-col items-center">
          <button
            className="w-[90%] h-10 outline outline-2 outline-slate-500 mt-6 rounded-full text-lg font-semibold hover:bg-[#d8e1ec] text-slate-700"
            onClick={() => setNewChat(true)}
          >
            New Chat
          </button>
          {todayChat.length > 0 ? (
            <div className="w-full ml-4 mt-10 mb-1 text-slate-500">Today</div>
          ) : (
            ""
          )}
          {todayChat.map((value, i) => {
            return (
              <div
                id={value._id}
                key={i}
                className="w-[95%] h-8 px-3 py-0 text-lg rounded-lg hover:bg-slate-100 text-slate-800 truncate cursor-pointer hover:outline outline-1 outline-slate-300"
                onMouseDown={handelChat}
              >
                {value.title}
              </div>
            );
          })}
          {yesterdayChat.length > 0 ? (
            <div className="w-full ml-4 my-1 text-slate-500">Yesterday</div>
          ) : (
            ""
          )}
          {yesterdayChat.map((value, i) => {
            return (
              <div
                id={value._id}
                key={i}
                className="w-[95%] h-8 px-3 py-0 text-lg rounded-lg hover:bg-slate-100 text-slate-800 truncate cursor-pointer hover:outline outline-1 outline-slate-300"
                onMouseDown={handelChat}
              >
                {value.title}
              </div>
            );
          })}
          {thisweekChat.length > 0 ? (
            <div className="w-full ml-4 my-1 text-slate-500">This week</div>
          ) : (
            ""
          )}
          {thisweekChat.map((value, i) => {
            return (
              <div
                id={value._id}
                key={i}
                className="w-[95%] h-8 px-3 py-0 text-lg rounded-lg hover:bg-slate-100 text-slate-800 truncate cursor-pointer hover:outline outline-1 outline-slate-300"
                onMouseDown={handelChat}
              >
                {value.title}
              </div>
            );
          })}
          {thismonthChat.length > 0 ? (
            <div className="w-full ml-4 my-1 text-slate-500">This Month</div>
          ) : (
            ""
          )}
          {thismonthChat.map((value, i) => {
            return (
              <div
                id={value._id}
                key={i}
                className="w-[95%] h-8 px-3 py-0 text-lg rounded-lg hover:bg-slate-100 text-slate-800 truncate cursor-pointer hover:outline outline-1 outline-slate-300"
                onMouseDown={handelChat}
              >
                {value.title}
              </div>
            );
          })}
          {fewmonthsagoChat.length > 0 ? (
            <div className="w-full ml-4 my-1 text-slate-500">
              Last few months
            </div>
          ) : (
            ""
          )}
          {fewmonthsagoChat.map((value, i) => {
            return (
              <div
                id={value._id}
                key={i}
                className="w-[95%] h-8 px-3 py-0 text-lg rounded-lg hover:bg-slate-100 text-slate-800 truncate cursor-pointer hover:outline outline-1 outline-slate-300"
                onMouseDown={handelChat}
              >
                {value.title}
              </div>
            );
          })}
        </div>
      </div>

      {newChat ? (
        <div className="w-[50%] h-[100%] absolute left-[50%]">
          <Startchat />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default History;
