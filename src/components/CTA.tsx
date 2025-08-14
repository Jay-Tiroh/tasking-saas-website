"use client";
import React from "react";
import * as motion from "motion/react-client";
import { Calendar1Icon } from "lucide-react";
const CTA = ({ txt1, txt2 }: { txt1: string; txt2: string }) => {
  return (
    <div className="cta flex sm:flex-row flex-col justify-between items-center my-10 text-sm w-[25rem] max-w-[90%] gap-5 font-medium">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
        className="select-none w-full sm:w-1/2"
      >
        <button className="bg-pri-def py-2 px-4 rounded-md text-text-high-lgt  w-full cursor-pointer hover:bg-pri-hover transition-colors duration-300">
          {txt1}
        </button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
        className="select-none w-full sm:w-1/2"
      >
        <button className="text-pri-def border border-pri-def py-2 px-4 rounded-md flex justify-center items-center  w-full hover:bg-surf-pri-low hover:border-surf-pri-low hover:text-text-high-lgt visited:bg-surf-pri-mid disabled:border-dis-bg disabled:text-dis-bg  cursor-pointer transition-colors duration-300 ease-in-out">
          <Calendar1Icon className="inline mr-1 size-5" />
          {txt2}
        </button>
      </motion.div>
    </div>
  );
};

export default CTA;
