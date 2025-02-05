import React from "react";
import styles from "../style";
import { stylesHome } from "../style";
import { profile } from "../assets";
import { contactData, aboutData } from "../constants";
import { ContactInfo } from "../components";

const Home = () => {
  const handleDownloadResume = () => {
    const confirmDownload = window.confirm(
      "You are about to download a file. Do you want to continue?"
    );
    if (confirmDownload) {
      // The user confirmed the download, trigger the download.
      const resumeLink = document.createElement("a");
      resumeLink.href = "./src/assets/Profile/Jordan_Resume_2024.pdf"; // Replace with the actual path to your resume PDF. //resumeLink.href = aboutData.resume; // Replace with the actual path to your resume PDF.
      resumeLink.download = "Jordan_Resume_2024.pdf"; // Replace with the desired name for the downloaded file.
      resumeLink.click();
    }
  };

  return (
    <section className="mt-16" id="Home">
      <div className={`${styles.flexCenter} `}>
        <div className={styles.boxWidth}>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-10 md:space-x-40">
            <div className={` ${styles.containers} md:w-4/6 lg:w-4/8 space-y-5 md:space-y-10 shadow-2xl shadow-black p-10`}>
              <div className="space-y-5">
                <p className="text-2xl md:text-6xl font-bold text-white">
                  {aboutData[0].name}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <span className="text-teal-400">{aboutData[0].job}</span>
                </p>
              </div>

              <p className={`${styles.regularText} leading-relaxed `}>{aboutData[0].about}</p>

              {contactData.map((data) => (
                <ContactInfo
                  key = {data.id}
                  contactName={data.data}
                  contactIcon={data.icon}
                ></ContactInfo>
              ))}

              {/* Profile Img Mobile*/}
              <div className="md:hidden flex justify-center">
                <img
                  src={profile}
                  className={`${stylesHome.profileImg} shadow-2xl shadow-black`}
                  alt="Profile"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row pt-[30px] md:space-x-10 md:justify-start gap-y-5 ">
                <a
                  className={stylesHome.aboutButtons}
                  href="#"
                  onClick={handleDownloadResume}
                >
                  <div className="flex items-center gap-x-2 rounded-full bg-teal-400 text-white py-2 px-4 ml-2 transition-transform duration-700 ease-out  text-[22px]  transform hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-file-earmark-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
                    </svg>
                    Resume
                  </div>
                </a>
                <a
                  className={stylesHome.aboutButtons}
                  href={aboutData[0].github}
                >
                  <div>
                    <div className="flex items-center gap-x-2 rounded-full bg-teal-400 text-white py-2 px-4 ml-2 transition-transform duration-700 ease-out    text-[22px]  transform hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    Github
                  </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Profile Img Desktop*/}
            <div className="md:w-2/4 collapse md:visible flex justify-center items-center">
              <div className="flex-col">
                <img
                  src={profile}
                  className={`${stylesHome.profileImg}`}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
