import React from "react";
import styles from "../style";
import { EducationData } from "../constants";

export const Education = () => {
  return (
    <section id="Education">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.headerOneText} text-white my-5 `}>
            <div className={`${styles.row} items-center `}>
              <p className="whitespace-nowrap">Education & Courses</p>
              <hr className={styles.horizontalRuleRight}></hr>
            </div>
          </h2>

          <div className={`${styles.containers}  shadow-2xl shadow-black`}>
            <p className="text-2xl md:text-4xl font-bold text-white mb-10">
              <span className="text-gradient">{EducationData.schoolName}</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className={`${styles.regularText} p:order-last p:mt-5 md:order-first`}
              >
                {EducationData.about}
              </div>

              <div className={`${styles.row} justify-center  p-5`}>
                <img
                  className="border-2 border-white rounded-xl h-[225px] md:h-[400px] md:w-[450px]   mx-10"
                  src="https://educationontario.com/app/uploads/2022/03/sheridan-trafalgar-campus-scaet-banner.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
