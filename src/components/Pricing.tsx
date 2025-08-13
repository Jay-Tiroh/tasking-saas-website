import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-text-inv-high-lgt text-3xl font-bold mb-2">
          Transparent Pricing Plans
        </h1>
        <p className="text-text-inv-mid-lgt text-sm">
          Choose a plan that fits your team&apos;s needs. No hidden fees, just
          transparent and affordable pricing.
        </p>
        <div className="grid  md:grid-cols-6 gap-5 my-5  md:w-[55rem] max-w-[80%]"></div>
      </div>
    </div>
  );
};

export default Pricing;
