import React from "react";
import "../styles//Card.css"; // Import the CSS file for styling

type CardProps = {
  image: string;
  title: string;
  techStack: string[];
  description: string;
  liveLink?: string;
  repoLink?: string;
};

const Card: React.FC<CardProps> = ({ image, title, techStack, description, liveLink, repoLink }) => {
  return (
    <div className="card">
      <div className="card-inner">
        {/* Front of the Card */}
        <div className="card-front">
          <img src={image} alt={title} className="card-image" />
          <h3 className="card-title">{title}</h3>
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back of the Card */}
        <div className="card-back">
          <p className="description">{description}</p>
          <div className="links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                Live Demo
              </a>
            )}
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn">
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
