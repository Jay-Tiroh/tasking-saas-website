"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import * as motion from "motion/react-client";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  return (
    <div>
      <div className="flex flex-col items-center   w-[90%] md:w-full text-center m-auto ">
        {/* heading */}
        <h1 className="text-text-inv-high-lgt text-xl sm:text-3xl font-bold mb-2">
          Transparent Pricing Plans
        </h1>
        <p className="text-text-inv-mid-lgt text-sm">
          Choose a plan that fits your team&apos;s needs. No hidden fees, just
          transparent and affordable pricing.
        </p>

        {/* subscription type */}
        <div className="billing  max-w-[90%]  flex justify-between items-center my-5 gap-2 text-sm ">
          <span
            className={`${
              isMonthly ? "text-pri-def" : "text-text-inv-low-lgt"
            }`}
          >
            Monthly Billing
          </span>
          <Switch
            onClick={() => setIsMonthly(!isMonthly)}
            className="scale-170  mx-3 bg-text-low-drk cursor-pointer"
          />
          <span
            className={`${
              !isMonthly ? "text-pri-def" : "text-text-inv-low-lgt"
            }`}
          >
            Yearly Billing
          </span>
        </div>

        {/* grid */}
        <div className="grid lg:grid-cols-3 gap-5 my-5 w-full text-start text-text-inv-mid-lgt place-items-center ">
          {/* plan */}
          <div className="plan border border-border-pri-drk flex flex-col p-5  rounded-md  md:min-w-72 ">
            <div className="summary flex flex-col  border-b border-b-border-pri-drk pb-5 gap-2">
              <h3 className="">Basic Plan</h3>
              <div className="flex items-center gap-2">
                {" "}
                <span className="text-lg md:xl text-text-inv-high-lgt font-bold">
                  {" "}
                  $9.99{" "}
                </span>
                <span className="text-sm">per user/month</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.8 }}
                className="select-none w-full"
              >
                <div className="bg-text-inv-high-lgt text-text-high-lgt py-2 px-4 w-full rounded-sm cursor-pointer hover:bg-bg-inv-pri-lgt hover:text-text-inv-high-lgt border-text-inv-high-lgt hover:border-border-pri-lgt border transition-all duration-200 ease-in text-center">
                  Start 7 Day Trial
                </div>
              </motion.div>
            </div>

            {/* desc */}
            <div className="flex flex-col gap-3 text-sm py-5">
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Up to 10 Projects
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Task Management
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Team Collaboration
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Basic Analytics
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Email Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Integrations with Popular Tools
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Advanced Security Features
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Custom Workflows
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Dedicated Account Manager
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                24/7 Priority Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                On-Premise Deployment Option
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                API Access for Integration
              </span>
            </div>
          </div>

          {/* plan */}
          <div className="plan border border-border-pri-drk flex flex-col p-5  rounded-md  md:min-w-72 ">
            <div className="summary flex flex-col  border-b border-b-border-pri-drk pb-5 gap-2">
              <h3 className="">Basic Plan</h3>
              <div className="flex items-center gap-2">
                {" "}
                <span className="text-lg md:xl text-text-inv-high-lgt font-bold">
                  {" "}
                  $9.99{" "}
                </span>
                <span className="text-sm">per user/month</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.8 }}
                className="select-none w-full"
              >
                <div className="bg-text-inv-high-lgt text-text-high-lgt py-2 px-4 w-full rounded-sm cursor-pointer hover:bg-bg-inv-pri-lgt hover:text-text-inv-high-lgt border-text-inv-high-lgt hover:border-border-pri-lgt border transition-all duration-200 ease-in text-center">
                  Start 7 Day Trial
                </div>
              </motion.div>
            </div>

            {/* desc */}
            <div className="flex flex-col gap-3 text-sm py-5">
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Up to 10 Projects
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Task Management
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Team Collaboration
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Basic Analytics
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Email Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Integrations with Popular Tools
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Advanced Security Features
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Custom Workflows
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Dedicated Account Manager
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                24/7 Priority Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                On-Premise Deployment Option
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                API Access for Integration
              </span>
            </div>
          </div>

          {/* plan */}
          <div className="plan border border-border-pri-drk flex flex-col p-5  rounded-md  md:min-w-72 ">
            <div className="summary flex flex-col  border-b border-b-border-pri-drk pb-5 gap-2">
              <h3 className="">Basic Plan</h3>
              <div className="flex items-center gap-2">
                {" "}
                <span className="text-lg md:xl text-text-inv-high-lgt font-bold">
                  {" "}
                  $9.99{" "}
                </span>
                <span className="text-sm">per user/month</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.8 }}
                className="select-none w-full"
              >
                <div className="bg-text-inv-high-lgt text-text-high-lgt py-2 px-4 w-full rounded-sm cursor-pointer hover:bg-bg-inv-pri-lgt hover:text-text-inv-high-lgt border-text-inv-high-lgt hover:border-border-pri-lgt border transition-all duration-200 ease-in text-center">
                  Start 7 Day Trial
                </div>
              </motion.div>
            </div>

            {/* desc */}
            <div className="flex flex-col gap-3 text-sm py-5">
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Up to 10 Projects
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Task Management
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Team Collaboration
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Basic Analytics
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/tick.svg"}
                  width={50}
                  height={50}
                  alt="tick"
                  className="size-5"
                />
                Email Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Integrations with Popular Tools
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Advanced Security Features
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Custom Workflows
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                Dedicated Account Manager
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                24/7 Priority Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                On-Premise Deployment Option
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/assets/images/cancel.svg"}
                  width={50}
                  height={50}
                  alt="cancel"
                  className="size-5"
                />
                API Access for Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
