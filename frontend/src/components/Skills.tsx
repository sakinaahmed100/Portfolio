import React, { useState } from 'react';
import SkillGauge from './SkillGauge';
import "../styles/Skills.css"

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 75 },
  ];

  return (
    <section className='skillsSection'>
      <div className='mySkills'>
      <h1>  My Skills</h1>
      </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
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
