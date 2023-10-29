import React from "react";
import { logo } from "../assets";
import Links from "../components/Links";
import styles from "../style";
const Footer = () => {
  return (
    <footer className="bg-acrylic text-white mt-[100px]  pt-10 lg:px-32">
      <div className="flex justify-center items-center ">
        <img
          src={logo}
          className="h-[125px] w-[125px]  p-[15px] ml-[10px]"
          alt="Logo"
        />
      </div>

      <div className="flex-col  ">
        <p className="text-lg text-center">
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
