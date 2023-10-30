import React from "react";
import { socialMediaLinks } from "../constants";

const Links = () => {
  return (
    <div className="flex justify-center space-x-[45px] lg:space-x-[100px] sm:space-x-[75px] ">
      {socialMediaLinks.map((socialMedia) => (
        <div className="flex-row">
          <a
            href={`${socialMedia.link}`}
            className="bg-teal-400 text-white w-[75px] h-[75px] rounded-full flex items-center justify-center transition-transform transform ease-in-out duration-300 hover:scale-125"
          >
            <img
              src={`${socialMedia.icon}`}
              width="35px"
              height="35px"
              className="text-white"
            ></img>
          </a>
          <p className="text-center mt-3">{socialMedia.name}</p>
        </div>
      ))}
      {/* Add more icons as needed */}
    </div>
  );
};

export default Links;
