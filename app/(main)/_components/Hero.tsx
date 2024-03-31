import Navbarc from "@/components/nav/Navbarc";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#9063D4] ">
        <div>
          <div className="w-[95%] flex justify-end mr-10">
            <Navbarc />
          </div>
          <div className="flex justify-center items-center h-screen">
            <div className="font-ppm-ultrabold text-6xl text-[#2F0E41] uppercase leading-3 tracking-[1px] underline ">
              <span className="text-7xl tracking-[-1px]">A</span>dvik{" "}
              <span className="text-7xl tracking-[-1px]">A</span>ggarwal
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
