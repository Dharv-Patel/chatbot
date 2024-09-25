import React, { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    age: currentUser.age == null ? '' : currentUser.age,
    gender: currentUser.gender == null ? '' : currentUser.gender,
    mobileNumber: currentUser.mobileNumber == null ? '' : currentUser.mobileNumber,
    address: '',
    profilePicture: null,
  });

  const [fileError, setFileError] = useState('');


  const handleFormData = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        setUserData({
          ...userData,
          profilePicture: file.name // Storing valid image file object
        });
        setFileError(''); // Clear the error if the file is valid
      } else {
        setFileError('Only image files (jpg, png, jpeg) are allowed.');
        setUserData({
          ...userData,
          profilePicture: null // Reset the file if invalid
        });
      }
    } else {
      setUserData({
        ...userData,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // if (userData.profilePicture) {
    //   console.log("Selected file:", userData.profilePicture.name);
    // }
  };
  const handelCancel = (e) => {
    e.preventDefault();
    setEditProfile(false)
    setFileError('')
    setUserData({
      username: currentUser.username,
      email: currentUser.email,
      age: currentUser.age == null ? '' : currentUser.age,
      gender: currentUser.gender == null ? '' : currentUser.gender,
      mobileNumber: currentUser.mobileNumber == null ? '' : currentUser.mobileNumber,
      address: '',
      profilePicture: null,
    })
  };

  return (
    <div className="w-full flex">
      <div className="w-[4%]"></div>
      <div className="w-[30%] h-auto flex flex-col items-center">
        <div className="w-72 h-72 rounded-full bg-green-200 mt-20"></div>
        <div className="w-72 h-96 mt-2 flex flex-col">
          <span className="text-2xl font-semibold">{currentUser.username}</span>
          <span className="text-xl">{currentUser.email}</span>
          {!editProfile ? (
            <button
              className="w-full h-9 bg-slate-200 outline outline-2 outline-slate-500 rounded-lg mt-6 text-lg font-semibold hover:bg-slate-300"
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
                <label htmlFor="genderMale" className="text-lg mx-2">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Female"
                  checked={userData.gender == "Female"}
                  onChange={handleFormData}
                  className="h-6 w-8 mx-2"
                />
                <label htmlFor="genderFemale" className="text-lg mx-2">Female</label>
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
              { <p className="text-red-500">{fileError}</p>}
              <div className="flex justify-evenly mt-10 mb-20">
                <button
                  className="w-32 h-8 outline outline-1 bg-red-300 mb-2 px-1 rounded-lg"
                  onClick={handelCancel}
                >
                  Cancel
                </button>
                <button
                  className="w-32 h-8 outline outline-1 bg-green-300 mb-2 px-1 rounded-lg"
                  type="submit"
                  disabled={fileError == ''?false:true}
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="w-[66%] h-full flex flex-col items-center justify-evenly bg-white border-2"></div>
    </div>
  );
}

export default Profile;
