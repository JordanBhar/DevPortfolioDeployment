import React from "react";
import styles from "../style";
import EmailForm from "../components/EmailForum";

export const Contact = () => {
  return (
    <section id="Contact container">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          
        <h2 className={`${styles.headerOneText} text-white my-5`}>
            <div className={`${styles.row} items-center`}>
              Contact 
              <hr className={styles.horizontalRuleRight}></hr>
            </div>
          </h2>

          <div className={styles.containers}>
            <EmailForm/>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
