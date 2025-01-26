import React, { useEffect, useState, useRef } from 'react';
import "../styles/Skills.css";
import 'animate.css';
import bg_video from "../assets/background_vid_skills.mp4";

const Skills: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: "skills1",
      title: "Frontend",
      colorClass: "skills",
      items: [
        "HTML",
        "CSS3",
        "REACT",
        "JavaScript (ES6+)",
        "TYPESCRIPT",
        ["Responsive Design", "Redux/Context API", "SQLite"]
      ],
    },
    {
      id: "skills2",
      title: "Backend",
      colorClass: "skills2",
      items: [
        "Python (FastAPI)",
        "MongoDB",
        "SQLite",
        "Node.js (Basic)",
        "Axios" ,
        ["RESTful APIs"]
      ],
    },
    {
      id: "skills3",
      title: "Tools",
      colorClass: "skills3",
      items: [
        "VS Code",
        "Git/GitHub",
        "Postman",
        "JUPYTER/COLAB NOTEBOOK",
        "Netlify",
        ["Vercel"]
      ],
    },
  ];

  return (
    <section className="skillsSection">
      <video className="backgroundVideo" autoPlay loop muted playsInline>
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mySkills">
        <h1>My Skills</h1>
      </div>
      <div
        ref={skillsSectionRef}
        className={`content_skills ${isInView ? 'animate__pulse animate__slow animate__animated' : ''}`}
      >
        <div className="profile-skills">
          {skillCategories.map(({ id,  colorClass, items }) => (
            <div key={id}>
              <input type="checkbox" id={id} />
              <label htmlFor={id}></label>
              <ul className={`skills ${colorClass}`}>
                {items.map((item, index) =>
                  Array.isArray(item) ? (
                    <li key={index} className="more">
                      <input type="checkbox" id={`${id}-more`} />
                      <label htmlFor={`${id}-more`}></label>
                      <div>{item.map((subItem) => <span key={subItem}>{subItem}</span>)}</div>
                    </li>
                  ) : (
                    <li key={index}><span>{item}</span></li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


