import React from "react";

// Define the interface for the project details props
interface ProjectDetailProps {
  title: string;
  description: string;
  githubUrl: string;
}

// Functional component to display project details
const ProjectDetailPage: React.FC<ProjectDetailProps> = ({
  title,
  description,
  githubUrl,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333" }}>{title}</h1>
      <p style={{ color: "#666", lineHeight: "1.6" }}>{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007BFF", textDecoration: "none" }}
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetailPage;
