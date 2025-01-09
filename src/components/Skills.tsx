import Section from './Section';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C', icon: '💻' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GCP', icon: '☁️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🟦' },
  ];

  return (
    <Section 
      id="skills" 
      title="Skills" 
      className="bg-transparent flex justify-center py-8"
    >
      <div className="w-full max-w-4xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 p-3 sm:p-4 bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl">{skill.icon}</div>
              <span className="text-sm sm:text-base md:text-lg font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
