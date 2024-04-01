"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const ref = useRef(null);
  const frontend = useRef(null);
  const developer = useRef(null);
  const navitems = useRef(null);
  const frontendMaskRef = useRef(null);
  const developerMaskRef = useRef(null);

  useEffect(() => {
    // if (ref.current) {
      if (typeof window !== 'undefined') {
        if (ref.current) {
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
      });

      // gsap.fromTo(
      //   frontend.current,
      //   { y: "100%" },
      //   { y: "0%", duration: 0.5, delay: 0.5, scrollTrigger: frontend.current }
      // );
      gsap.fromTo(
        frontend.current,
        { y: "100%" },
        { y: "0%", duration: 1, delay: 0.5, scrollTrigger: frontend.current }
      );

      gsap.fromTo(
        developer.current,
        { y: "100%" },
        { y: "0%", duration: 1, delay: 1, scrollTrigger: developer.current }
      );
      gsap.fromTo(
        navitems.current,
        { y: "-30vh" },
        { y: "0%", duration: 3, scrollTrigger: navitems.current }
      );

      const mask = frontend.current ? document.querySelector(".mask") : null;
      gsap.to(mask, { y: "100%", duration: 1, ease: "power3.out" });
      gsap.to(frontendMaskRef.current, {
        y: "100%",
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(developerMaskRef.current, {
        y: "100%",
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });

      if (frontend.current) {
        gsap.fromTo(
          (frontend.current as HTMLElement).children,
          { y: "40%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 3,
            stagger: 0.05,
            scrollTrigger: frontend.current,
          }
        );
      }
    }}
  }, []);

  return (
    <div ref={ref} data-scroll-container>
      <section className="hero">
        <div className="h-screen w-screen   -mt-1  bg-[#111111] ">
          <nav ref={navitems} className="flex justify-between mt-10 paragraph">
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
          {/* <div className=" w-full h-screen flex items-center  ml-10 tracking-[-0.5vh] heading ">
             {Array.from("FRONT ── END DEVELOPER").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))} 
            <span ref={frontend}>Front --End</span>
             {Array.from("FRONT ── END DEVELOPER").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))} 
            <span ref={developer}>Developer</span>
          </div> */}
          <section className=" flex justify-center items-center h-screen w-screen ml-10 ">
            <div className="w-full  ">
              <div ref={frontend} className="heading tracking-[-0.2vh]">
                <span className="txt-hover">F</span>
                <span className="txt-hover">r</span>
                <span className="txt-hover">o</span>
                <span className="txt-hover">n</span>
                <span className="txt-hover">t</span> ──{" "}
                <span className="txt-hover">E</span>
                <span className="txt-hover">n</span>
                <span className="txt-hover">d</span>
              </div>
              <div ref={frontendMaskRef} className="mask"></div>
              <div ref={developer} className="heading ">
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
              <div ref={developerMaskRef} className="mask"></div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Hero;
