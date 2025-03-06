import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../data/projects";
import { skills1, skills2 } from "../data/skills";

const ProjectDetail: React.FC<{ project: any }> = ({ project }) => {
  const combinedSkills = [...skills1, ...skills2];

  // Function to get the image URL for a given technology name
  const getTechImage = (techName: string) => {
    const skill = combinedSkills.find(
      (skill) => skill.name.toLowerCase() === techName.toLowerCase()
    );
    return skill ? skill.imageUrl : null;
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <div className="container-detail">
            <span className="tagline">{project.title}</span>

            <p>{project.description}</p>
            {project.githubUrl === "Private" ? (
              <p>This project is {project.githubUrl}</p>
            ) : (
              <div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Project
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Repo
                </a>
              </div>
            )}
            <h3>Tech Stack</h3>
            <div
              className="tech-stack-container"
              style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}
            >
              {project.techStack.map((tech: string, index: number) => {
                const imageUrl = getTechImage(tech);
                return (
                  <div
                    className="tech-stack"
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={tech}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                      />
                    ) : (
                      <span style={{ marginRight: "5px" }}>?</span>
                    )}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <div className="container-detail-img">
            <img src={project.imageUrl} alt={project.title} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL

  const project = projects.find((project) => project.id === parseInt(id!)); // Find the project by ID

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
