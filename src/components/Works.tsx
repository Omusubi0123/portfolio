import Section from './Section';

export default function Works() {
  const works = [
    { id: 1, title: 'にほんGO UP APP', image: '/nihon_go_up_app.png', link: 'https://example.com/nihon_go_up_app' },
    { id: 2, title: 'ネットレンド', image: '/netrend.png', link: 'https://netrend.vercel.app/' },
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
          <a key={work.id} href={work.link} target="_blank" rel="noopener noreferrer" className="relative group flex justify-center items-center">
            <img src={work.image} alt={work.title} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg">{work.title}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
