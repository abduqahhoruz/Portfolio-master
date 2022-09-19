import {
  AssignmentOutlined,
  Devices,
  Language,
  WebOutlined,
  YouTube,
} from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from '@mui/icons-material/Telegram';
import React from "react";
import Resume from "../assets/files/Abduqahhor Otajonov.pdf";
import { portfolioImages } from "./portfolioImages";

export default  {
  name: "Abduqahhor Otajonov",
  title: "Mobile Developer",

  // birthday: "27th December 2001",
  email: "abduqahhor.dev@gmail.com",
  address: "Uzbekistan, Tashkent",
  phone: "+998916540595",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Abduqahhor Otajonov",
      icon: <FacebookIcon />,
    },
    LinkedIn: {
    link: "https://linkedin.com/in/abduqahhor",
    text: "Abduqahhor Otajonov",
    icon: <LinkedInIcon />,
  },
    Telegram: {
      link: "https://t.me/droid_developer",
      text: "droid_developer",
      icon: <TelegramIcon />,
    },
    
   
    GitHub: {
      link: "https://github.com/abduqahhoruz",
      text: "abduqahhoruz",
      icon: <GitHubIcon />,
    },
  },

  resume: Resume,

  about:
    "I am a mobile developer, this is my favorite profession. Action and communication are important to me, it inspires me. I appreciate politeness, I always respect others. Development is both a job and a hobby for me, so after work I learn new technologies by working on myself.",

  experiences: [
    {
      institute: "Freelancer - Tashkent, Uzbekistan",
      title: "Android Developer",
      date: "October 2020 - March 2022",
      description:
        "In my freelancing period I served several clients by creating mobile"
    },
    {
      institute: "Recommend LLC - Tashkent, Uzbekistan",
      title: "Android Developer",
      date: "March 2022 - August 2022",
      description:
        "I have been responsible for android part of startup projects"
    },
  ],

  educations: [
    {
      title: "ACADEMIC LYCEUM",
      institute: "Academic lyceum under NamSU - Namangan, Uzbekistan",
      date: "Sep 2014- July 2017",
      description: "I studied here special subjects such as math, physics, english",
    },
    {
      title: "BACHELOR",
      institute: "Tashkent University of Information Technologies Fergana Branch - Fergana, Uzbekistan",
      date: "Sep 2017 - June 2021",
      description:
        "Graduated a Bachelors of Programming Engineering Faculty",
    },
    {
      title: "MASTER DEGREE",
      institute: "Tashkent University of Information Technologies - Tashkent, Uzbekistan",
      date: "Sep 2022 - Present",
      description:
        "Doing here master degree work on modern medical technologies",
    },
  ],

  services: [
    {
      title: "Software Development",
      description:
        "I have built quite a few personal projects with Java and Python",
      icon: <Devices />,
    },
    {
      title: "Web-app Developer",
      description:
        "Several years of personal and professional experience with web technologies.",
      icon: <WebOutlined />,
    },
    {
      title: "Challenge me",
      description:
        "Don't think I have the required knowledge or experience? try me!",
      icon: <AssignmentOutlined />,
    },
  ],

  skills: [
    {
      title: "MOBILE DEVELOPMENT",
      description: [
        "Android",
        "Java",
        "Kotlin",
        "Jetpack Compose"
      ],
    },
    {
      title: "BACK-END",
      description: ["Firebase", "Flask"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "Bitbucket", "SCRUM/Agile"],
    },
  ],

  projects: [
    
    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.smt],
      title: "SMT Divergence",
      caption: "Smart Money Divergence",
      description:
        "Concept taught by ICT that plots divergence between correlated pairs.\n\nIe. EURUSD - XAUUSD - DX\nNJDJPY - AUDJPY - NZD Inde\nXAU - XA\nUSOIL - UKOI\nBTCUSD - ALTPERP",
      links: [],
    },
  ],
};
