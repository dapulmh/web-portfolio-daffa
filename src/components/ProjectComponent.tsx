import React from "react";

interface CardProps {
  title: string;
  description: string;
  repoUrl: string;
}

interface ProjectCardProps {
  projects1: CardProps[];
  projects2: CardProps[];
}

const Card: React.FC<ProjectCardProps> = ({ projects1, projects2 }) => {
  return (
    <div>
      <ul>
        {projects1.map((projects1, index) => (
          <li key={index} className="skill-item">
            <img
              src={projects1.repoUrl}
              alt={projects1.title}
              className="skill-image"
            />
            {projects1.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
