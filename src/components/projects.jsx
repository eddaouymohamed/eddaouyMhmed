import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github-svgrepo-com (2).svg';
import '../styles/projects.css';

function Projects() {
  const projects = [
    {
      title: "E‑Commerce Platform",
      description: "Full‑stack MERN development with Stripe integration",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio Website",
      description: "Responsive React + Bootstrap design",
      imgUrl: projImg2,
    },
    {
      title: "Landing Page",
      description: "Modern UI/UX with Material UI",
      imgUrl: projImg3,
    },
    {
      title: "Admin Dashboard",
      description: "Multilingual product catalog management",
      imgUrl: projImg1,
    },
    {
      title: "Brand Identity Site",
      description: "Clean design & scalable architecture",
      imgUrl: projImg2,
    },
    {
      title: "API Development",
      description: "Secure JWT authentication & REST APIs",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  I have worked on diverse projects ranging from responsive e‑commerce platforms
                  to engaging landing pages. My portfolio also showcases this very portfolio site,
                  built to highlight my skills and design approach. Each project reflects my focus
                  on clean code, modern UI frameworks, and delivering user‑friendly digital experiences.
                </p>

                <Tab.Container className="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tech Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Connect</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content
                    id="slideInUp"
                    className={isVisible ? "animate__animated animate__slideInUp" : ""}
                  >
                    {/* Tab 1: Projects */}
                    <Tab.Pane eventKey="first">
                      <Row style={{ marginInline: '6px' }}>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Tab 2: Tech Stack */}
                    <Tab.Pane eventKey="second">
                      <h3>My Tech Stack</h3>
                      <ul>
                        <li>React, React‑Bootstrap, Material UI</li>
                        <li>Node.js, Express, MongoDB</li>
                        <li>JWT Authentication & Secure APIs</li>
                        <li>Stripe Payment Integration</li>
                        <li>Responsive Design with Figma → Code</li>
                      </ul>
                    </Tab.Pane>

                    {/* Tab 3: Connect */}
                    <Tab.Pane eventKey="third">
                      <h3>Let’s Connect</h3>
                      <p>
                        Explore more of my work and connect with me on GitHub and YouTube:
                      </p>
                      <div className="social-icons">
                        <a href="https://github.com/eddaouymohamed/" target="_blank" rel="noreferrer">
                          <img src={navIcon3} alt="GitHub" />
                        </a>
                        <a href="https://youtube.com/@MohamedEd-daouy-ep1qc" target="_blank" rel="noreferrer">
                          <img src={navIcon2} alt="YouTube" />
                        </a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </section>
  );
}

export default Projects;
