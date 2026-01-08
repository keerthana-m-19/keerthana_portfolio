import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const toRotate = useMemo(() => [
  "with ML Expertise",
  "| Data Analytics",
  "| Robotics"
], []);
  const period = 2000;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Stable tick function
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    setText((prev) =>
      isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
    );

    if (!isDeleting && text === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(isDeleting ? 100 : 150);
    }
  }, [loopNum, isDeleting, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
               Hi! I'm Keerthana — Aspiring AI Engineer <span className="wrap">{text}</span>
            </h1>
            <p>
              Aspiring AI Engineer with a strong foundation in Machine Learning and
              Data Analytics. Currently pursuing B.Tech in AI & DS, with hands-on
              experience in AI-driven projects and robotics systems. Passionate about
              building intelligent, real-world solutions.
            </p>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
