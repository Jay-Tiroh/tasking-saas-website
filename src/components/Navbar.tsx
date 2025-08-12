"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
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

      <Menu className="size-7 sm:hidden" />
    </div>
  );
};

export default Navbar;
