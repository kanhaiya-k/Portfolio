import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/h&m.png";
import beardo from "../../Assets/Projects/beardo.png";
import chatify from "../../Assets/Projects/nordstrom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nordstromrack"
              description="Nordstrom Rack is an American off-price department store chain founded in 1973, and a subsidiary of the luxury department store chain Nordstrom. Nordstrom Rack offers branded clothing and accessories for women, men, and kids at a large discount to consumers across the United States and Canada."
              live="https://github.com/kanhaiya-k/nordstromrack-clone"
              link="https://nordstromrack-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="H&M"
              description="H&M is a family of brands, driven by our desire to make great design available to everyone in a sustainable way. Together we offer fashion, design and services, that enable people to be inspired and to express their own personal style, making it easier to live in a more circular way."
              live="https://github.com/Smrutiranjan-Patra/HMClothing"
              link="https://hmclothing-n5ej6cq09-vipchoudhary13.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beardo}
              isBlog={false}
              title="Beardo.in"
              description="Beardo is a Ahmedabad-based men's grooming brand and start-up that sells beard oils, beard waxes, soaps and other grooming products. It is owned by Zed Lifestyle Pvt. Ltd. Beardo was founded in 2015 by Ashutosh Valani and Priyank Shah."
              live="https://github.com/kanhaiya-k/beardo_clone"
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
