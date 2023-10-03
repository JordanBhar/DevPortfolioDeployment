import React from 'react'
import styles from '../style';
import { SkillsTab } from '../components';

export const Skills = () => {
  return (
    <section id="Skills">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
        
          <h2 className={`${styles.headerOneText} text-white my-5`}>
            <div className={`${styles.row} items-center`}>
              <p className='whitespace-nowrap'>Skills</p>
              <hr className={styles.horizontalRuleRight}></hr>
            </div>
          </h2>

          <div className={styles.containers}>
            <SkillsTab/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills