import React from "react";
import { socialMediaLinks } from "../constants";

const Links = () => {
    return (
        <div className="flex justify-center space-x-[100px] ">
            {socialMediaLinks.map((socialMedia) => (
                <a href={`${socialMedia.link}`} className="bg-teal-400 text-white w-[75px] h-[75px] rounded-full flex items-center justify-center transition-transform transform ease-in-out duration-300 hover:scale-125">
               
                </a>
            ))}
            {/* Add more icons as needed */}
        </div>
    );
}


export default Links;
