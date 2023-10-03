import React from "react";
import styles from "../style";
import ProjectGallery from "../components/ProjectGallery";

export const Projects = () => {
  return (
    <section id="Projects">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>

          <h2 className={`${styles.headerOneText} text-white my-5`}>
            <div className={`${styles.row} items-center`}>
              Projects 
              <hr className={styles.horizontalRuleRight}></hr>
            </div>
          </h2>

          <div className={styles.containers}>
            <ProjectGallery/>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;
