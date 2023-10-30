import React from "react";
import { socialMediaLinks } from "../constants";

const Links = () => {
  return (
    <div className="flex justify-center space-x-[45px] sm:space-x-[75px] lg:space-x-[150px] mt-[30px]">
      {socialMediaLinks.map((socialMedia) => (
        <div className="flex-row">
          <a
            href={`${socialMedia.link}`}
            className="bg-teal-400 text-white w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] rounded-full flex items-center justify-center transition-transform transform ease-in-out duration-300 hover:scale-125"
          >
            <img
              src={`${socialMedia.icon}`}
              
              className="text-white w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
            ></img>
          </a>
          <p className="text-center mt-3 text-sm md:text-md">{socialMedia.name}</p>
        </div>
      ))}
      {/* Add more icons as needed */}
    </div>
  );
};

export default Links;
