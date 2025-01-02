import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C', icon: '💻' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GCP', icon: '☁️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🟦' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
