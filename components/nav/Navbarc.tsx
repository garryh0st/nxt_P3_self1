"use client";
import { useState } from "react";
import { Menu2 as MenuIcon, X as XIcon } from "tabler-icons-react";
import React from "react";
import "@/public/styles/nav.css";

const Navbarc = () => {
  const [drawer, setDrawer] = useState(false);

  const handleClick = () => {
    setDrawer(!drawer);
  };

  return (
    <div className="">
      <div>
        <div>
          <button onClick={handleClick} className="z-10 ml-48">
            <span
              className={`bg-white block transition-all duration-500 ease-in-out 
                    h-0.5 w-6 rounded-sm ${
                      drawer ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-500 ease-in-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      drawer ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-500 ease-in-out 
                    h-0.5 w-6 rounded-sm ${
                      drawer ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
          </button>
        </div>
        {/* DRAWER */}
        {drawer && (
          <div className="transform-animation">
            <div className="transform-animation overflow-hidden fixed top-[-100vh] w-56 translate-y-[100vh] bg-black ">
              <button onClick={handleClick} className="z-10 ml-48 ">
                <span
                  className={`bg-white block transition-all duration-500 ease-in-out 
                    h-0.5 w-6 rounded-sm ${
                      drawer ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-500 ease-in-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      drawer ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-500 ease-in-out 
                    h-0.5 w-6 rounded-sm ${
                      drawer ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
              </button>
              <div className="transform-animation h-screen">Normal text</div>
            </div>
          </div>
        )}
        {/* DESKTOP SIDEBAR ITEMS */}
      </div>
    </div>
  );
};

export default Navbarc;