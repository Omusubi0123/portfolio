import Section from './Section';

const Works: React.FC = () => {
  const works = [
    { id: 1, title: 'アプリA', image: '/images/work1.png' },
    { id: 2, title: 'アプリB', image: '/images/work2.png' },
  ];

  return (
    <Section 
      id="works" 
      title="My Works"
      width="100%" 
      height="auto"
    >
      <div className="grid grid-cols-2 gap-4">
        {works.map((work) => (
          <div key={work.id} className="relative group">
            <img src={work.image} alt={work.title} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg">{work.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Works;
