import React from "react";
import { socialMediaLinks } from "../constants";

const Links = () => {
  return (
    <div className="flex justify-center space-x-[50px] sm:space-x-[75px] lg:space-x-[150px] mt-[10px]">
      {socialMediaLinks.map((socialMedia) => (
        <div className="flex-row" key={socialMedia.id || socialMedia.name}>
          <a
            href={`${socialMedia.link}`}
            className="bg-teal-400 text-white w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center transition-transform transform ease-in-out duration-300 hover:scale-125"
          >
            <img
              src={`${socialMedia.icon}`}
              className="text-white w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
              alt={`${socialMedia.name} icon`}  // Added alt attribute for accessibility
            />
          </a>
          <p className="text-center mt-3 text-sm md:text-md">
            {socialMedia.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Links;

