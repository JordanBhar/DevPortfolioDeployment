import React from "react";
import { logo } from "../assets";
import Links from "../components/Links";
import styles from "../style";
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white mt-[250px] w-full  pt-10 lg:px-32">
      <div className="flex justify-center items-center ">
        <img
          src={logo}
          className="h-[100px] w-[100px]  p-[15px] ml-[10px]"
          alt="Logo"
        />
        <p className=" text-sm md:text-lg text-center">
          Living, learning, & leveling up one day at a time.
        </p>
      </div>

      <div className="flex justify-center m-[40px]">
        <div className="text-center"></div>

        <div className="flex space-x-4">
          {/* Add your social media links */}
          <Links></Links>
        </div>
      </div>

      <div className="flex justify-center text-md py-5">
        <div className="flex-col">
          <p>Created by Jordan Bhar &copy; 2023 </p>
          <p>
            Made with <span className="text-red-500">❤️</span> React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
