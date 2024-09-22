import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeImageDisp from "../components/HomeImageDisp";
import { allCountry, indiaTrending, indiaState, topCountries } from "../data/allCountry.js";
gsap.registerPlugin(ScrollTrigger);


import homeMainImg from '../assets/homePageMain.avif'

function Home() {
  const mainHeading = useRef();
  const para = useRef(); // reference for the paragraph
  const charButton = useRef();
  const headingBack = useRef();
  const mainImg = useRef();
  const keyComponent = useRef();
  const placesRef = useRef();
  const img = useRef();
  const firstPageBack = useRef();
  const t1 = gsap.timeline();
  

  useGSAP(() => {
    // t1.from(headingBack.current, {
    //   x: -550,
    //   opacity: 0,
    //   duration: 0.8,
    //   scale: 0.1,
    // });
    t1.from(mainHeading.current.querySelectorAll("span"), {
      // x: 350,
      // y: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      // rotateZ: 90,
      rotateX: 270,
      scale: 0.5,
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
      scale: 0.95,
      y: -450,
      x: 1050,
      duration: 2,
      ease: "back.inOut",
      // repeat: 2
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
      delay: 1,
    });

    gsap.from(keyComponent.current.querySelectorAll(".key1"), {
      x: 950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key1"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key2"), {
      x: -950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key2"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key3"), {
      x: 950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key3"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key4"), {
      x: -950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key4"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key5"), {
      x: 950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key5"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key6"), {
      x: -950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key6"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key7"), {
      x: 950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key7"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.from(keyComponent.current.querySelectorAll(".key8"), {
      x: -950,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: keyComponent.current.querySelectorAll(".key8"),
        scroller: "body",
        markers: false,
        start: "top 60%",
        // scrub: true
      },
    });
    gsap.to(img.current, {
      x: "-310%",
      scrollTrigger: {
        trigger: placesRef.current,
        scroller: "body",
        markers: false,
        start: "top top",
        end: "top -400%",
        scrub: 1,
        pin: placesRef.current,
      },
    });
    gsap.to('.firstPageBack', {
      y: '-50%',
      scale: 1.5,
      scaleY: 1.6,
      scrollTrigger: {
        trigger: '.firstPageBack',
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -340%",
        scrub: true,
        pin: '.firstPageBack',
      },
    });
  });

  // Split the paragraph into individual characters manually

  return (
    <>
      <div className="">
        {/* website content */}
        <div>
          <div ref={firstPageBack} className="firstPageBack absolute top-[-30%] -z-20">
            <img
              className="w-full blur-sm"
              src={homeMainImg}
              alt=""
            />
          </div>
          {/* <div ref={firstPageBack} className="firstPageBack absolute top-[-30%] -z-30">
            <img
              className="w-full blur-sm"
              src={homeMainImg}
              alt=""
            />
          </div> */}

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
              <span className="text-amber-600 inline-block pr-3">
                Assistant
              </span>
              <br />
              <span className="text-amber-600 inline-block pr-3">
                Chatbots{" "}
              </span>
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
                  className="absolute w-80 h-60  bg-amber-500 rotate-[-10deg] rounded-lg rounded-tr-[30px] rounded-bl-[20px] rounded-tl-[60px] rounded-br-[50px] border-[8px]"
                />
              </div>
              <div className="absolute top-0 left-[40%] w-80 h-60 bg-amber-500 rotate-[-22deg] rounded-lg rounded-tr-[50px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px]">
                <img
                  src="https://images.huffingtonpost.com/2016-01-22-1453422849-2843535-Traveling.jpg"
                  alt=""
                  className="absolute w-80 h-60 left-6 bg-amber-500 rotate-[12deg] rounded-lg rounded-tr-[70px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px] scale-90 border-[8px]"
                />
              </div>
              <div className="absolute top-[40%] left-[25%] w-80 h-60 bg-amber-500 rotate-[-12deg] rounded-lg rounded-tr-[250px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px]">
                <img
                  src="https://cdn.cdnparenting.com/articles/2018/11/21153323/521163331-H.webp"
                  alt=""
                  className="absolute w-80 h-60 bg-amber-500 rotate-[12deg] rounded-lg rounded-tr-[50px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[25px] border-[8px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* this is for top margin */}
        <div className="w-full h-[100vh] bg-transparent"></div>

        {/* this is the second page that contain key components */}
        <div className="w-full h-[200vh]  flex justify-center">
        {/* bg-gradient-to-l to-cyan-200 via-white from-cyan-200 */}
          {/* center line */}
          {/* <div className="w-1 h-[1500px] bg-black my-40 absolute z-30"></div> */}

          <div className="w-full absolute my-20">
            <div className="flex items-center">
              <div className="w-full h-[2px] bg-slate-600 absolute"></div>
              <div className="text-center bg-[#295F98] text-white w-fit mx-auto text-3xl py-5 px-40 rounded-full font-semibold z-10">
                Key Benefits
              </div>
            </div>
            <div ref={keyComponent} id="keyComponent" className="flex flex-col">
              {/* key 1 */}
              <div className="key1 w-[520px] h-[130px] bg-[#F96167] relative left-[45%] top-[60px] rounded-full border-[6px] border-[#F96167]">
                <div className="w-full h-full rounded-full flex">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      1
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Personalized Itineraries
                    </span>
                    <span className="leading-5 text-left mx-4 mt-1">
                      Receive travel plans that are specifically tailored to
                      your interests, preferences, and travel goals, ensuring a
                      unique and memorable experience.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 2 */}
              <div className="key2 w-[520px] h-[130px] bg-[#80C4B7] relative left-[23%] top-[80px] rounded-full border-[6px] border-[#80C4B7]">
                <div className="w-full h-full rounded-full flex flex-row-reverse">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      2
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Time-Saving
                    </span>
                    <span className="leading-5 text-right mx-4 mt-1">
                      Save hours of research and planning by letting the AI
                      handle the itinerary creation. Quickly get a detailed plan
                      that covers all aspects of your trip.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 3 */}
              <div className="key3 w-[520px] h-[130px] bg-[#8AB6F9] relative left-[45%] top-[100px] rounded-full border-[6px] border-[#8AB6F9]">
                <div className="w-full h-full rounded-full flex">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      3
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Comprehensive Planning
                    </span>
                    <span className="leading-5 text-left mx-4 mt-1">
                      Get well-rounded itineraries that include a variety of
                      activities, from sightseeing and adventure to relaxation
                      and cultural experiences.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 4 */}
              <div className="key4 w-[520px] h-[130px] bg-[#fff175] relative left-[23%] top-[120px] rounded-full border-[6px] border-[#fff175]">
                <div className="w-full h-full rounded-full flex flex-row-reverse">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      4
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Discover New Destinations
                    </span>
                    <span className="leading-5 text-right mx-4 mt-1">
                      Explore new places and activities that you might not have
                      considered, broadening your travel horizons and enriching
                      your travel experiences.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 5 */}
              <div className="key5 w-[520px] h-[130px] bg-[#63a86f] relative left-[45%] top-[140px] rounded-full border-[6px] border-[#63a86f]">
                <div className="w-full h-full rounded-full flex">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      5
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Optimized Travel Experience
                    </span>
                    <span className="leading-5 text-left mx-4 mt-1">
                      Enjoy itineraries that are optimized for time and
                      convenience, helping you make the most of your trip
                      without unnecessary hassle.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 6 */}
              <div className="key6 w-[520px] h-[130px] bg-[#cb95d8] relative left-[23%] top-[160px] rounded-full border-[6px] border-[#cb95d8]">
                <div className="w-full h-full rounded-full flex flex-row-reverse">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      6
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Variety of Trip Types
                    </span>
                    <span className="leading-5 text-right mx-4 mt-1">
                      Whether you’re planning a family vacation, a romantic
                      honeymoon, an adventure trip, or a cultural immersion, the
                      tool provides itineraries for a wide range of trip types.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 7 */}
              <div className="key7 w-[520px] h-[130px] bg-[#E58D2E] relative left-[45%] top-[180px] rounded-full border-[6px] border-[#E58D2E]">
                <div className="w-full h-full rounded-full flex">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      7
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Stress-Free Planning
                    </span>
                    <span className="leading-5 text-left mx-4 mt-1">
                      Reduce the stress of travel planning by relying on AI to
                      create thorough and well-structured itineraries, allowing
                      you to focus on enjoying your trip.
                    </span>
                  </div>
                </div>
              </div>
              {/* key 8 */}
              <div className="key8 w-[520px] h-[130px] bg-[#4f79db] relative left-[23%] top-[200px] rounded-full border-[6px] border-[#4f79db]">
                <div className="w-full h-full rounded-full flex flex-row-reverse">
                  <div className="w-[120px] bg-white rounded-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] shadow-keyNumber rounded-full text-center py-3 text-4xl font-bold bg-slate-50">
                      8
                    </div>
                  </div>
                  <div className="w-[396px] flex flex-col">
                    <span className="text-xl font-semibold text-center mt-1">
                      Accessibility
                    </span>
                    <span className="leading-5 text-right mx-4 mt-1">
                      Access your itineraries from any device, making it easy to
                      plan and manage your travels from anywhere, at any time.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third page */}
        <div
          ref={placesRef}
          className=" h-[100vh] bg-white"
        >
          <div className="absolute w-[100vw] h-[100vh] overflow-hidden blur-[0px]">
            <img src={'https://wallpapers.com/images/hd/best-travel-background-3840-x-2160-5yuqmjakm8zkus85.jpg'} alt="" className="w-[100vw] h-[100vh]"/>
          </div>
          <div
            ref={img}
            className="h-full flex justify-evenly items-center"
          >
            <div className="places min-w-[90vw] h-[85vh] bg-[#ffffff2b] mx-20 rounded-xl overflow-hidden backdrop-blur-2xl">
              <HomeImageDisp data={allCountry}/>
            </div>
            <div className="min-w-[90vw] h-[85vh] bg-[#ffffff2b] mx-20 rounded-xl overflow-hidden backdrop-blur-2xl">
              <HomeImageDisp data={indiaTrending}/>
            </div>
            <div className="min-w-[90vw] h-[85vh] bg-[#ffffff2b] mx-20 rounded-xl overflow-hidden backdrop-blur-2xl">
              <HomeImageDisp data={indiaState}/>
            </div>
            <div className="min-w-[90vw] h-[85vh] bg-[#ffffff2b] mx-20 rounded-xl overflow-hidden backdrop-blur-2xl">
              <HomeImageDisp data={topCountries}/>
            </div>
            
          </div>
        </div>

        <div className="pin w-[100vw] h-[100vh] bg-yellow-200"></div>
      </div>
    </>
  );
}

export default Home;
