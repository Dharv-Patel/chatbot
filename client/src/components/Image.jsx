import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Image({ images }) {
  const [img1Hover, setimg1Hover] = useState(false);
  const [img2Hover, setimg2Hover] = useState(false);
  const [img3Hover, setimg3Hover] = useState(false);
  const [img4Hover, setimg4Hover] = useState(false);
  const [img5Hover, setimg5Hover] = useState(false);
  const [savedImg, setSavedImg] = useState([''])
  const { currentUser } = useSelector((state) => state.user); 
  const addBookmark = async (imgUrl)=>{
    const reschat = await fetch("http://localhost:1000/userchats/addimgbookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: currentUser._id,imgUrl}),
    });
    const data = await reschat.json();
    if(data.success != false){
      setSavedImg([...savedImg,...[imgUrl]])
      console.log(savedImg)
    }
  }
  if (images.length != 0) {

    return (
      <>
        <div className="shadow-insideChatBox my-4 rounded-lg py-4 px-2">
          <h1 className="w-full h-10 mb-3 shadow-lg rounded-lg text-2xl font-bold font-sans text-slate-800 text-center bg-slate-200 ">
            Related Images
          </h1>
          <div className="w-full h-full flex justify-evenly">
            <div
              className="w-[360px] h-[310px]"
              onMouseEnter={() => setimg1Hover(true)}
              onMouseLeave={() => setimg1Hover(false)}
            >
              <img
                className="w-[360px] h-[310px] rounded-md"
                src={images[0]}
                alt=""

                // onError={`this.onerror=null; this.src='${images[5]}'`}
              />
              {img1Hover ? (
                <button className="w-8 h-8 relative left-[90%] bottom-10 bg-cyan-600 text-xl rounded-full hover:bg-green-600 text-gray-300" onClick={()=>addBookmark(images[0])}>
                  {savedImg.includes(images[0])
                  ?
                  <FontAwesomeIcon icon={faCheck} />
                  : <FontAwesomeIcon icon={faDownload} />
                }
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="w-[390px] h-[320px] flex flex-wrap justify-evenly">
              <div
                className="w-[180px] h-[150px]"
                onMouseEnter={() => setimg2Hover(true)}
                onMouseLeave={() => setimg2Hover(false)}
              >
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[1]}
                  alt=""

                  //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
                {img2Hover ? (
                  <button className="w-6 h-6 relative left-[85%] bottom-7 bg-cyan-600 rounded-full hover:bg-green-600 text-gray-300" onClick={()=>addBookmark(images[1])}>
                    {savedImg.includes(images[1])
                  ?
                  <FontAwesomeIcon icon={faCheck} />
                  : <FontAwesomeIcon icon={faDownload} />
                }
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div
                className="w-[180px] h-[150px] "
                onMouseEnter={() => setimg3Hover(true)}
                onMouseLeave={() => setimg3Hover(false)}
              >
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[2]}
                  alt=""

                  //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
                {img3Hover ? (
                  <button className="w-6 h-6 relative left-[85%] bottom-7 bg-cyan-600 rounded-full hover:bg-green-600 text-gray-300" onClick={()=>addBookmark(images[2])}>
                    {savedImg.includes(images[2])
                  ?
                  <FontAwesomeIcon icon={faCheck} />
                  : <FontAwesomeIcon icon={faDownload} />
                }
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div
                className="w-[180px] h-[150px] "
                onMouseEnter={() => setimg4Hover(true)}
                onMouseLeave={() => setimg4Hover(false)}
              >
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[3]}
                  alt=""

                  //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
                {img4Hover ? (
                  <button className="w-6 h-6 relative left-[85%] bottom-7 bg-cyan-600 rounded-full hover:bg-green-600 text-gray-300" onClick={()=>addBookmark(images[3])}>
                    {savedImg.includes(images[3])
                  ?
                  <FontAwesomeIcon icon={faCheck} />
                  : <FontAwesomeIcon icon={faDownload} />
                }
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div
                className="w-[180px] h-[150px]"
                onMouseEnter={() => setimg5Hover(true)}
                onMouseLeave={() => setimg5Hover(false)}
              >
                <img
                  className="w-[180px] h-[150px] rounded-md"
                  src={images[4]}
                  alt=""

                  //   onError={`this.onerror=null; this.src='${images[0]}'`}
                />
                {img5Hover ? (
                  <button className="w-6 h-6 relative left-[85%] bottom-7 bg-cyan-600 rounded-full hover:bg-green-600 text-gray-300" onClick={()=>addBookmark(images[4])}>
                    {savedImg.includes(images[4])
                  ?
                  <FontAwesomeIcon icon={faCheck} />
                  : <FontAwesomeIcon icon={faDownload} />
                }
                  </button>
                ) : (
                  ""
                )}
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
