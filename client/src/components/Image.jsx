import React from "react";

function Image({ images }) {
  if (images.length != 0) {
    return (
      <>
        <div className="shadow-insideChatBox my-4 rounded-lg py-4 px-2">
          <h1 className="w-full h-10 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-slate-800 text-center bg-slate-200">
            Related Images
          </h1>
          <div className="w-full h-full flex justify-evenly">
            <div className="w-[360px] h-[310px]">
              <img
                className="w-[360px] h-[310px] rounded-md"
                src={images[0]}
                alt=""
                // onError={`this.onerror=null; this.src='${images[5]}'`}
              />
            </div>
            <div className="w-[390px] h-[320px] flex flex-wrap justify-evenly">
              <div className="w-[180px] h-[150px]">
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[1]}
                  alt=""
                //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
              </div>
              <div className="w-[180px] h-[150px]">
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[2]}
                  alt=""
                //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
              </div>
              <div className="w-[180px] h-[150px] ">
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[3]}
                  alt=""
                //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
              </div>
              <div className="w-[180px] h-[150px]">
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[5]}
                  alt=""
                //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default Image;
