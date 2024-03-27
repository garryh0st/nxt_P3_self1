"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [textColor, setTextColor] = useState("red");
  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover overflow-x-hidden ">
      <div className="flex flex-col justify-center items-center h-screen w-screen  backdrop-blur-sm">
        <div className="text-center  text-[#ffffff00] z-10 text-[5vh] uppercase  font-[ppm-blackitalic] sm:text-[12vh] font-outline-2 sm:text-wrap sm:text-left sm:leading-[10vh] sm:ml-9 md:text-[13vh] md:font-outline-0 lg:text-wrap lg:text-left lg:leading-[17vh] lg:text-[17vh] lg:font-outline-2 lg:drop-shadow-2xl">
          Advik Aggarwal
        </div>
        <div
          style={{
            color: `${textColor}40%`,
            backgroundAttachment: `${textColor}50%`,
          }}
          className="flex justify-center w-screen ml-12 text-[1.5vh] sm:justify-start sm:ml-20 sm:mt-5 sm:text-[4vh] "
        >
          <TypeAnimation
            className="text-center mb-16 font-[ppm-blackbold] font-outline-1 text-[#ffffff00]   "
            sequence={[
              "I'm a Programmer",
              500,
              // () => {
              //   setTextColor("hsl(217, 90%, 61%,");
              // },
              "I'm a Student",
              900,
              // () => {
              //   setTextColor("hsl(318, 100%, 60%,");
              // },
              "I'm a Designer",
              400,
              // () => {
              //   setTextColor("hsl(120, 100%,");
              // },
            ]}
            repeat={1}
            speed={{
              type: "keyStrokeDelayInMs",
              value: 100, //the higher the value the slower the letters
            }} //This is the speed of typing in milliseconds
            deletionSpeed={40}
            wrapper="span"
          />
        </div>
      </div>

      <div className="laser-beam"></div>
      <div className="laser-beam red"></div>
      <div className="laser-beam purple"></div>
      <div className="laser-beam green"></div>
    </div>
  );
};

export default Hero;
