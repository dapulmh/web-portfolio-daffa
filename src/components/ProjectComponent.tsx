import React, { useState } from "react";

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
    title: "Project 1",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "React",
    fieldExpertise: "Web Development",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Node.js",
    fieldExpertise: "Backend Development",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Angular",
    fieldExpertise: "Web Development",
  },
  {
    id: 4,
    title: "Project 4",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Python",
    fieldExpertise: "Data Science",
  },
  {
    id: 5,
    title: "Project 5",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Vue.js",
    fieldExpertise: "Web Development",
  },
  {
    id: 6,
    title: "Project 6",
    imageUrl: "https://via.placeholder.com/150",
    techStack: "Java",
    fieldExpertise: "Backend Development",
  },
];

// Functional component to display the project list
const ProjectListPage: React.FC = () => {
  const [techStackFilter, setTechStackFilter] = useState<string>("");
  const [fieldExpertiseFilter, setFieldExpertiseFilter] = useState<string>("");

  // Unique tech stacks and field expertises for dropdown options
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
