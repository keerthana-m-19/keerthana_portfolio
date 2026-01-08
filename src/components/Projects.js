import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Machine Learning",
      description: "Logistic Regression – Classification Model",
      imgUrl: projImg1,
      link: "https://github.com/keerthana-m-19/logistic_regression",
    },
    {
      title: "Artificial Intelligence",
      description: "Emotion Recognition using AI",
      imgUrl: projImg2,
      link: "https://github.com/keerthana-m-19/AI-Emotion-recognition",
    },
    {
      title: "Data Analytics",
      description: "Netflix Data Analysis & Insights",
      imgUrl: projImg3,
      link: "https://github.com/keerthana-m-19/netflix-analysis",
    },
    {
      title: "Machine Learning",
      description: "KNN-based Salary Estimation",
      imgUrl: projImg1,
      link: "https://github.com/keerthana-m-19/KNN-Salary-Estimation",
    },
    {
      title: "Computer Vision",
      description: "Real-time Object Detection using YOLOv8",
      imgUrl: projImg2,
      link: "https://github.com/keerthana-m-19/realtime-yolov8",
    },
    {
      title: "Data Analytics",
      description: "Sales Data Analytics Dashboard",
      imgUrl: projImg3,
      link: "https://github.com/keerthana-m-19/Sales-Data-Analytics-Dashboard",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A collection of hands-on projects demonstrating my journey
                    as an aspiring AI Engineer. These works reflect my ability
                    to apply Artificial Intelligence, Machine Learning, and Data
                    Analytics concepts to solve real-world problems.
                  </p>

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="ai"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="ai">AI & ML</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="da">Data Analytics</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="about">Overview</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* AI & ML Projects */}
                      <Tab.Pane eventKey="ai">
                        <Row>
                          {projects
                            .filter(
                              (p) =>
                                p.title === "Artificial Intelligence" ||
                                p.title === "Machine Learning" ||
                                p.title === "Computer Vision"
                            )
                            .map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))}
                        </Row>
                      </Tab.Pane>

                      {/* Data Analytics Projects */}
                      <Tab.Pane eventKey="da">
                        <Row>
                          {projects
                            .filter(
                              (p) => p.title === "Data Analytics"
                            )
                            .map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))}
                        </Row>
                      </Tab.Pane>

                      {/* Overview */}
                      <Tab.Pane eventKey="about">
                        <p>
                          These projects represent my continuous learning and
                          experimentation in AI and data-driven technologies.
                          I focus on building solutions that are practical,
                          scalable, and aligned with real-world use cases,
                          strengthening my foundation as an AI Engineer.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
        role="presentation"
      />
    </section>
  );
};
