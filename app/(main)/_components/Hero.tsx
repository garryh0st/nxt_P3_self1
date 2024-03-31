import Navbarc from "@/components/nav/Navbarc";

const Hero = () => {
  return (
    <>
      <section>
        <div className="h-screen w-screen  fixed ">
          <nav className="flex justify-between mt-10 paragraph">
            <div className="nav_left flex justify-between">
              <span>Advik Aggrwal</span>
              <span>Web Developer</span>
            </div>
            <div className="nav_right flex justify-between">
              <span>Advik Aggrwal</span>
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
