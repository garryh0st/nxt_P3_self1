"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const ref = useRef(null);
  const frontend = useRef(null);
  const developer = useRef(null);
  const navitems = useRef(null);

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const scroll = new LocomotiveScroll.default({
        el: ref.current ?? undefined,
        smooth: true,
        direction: "vertical",
      });
      // Frontend Reveal Animation
      gsap.fromTo(
        frontend.current,
        { x: "100%" },
        { x: "0%", duration: 2, delay: 0.5, scrollTrigger: frontend.current }
      );
      // Developer Reveal Animation
      gsap.fromTo(
        developer.current,
        { x: "-100%" },
        { x: "0%", duration: 2, delay: 0.5, scrollTrigger: developer.current }
      );

      // Navitems Reveal Animation
      gsap.fromTo(
        navitems.current,
        { y: "-10vh" },
        { y: "0%", duration: 1, scrollTrigger: navitems.current }
      );
    });
  }, []);

  return (
    <div
      ref={ref}
      data-scroll-container
      className=" bg-[#111111]  w-screen overflow-x-hidden "
    >
      <section className="hero">
        <div className=" h-screen w-screen  -mt-1  bg-[#c6393900] ">
          <nav
            ref={navitems}
            className="flex justify-between mt-10 lg:[paragraph]"
          >
            <div className="nav_left flex flex-col sm:flex-row justify-between lg:mr-[50vh] open-font ">
              <span className=" scroll text-[#aaaaaa] ">
                Advik <br /> Aggarwal
              </span>
              <span className="text-[#777777] ">
                Web Developer
                <br />
                /2018─2024
              </span>
            </div>
            <div className="nav_right flex flex-col sm:flex-row justify-around open-font gap-5">
              <span className="text-[#777777] text-wrap  w-[20vh] text-[1.6vh]">
                AVAILABLE FOR FREELANCE WORK FROM JUNE 2024
              </span>
              <button className="btn-primary ">CONTACT</button>
            </div>
          </nav>

          <section className="flex justify-center sm:items-center ml-5 mt-10 sm:mt-20 ">
            <div className=" w-screen">
              <div
                ref={frontend}
                className=" text-[12vh] sm:text-[38vh] font-bold  sm:leading-[40vh]  transformm font-bebas  tracking-[-0.2vh]  text-[#777777] divider "
              >
                <span className="txt-hover">F</span>
                <span className="txt-hover">r</span>
                <span className="txt-hover">o</span>
                <span className="txt-hover">n</span>
                <span className="txt-hover">t</span>{" "}
                <span className="divider sm-hidden ">──</span>{" "}
                <span className="txt-hover h-full ">E</span>
                <span className="txt-hover h-full">n</span>
                <span className="txt-hover h-full">d</span>
              </div>

              <div
                ref={developer}
                className=" text-[12vh] sm:text-[38vh] font-bold  sm:leading-[40vh]  transformm font-bebas  tracking-[-0.2vh]  text-[#777777]"
              >
                <span className="txt-hover">D</span>
                <span className="txt-hover">e</span>
                <span className="txt-hover">v</span>
                <span className="txt-hover">e</span>
                <span className="txt-hover">l</span>
                <span className="txt-hover">o</span>
                <span className="txt-hover">p</span>
                <span className="txt-hover">e</span>
                <span className="txt-hover">r</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Hero;
