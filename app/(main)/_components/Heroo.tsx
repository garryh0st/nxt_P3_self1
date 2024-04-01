"use client";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (ref.current) {
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
      });

      gsap.fromTo(
        frontend.current,
        { y: "50%" },
        { y: "0%", duration: 0.5, delay: 0.5, scrollTrigger: frontend.current }
      );
      gsap.fromTo(
        developer.current,
        { y: "50%" },
        { y: "0%", duration: 0.5, delay: 1, scrollTrigger: developer.current }
      );
    }
  }, []);

  useEffect(() => {
    if (frontend.current) {
      gsap.fromTo(
        (frontend.current as HTMLElement).children,
        { y: "40%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          scrollTrigger: frontend.current,
        }
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
            <h1 ref={frontend} className=" heading">
              {Array.from("FRONT ── END DEVELOPER").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>
    
      </section>
    </div>
  );
};
export default Hero;
