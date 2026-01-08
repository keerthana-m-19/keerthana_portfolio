import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaPython,
  FaBrain,
  FaProjectDiagram,
  FaChartBar,
} from "react-icons/fa";
import { GiRobotGolem } from "react-icons/gi";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Tools and technologies I’ve worked with through hands-on projects,
                academic coursework, and real-world experimentation.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {/* Artificial Intelligence */}
                <div className="skill-card">
                  <div className="skill-header">
                    <FaBrain className="skill-icon" />
                    <h4>Artificial Intelligence</h4>
                  </div>
                  <ul>
                    <li>CNN fundamentals, YOLO-based object detection</li>
                    <li>NLP basics (text preprocessing, tokenization)</li>
                    <li>CyberAegis – AI-driven real-time threat monitoring system</li>
                  </ul>
                </div>

                {/* Machine Learning */}
                <div className="skill-card">
                  <div className="skill-header">
                    <FaProjectDiagram className="skill-icon" />
                    <h4>Machine Learning</h4>
                  </div>
                  <ul>
                    <li>KNN, Logistic Regression (classification)</li>
                    <li>Model training, evaluation & tuning</li>
                    <li>Scikit-learn, Pandas, NumPy</li>
                  </ul>
                </div>

                {/* Data Analytics */}
                <div className="skill-card">
                  <div className="skill-header">
                    <FaChartBar className="skill-icon" />
                    <h4>Data Analytics</h4>
                  </div>
                  <ul>
                    <li>Exploratory Data Analysis (EDA)</li>
                    <li>Data cleaning, visualization & insights</li>
                    <li>Matplotlib, Seaborn, SQL</li>
                  </ul>
                </div>

                {/* Python */}
                <div className="skill-card">
                  <div className="skill-header">
                    <FaPython className="skill-icon" />
                    <h4>Python Programming</h4>
                  </div>
                  <ul>
                    <li>Python for AI/ML scripting & automation</li>
                    <li>Flask backend APIs for AI projects</li>
                    <li>Project-based problem-solving approach</li>
                  </ul>
                </div>

                {/* Robotics */}
                <div className="skill-card">
                  <div className="skill-header">
                    <GiRobotGolem className="skill-icon" />
                    <h4>Robotics</h4>
                  </div>
                  <ul>
                    <li>Robot Dog project – AI-powered robotics (team-based)</li>
                    <li>Raspberry Pi, servo motors & hardware integration</li>
                    <li>YOLO-based vision for robotic perception</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
        role="presentation"
      />
    </section>
  );
};
