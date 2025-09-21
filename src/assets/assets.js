// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaYoutube,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiLua, SiVercel } from "react-icons/si";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "LanzzRorr", // Social media name
    component: FaSquareXTwitter, // Twitter icon from react-icons
    link: "https://x.com/LanzzRorr", // Replace with your actual Twitter URL
  },
  {
    name: "lanzszzzz",
    component: FaInstagramSquare, // Instagram icon
    link: "https://instagram.com/lanzszzzz",
  },
  {
    name: "SiuuEditZ",
    component: IoLogoGithub, // GitHub icon
    link: "https://github.com/SiuuEditZ",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "SiuuEditZ"; // Replace with your name or brand name
const imgLogo = null; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "https://files.cloudkuimages.guru/images/33b54e2ab5dc.jpg", // Your profile image link
  authorDescription: 
  "You could say I'm a Frontend Developer 😎. Hey, I'm Christophorus Alan Angelo, the guy behind SiuuEditZ 🗿. Honestly, I wasn't into coding at first, but FOMO got me to join my school coding club and now I've ended up building quite a few projects. Not a hardcore dev or anything, but I love messing with tech, gaming, and editing stuff. Chill vibes, but I can get serious when needed.",
 getInTouchUrl: "Your contact url", // URL for your contact or form page
  authorName: "SiuuEditZ", // Replace with your name
  profileImgTagLine: "Frontend Developer", // Your tagline or job title
  authorContactMail: "siuueditz1@gmail.com", // Your email address
  authorContactNumber: "", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  {
    img: "https://files.cloudkuimages.guru/images/b1c183325735.jpg", // Certificate image URL
    title: "Python Basic Certificate", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "HackerRank", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "https://www.hackerrank.com/certificates/94e298a976db", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "https://files.cloudkuimages.guru/images/54dada0016e1.jpg", // Certificate image URL
    title: "Frontend Developer (React) Certificate", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "HackerRank", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "https://www.hackerrank.com/certificates/f1a9da380367", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "https://files.cloudkuimages.guru/images/0f3e7ab376dd.jpg", // Certificate image URL
    title: "JavaScript (Intermediate) Certificate", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "HackerRank", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "https://www.hackerrank.com/certificates/e6604d22f292", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "https://files.cloudkuimages.guru/images/977b05107092.jpg", // Certificate image URL
    title: "React (Basic) Certificate", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "HackerRank", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "https://www.hackerrank.com/certificates/d6a489649a33", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  SiLua,
  SiVercel
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
const projectsPage = [
  {
    projectName: "KonzAPI", // Project name
    projectDescription: "Rest API", // Project description
    projectURL: "https://www.konzapi.my.id/", // Optional: Project demo link (if hosted)
    tags: "HTML, Nodejs, Rest API", // Tech stack used in the project
  },
  {
    projectName: "SzDownloader", // Project name
    projectDescription: "Downloader From Media Sosial", // Project description
    projectURL: "https://szdownloader.vercel.app/", // Optional: Project demo link (if hosted)
    tags: "React.js, Nodejs, Rest API", // Tech stack used in the project
  },
   {
    projectName: "gtw wok gabut", // Project name
    projectDescription: "gtw jg gabut gw", // Project description
    projectURL: "https://ckptw-phi.vercel.app/", // Optional: Project demo link (if hosted)
    tags: "React,js, JavaScript", // Tech stack used in the project
  },
  {
    projectName: "SzCode", // Project name
    projectDescription: "Snippet Code Platform", // Project description
    projectURL: "https://www.szcode.my.id/", // Optional: Project demo link (if hosted)
    tags: "React,js, JavaScript, Firebase", // Tech stack used in the project
  },
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
