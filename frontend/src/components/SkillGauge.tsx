import React, { useEffect, useState, useRef } from 'react';
import ProgressBar from 'progressbar.js';
import 'animate.css';
import '../styles/Skills.css'; // Import the CSS file

type SkillGaugeProps = {
  skillName: string;
  percentage: number; // 0 to 100
};

const SkillGauge: React.FC<SkillGaugeProps> = ({ skillName, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const gaugeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Component is visible
        } else {
          setIsVisible(false); // Component is out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current);
    }

    return () => {
      if (gaugeRef.current) {
        observer.unobserve(gaugeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const bar = new ProgressBar.Circle(`#${skillName}-gauge`, {
        color: '#3b82f6',
        strokeWidth: 4,
        trailWidth: 4,
        trailColor: '#ddd',
        duration: 1400,
        easing: 'easeOut',
        text: {
          autoStyleContainer: false, // Allows us to customize styles
        },
        from: { color: '#3b82f6', width: 4 },
        to: { color: '#3b82f6', width: 4 },
        step: (state, bar) => {
          const value = Math.round(bar.value() * 100); // Get percentage
          bar.setText(value ? `${value}%` : ''); // Update text dynamically
        },
      });

      bar.text.style.fontFamily = 'Arial, Helvetica, sans-serif';
      bar.text.style.fontSize = '1.4rem';
      bar.text.style.fontWeight = 'bold';
      bar.text.style.color = 'rgba(26, 26, 64, 1)';

      bar.animate(percentage / 100); // Animate to the given percentage

      return () => {
        bar.destroy(); // Cleanup the ProgressBar instance
      };
    }
  }, [isVisible, percentage, skillName]);

  return (
    <div
      ref={gaugeRef}
      className={`skill-gauge-container ${isHovered ? 'animate__headShake animate__animated' : ''}`}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
    >
      <div id={`${skillName}-gauge`} className="skill-gauge-circle" />
      <div className="skill-gauge-name">{skillName}</div>
    </div>
  );
};

export default SkillGauge;
