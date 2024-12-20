import React, { useEffect, useState, useRef } from 'react';
import SkillGauge from './SkillGauge';
import "../styles/Skills.css"
import 'animate.css';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 75 },
  ];

  const [isInView, setIsInView] = useState(false);
  const gaugeDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Element is in view, add animations
        } else {
          setIsInView(false); // Element is out of view, remove animations (optional)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (gaugeDivRef.current) {
      observer.observe(gaugeDivRef.current);
    }

    return () => {
      if (gaugeDivRef.current) {
        observer.unobserve(gaugeDivRef.current);
      }
    };
  }, []);

  return (
    <section className='skillsSection'>
      <div className='mySkills'>
        <h1>My Skills</h1>
      </div>
      <div
        ref={gaugeDivRef}
        className={`gaugeDiv ${isInView ? 'animate__pulse animate__slow animate__animated' : ''}`}
      >
        {skills.map((skill) => (
          <SkillGauge
            key={skill.name}
            skillName={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
