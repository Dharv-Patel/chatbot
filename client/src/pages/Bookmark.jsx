import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Bookmark() {
  const { currentUser } = useSelector((state) => state.user);
  const [imgs, setImgs] = useState([]);
  const [bigImg, setBigImg] = useState(null)

  const getAllImgs = async () => {
    const allImgs = await fetch(
      "http://localhost:1000/userchats/getbookmarkedImgs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id }),
      }
    );
    const data = await allImgs.json();
    if (data.success !== false) {
      // console.log(data.bookmarks.photo)
      setImgs(data.bookmarks.photo);
    }
  };
  useEffect(() => {
    getAllImgs();
  }, []);
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[4%]"></div>
      <div className="w-[48%] h-full bg-white overflow-y-scroll overflow-x-hidden scroll-smooth no-scrollbar border-2">
        <div className="shadow-insideChatBox my-4 rounded-lg py-4 px-2">
          <h1 className="w-full h-10 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-slate-800 text-center bg-white ">
            Bookmarked Images
          </h1>
          <div className="w-full h-full flex justify-evenly flex-wrap cursor-pointer">
            {imgs.length != 0
              ? imgs.map((value, i) => {
                  return (
                    <div
                      className="w-52 h-56 bg-transparent m-2 rounded-lg overflow-hidden hover:outline outline-[3px] outline-slate-800"
                      key={i}
                      onMouseDown={()=>setBigImg(value)}
                    >
                      <img src={value} alt="" className="w-52 h-56 " />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>

      <div className="w-[48%] h-full flex flex-col items-center justify-evenly bg-white border-2">
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden scroll-smooth no-scrollbar">
          <div className="shadow-insideChatBox my-4 rounded-lg py-4 px-2">
            <h1 className="w-full h-10 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-slate-800 text-center bg-white ">
              Bookmarked travaling plans
            </h1>
          </div>
        </div>
      </div>
      {bigImg != null 
      ?
      <div className="absolute bg-transparent max-w-[750px] max-h-[500px] m-auto left-0 right-0 top-[15%] rounded-xl overflow-hidden ">
        <FontAwesomeIcon icon={faXmark} className="absolute text-2xl text-slate-700 right-0 m-2 bg-white rounded-full w-6 h-6" onClick={()=>setBigImg(null)}/>
        <img src={bigImg} alt="" className="rounded-xl"/>
      </div>
      : ''
        }
    </div>
  );
}
