import React, { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = ({ educationRef, projectsRef, contactRef }) => {
  const [toggle, setToggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  // Function to close the menu
  const closeMenu = () => {
    setToggle(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply the 'fixed-nav' class conditionally based on if the 
  const navClass = isFixed ? 'fixed right-0 left-0 top-0 transition ease-in-out delay-150 bg-zinc-900 opacity-80 rounded-lg shadow-2xl shadow-cyan-600/50' : 'bg-acrylic rounded-lg shadow-2xl shadow-cyan-600/50 mt-[10px]';

  return (
    <nav className={`${navClass} z-50`}>
      <div className=" h-[110px] w-full flex justify-between  ">
        {/* Big Logo Here */}
        <div className="justify-start flex items-center">
          <img
            src={logo}
            className="h-[125px] w-[125px] xs:scale-75 p-[15px] ml-[10px]"
            alt="Logo"
          />
        </div>

        {/* Navigation Links Here */}
        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins text-white font-normal cursor-pointer text-[30px] mr-10"
            >
              <ScrollLink
                to={nav.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className={`transition duration-700 ease-in-out hover:text-teal-300 hover:border-b-2 text-xl border-teal-300`}
                onClick={() => {
                  closeMenu();
                }}
              >
                {nav.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Supports for Smaller Devices */}
        <div className="md:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Mobile Menu"
            className="w-[28px] h-[38px] object-contain mr-6"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            }  p-6 absolute top-28 md:right-10 min-w-[300px] p:min-w-[250px]  bg-acrylic rounded-xl sidebar justify-end mt-[10px]`}
          >
            <ul className={`list-none flex flex-col items-end`}>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-white text-[16px] ${
                    index === navLinks.length ? "mr-0" : "mb-4"
                  }`}
                  onClick={() => {
                    scroll.scrollTo(nav.id, {
                      smooth: true,
                      duration: 500,
                    });
                    closeMenu();
                  }}
                >
                  <ScrollLink
                    to={nav.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`transition duration-700 ease-in-out hover:text-teal-300 hover:border-b-2 text-[20px] border-teal-300`}
                    onClick={closeMenu}
                  >
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
