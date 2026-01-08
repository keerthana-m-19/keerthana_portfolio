import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project on GitHub`}
        >
          {imgUrl && (
            <img
              src={imgUrl}
              alt={title ? `${title} project preview` : "Project preview"}
              loading="lazy"
            />
          )}

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
