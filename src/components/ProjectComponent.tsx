import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";

// Define the interface for a project

const ProjectListPage: React.FC = () => {
  const [techStackFilter, setTechStackFilter] = useState<Array<string>>([
    "All Tech Stacks",
  ]);
  const [fieldExpertiseFilter, setFieldExpertiseFilter] = useState<string>("");

  const techStacks = Array.from(
    new Set(projects.flatMap((project) => project.techStack))
  );
  const fieldExpertises = Array.from(
    new Set(projects.map((project) => project.fieldExpertise))
  );

  // Filtered projects based on dropdown selections
  const filteredProjects = projects.filter((project) => {
    const techStackMatches =
      techStackFilter.includes("All Tech Stacks") ||
      techStackFilter.every((stack) => project.techStack.includes(stack));
    const fieldExpertiseMatches =
      fieldExpertiseFilter === "" ||
      project.fieldExpertise === fieldExpertiseFilter;
    return techStackMatches && fieldExpertiseMatches;
  });

  const handleCardClick = (id: number) => {};

  return (
    <div className="project-list-container" id="project">
      <div className="title">
        <h2>My Projects </h2>
      </div>
      <div className="filter-container">
        <select
          value={techStackFilter}
          onChange={(e) => {
            const selectedValues = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            if (selectedValues.includes("All Tech Stacks")) {
              setTechStackFilter(["All Tech Stacks"]);
            } else {
              setTechStackFilter(selectedValues);
            }
          }}
        >
          <option value="All Tech Stacks">All Tech Stacks</option>
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
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
