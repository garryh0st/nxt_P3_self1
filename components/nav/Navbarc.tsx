"use client";
import { useState } from "react";
import { Menu2 as MenuIcon, X as XIcon } from "tabler-icons-react";
import React from "react";

const Navbarc = () => {
  const [drawer, setDrawer] = useState(false);

  const handleClick = () => {
    setDrawer(!drawer);
  };
  return (
    <div>
      <div>
        <div>
          <button onClick={handleClick} className="z-10">
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      drawer ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      drawer ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      drawer ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
          </button>
        </div>
        {/* DRAWER */}
        {drawer && (
          <div>
            <div className="z-10 overflow-hidden fixed">
              <div className="bg-black h-screen">csdcsdcsd</div>
            </div>
          </div>
        )}
        {/* DESKTOP SIDEBAR ITEMS */}
      </div>
    </div>
  );
};

export default Navbarc;
