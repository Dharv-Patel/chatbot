import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  const mainHeading = useRef();
  const para = useRef(); // reference for the paragraph
  const charButton = useRef();
  const headingBack = useRef();
  const mainImg = useRef();
  const t1 = gsap.timeline();

  useGSAP(() => {
    t1.from(headingBack.current, {
      x: -550,
      opacity: 0,
      duration: 0.8,
      scale: 0.1,
    });
    t1.from(mainHeading.current.querySelectorAll("span"), {
      // x: 350,
      // y: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      // rotateZ: 90,
      rotateX: 270,
      scale: 0.1,
      ease: "back",
    });
    const paraText = para.current.innerText.split("");
    para.current.innerHTML = paraText
      .map((char) => `<span>${char}</span>`)
      .join("");

    // Animate the characters one by one
    t1.from(para.current.querySelectorAll("span"), {
      opacity: 0,
      scale: 0.5,
      y: 50,
      stagger: 0.01,
      duration: 0.4,
      ease: "back",
    });
    t1.from(charButton.current, {
      opacity: 0,
      scale: 0.1,
      x: -250,
      duration: 0.6,
      ease: "sine.in",
    });
    t1.from(charButton.current.querySelectorAll("div"), {
      duration: 0.6,
      rotateX: 720,
    });
    t1.from(charButton.current.querySelectorAll("#home"), {
      duration: 1,
      rotateZ: 360,
    });
    gsap.from(mainImg.current.querySelectorAll("*"), {
      x: 150,
      y: -350,
      opacity: 0,
      stagger: -0.3,
      duration: 1,
      rotateZ: 90,
      rotateX: 180,
      scale: 0.3,
      ease: "back",
      delay: 3
    });
  });

  // Split the paragraph into individual characters manually

  return (
    <div className="w-full h-full flex">
      {/* website content */}
      <div>
        <div className="absolute top-[-30%] -z-20">
          <img
            className="w-full blur-sm"
            src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div
          ref={headingBack}
          className="w-[650px] h-[600px] bg-amber-50 absolute top-[10%] left-[4%] bg-opacity-20 rounded-r-3xl backdrop-blur-sm shadow-2xl"
        >
          <div
            ref={mainHeading}
            className="text-5xl font-bold font-sans leading-[46px] ml-10 mt-16 text-slate-900 overflow-hidden"
            id="mainHeading"
          >
            <span className="inline-block pr-3">AI </span>
            <span className="text-amber-600 inline-block pr-3">Assistant</span>
            <br />
            <span className="text-amber-600 inline-block pr-3">Chatbots </span>
            <span className="inline-block">that</span>
            <br />
            <span className="inline-block pr-3">enhance </span>
            <span className="inline-block pr-3"> the </span>
            <span className="inline-block pr-3"> traveler </span>
            <span className="inline-block pr-3"> experience</span>
          </div>

          <div ref={para} className="mx-10 my-10 inline-block">
            <div className="font-mono font-bold mx-10 mt-10 text-slate-900 leading-5">
              Discover the world with ease! Our intelligent travel chatbot is
              your personal guide, ready to assist you in planning the perfect
              trip. Whether you're seeking hidden gems, need real-time
              recommendations, or want to navigate your journey smoothly.
            </div>
            <div className="font-mono font-bold mx-10 mt-4 text-slate-900 leading-5">
              Our chatbot is here to make your travel experience seamless and
              unforgettable. Explore, ask, and embark on your next adventure
              with confidence!
            </div>
          </div>

          <div className="flex justify-center w-full my-14">
            <Link
              to="/chatbot"
              className="w-64 h-12 bg-amber-600 text-center py-2 text-xl font-bold text-slate-900 rounded-lg bg-opacity-70 flex justify-evenly align-middle hover:bg-opacity-100"
              ref={charButton}
            >
              <div>Start Chat</div>
              <FontAwesomeIcon
                id="home"
                icon={faArrowRight}
                className="text-2xl text-slate-900 mt-1"
              />
            </Link>
          </div>
        </div>

        <div className="absolute left-[58%] top-[20%] h-[70%] w-[40%]">
          <div ref={mainImg} className="">
            <div className="absolute top-0 left-0 w-80 h-60 bg-amber-500 rotate-[20deg] rounded-lg rounded-tr-[200px] rounded-bl-[20px] rounded-tl-[70px] rounded-br-[350px] z-50">
              <img
                src="https://storage.googleapis.com/limecube-live-93c603b4/root%2FBlog%20Images%2Ftravel-mates.jpg?lcc=y27wrbfkvd"
                alt=""
                className="absolute w-80 h-60  bg-amber-500 rotate-[-10deg] rounded-lg rounded-tr-[30px] rounded-bl-[20px] rounded-tl-[60px] rounded-br-[50px] border-4"
              />
            </div>
            <div className="absolute top-0 left-[40%] w-80 h-60 bg-amber-500 rotate-[-22deg] rounded-lg rounded-tr-[50px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px]">
              <img
                src="https://images.huffingtonpost.com/2016-01-22-1453422849-2843535-Traveling.jpg"
                alt=""
                className="absolute w-80 h-60 left-6 bg-amber-500 rotate-[12deg] rounded-lg rounded-tr-[70px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px] scale-90 border-4"
              />
            </div>
            <div className="absolute top-[40%] left-[25%] w-80 h-60 bg-amber-500 rotate-[-12deg] rounded-lg rounded-tr-[250px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px]">
              <img
                src="https://cdn.cdnparenting.com/articles/2018/11/21153323/521163331-H.webp"
                alt=""
                className="absolute w-80 h-60 bg-amber-500 rotate-[12deg] rounded-lg rounded-tr-[50px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px] border-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
