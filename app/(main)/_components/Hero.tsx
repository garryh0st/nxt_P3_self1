"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [textColor, setTextColor] = useState("red");
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="text-center  text-[#ffffff] text-[5.5vh] uppercase font-outline-2 font-[ppm-blackitalic] sm:text-[12vh] sm:text-wrap sm:text-left sm:leading-[10vh] sm:ml-9 md:text-[13vh] md:font-outline-0 lg:text-wrap lg:text-left lg:leading-[17vh] lg:text-[17vh] lg:font-outline-0 lg:drop-shadow-2xl">
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
            className="text-center mb-16 font-[ppm-blackbold]   "
            sequence={[
              "I'm a Programmer",
              500,
              () => {
                setTextColor("hsl(217, 90%, 61%,");
              },
              "I'm a Student",
              900,
              () => {
                setTextColor("hsl(318, 100%, 60%,");
              },
              "I'm a Designer",
              400,
              () => {
                setTextColor("hsl(120, 100%,");
              },
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
    </div>
  );
};

export default Hero;
