import Navbarc from "@/components/nav/Navbarc";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="h-screen w-screen   -mt-1  bg-[#111111] ">
          <nav className="flex justify-between mt-10 paragraph">
            <div className="nav_left flex justify-between mr-[50vh] open-font">
              <span className="text-[#aaaaaa]">
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
            <h1 className="heading">FRONT ── END DEVELOPER</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
