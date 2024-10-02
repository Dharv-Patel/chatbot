import {
  faChevronDown,
  faChevronUp,
  faCross,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Bookmark() {
  const { currentUser } = useSelector((state) => state.user);
  const [imgs, setImgs] = useState([]);
  const [plans, setPlans] = useState([]);
  const [bigImg, setBigImg] = useState(null);
  const [activePlan, setActivePlan] = useState(null);
  const [day, setDay] = useState(0);

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
  const getAllPlans = async () => {
    const allPlan = await fetch(
      "http://localhost:1000/userchats/getbookmarkedPlan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id }),
      }
    );
    const data = await allPlan.json();
    if (data.success !== false) {
      // console.log(data.bookmarks.photo)
      setPlans(data.bookmarks.dayPlan);
    }
  };
  useEffect(() => {
    getAllImgs();
    getAllPlans();
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
                      onMouseDown={() => setBigImg(value)}
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
            <div className="flex flex-col">
              {plans.map((value, i1) => {
                return (
                  <div className="" key={i1}>
                    <div
                      className="h-12 bg-slate-100 content-center border-2 border-black m-[1px] rounded-lg mx-10 px-2 text-lg hover:bg-slate-200 cursor-pointer"
                      onClick={() =>
                        setActivePlan(activePlan == i1 ? null : i1)
                      }
                    >
                      <span>{value.destination}</span>
                      <FontAwesomeIcon
                        icon={activePlan == i1 ? faChevronUp : faChevronDown}
                        className="float-right mt-1 "
                      />
                    </div>
                    {activePlan == i1 ? (
                      <div className="w-full mx-16 mt-4">
                        <button
                          className={`${
                            day == 0 ? "bg-green-600 " : "bg-sky-600 "
                          }" w-20 mx-2 h-10 mb-3 shadow-lg rounded-lg text-lg font-mono text-white text-center outline outline-2 outline-slate-700 hover:outline-slate-200"`}
                          onClick={() => setDay(0)}
                        >
                          Day1
                        </button>
                        <button
                          className={`${
                            day == 1 ? "bg-green-600 " : "bg-sky-600 "
                          }" w-20 mx-2 h-10 mb-3 shadow-lg rounded-lg text-lg font-mono text-white text-center outline outline-2 outline-slate-700 hover:outline-slate-200"`}
                          onClick={() => setDay(1)}
                        >
                          Day2
                        </button>
                        <button
                          className={`${
                            day == 2 ? "bg-green-600 " : "bg-sky-600 "
                          }" w-20 mx-2 h-10 mb-3 shadow-lg rounded-lg text-lg font-mono text-white text-center outline outline-2 outline-slate-700 hover:outline-slate-200"`}
                          onClick={() => setDay(2)}
                        >
                          Day3
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    {activePlan == i1
                      ? value.itinerary[day].places.map((value, i) => {
                          return (
                            <div
                              className={`" border-b-2 border-slate-300 py-4 mx-16 "`}
                              key={i}
                            >
                              <div className="flex justify-start mx-4 my-3">
                                <h3 className="font-semibold mx-2 list-item text-nowrap marker:text-slate-400">
                                  Name :{" "}
                                </h3>
                                <span className="text-sky-600 font-bold">
                                  {value.name}
                                </span>
                              </div>
                              <div className="flex justify-start mx-4 my-3 ">
                                <h3 className="font-semibold mx-2 list-item text-nowrap marker:text-slate-400">
                                  Details :{" "}
                                </h3>
                                <span className="text-slate-800">
                                  {value.place_details}
                                </span>
                              </div>
                              <div className="flex justify-start mx-4 my-3">
                                <h3 className="font-semibold mx-2 list-item text-nowrap marker:text-slate-400">
                                  Time :{" "}
                                </h3>
                                <span className="text-slate-800">
                                  {value.time}
                                </span>
                              </div>
                              <div className="flex justify-start mx-4 my-3">
                                <h3 className="font-semibold mx-2 list-item text-nowrap marker:text-slate-400">
                                  Description :{" "}
                                </h3>
                                <span className="text-slate-800">
                                  {value.description}
                                </span>
                              </div>
                              <div className="flex justify-start mx-4 my-3">
                                <h3 className="font-semibold mx-2 list-item text-nowrap marker:text-slate-400">
                                  TicketPrice :{" "}
                                </h3>
                                <span className="text-slate-800">
                                  {value.ticketPrice}
                                </span>
                              </div>
                              <div className="flex justify-start mx-4 my-3">
                                <h3 className="font-semibold mx-2 list-item text-nowrap marker:text-slate-400">
                                  TravelTime :{" "}
                                </h3>
                                <span className="text-slate-800">
                                  {value.travelTime}{" "}
                                </span>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {bigImg != null ? (
        <div className="absolute w-full h-full bg-gray-400 bg-opacity-50 backdrop-blur-sm">
          <div className="absolute bg-transparent max-w-[950px] max-h-[650px] m-auto left-0 right-0 top-[5%] rounded-xl overflow-hidden">
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute text-2xl text-slate-700 right-0 m-2 bg-white rounded-full w-6 h-6"
              onClick={() => setBigImg(null)}
            />
            <img src={bigImg} alt="" className="rounded-xl" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
