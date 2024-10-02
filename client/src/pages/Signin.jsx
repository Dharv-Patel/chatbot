import React, { useState } from "react";
import "./signin.css";
import minglepng from ".././assets/image/minglepng.png";
import model1 from ".././assets/image/model1.webp";
import model3 from ".././assets/image/model3.webp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

function Signin() {
  const [signup, setSignup] = useState(false);
  const [passwordShow, setpasswordShow] = useState(false);
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [signinFormData, setSigninFormData] = useState({
    email: "",
    password: "",
  });
  const { loding, error } = useSelector((state) => state.user);
  const [errorUp, setError] = useState(null);
  const [lodingUp, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hendelSignupFormData = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.id]: e.target.value,
    });
  };

  const hendelSigninFormData = (e) => {
    setSigninFormData({
      ...signinFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handelSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoding(true);
      const res = await fetch("http://localhost:1000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupFormData),
      });
      const data = await res.json();
      if (data.sucess === false) {
        setError(data.message);
        setLoding(false);
        console.log(data);
        return;
      }
      setLoding(false);
      setError(null);
      console.log(data);
      setSignup(false);
    } catch (error) {
      setError(error.message);
      setLoding(false);
    }
  };

  const handelSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      console.log(signinFormData);
      const res = await fetch("http://localhost:1000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signinFormData),
      });
      const data = await res.json();
      if (data.sucess === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const handel_in_up = () => {
    setSignup(!signup);
    clearStats();
  };

  const clearStats = () => {
    setSignupFormData({
      username: "",
      email: "",
      password: "",
    });
    setSigninFormData({
      email: "",
      password: "",
    });
    setError(null);
    setLoding(false);
  };

  return (
    <div className="main-container">
      <div className="form-container lg:w-[60%] w-full">
        <div className="login">
          <div className="login-heading  bg-sky-600">Login</div>

          <form action="#" onSubmit={handelSigninSubmit}>
            <div className="log-input">
              <label>Email :</label>

              <div className="login-email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  onChange={hendelSigninFormData}
                  value={signinFormData.email}
                />
              </div>
            </div>

            <div className="log-input">
              <label>Password :</label>

              <div className="login-pass">
                <input
                  type={passwordShow ? "text":"password"}
                  name="pass"
                  id="password"
                  placeholder="Enter Password"
                  onChange={hendelSigninFormData}
                  value={signinFormData.password}
                  className="password"
                />
                <button
                  type="button"
                  className="btnShow"
                  onClick={()=>setpasswordShow(!passwordShow)}
                >
                  <svg
                    class="shrink-0 size-3.5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      class="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    ></path>
                    <path
                      class="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    ></path>
                    <path
                      class="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    ></path>
                    <line
                      class="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    ></line>
                    <path
                      class="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle
                      class="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    ></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-sm text-red-700 ml-6 mt-4">{error}</div>

            <button type="submit" className="log-btnSubmit" disabled={loding}>
              {loding ? "Loding..." : "SignIn"}
            </button>
          </form>
        </div>

        <div className="singup">
          <div className="signup-heading  bg-sky-600">Signup</div>

          <form action="#" onSubmit={handelSignupSubmit}>
            <div className="sig-input">
              <label>Name :</label>

              <div className="signup-name">
                <input
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Enter Your Name"
                  onChange={hendelSignupFormData}
                  value={signupFormData.username}
                />
              </div>
            </div>

            <div className="sig-input">
              <label>Email :</label>

              <div className="signup-email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  onChange={hendelSignupFormData}
                  value={signupFormData.email}
                />
              </div>
            </div>

            <div className="sig-input">
              <label>Password :</label>

              <div className="signup-pass">
                <input
                  type={passwordShow ? "text":"password"}
                  name="pass"
                  id="password"
                  placeholder="Enter Password"
                  onChange={hendelSignupFormData}
                  value={signupFormData.password}
                />
                <button type="button" className="btnShow" onClick={()=>setpasswordShow(!passwordShow)}>
                <svg
                    class="shrink-0 size-3.5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      class="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    ></path>
                    <path
                      class="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    ></path>
                    <path
                      class="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    ></path>
                    <line
                      class="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    ></line>
                    <path
                      class="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle
                      class="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    ></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div className="sig-input">
              <label>Confirm Password :</label>

              <div className="signup-confpass">
                <input
                  type={passwordShow ? "text":"password"}
                  name="confpass"
                  id="cpassword"
                  placeholder="Confirm Password"
                  onChange={hendelSignupFormData}
                  value={signupFormData.cpassword}
                />
                <button type="button" className="btnShow" onClick={()=>setpasswordShow(!passwordShow)}>
                <svg
                    class="shrink-0 size-3.5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      class="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    ></path>
                    <path
                      class="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    ></path>
                    <path
                      class="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    ></path>
                    <line
                      class="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    ></line>
                    <path
                      class="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle
                      class="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    ></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-sm text-red-700 ml-6 mt-4">{errorUp}</div>

            <button
              type="submit"
              className={
                errorUp == null ? "sig-btnSubmit" : "sig-btnSubmit mt-5"
              }
              disabled={lodingUp}
            >
              {lodingUp ? "Loding..." : "SignUp"}
            </button>
          </form>
        </div>
        <div className={`${signup ? "slider signup-active" : "slider"}`}></div>
        <div
          className={`${signup ? "slider-singup sin-active" : "slider-singup"}`}
        >
          <img src={minglepng} alt="" className="logo" />
          <button className="btnlogin" onClick={() => handel_in_up()}>
            Login
          </button>
          <div className="slider-text">
            you have an account? then login with your account
          </div>
          <img src={model1} alt="" className="model" />
        </div>
        <div
          className={`${!signup ? "slider-login log-active" : "slider-login"}`}
        >
          <img src={minglepng} alt="" className="logo" />
          <button className="btnsignup" onClick={() => handel_in_up()}>
            signup
          </button>
          <div className="slider-text">
            You haven't account? then register your self hear!
          </div>
          <img src={model3} alt="" className="model" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
