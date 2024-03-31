import Navbarc from "@/components/nav/Navbarc";

const Hero = () => {
  return (
    <>
      <section>
        <div className="h-screen w-screen  fixed bg-[#111111] ">
          <nav className="flex justify-between mt-10 paragraph">
            <div className="nav_left flex justify-between mr-[50vh] open-font">
              <span className="text-[#aaaaaa]">Advik Aggarwal</span>
              <span className="text-[#777777]">
                Web Developer
                <br />
                /2018─2024
              </span>
            </div>
            <div className="nav_right flex justify-around open-font">
              <span className="text-[#777777] text-wrap h-20 w-[20vh] text-[1.6vh]">
                AVAILABLE FOR FREELANCE WORK FROM JUNE 2024
              </span>
              <span>Web Developer</span>
            </div>
          </nav>
          <div>
            <h1>FRONT END DEVELOPER</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
