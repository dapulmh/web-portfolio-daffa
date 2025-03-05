import image_tourism from "../assets/tourism_ml_image.png";
import image_chatpul from "../assets/chatpul_web_ai_image.png";
import image_momee_app from "../assets/momee_app_image.png";
import image_momee_web from "../assets/momee_web_image.png";
import image_fastfood from "../assets/fastfood_ml_image.png";
import image_motor from "../assets/motor_ml_image.png";
import image_portfolio from "../assets/portfolio_web_image.png";
import image_prepaid from "../assets/prepaid_web_image.png";
import image_salary from "../assets/salary_ml_image.png";
import image_sarcasm from "../assets/sarcasm_mlops_image.png";
import image_siasisten from "../assets/siasisten_web_image_1.png";
import image_wallofhope_flutter from "../assets/wallofhope_flutter app_image.png";
import image_wallofhope from "../assets/wallofhope_web_image.png";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  techStack: Array<string>;
  fieldExpertise: string;
  description: string;
  personal: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Siasisten MTI",
    imageUrl: image_siasisten,
    techStack: ["Django Rest", "React Javascript", "CSS"],
    fieldExpertise: "Fullstack Development",
    description:
      "The Siasisten MTI are a management assistance project for the Master's degree program at the Faculty of Computer Science, University of Indonesia. This project is a group project intended for the Software Development course (PPL). Tech Stack: Django Rest Framework, React JS, Bootstrap.",
    personal: false,
  },
  {
    id: 2,
    title: "Chatpul",
    imageUrl: image_chatpul,
    techStack: [
      "MongoDB",
      "Express Javascript",
      "Next Typescript",
      "Tailwind",
      "All Tech Stacks",
    ],
    fieldExpertise: "AI Web Development",
    description:
      "Chatpul is my personal project to develop a web-based chatbot using Ollama. Tech Stack: MERN (MongoDB, Express, React, Next.js).",
    personal: true,
  },
  {
    id: 3,
    title: "Momee App",
    imageUrl: image_momee_app,
    techStack: ["Tensorflow"],
    fieldExpertise: "Machine Learning",
    description:
      "This project is my capstone project for Bangkit, intended for the entrepreneur track. Unfortunately we didn't get the best entrepreneur track project. Here, I am developing machine learning and assisting with the deployment process.",
    personal: false,
  },
  {
    id: 4,
    title: "Momee Web",
    imageUrl: image_momee_web,
    techStack: ["React Typescript Vite", "CSS"],
    fieldExpertise: "Frontend Development",
    description:
      "This project is a website for promoting the Momee application. I worked on this project independently as an additional project to support the promotion of our application in the Bangkit project. Tech Stack: React, TypeScript, Vite.",
    personal: true,
  },
  {
    id: 5,
    title: "Prepaid Web",
    imageUrl: image_prepaid,
    techStack: ["Django Rest", "HTML", "CSS"],
    fieldExpertise: "Fullstack Development",
    description:
      "This project is my internship project at PT Telekomunikasi Seluler (Telkomsel) as a Software Engineer, where I developed a web application to streamline the overusage reconciliation process. I successfully reduced the reconciliation processing time from a manual process of 3 hours to an automated process of 15 minutes, achieving an 85% decrease.",
    personal: true,
  },
  {
    id: 6,
    title: "Web Portfolio",
    imageUrl: image_portfolio,
    techStack: ["React Typescript Vite", "CSS"],
    fieldExpertise: "Frontend Development",
    description:
      "This is my personal project to create website that can show my portfolio and increase my personal branding as a programmer",
    personal: true,
  },
  {
    id: 7,
    title: "MLOps Dutch Sarcasm Detection",
    imageUrl: image_sarcasm,
    techStack: ["Tensorflow"],
    fieldExpertise: "Machine Learning",
    description:
      "This is my personal project to create MLOps chain to detect sarcasm in dutch language. In this machine learning project i use tensorflow pipeline and deploy using tensorflow serving.",
    personal: true,
  },
  {
    id: 8,
    title: "Fast food image classification",
    imageUrl: image_fastfood,
    techStack: ["Tensorflow"],
    fieldExpertise: "Machine Learning",
    description:
      "This is my personal project to develop image classification for fast food image using tensorflow. In this machine learning i use mobilenet transfer learning and adding a new tf layer.",
    personal: true,
  },
  {
    id: 9,
    title: "US Salary Prediction",
    imageUrl: image_salary,
    techStack: ["Scikit-learn", "Pickle"],
    fieldExpertise: "AI Web Development",
    description:
      "This is my personal project to create US salary prediction from kaggle dataset and implement it in streamlit. Tech Stack : Scikit Learn, Streamlit.",
    personal: true,
  },
  {
    id: 10,
    title: "Indonesia Tourism Recommendation System",
    imageUrl: image_tourism,
    techStack: ["Tensorflow"],
    fieldExpertise: "Machine Learning",
    description:
      "This is my personal project to develop recommendation system from content based filtering and collaborative learning using kaggle dataset.",
    personal: true,
  },
  {
    id: 11,
    title: "Motor Capacity Prediction",
    imageUrl: image_motor,
    techStack: ["Scikit-Learn"],
    fieldExpertise: "Machine Learning",
    description:
      "This is my project for my campus course to develop prediction for motor capacity.",
    personal: true,
  },
  {
    id: 12,
    title: "wallofhope web",
    imageUrl: image_wallofhope,
    techStack: ["Django", "HTML", "CSS"],
    fieldExpertise: "Fullstack Development",
    description:
      "This is my project for my campus course to develop a web application about PTS (Pacil Tau Stunting) with django framework",
    personal: false,
  },
  {
    id: 13,
    title: "wallofhope app",
    imageUrl: image_wallofhope_flutter,
    techStack: ["Flutter"],
    fieldExpertise: "Application Development",
    description:
      "This is my project for my campus course to develop a web application about PTS (Pacil Tau Stunting) with flutter",
    personal: false,
  },
  {
    id: 14,
    title: "Library Management With Java Springboot",
    imageUrl: image_wallofhope,
    techStack: ["Java SpringBoot"],
    fieldExpertise: "Fullstack Development",
    description:
      "This is my project for my campus course to develop a web about library management with java springboot",
    personal: false,
  },
];

export default projects;
