"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const ref = useRef(null);
  const advikRef = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
      });

      gsap.fromTo(
        advikRef.current,
        { y: "50%" },
        { y: "0%", duration: 0.5, scrollTrigger: advikRef.current }
      );
    }
  }, []);

  return (
    <div ref={ref} data-scroll-container>
      <section className="hero">
        <div className="h-screen w-screen   -mt-1  bg-[#111111] ">
          <nav className="flex justify-between mt-10 paragraph">
            <div className="nav_left flex justify-between mr-[50vh] open-font">
              <span className=" scroll text-[#aaaaaa]">
                Advik <br /> Aggarwal
              </span>
              <span className="text-[#777777]">
                Web Developer
                <br />
                /2018─2024
              </span>
            </div>
            <div className="nav_right flex justify-around open-font">
              <span className="text-[#777777] text-wrap  w-[20vh] text-[1.6vh]">
                AVAILABLE FOR FREELANCE WORK FROM JUNE 2024
              </span>
              <button className="btn-primary">CONTACT</button>
            </div>
          </nav>
          <div className=" w-screen h-screen flex items-center justify-center ml-10 tracking-[-0.5vh] ">
            <h1 ref={advikRef} className=" heading">
              FRONT ── END DEVELOPER
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
