import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookmark,
  faComment,
  faHouse,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [hint, setHint] = useState(null);

  const handelHint = (e) => {
    setHint(e.target.id);
  };
  const emptyHint = (e) => {
    setHint(null);
  };
  return (
    <div className="bg-slate-300 w-[4%] h-full sm:h-[100vh] fixed z-50 bg-opacity-20 shadow-xl backdrop-blur">
      <div className="flex flex-col">
        <div
          className={`${
            hint == "home" ? "w-40" : "w-10"
          } h-10 my-2 ml-3 bg-slate-100 rounded-full overflow-hidden outline outline-white outline-1 flex transition-all duration-500 delay-100 ease-out`}
          onMouseEnter={handelHint}
          onMouseLeave={emptyHint}
        >
          <div
            id="home"
            className={`${hint=='home' ? "bg-green-600 rotate-[360deg]" : " bg-sky-600"} min-w-10 h-10 text-center place-content-center rounded-full transition-all duration-[1.3s] ease-in-out`}
          >
            <Link to="/" className="">
              <FontAwesomeIcon icon={faHouse} className="text-2xl text-white" />
            </Link>
          </div>
          <div className=" text-black mr-5 w-full flex justify-center items-center text-lg font-semibold mx-1">
            <span className={`${hint=="home"?"inline-block":"hidden"}`}>Home</span>
          </div>
        </div>
        <div
          className={`${
            hint == "chat" ? "w-40" : "w-10"
          } h-10 my-2 ml-3 bg-slate-100 rounded-full overflow-hidden outline outline-white outline-1 flex transition-all duration-500 delay-100 ease-out`}
          onMouseEnter={handelHint}
          onMouseLeave={emptyHint}
        >
          <div
            id="chat"
            className={`${hint=='chat' ? "bg-green-600 rotate-[360deg]" : " bg-sky-600"} min-w-10 h-10 text-center place-content-center rounded-full transition-all duration-[1.3s] ease-in-out`}
          >
            <Link to="/chatbot" className="">
              <FontAwesomeIcon icon={faComment} className="text-2xl text-white" />
            </Link>
          </div>
          <div className=" text-black mr-5 w-full flex justify-center items-center text-lg font-semibold mx-1">
            <span className={`${hint=="chat"?"inline-block":"hidden"}`}>Chat</span>
          </div>
        </div>
        <div
          className={`${
            hint == "bookmarks" ? "w-40" : "w-10"
          } h-10 my-2 ml-3 bg-slate-100 rounded-full overflow-hidden outline outline-white outline-1 flex transition-all duration-500 delay-100 ease-out`}
          onMouseEnter={handelHint}
          onMouseLeave={emptyHint}
        >
          <div
            id="bookmarks"
            className={`${hint=='bookmarks' ? "bg-green-600 rotate-[360deg]" : " bg-sky-600"} min-w-10 h-10 text-center place-content-center rounded-full transition-all duration-[1.3s] ease-in-out`}
          >
            <Link to="/" className="">
              <FontAwesomeIcon icon={faBookmark} className="text-2xl text-white" />
            </Link>
          </div>
          <div className=" text-black mr-5 w-full flex justify-center items-center text-lg font-semibold mx-1">
            <span className={`${hint=="bookmarks"?"inline-block":"hidden"}`}>Bookmarks</span>
          </div>
        </div>
        <div
          className={`${
            hint == "logout" ? "w-40" : "w-10"
          } h-10 my-2 ml-3 bg-slate-100 rounded-full overflow-hidden outline outline-white outline-1 flex transition-all duration-500 delay-100 ease-out`}
          onMouseEnter={handelHint}
          onMouseLeave={emptyHint}
        >
          <div
            id="logout"
            className={`${hint=='logout' ? "bg-green-600 rotate-[360deg]" : " bg-sky-600"} min-w-10 h-10 text-center place-content-center rounded-full transition-all duration-[1.3s] ease-in-out`}
          >
            <Link to="/aunthicate" className="">
              <FontAwesomeIcon icon={faRightToBracket} className="text-2xl text-white" />
            </Link>
          </div>
          <div className=" text-black mr-5 w-full flex justify-center items-center text-lg font-semibold mx-1">
            <span className={`${hint=="logout"?"inline-block":"hidden"}`}>Logout</span>
          </div>
        </div>
        <div
          className={`${
            hint == "profile" ? "w-40" : "w-10"
          } h-10 my-2 ml-3 bg-slate-100 rounded-full overflow-hidden outline outline-white outline-1 flex transition-all duration-500 delay-100 ease-out`}
          onMouseEnter={handelHint}
          onMouseLeave={emptyHint}
        >
          <div
            id="profile"
            className={`${hint=='profile' ? "bg-green-600 rotate-[360deg]" : " bg-sky-600"} min-w-10 h-10 text-center place-content-center rounded-full transition-all duration-[1.3s] ease-in-out`}
          >
            <Link to="/profile" className="">
              <FontAwesomeIcon icon={faUser} className="text-2xl text-white" />
            </Link>
          </div>
          <div className=" text-black mr-5 w-full flex justify-center items-center text-lg font-semibold mx-1">
            <span className={`${hint=="profile"?"inline-block":"hidden"}`}>Profile</span>
          </div>
        </div>
        <div
          className={`${
            hint == "history" ? "w-40" : "w-10"
          } h-10 my-2 ml-3 bg-slate-100 rounded-full overflow-hidden outline outline-white outline-1 flex transition-all duration-500 delay-100 ease-out`}
          onMouseEnter={handelHint}
          onMouseLeave={emptyHint}
        >
          <div
            id="history"
            className={`${hint=='history' ? "bg-green-600 rotate-[360deg]" : " bg-sky-600"} min-w-10 h-10 text-center place-content-center rounded-full transition-all duration-[1.3s] ease-in-out`}
          >
            <Link to="/" className="">
              <FontAwesomeIcon icon={faBook} className="text-2xl text-white" />
            </Link>
          </div>
          <div className=" text-black mr-5 w-full flex justify-center items-center text-lg font-semibold mx-1">
            <span className={`${hint=="history"?"inline-block":"hidden"}`}>History</span>
          </div>
        </div>















        
      </div>
    </div>
  );
}

export default Header;
