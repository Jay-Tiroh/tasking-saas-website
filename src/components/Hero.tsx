import { Calendar1Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center flex flex-col  items-center w-full">
      <div className="text-text-inv-high-lgt text-4xl lg:text-5xl font-bold  mt-20 mb-5 xs:text-2xl md:max-w-[80%] lg:max-w-[60%]">
        Elevate Your Project <br /> Management Experience
      </div>
      <p className="text-text-inv-mid-lgt text-sm  ">
        Efficiency, Collaboration, Success - All in One Place.
      </p>

      <div className="cta flex sm:flex-row flex-col justify-between items-center my-10 text-sm w-[25rem] gap-5 font-medium">
        <button className="bg-pri-def py-2 px-4 rounded-md text-text-high-lgt sm:w-1/2 w-full cursor-pointer hover:bg-pri-hover transition-colors duration-300">
          Get Started
        </button>
        <button className="text-pri-def border border-pri-def py-2 px-4 rounded-md flex justify-center items-center sm:w-1/2 w-full hover:bg-surf-pri-low hover:border-surf-pri-low visited:bg-surf-pri-mid disabled:border-dis-bg disabled:text-dis-bg  cursor-pointer">
          <Calendar1Icon className="inline mr-1 size-5" />
          Schedule a Demo
        </button>
      </div>

      <div className=" w-[80%] max-w-[55rem] my-10">
        <Image
          className="w-full m-auto"
          src="/assets/images/mockup.svg"
          alt="Hero Image"
          width={3000}
          height={3000}
        />
      </div>
    </div>
  );
};

export default Hero;
