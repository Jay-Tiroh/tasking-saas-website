import React from "react";
import CTA from "./CTA";

const ReadyTo = () => {
  return (
    <div className="flex flex-col items-center  max-w-[43rem] w-[90%] text-center m-auto ">
      <h2 className="text-xl sm:text-3xl font-bold text-text-inv-high-lgt mb-5 max-w-[30rem]">
        Ready to take your project management to the next level?
      </h2>
      <p className="text-text-inv-low-lgt text-center text-sm max-w-[24rem]">
        Start your free trial today or schedule a personalized demo with our
        experts.
      </p>
      <CTA txt1="Start Free Trial" txt2="Schedule a Demo" />
    </div>
  );
};

export default ReadyTo;
