"use client";
import * as motion from "motion/react-client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { AnimatePresence } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    menuOpen
      ? setTimeout(() => {
          setMenuOpen(false);
        }, 8000)
      : null;

    return () => clearTimeout(8000);
  }, [menuOpen]);

  return (
    <div className="flex flex-col relative">
      <div className="nav w-full h-16 flex items-center justify-between px-4 bg-transparent text-white text-sm max-w-[75rem] m-auto">
        <span>
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
        </span>
        <div className="nav-links hidden sm:flex justify-between flex-nowrap items-center sm:w-5/7 md:w-4/5 lg:w-3/5 max-w-xl">
          <span className="active">Home</span>
          <span>Features</span>
          <span>Pricing</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>
        <span className="bg-white border-[1.75px] border-white rounded-md  px-4 py-2 text-sm  font-medium hover:bg-white/5 transition-colors duration-300 hover:!text-white !text-text-inv-high-drk hidden sm:inline cursor-pointer">
          Login
        </span>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="select-none"
          onClick={() => setMenuOpen(!menuOpen)}
          // style={box}
        >
          <Menu className="size-7 sm:hidden text-text-inv-mid-lgt cursor-pointer hover:text-text-inv-high-lgt " />
        </motion.div>
      </div>

      <div className="nav-menu overflow-hidden sm:hidden rounded-md shadow-xl w-72 self-end mr-2  absolute top-16 right-0 z-50">
        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, translateX: 300 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 150 }}
              key="box"
            >
              <div className="flex flex-col w-full nav-menu-links  bg-white/5 backdrop-blur-lg rounded-md shadow-xl !text-text-inv-low-lgt text-center">
                <span className="active w-full p-2  cursor-pointer ">Home</span>
                <span className="">Features</span>
                <span className="">Pricing</span>
                <span className="">About Us</span>
                <span className="">Contact</span>
                <span className="text-text-inv-high-lgt">Login</span>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
