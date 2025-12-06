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
      description: "Logistic Regression",
      imgUrl: projImg1,
      link: "https://github.com/keerthana-m-19/logistic_regression",
    },
    {
      title: "Artificial Intelligence",
      description: "AI Emotion Recognition",
      imgUrl: projImg2,
      link: "https://github.com/keerthana-m-19/logistic_regression",
    },
    {
      title: "Data Analytics",
      description: "Data Visualization",
      imgUrl: projImg3,
      link: "https://github.com/keerthana-m-19/logistic_regression",
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
                    Showcasing my journey of creativity and innovation.
                    <br />
                    From interactive web applications to intelligent AI
                    solutions, these projects highlight my skills,
                    passion, and problem-solving expertise.
                  </p>

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>
                          This project demonstrates my ability to
                          solve complex problems and build efficient
                          solution. From planning to execution, I
                          ensure every detail reflects quality,
                          innovation, and functionality.
                        </p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          This project highlights my expertise in
                          creating innovative solutions and seamless
                          user experiences. Every feature is crafted
                          to combine functionality, efficiency, and
                          aesthetic appeal.
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

      {/* ✔ Added alt tag for accessibility */}
      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
      />
    </section>
  );
};
