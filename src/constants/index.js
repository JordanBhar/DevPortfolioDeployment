import {  linkedin, school, whatsapp, location, discord  } from "../assets";


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
  {
    id: "Contact",
    title: "Contact",
  },
];

export const aboutData = [

  {
    name: "Jordan Bhar",
    job: "Full-Stack Developer",
    about: "Insert Text Here",
    github: "https://github.com/JordanBhar",
//the resume should be a file path to an asset of my resume within this project
    resume: "" 
  }

]

export const tabViewsSkillsEducation = [
    {
      id: 1,
      title: "Front-end",
      skills: ["HTML", "CSS", "BootStrap CSS", "Tailwind CSS" ,"JavaScript" ,"React", "Swift UI", "JSON", "XML"],
    },
    {
      id: 2,
      title: "Back-end",
      skills: [".NET", "SpringBoot"],
    },
    {
      id: 3,
      title: "Database",
      skills: ["Firebase", "SQL", "SQL lite"],
    },
    {
      id: 4,
      title: "Programming",
      skills: ["C & C++", "C#", "Swift" ,"Kotlin", "Java", "Python", "Dart & Flutter"],
    },
    {
      id: 5,
      title: "Testing",
      skills: ["xUnit",],
    },
    {
      id: 6,
      title: "Tools",
      skills: ["Xcode", "Visual Studio Code", "IntelliJ" ,"CLion", "GIT", "Github", "Figma", "Postman"],
    },
    
    
] 

export const contactData = [
  {
    id: 1,
    data: "Toronto, Ontario" ,
    icon: location,
  },
  {
    id: 1,
    data: "Sheridan College" ,
    icon: school,
  },
  {
    id: 1,
    data: "SampleUsername" ,
    icon: discord,
  },
  {
    id: 1,
    data: "Jordan Bhar" ,
    icon: whatsapp,
  },
  
]

export const projectData = [
  {
    id: 1,
    projectName: "Gympact",
    projectRepoLink: "https://github.com/JordanBhar/Gympact-FinalProject.git",
    projectDemoLink: "",
    imgPth: "",
    languages: "Swift & Swift UI",
    tools: "XCode, Firebase, APIs",
    description: "Used Swift UI & Xcode  to create a fitness application, in which I implemented an Exercise Tutorial section & cardio section. Other features of the app include a pedometer, Realtime user database, fitness calendar which were implemented by my other group partners  "
  },
  {
    // i need to download and post as my own project so ppl can see the code
    id: 2,
    projectName: "Movie Database",
    projectRepoLink: "https://github.com/ahmadmua/PROG30000---Final-Project/tree/main", 
    projectDemoLink: "",
    imgPth: "",
    languages: "C#, .NET, HTML/CSS/JS",
    tools: "Visual Studio Code, Postman",
    description: "A Movie database application created with C# & .NET "
  },
  {
    // i need to download and post as my own project so ppl can see the code
    id: 3,
    projectName: "Shop Till You Drop",
    projectRepoLink: "https://github.com/TristarMMII/STYD",
    projectDemoLink: "",
    imgPth: "",
    languages: "Swift & Swift UI",
    tools: "XCode, Firebase, APIs",
    description: "A IOS application using Swift. This application uses Machine Learning (Image to text) & Google Shopping API. The user can look up any product either manually or by taking a photo of an item, and then uses shopping api to query  for intended product. This project was a group project with two other group members "
    
  },
  {
    id: 4,
    projectName: "CatDog Application",
    projectRepoLink: "https://github.com/JordanBhar/CatDogApplication",
    projectDemoLink: "",
    imgPth: "",
    languages: "Java, HTML/CSS/JS , SpringBoot, thymeleaf",
    tools: "InteliJ",
    description: "MVC web application for PROG20261, Using Spring boot / Java. A user database was implemented. Each user had a role of cat or dog and with these roles gave users access to different pages of a website"
  },
]


export const socialMedia = [
  {
    id: "social-media-1",
    icon: linkedin,
    link: "https://www.linkedin.com/in/jordan-bhar/?originalSubdomain=ca",
  },

];



