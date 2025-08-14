import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Pricing from "@/components/Pricing";
import ReadyTo from "@/components/ReadyTo";
import TrustedBy from "@/components/TrustedBy";
import Image from "next/image";

import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-10 space-y-10 overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <Image
        src="/assets/images/divider.svg"
        alt="divider"
        width={80}
        height={100}
        className="my-20"
      />
      <Info />
      <Image
        src="/assets/images/divider.svg"
        alt="divider"
        width={80}
        height={100}
        className="m-auto my-20"
      />
      <Pricing />
      <Image
        src="/assets/images/divider.svg"
        alt="divider"
        width={80}
        height={100}
        className="m-auto my-20"
      />
      <FAQ />
      <Image
        src="/assets/images/divider.svg"
        alt="divider"
        width={80}
        height={100}
        className="m-auto my-20"
      />
      <ReadyTo />
    </div>
  );
};

export default Landing;
