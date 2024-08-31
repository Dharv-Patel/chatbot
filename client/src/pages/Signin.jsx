import React, { useState } from 'react'
import "./signin.css"
import minglepng from '.././assets/image/minglepng.png';
import model1 from '.././assets/image/model1.webp';
import model3 from '.././assets/image/model3.webp';

function Signin() {
    const [signup, setSignup] = useState(true)

    const handel_in_up = ()=>{
        setSignup(!signup);
    }


  return (
    <div className="main-container">
        <div className="form-container lg:w-[60%] w-full">
            <div className="login">
                    <div className="login-heading">Login</div>

                    <form action="#">

                        <div className="log-input">
                            <label>Email :</label>

                            <div className="login-email">
                                <input type="email" name="email" id="login_email" placeholder="Enter Your Email Address" />
                            </div>
                        </div>

                        <div className="log-input">
                            <label>Password :</label>
                            
                            <div className="login-pass">
                                <input type="text" name="pass" id="login_pass" placeholder="Enter Password" />
                                <button type="button" className="btnShow">show</button>
                            </div>
                        </div>

                        <button type="submit" className="log-btnSubmit" >Login</button>
                    </form>
            </div>

            <div className="singup">
                <div className="signup-heading">Signup</div>

                    <form action="#">

                        <div className="sig-input">
                            <label>Name :</label>

                            <div className="signup-name">
                                <input type="text" name="name" id="signup_name" placeholder="Enter Your Name" />
                            </div>
                        </div>

                        <div className="sig-input">
                            <label >Email :</label>

                            <div className="signup-email">
                                <input type="email" name="email" id="signup_email" placeholder="Enter Your Email Address" />
                            </div>
                        </div>

                        <div className="sig-input">
                            <label >Password :</label>
                            
                            <div className="signup-pass">
                                <input type="text" name="pass" id="signup_pass" placeholder="Enter Password" />
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

                        <button type="submit" className="sig-btnSubmit" >signup</button>
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