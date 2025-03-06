import React from 'react';

interface SkillLevelProps {
  text: string;
  percentage: number;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ text, percentage }) => {
  return (
    <li className="skill mb-6">
      <div className="skill__skill-name font-medium">{text}</div>
      <div className="skill__skill-level relative h-1.5 bg-gray-200 rounded-lg">
        <div
          className="skill__skill-level-bar absolute w-full origin-left bg-green-500 h-full rounded-lg animation-scale-x"
          style={{ scale: `${percentage / 100} 1` }}
        ></div>
      </div>
    </li>
  );
};

export default SkillLevel;
