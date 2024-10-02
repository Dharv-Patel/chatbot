import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setChat,
  setHistory,
  setTitle,
  setChatId,
} from "../redux/user/chatSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import {  signInSuccess } from '../redux/user/userSlice.js';


function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    age: currentUser.age == null ? "" : currentUser.age,
    gender: currentUser.gender == null ? "" : currentUser.gender,
    mobileNumber:
      currentUser.mobileNumber == null ? "" : currentUser.mobileNumber,
    address: currentUser.address == null ? "" : currentUser.address,
    profilePicture: currentUser.profilePicture == null ? "" : currentUser.profilePicture,
  });

  const [fileError, setFileError] = useState("");
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [activePlan, setActivePlan] = useState(null);
  const [day, setDay] = useState(0);
  const [imgs, setImgs] = useState([]);
  const [bigImg, setBigImg] = useState(null);
  const [profileimg, setProfileImg] = useState(null);
  const [imageUrl, setImageUrl] = useState(`http://localhost:1000/images/${currentUser.profilePicture}`)

  const handleFormData = (e) => {
    const { id, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        setUserData({
          ...userData,
          profilePicture: file.name, // Storing valid image file object
        });
        setProfileImg(file);
        setFileError(""); // Clear the error if the file is valid
      } else {
        setFileError("Only image files (jpg, png, jpeg) are allowed.");
        setUserData({
          ...userData,
          profilePicture: currentUser.profilePicture, // Reset the file if invalid
        });
      }
    } else {
      setUserData({
        ...userData,
        [id]: value,
      });
    }
  };



  const handleSubmit = async (e) => {
    console.log(userData)
    e.preventDefault();
    if(userData.profilePicture == "")
      setUserData({...userData,profilePicture:currentUser.profilePicture})
    const formData = new FormData();
    formData.append('userId', currentUser._id); 
    formData.append('userData', JSON.stringify(userData));
    formData.append('file', profileimg);
    console.log(userData);
    try {
      const res = await fetch("http://localhost:1000/userchats/updateProfile", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success !== false) {
        console.log(data)
        dispatch(signInSuccess(data))
        setImageUrl(`http://localhost:1000/images/${data.profilePicture}`)
        // handelCancel(null)
        console.log(imageUrl)
      }
      
    } catch (error) {
      console.log(error)
    }
   
  };
  const handelCancel = (e) => {
    if(e != null){

      e.preventDefault();
    }
    setEditProfile(false);
    setFileError("");
    setUserData({
      username: currentUser.username,
      email: currentUser.email,
      age: currentUser.age == null ? "" : currentUser.age,
      gender: currentUser.gender == null ? "" : currentUser.gender,
      mobileNumber:
        currentUser.mobileNumber == null ? "" : currentUser.mobileNumber,
      address: currentUser.address == null ? "" : currentUser.address,
      profilePicture: currentUser.profilePicture == null ? "" : currentUser.profilePicture,
    });
    
  };

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
      setChats(chatsData);
    }
  };

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
      navigate("/chatbot");
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
    findallchats();
    getAllPlans();
    getAllImgs();
  }, []);

  const deleteChat = async (id) => {
    const res = await fetch("http://localhost:1000/userchats/deleteChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser._id, chatId: id }),
    });
    const data = await res.json();
    if (data.success !== false) {
      findallchats();
    }
  };
  const deletePlan = async (destination) => {
    console.log(destination)
    const res = await fetch("http://localhost:1000/userchats/deletePlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser._id, destination }),
    });
    const data = await res.json();
    if (data.success !== false) {
      getAllPlans();
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-[4%]"></div>
      <div className="w-[30%] h-auto flex flex-col items-center">
        <div className="w-72 h-72 rounded-full bg-white mt-20 overflow-hidden">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-72 h-96 mt-2 flex flex-col">
          <span className="text-2xl font-semibold">{currentUser.username}</span>
          <span className="text-xl">{currentUser.email}</span>
          {!editProfile ? (
            <button
              className="w-full h-9 bg-sky-600 text-white outline outline-2 outline-slate-500 rounded-lg mt-6 text-lg font-semibold hover:bg-sky-700"
              onClick={() => setEditProfile(true)}
            >
              Edit Profile
            </button>
          ) : (
            <form className="mt-8" onSubmit={handleSubmit}>
              <span>Name</span>
              <input
                type="text"
                id="username"
                className="w-full outline outline-1 bg-slate-50 mb-2 px-1"
                value={userData.username}
                onChange={handleFormData}
              />
              <span>Email Id</span>
              <input
                type="text"
                id="email"
                className="w-full outline outline-1 bg-slate-50 mb-2 px-1"
                value={userData.email}
                onChange={handleFormData}
              />
              <span>Age</span>
              <input
                type="number"
                id="age"
                className="w-full outline outline-1 bg-slate-50 mb-2 px-1"
                value={userData.age}
                onChange={handleFormData}
              />
              <div className="flex mt-4 mb-4">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Male"
                  checked={userData.gender == "Male"}
                  onChange={handleFormData}
                  className="h-6 w-8 mx-2"
                />
                <label htmlFor="genderMale" className="text-lg mx-2">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Female"
                  checked={userData.gender == "Female"}
                  onChange={handleFormData}
                  className="h-6 w-8 mx-2"
                />
                <label htmlFor="genderFemale" className="text-lg mx-2">
                  Female
                </label>
              </div>
              <span>Mobile number</span>
              <input
                type="number"
                id="mobileNumber"
                className="w-full outline outline-1 bg-slate-50 mb-2 px-1"
                value={userData.mobileNumber}
                onChange={handleFormData}
              />
              <span>Address</span>
              <textarea
                id="address"
                className="w-full outline outline-1 bg-slate-50 mb-2 px-1"
                value={userData.address}
                onChange={handleFormData}
              ></textarea>
              <span>Profile Picture</span>
              <input
                type="file"
                className="w-full bg-white my-2 p-1"
                onChange={handleFormData}
                
              />
              {<p className="text-red-500">{fileError}</p>}
              <div className="flex justify-evenly mt-10 mb-20">
                <button
                  className="w-32 h-9 outline outline-1 bg-red-500 mb-2 px-1 rounded-lg text-white"
                  onClick={handelCancel}
                >
                  Cancel
                </button>
                <button
                  className="w-32 h-9 outline outline-1 bg-green-500 mb-2 px-1 rounded-lg text-white"
                  type="submit"
                  disabled={fileError == "" ? false : true}
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="w-[66%] h-full flex flex-col items-center justify-evenly bg-white">
        <div className=" max-h-[350px] w-[90%] mt-20 mx-6 overflow-x-hidden overflow-y-scroll flex flex-wrap content-start border-2 border-sky-600 rounded-xl shadow-lg shadow-slate-100 py-5 no-scrollbar justify-evenly">
          <div className="w-[94%] h-12 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-white text-center bg-sky-600 content-center sticky">
            Chat History
          </div>
          {chats.map((value, i) => {
            return (
              <div
                
                className="group w-[45%] h-12 border-2 border-slate-300 bg-white my-2 text-lg content-center px-2 overflow-hidden text-slate-800 rounded-lg hover:bg-sky-50 "
                key={i}
              >
                <span className="truncate">{value.title}</span>
                <span className="text-sm font-mono mx-1 text-slate-400 truncate">
                  ({value.date})
                </span>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="float-right mt-1 text-red-400 hidden group-hover:inline-block mx-1 cursor-pointer"
                  onClick={() => deleteChat(value._id)}
                />
                <FontAwesomeIcon
                  id={value._id}
                  icon={faEye}
                  className="float-right mt-1 text-green-400 hidden group-hover:inline-block mx-1 cursor-pointer"
                  onClick={handelChat}
                />
              </div>
            );
          })}
        </div>

        <div className=" max-h-[300px] w-[90%] mt-10 mx-6 overflow-x-hidden overflow-y-scroll flex flex-wrap content-start border-2 border-sky-600 rounded-xl shadow-lg shadow-slate-100 py-5 no-scrollbar justify-evenly">
          <div className="w-[94%] h-12 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-white text-center bg-sky-600 content-center sticky">
            Bookmarked Plans
          </div>
          {plans.map((value, i) => {
            return (
              <div
                key={i}
                className="group min-w-[21%] h-12 border-2 border-slate-300 bg-white my-2 text-lg content-center px-2 overflow-hidden text-slate-800 rounded-lg hover:bg-sky-50"
              >
                <span>{value.destination}</span>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="float-right mt-1 text-red-400 hidden group-hover:inline-block cursor-pointer"
                  onClick={()=>deletePlan(value.destination)}
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="float-right mt-1 text-green-400 hidden group-hover:inline-block mx-2 cursor-pointer"
                  onClick={() => setActivePlan(activePlan == i ? null : i)}
                />
              </div>
            );
          })}
        </div>

        <div className=" max-h-[500px] w-[90%] mt-10 mx-6 overflow-x-hidden overflow-y-scroll flex flex-wrap content-start border-2 border-sky-600 rounded-xl shadow-lg shadow-slate-100 py-5 no-scrollbar justify-evenly mb-40">
          <div className="w-[94%] h-12 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-white text-center bg-sky-600 content-center sticky">
            Bookmarked Images
          </div>
          {imgs.length != 0
            ? imgs.map((value, i) => {
                return (
                  <div
                    className="group w-48 h-48 bg-transparent m-2 rounded-lg overflow-hidden hover:outline outline-[3px] outline-slate-800 cursor-pointer"
                    key={i}
                    onMouseDown={() => setBigImg(value)}
                  >
                    <div>
                      {/* <FontAwesomeIcon
                        icon={faTrash}
                        className="absolute text-red-400 hidden group-hover:inline-block bg-white p-2 rounded-full"
                      /> */}
                      <img src={value} alt="" className="w-48 h-48 " />
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      {activePlan != null ? (
        <div className="fixed w-full h-full bg-gray-400 bg-opacity-50 backdrop-blur-sm">
          <div className="absolute bg-white w-[50%] h-[650px] m-auto left-0 right-0 top-[5%] rounded-xl overflow-x-hidden outline outline-2 outline-slate-800 overflow-y-scroll">
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute text-2xl text-slate-700 right-0 m-2 bg-white rounded-full w-6 h-6"
              onClick={() => setActivePlan(null)}
            />
            <div className="w-full mx-16 mt-10">
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
              <div className="w-[85%]">
                {plans[activePlan].itinerary[day].places.map((value, i) => {
                  return (
                    <div
                      className={`" border-b-2 border-slate-300 py-4 mx-4"`}
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
                        <span className="text-slate-800">{value.time}</span>
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
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {bigImg != null ? (
        <div className="fixed w-full h-full bg-gray-400 bg-opacity-50 backdrop-blur-sm">
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

export default Profile;
