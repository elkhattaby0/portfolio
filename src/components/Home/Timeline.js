import React from "react";
import Palette from "../Palette";

const Timeline = ({currentLang}) => {
  return (
    <div className="w-full bg-purple- flex justify-center">
      <div className="w-10/12">
        <h1
          data-aos="fade-up"
          className="font-bold text-center my-10 text-3xl"
          style={{ color: Palette.secondaryColor }}
        >
          &#8729; {currentLang.headtitle} &#8729;
        </h1>

        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          {currentLang.content.map((item, index) => (
            <div
              key={index}
              className={`flex md:contents ${
                item.side === "left" ? "flex-row-reverse" : ""
              }`}
            >
              {item.side === "left" && (
                <>
                  <div
                    data-aos="fade-up"
                    style={{ backgroundColor: Palette.backgroundColor }}
                    className="relative p-4 my-6 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto border" 
                  >
                    <h3
                      style={{ color: Palette.primaryColor }}
                      className="text-xl font-semibold"
                    >
                      {item.title}
                    </h3>
                    <p 
                      style={{ color: Palette.HighlightColor }}
                      className="text-md ml-2 my-2 leading-6">{item.company} | {item.date}</p>
                    {
                      item.description.map(n=> (
                        <ul
                          style={{ color: Palette.primaryColor }}
                          className="list-disc flex flex-col text-sm text-indigo-100/75 mx-6 leading-6"
                        >
                          <li>{n}</li>
                        </ul>
                      ))
                    }
                    
                  </div>
                  <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                      <div
                        style={{ backgroundColor: Palette.HighlightColor }}
                        className="w-1 h-full rounded-t-full"
                      ></div>
                    </div>
                    <div
                      style={{
                        backgroundColor: Palette.backgroundColor,
                        border: `4px solid ${Palette.HighlightColor}`,
                      }}
                      className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"
                    ></div>
                  </div>
                </>
              )}

              {item.side === "right" && (
                <>
                  <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                      <div
                        style={{ backgroundColor: Palette.HighlightColor }}
                        className="w-1 h-full rounded-t-full"
                      ></div>
                    </div>
                    <div
                      style={{
                        backgroundColor: Palette.backgroundColor,
                        border: `4px solid ${Palette.HighlightColor}`,
                      }}
                      className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"
                    ></div>
                  </div>
                  <div
                    data-aos="fade-up"
                    style={{ backgroundColor: Palette.backgroundColor }}
                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto border"
                  >
                    <h3
                      style={{ color: Palette.primaryColor }}
                      className="text-xl font-semibold"
                    >
                      {item.title}
                    </h3>
                    <p 
                      style={{color: Palette.HighlightColor}}
                      className="text-md ml-2 my-2 leading-6 ">{item.company} | {item.date}</p>
                    {
                      item.description.map(n=> (
                        <ul
                          style={{ color: Palette.primaryColor }}
                          className="list-disc flex flex-col text-sm text-indigo-100/75 mx-6 leading-6"
                        >
                          <li>{n}</li>
                        </ul>
                      ))
                    }
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
