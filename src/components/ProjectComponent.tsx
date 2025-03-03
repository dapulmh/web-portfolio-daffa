import React, { useState } from "react";
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

// Define the interface for a project
interface Project {
  id: number;
  title: string;
  imageUrl: string;
  techStack: string;
  fieldExpertise: string;
  description: string;
  personal: boolean;
}

// Sample data for projects
const projects: Project[] = [
  {
    id: 1,
    title: "Siasisten MTI",
    imageUrl: image_siasisten,
    techStack: "React",
    fieldExpertise: "Web Development",
    description:
      "The Siasisten MTI are a management assistance project for the Master's degree program at the Faculty of Computer Science, University of Indonesia. This project is a group project intended for the Software Development course (PPL). Tech Stack: Django Rest Framework, React JS, Bootstrap.",
    personal: false,
  },
  {
    id: 2,
    title: "Chatpul",
    imageUrl: image_chatpul,
    techStack: "Node.js",
    fieldExpertise: "Backend Development",
    description:
      "Chatpul is my personal project to develop a web-based chatbot using Ollama. Tech Stack: MERN (MongoDB, Express, React, Next.js).",
    personal: true,
  },
  {
    id: 3,
    title: "Momee App",
    imageUrl: image_momee_app,
    techStack: "Angular",
    fieldExpertise: "Web Development",
    description:
      "This project is my capstone project for Bangkit, intended for the entrepreneur track. Unfortunately we didn't get the best entrepreneur track project. Here, I am developing machine learning and assisting with the deployment process.",
    personal: false,
  },
  {
    id: 4,
    title: "Momee Web",
    imageUrl: image_momee_web,
    techStack: "Python",
    fieldExpertise: "Data Science",
    description:
      "This project is a website for promoting the Momee application. I worked on this project independently as an additional project to support the promotion of our application in the Bangkit project. Tech Stack: React, TypeScript, Vite.",
    personal: true,
  },
  {
    id: 5,
    title: "Prepaid Web",
    imageUrl: image_prepaid,
    techStack: "Vue.js",
    fieldExpertise: "Web Development",
    description:
      "This project is my internship project at PT Telekomunikasi Seluler (Telkomsel) as a Software Engineer, where I developed a web application to streamline the overusage reconciliation process. I successfully reduced the reconciliation processing time from a manual process of 3 hours to an automated process of 15 minutes, achieving an 85% decrease.",
    personal: true,
  },
  {
    id: 6,
    title: "Web Portfolio",
    imageUrl: image_portfolio,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description:
      "This is my personal project to create website that can show my portfolio and increase my personal branding as a programmer",
    personal: true,
  },
  {
    id: 7,
    title: "MLOps Dutch Sarcasm Detection",
    imageUrl: image_sarcasm,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description:
      "This is my personal project to create MLOps chain to detect sarcasm in dutch language. In this machine learning project i use tensorflow pipeline and deploy using tensorflow serving.",
    personal: true,
  },
  {
    id: 8,
    title: "Fast food image classification",
    imageUrl: image_fastfood,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description:
      "This is my personal project to develop image classification for fast food image using tensorflow. In this machine learning i use mobilenet transfer learning and adding a new tf layer.",
    personal: true,
  },
  {
    id: 9,
    title: "US Salary Prediction",
    imageUrl: image_salary,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description:
      "This is my personal project to create US salary prediction from kaggle dataset and implement it in streamlit. Tech Stack : Scikit Learn, Streamlit.",
    personal: true,
  },
  {
    id: 10,
    title: "Indonesia Tourism Recommendation System",
    imageUrl: image_tourism,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description:
      "This is my personal project to develop recommendation system from content based filtering and collaborative learning using kaggle dataset.",
    personal: true,
  },
  {
    id: 11,
    title: "Motor Capacity Prediction",
    imageUrl: image_motor,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description:
      "This is my project for my campus course to develop prediction for motor capacity.",
    personal: true,
  },
  {
    id: 12,
    title: "wallofhope web",
    imageUrl: image_wallofhope,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description: "string",
    personal: false,
  },
  {
    id: 13,
    title: "wallofhope app",
    imageUrl: image_wallofhope_flutter,
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description: "string",
    personal: false,
  },
  {
    id: 14,
    title: "Project 6",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Java",
    fieldExpertise: "Backend Development",
    description: "string",
    personal: true,
  },
];

const ProjectListPage: React.FC = () => {
  const [techStackFilter, setTechStackFilter] = useState<string>("");
  const [fieldExpertiseFilter, setFieldExpertiseFilter] = useState<string>("");

  const techStacks = Array.from(
    new Set(projects.map((project) => project.techStack))
  );
  const fieldExpertises = Array.from(
    new Set(projects.map((project) => project.fieldExpertise))
  );

  // Filtered projects based on dropdown selections
  const filteredProjects = projects.filter(
    (project) =>
      (techStackFilter === "" || project.techStack === techStackFilter) &&
      (fieldExpertiseFilter === "" ||
        project.fieldExpertise === fieldExpertiseFilter)
  );

  return (
    <div className="project-list-container" id="project">
      <div className="filter-container">
        <select
          value={techStackFilter}
          onChange={(e) => setTechStackFilter(e.target.value)}
        >
          <option value="">All Tech Stacks</option>
          {techStacks.map((stack) => (
            <option key={stack} value={stack}>
              {stack}
            </option>
          ))}
        </select>
        <select
          value={fieldExpertiseFilter}
          onChange={(e) => setFieldExpertiseFilter(e.target.value)}
        >
          <option value="">All Field Expertises</option>
          {fieldExpertises.map((expertise) => (
            <option key={expertise} value={expertise}>
              {expertise}
            </option>
          ))}
        </select>
      </div>
      <div className="project-cards-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
