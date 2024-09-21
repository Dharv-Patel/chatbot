import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeImageDisp({ data }) {
  const { heading, imgBox } = data;
  const imgRef = useRef();
  const containerRef = useRef();
  useGSAP(() => {
    gsap.from(imgRef.current.querySelectorAll(".img"), {
      // rotateY: 270,
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: imgRef.current,
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "bottom bottom",
        // end: "max",
        // scrub:true
        
        // horizontal: true,
        
      },
    });
  });
  return (
    <>
      <div ref={containerRef} className="w-full h-full flex flex-col p-6">
        <h2 className="text-4xl font-bold pl-6 text-slate-800">{heading}</h2>
        <div
          ref={imgRef}
          className="w-full h-full flex flex-wrap justify-center items-center"
        >
          {imgBox.map((value, i) => {
            return (
              <div
                className="img flex flex-col justify-start m-3 rounded-lg overflow-hidden bg-transparent"
                key={i}
              >
                <div className="min-w-48 h-44 overflow-hidden rounded-lg">
                  <img
                    src={value.img}
                    alt=""
                    className="w-48 h-44 hover:scale-[1.2] hover:scale-x-[1.3] scale-110 scale-x-125 transition duration-500 ease-in-out "
                  />
                </div>
                <h3 className="text-lg font-semibold pl-2 text-slate-900">
                  {value.name}
                </h3>
                <h6 className="absolute z-10 m-2 backdrop-blur-lg bg-blue-900 px-2 text-white text-lg font-semibold rounded-lg">
                  {i + 1}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeImageDisp;
