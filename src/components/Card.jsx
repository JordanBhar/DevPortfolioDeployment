import React from "react";
import styles from "../style";
import { githubProfileIcon, demoIcon } from "../assets";

function Card(props) {
  const {
    projectName,
    repoLink,
    demoLink,
    imgPath,
    projectLanguages,
    projectTools,
    projectDescription,
  } = props;

  return (
    <div className="w-a h-a flex flex-col justify-start p-5 space-y-5 relative">
      <div className={`${styles.row} ${styles.smallTextTitle} font-bold`}>
        <h2 className="whitespace-nowrap text-teal-300 text-xl">
          {projectName}
        </h2>
        <hr className={styles.horizontalRuleRight}></hr>
      </div>

      <div className="border-2 rounded-md h-[200px] relative">
        <img
          src={imgPath}
          className="z-10 h-full w-full object-cover" // Use object-cover to fit the image within the container
          alt="img"
        />

        <div className="flex flex-row absolute bottom-3 right-3 space-x-5">
          {demoLink && (
            <div>
              <a href={demoLink}>
                <img
                  src={`${demoIcon}`}
                  width="40px"
                  height="40px"
                  className="bi bi-github bg-teal-300 rounded-full p-1 transition-transform transform ease-in-out duration-300 hover:scale-150 "
                  alt="Demo Icon"
                />
              </a>
            </div>
          )}

          {repoLink && (
            <div>
              <a href={repoLink}>
                <img
                  src={`${githubProfileIcon}`}
                  width="40px"
                  height="40px"
                  className="bi bi-github bg-teal-300 rounded-full p-1 transition-transform transform ease-in-out duration-300 hover:scale-150 "
                  alt="GitHub Repo"
                />
              </a>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${styles.col} ${styles.smallText}  text-white space-y-3 text-left text-justify text-lg`}
      >
        <p className="">
          <span className="text-teal-300 text-lg font-bold">Languages: </span>
          {projectLanguages}
        </p>
        <p className="">
          <span className="text-teal-300  text-lg font-bold">Tools: </span>
          {projectTools}
        </p>
        <p className="text-base leading-relaxed">{projectDescription}</p>
      </div>
    </div>
  );
}

export default Card;
