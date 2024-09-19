import React from "react";
import Palette from "../Palette";

const Timeline = ({ currentLang }) => {
  return (
    <div id="journey" className="w-full bg-white flex justify-center py-10">
      <div className="w-11/12 md:w-8/12">
        <h1
          className="text-3xl text-center font-bold my-5"
          data-aos="fade-up"
          style={{ color: Palette.HighlightColor }}
        >
          {currentLang.headtitle}
        </h1>
        <div className="relative" data-aos="fade-up">
          {/* Vertical line */}
          <div 
            style={{ background: Palette.HighlightColor }}
            className="absolute w-1 h-full left-1/2 transform -translate-x-1/2"
          ></div>
          
          {currentLang.content.map((item, index) => (
            <div
              key={index}
              className={`my-5 flex ${item.side === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center`}
            >
              {/* Content box */}
              <div
                className="w-1/2 px-5 py-3 rounded-lg"
                style={{ backgroundColor: Palette.backgroundColor, color: Palette.primaryColor }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.date}</p>
                <p>{item.description}</p>
              </div>
              
              {/* Timeline circle */}
              <div 
                className="relative z-2 flex justify-center items-center w-6 h-6 rounded-full -mx-3"
                style={{ background: Palette.HighlightColor }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
