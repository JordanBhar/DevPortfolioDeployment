import React, { useState, useEffect } from "react";
import styles from "../style";
import {stylesHome} from "../style";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { tabViewsSkillsEducation } from "../constants";
import "react-tabs/style/react-tabs.css"; // Import styles (you may need to adjust the path)

const SkillsTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize with the current screen width

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const clickForward = () => {
    setSelectedTab((prevTab) => (prevTab + 1) % tabViewsSkillsEducation.length);
  };

  const clickBackward = () => {
    setSelectedTab((prevTab) =>
      prevTab === 0 ? tabViewsSkillsEducation.length - 1 : prevTab - 1
    );
  };

  useEffect(() => {
    // Update screenWidth whenever the window resizes
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        {/* Show TabList on screens larger than small (sm) */}
        <TabList className="hidden md:flex pb-2 px-5 space-x-4 text-white flex flex-row items-center flex-wrap border-b-2">
          {tabViewsSkillsEducation.map((skills) => (
            <Tab
              className="transition duration-700 ease-in-out hover:text-teal-300 "
              key={skills.id}
            >
              <span className=" lg:text-xl xl:text-2xl">{skills.title}</span>
            </Tab>
          ))}
        </TabList>

        <div className="s:hidden flex flex-row justify-center items-center p-3 space-x-2 ">
          {screenWidth < 1024 ? (
            <>
              <button
                type="button"
                onClick={clickBackward}
                className="rounded-full bg-teal-400 text-white py-2 px-4 mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
              </button>

              <p className="text-white p:text-sm sm:text-xl">
                {tabViewsSkillsEducation[selectedTab].title}
              </p>

              <button
                type="button"
                onClick={clickForward}
                className="rounded-full bg-teal-400 text-white py-2 px-4 ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
              </button>
            </>
          ) : null}
        </div>

        <div className="m-5 border border-white p-10 rounded-xl text-white">
          {tabViewsSkillsEducation.map((skills, index) => (
            <TabPanel key={skills.id}>
              {selectedTab === index && (
                <ul className={`${styles.row} flex-wrap justify-start gap-x-5 gap-y-5`}>
                  {skills.skills &&
                    skills.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="border-2 border-teal-300 rounded-full px-5 py-2">{skill}</li>
                    ))}
                </ul>
              )}
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default SkillsTab;
