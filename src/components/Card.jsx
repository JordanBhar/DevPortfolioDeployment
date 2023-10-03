import React from 'react';
import styles from '../style';

function Card(props) {
  const { projectName, repoLink, demoLink ,imgPath,projectLanguages,projectTools, projectDescription} = props;

  const card = 'w-a h-a flex flex-col justify-start p-3 space-y-5 relative'; // Add 'relative' class here

  const linkContainer = 'absolute bottom-3 right-3';
  const imageContainer = 'border-2 rounded-md h-[200px] relative'; // Add 'relative' class here

  return (
    <div className={card}>
      <div className={`${styles.row} ${styles.smallTextTitle} font-bold`}>
        <h2 className='whitespace-nowrap text-teal-300'>{projectName}</h2>
        <hr className={styles.horizontalRuleRight}></hr>
      </div>

      <div className={imageContainer}>
        <img
          src='https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000'
          className='z-10 h-full w-full object-cover' // Use object-cover to fit the image within the container
          alt="img"
        />
        <div className={`${linkContainer}`}>
          <a href={repoLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-github bg-teal-300 rounded-full p-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2.00.27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>

      <div className={`${styles.col} ${styles.smallText}  text-white space-y-3 text-left text-justify`}>
        <p className=''><span className='text-teal-300'>Languages: </span>{projectLanguages}</p>
        <p className=''><span className='text-teal-300'>Tools: </span>{projectTools}</p>
        <p className='mt-2'>{projectDescription}</p>
      </div>
    </div>
  );
}

export default Card;
