import {
  linkedinProfileIcon,
  schoolProfileIcon,
  locationProfileIcon,
  discordProfileIcon,
  githubProfileIcon,
  mailProfileIcon,
  githubFooterIcon,
  discordFooterIcon,
  mailFooterIcon,
  linkedinFooterIcon,
  Pbg,
} from "../assets";

export const navLinks = [
  {
    id: "Home", //needs to be empty for routing purposes
    title: "Home",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Education",
    title: "Education",
  },
];

export const aboutData = [
  {
    name: "Jordan Bhar",
    job: "Full-Stack Developer",
    about:
      "I'm a Mobile & Web applications developer with 5 years dedicated to perfecting Developer Experience. My applications stand out for their aesthetics, functionality, and intuitive user experiences. My commitment to continuous self-learning keeps me ahead in technological advances, ensuring my work is always at the cutting edge. Through my portfolio, you'll see my drive, the impact of my projects, and my passion for pushing mobile & web development boundaries. Let's collaborate and make your digital vision a reality!",
    github: "https://github.com/JordanBhar",
    //the resume should be a file path to an asset of my resume within this project
    resume: "/public/Jordan_Resume_2023.pdf"
  },
];

export const EducationData = {
  schoolName: "Sheridan College",
  porgramName: "Mobile Computing",
  programDuration: "4 years",
  about:
    "My Developer Journey began in high school and truly started to accelerate and prosper while I was at Sheridan College. I enrolled in the 4-5 year Mobile Computing Degree program at Sheridan. Throughout my academic journey at Sheridan, I acquired a vast array of knowledge, ranging from Website Design & Creation to Mobile App Development for both IOS & Android. I also delved deep into .NET API & MVC applications, explored Wired & Wireless Network Communications, grasped the intricacies of Software Design & Engineering Principles, understood Data Structures & Algorithms, and delved into Operating System Design & Analysis. Sheridan College not only enhanced my technical skills but also broadened my perspective on the potential and versatility of computer science. It has been a cornerstone in solidifying my foundational understanding and has equipped me with the tools necessary to tackle complex technological challenges.",
};

export const tabViewsSkillsEducation = [
  {
    id: 1,
    title: "Programming",
    skills: [
      "C & C++",
      "C#",
      "Swift",
      "Kotlin",
      "Java",
      "Python",
      "Dart & Flutter",
    ],
  },
  {
    id: 2,
    title: "Front-end",
    skills: [
      "HTML",
      "CSS",
      "BootStrap CSS",
      "Tailwind CSS",
      "React JS",
      "Swift UI",
    ],
  },
  {
    id: 3,
    title: "Back-end",
    skills: [".NET", "SpringBoot", "Node JS"],
  },
  {
    id: 4,
    title: "Database",
    skills: ["Firebase", "SQL", "SQL lite"],
  },
  {
    id: 5,
    title: "Testing",
    skills: ["xUnit"],
  },
  {
    id: 6,
    title: "Tools",
    skills: [
      "Xcode",
      "Visual Studio Code",
      "IntelliJ",
      "CLion",
      "GIT",
      "Github",
      "Figma",
      "Postman",
    ],
  },
];

export const contactData = [
  {
    id: 1,
    data: "Toronto, Ontario",
    icon: locationProfileIcon,
  },
  {
    id: 2,
    data: "Sheridan College",
    icon: schoolProfileIcon,
  },
  {
    id: 3,
    data: "jordan.bhar@hotmail.com",
    icon: mailProfileIcon,
  },
  {
    id: 4,
    data: "Jordan Bhar",
    icon: linkedinProfileIcon,
  },
  {
    id: 5,
    data: "obsidiancobraa",
    icon: discordProfileIcon,
  },
];

export const projectData = [
  {
    id: 1,
    projectName: "Gympact",
    projectRepoLink: "https://github.com/JordanBhar/Gympact-FinalProject.git",
    projectDemoLink: "",
    imgPth: "../src/assets/projectBG/Gympact.png",
    languages: "Swift & Swift UI",
    tools: "XCode, Firebase, APIs",
    description:
      "Used Swift UI & Xcode  to create a fitness application, in which I implemented an Exercise Tutorial section & cardio section. Other features of the app include a pedometer, Realtime user database, fitness calendar which were implemented by my other group partners  ",
  },
  {
    // i need to download and post as my own project so ppl can see the code
    id: 2,
    projectName: "Shop Till You Drop",
    projectRepoLink: "https://github.com/TristarMMII/STYD",
    projectDemoLink: "",
    imgPth: "../src/assets/projectBG/ShopTillYouDrop.png",
    languages: "Swift & Swift UI",
    tools: "XCode, Firebase, APIs",
    description:
      "A IOS application using Swift. This application uses Machine Learning (Image to text) & Google Shopping API. The user can look up any product either manually or by taking a photo of an item, and then uses shopping api to query  for intended product. This project was a group project with two other group members ",
  },
  {
    // i need to download and post as my own project so ppl can see the code
    id: 3,
    projectName: "Perfect Pronunciation",
    projectRepoLink: "https://github.com/ahmadmua/Perfect-Pronunciation",
    projectDemoLink: "",
    imgPth: "../src/assets/projectBG/Alpaca-removebg-preview.png",
    languages: "Swift & Swift UI",
    tools: "XCode, Firebase, APIs, Machine Learning",
    description:
      "A IOS application using Swift. This application uses Machine Learning (Speech Analysis), Gamification, Data Analytics, in order to Improve Non-English Speakers Fluency in English. This project was a group project with two other group members ",
  },
  {
    // i need to download and post as my own project so ppl can see the code
    id: 4,
    projectName: "Movie Database",
    projectRepoLink:
      "https://github.com/ahmadmua/PROG30000---Final-Project/tree/main",
    projectDemoLink: "",
    imgPth: "../src/assets/projectBG/MovieDatabase.png",
    languages: "C#, .NET, HTML/CSS/JS",
    tools: "Visual Studio Code, Postman",
    description: "A Movie database application created with C# & .NET ",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    icon: linkedinFooterIcon,
    link: "https://www.linkedin.com/in/jordan-bhar/?originalSubdomain=ca",
    name: "LinkedIn",
  },
  {
    id: 2,
    icon: mailFooterIcon,
    link: "mailto:jordan.bhar@hotmail.com",
    name: "E-Mail",
  },
  {
    id: 3,
    icon: discordFooterIcon,
    link: "https://discord.gg/KbTqQBJh9K",
    name: "Discord",
  },
  {
    id: 4,
    icon: githubFooterIcon,
    link: "https://github.com/JordanBhar",
    name: "Github",
  },
];
