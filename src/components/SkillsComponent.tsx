import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Skill {
  name: string;
  imageUrl: string;
}

interface SkillsCardProps {
  skills1: Skill[];
  skills2: Skill[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills1, skills2 }) => {
  return (
    <Container id="skills">
      <div className="title">
        <h2>Programming Language, Framework, and Tools </h2>
      </div>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={6}>
          <div className="skills-card">
            <ul>
              {skills1.map((skills1, index) => (
                <li key={index} className="skill-item">
                  <img
                    src={skills1.imageUrl}
                    alt={skills1.name}
                    className="skill-image"
                  />
                  {skills1.name}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} xl={6}>
          <div className="skills-card">
            <ul>
              {skills2.map((skills2, index) => (
                <li key={index} className="skill-item">
                  <img
                    src={skills2.imageUrl}
                    alt={skills2.name}
                    className="skill-image"
                  />
                  {skills2.name}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsCard;
