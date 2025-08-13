import Image from "next/image";
import React from "react";
import CTA from "./CTA";

const Hero = () => {
  return (
    <div className="text-center flex flex-col  items-center max-w-[90%] w-full m-auto ">
      <div className="text-text-inv-high-lgt  sm:text-4xl lg:text-5xl font-bold  mt-20 mb-5 text-2xl md:max-w-[80%] lg:max-w-[60%]">
        Elevate Your Project <br /> Management Experience
      </div>
      <p className="text-text-inv-mid-lgt text-sm  ">
        Efficiency, Collaboration, Success - All in One Place.
      </p>

      <CTA />
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
