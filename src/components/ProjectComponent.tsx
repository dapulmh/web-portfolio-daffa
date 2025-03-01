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
}

// Sample data for projects
const projects: Project[] = [
  {
    id: 1,
    title: "Siasisten MTI",
    imageUrl: image_siasisten,
    techStack: "React",
    fieldExpertise: "Web Development",
  },
  {
    id: 2,
    title: "Chatpul",
    imageUrl: image_chatpul,
    techStack: "Node.js",
    fieldExpertise: "Backend Development",
  },
  {
    id: 3,
    title: "Momee App",
    imageUrl: image_momee_app,
    techStack: "Angular",
    fieldExpertise: "Web Development",
  },
  {
    id: 4,
    title: "Momee Web",
    imageUrl: image_momee_web,
    techStack: "Python",
    fieldExpertise: "Data Science",
  },
  {
    id: 5,
    title: "Prepaid Web",
    imageUrl: image_prepaid,
    techStack: "Vue.js",
    fieldExpertise: "Web Development",
  },
  {
    id: 6,
    title: "Web Portfolio",
    imageUrl: image_portfolio,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 7,
    title: "MLOps Dutch Sarcasm Detection",
    imageUrl: image_sarcasm,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 8,
    title: "Fast food image classification",
    imageUrl: image_fastfood,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 9,
    title: "US Salary Prediction",
    imageUrl: image_salary,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 10,
    title: "Tourism Rec",
    imageUrl: image_tourism,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 11,
    title: "Motor Capacity Prediction",
    imageUrl: image_motor,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 12,
    title: "wallofhope web",
    imageUrl: image_wallofhope,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 13,
    title: "wallofhope app",
    imageUrl: image_wallofhope_flutter,
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
  {
    id: 14,
    title: "Project 6",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Java",
    fieldExpertise: "Backend Development",
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
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
      id="project"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <select
          value={techStackFilter}
          onChange={(e) => setTechStackFilter(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
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
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">All Field Expertises</option>
          {fieldExpertises.map((expertise) => (
            <option key={expertise} value={expertise}>
              {expertise}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              width: "30%",
              marginBottom: "20px",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "10px", color: "#333" }}>
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
