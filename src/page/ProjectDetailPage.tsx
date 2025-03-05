import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL

  const project = projects.find((project) => project.id === parseInt(id!)); // Find the project by ID

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <p>Tech Stack: {project.techStack.join(", ")}</p>
      <p>Field Expertise: {project.fieldExpertise}</p>
    </div>
  );
};

export default ProjectDetailPage;
