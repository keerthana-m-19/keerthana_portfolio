import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Mastering the art of coding, design, and AI development.
                <br />
                From creating sleek interfaces to building intelligent systems,
                these are the tools and technologies I excel at.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="AI skill level" />
                  <h5>Artificial Intelligence</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="ML skill level" />
                  <h5>Machine Learning</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Data analytics skill level" />
                  <h5>Data Analytics</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="Python skill level" />
                  <h5>Python Programming</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Deep learning skill level" />
                  <h5>Deep Learning</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Computer vision skill level" />
                  <h5>Computer Vision</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Robotics skill level" />
                  <h5>Robotics</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background image */}
      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
        role="presentation"
      />
    </section>
  );
};
