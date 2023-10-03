const styles = {
   boxWidth: "xl:w-[2000px] lg:w-[1300px] md:w-[900px] sm:w-[560px] ss:w-[360px] xs:w-[280px] p:w-[220px] w-full self-center mx-auto",

   //use this file later on to reduce the ammount of tailwind css classes declared in the components & pages and instead put styles in here so that the page looks cleaner

   sections: "p:text-l",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    containers: 'bg-acrylic rounded-lg shadow-2xl p:p-4 md:p-8',
    col: 'flex flex-col',
    row: 'flex flex-row',
    headerOneText: 'text-3xl md:text-5xl font-bold',
    headerTwoText: '',
    importantText: '',
    regularText: 'text-white text-base  md:text-l lg:text-[20px]',
    smallText: 'text-white text-base md:text-xs lg:text-sm',
    smallTextTitle: 'text-white text-base md:text-xs lg:text-base',

    horizontalRuleRight: 'ml-[30px] h-0.5 mt-2.5 w-full bg-white border-0',

  };


export const stylesHome = {

  
  aboutButtons: 'rounded-full bg-teal-400 text-white py-2 px-4 md:py-2 md:px-4 text-base md:text-[20px]',
  profileImg: 'md:absolute h-[12em] w-[12em] sm:h-[15em] sm:w-[15em] md:w-[20em] md:h-[20em]  lg:w-[25em] lg:h-[25em] shadow-2xl rounded-full border-2'

}

export const stylesNav = {

  

}

export const stylesSkills_Edu = {

  
  

}

export const stylesProject = {

  
  

}


  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };

  export default styles