import React from "react";
import { logo } from "../assets";
import styles from "../style";
const Footer = () => {
  return (
    <footer className="bg-acrylic text-white mt-[100px] p-10 px-10 lg:px-32">
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <img
            src={logo}
            className="h-[125px] w-[125px] xs:scale-75 p-[15px] ml-[10px]"
            alt="Logo"
          />
          <p className="text-sm">
            Living, learning, & leveling up one day at a time.
          </p>
        </div>

        <div className="flex space-x-4">
          {/* Add your social media links */}
          <a href="#" className="text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#" className="text-xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="flex justify-center text-sm">
        <p>Handcrafted by me &copy; twentytwenty</p>
        <p>
          Made with <span className="text-red-500">❤️</span> BULMA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
