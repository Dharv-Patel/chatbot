import React, { useState } from 'react'
import "./signin.css"
import minglepng from '.././assets/image/minglepng.png';
import model1 from '.././assets/image/model1.webp';
import model3 from '.././assets/image/model3.webp';
import {Link, useNavigate} from 'react-router-dom'


function Signin() {
    const [signup, setSignup] = useState(true)
    const [signupFormData, setSignupFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [signinFormData, setSigninFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);
    const [loding, setLoding] = useState(false);
    const navigate = useNavigate()

    const hendelSignupFormData = (e)=>{
        setSignupFormData({
          ...signupFormData, 
          [e.target.id]: e.target.value
        });
      }

    const hendelSigninFormData = (e)=>{
        setSigninFormData({
          ...signinFormData, 
          [e.target.id]: e.target.value
        });
      }

      const handelSignupSubmit = async (e)=>{
        e.preventDefault()
        try {
            setLoding(true)
            const res = await fetch('http://localhost:1000/auth/signup', {
              method: "POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify(signupFormData)
            })
            const data = await res.json();
            if(data.sucess === false){
              setError(data.message);
              setLoding(false);
              console.log(data)
              return;
            }
            setLoding(false)
            setError(null)
            console.log(data)
            navigate('/')
        } catch (error) {
          setError(error.message)
          setLoding(false)
        }
    
      }








      const handelSigninSubmit = async (e)=>{
        e.preventDefault()
        try {
            setLoding(true)
            console.log(signinFormData)
            const res = await fetch('http://localhost:1000/auth/signin', {
              method: "POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify(signinFormData)
            })
            const data = await res.json();
            if(data.sucess === false){
                setError(data.message);
                setLoding(false);
              return;
            }
            setLoding(false)
            setError(null)
            navigate('/')
        } catch (error) {
            setError(error.message)
            setLoding(false)
        }
    
      }

    const handel_in_up = ()=>{
        setSignup(!signup);
        clearStats()
    }

    const clearStats = () => {
        setSignupFormData({
            username: "",
            email: "",
            password: ""
        })
        setSigninFormData({
            email: "",
            password: ""
        })
        setError(null)
        setLoding(false)
    }


  return (
    <div className="main-container">
        <div className="form-container lg:w-[60%] w-full">
            <div className="login">
                    <div className="login-heading">Login</div>

                    <form action="#" onSubmit={handelSigninSubmit}>

                        <div className="log-input">
                            <label>Email :</label>

                            <div className="login-email">
                                <input type="email" name="email" id="email" placeholder="Enter Your Email Address" onChange={hendelSigninFormData} value={signinFormData.email}/>
                            </div>
                        </div>

                        <div className="log-input">
                            <label>Password :</label>
                            
                            <div className="login-pass">
                                <input type="text" name="pass" id="password" placeholder="Enter Password" onChange={hendelSigninFormData} value={signinFormData.password}/>
                                <button type="button" className="btnShow">show</button>
                            </div>
                        </div>
                        <div className='text-sm text-red-700 ml-6 mt-4'>{error}</div>

                        <button type="submit" className="log-btnSubmit" disabled={loding}>{loding ? 'Loding...':'SignIn'}</button>
                    </form>
            </div>

            <div className="singup">
                <div className="signup-heading">Signup</div>

                    <form action="#" onSubmit={handelSignupSubmit}>

                        <div className="sig-input">
                            <label>Name :</label>

                            <div className="signup-name">
                                <input type="text" name="name" id="username" placeholder="Enter Your Name" onChange={hendelSignupFormData} value={signupFormData.username}/>
                            </div>
                        </div>

                        <div className="sig-input">
                            <label >Email :</label>

                            <div className="signup-email">
                                <input type="email" name="email" id="email" placeholder="Enter Your Email Address" onChange={hendelSignupFormData} value={signupFormData.email}/>
                            </div>
                        </div>

                        <div className="sig-input">
                            <label >Password :</label>
                            
                            <div className="signup-pass">
                                <input type="text" name="pass" id="password" placeholder="Enter Password" onChange={hendelSignupFormData} value={signupFormData.password}/>
                                <button type="button" className="btnShow">show</button>
                            </div>
                        </div>

                        <div className="sig-input">
                            <label>Confirm Password :</label>
                            
                            <div className="signup-confpass">
                                <input type="text" name="confpass" id="signup_confpass" placeholder="Confirm Password" />
                                <button type="button" className="btnShow">show</button>
                            </div>
                        </div>
                        <div className='text-sm text-red-700 ml-6 mt-4'>{error}</div>

                        <button type="submit" className={error==null ?"sig-btnSubmit":"sig-btnSubmit mt-5"} disabled={loding}>{loding ? 'Loding...':'SignUp'}</button>
                    </form>
            </div>
            <div className={`${signup ? 'slider signup-active' :'slider'}`}>
                
            </div>
            <div className={`${signup ? 'slider-singup sin-active' :'slider-singup'}`}>
                <img src={minglepng} alt="" className="logo" />
                <button className="btnlogin" onClick={()=>handel_in_up()}>Login</button>
                <div className="slider-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eveniet!</div>
                <img src={model1} alt="" className="model" />
            </div>
            <div className={`${!signup ? 'slider-login log-active' :'slider-login'}`}>
                <img src={minglepng} alt="" className="logo" />
                <button className="btnsignup" onClick={()=>handel_in_up()}>signup</button>
                <div className="slider-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, pariatur.</div>
                <img src={model3} alt="" className="model" />
            </div>
        </div>


        
    </div>
  )
}

export default Signin