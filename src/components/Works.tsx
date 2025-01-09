import Section from './Section';

export default function Works() {
  const works = [
    { id: 1, title: 'にほんGO UP APP', image: '/nihon_go_up_app.png', link: 'https://example.com/nihon_go_up_app' },
    { id: 2, title: 'ネットレンド', image: '/netrend.png', link: 'https://netrend.vercel.app/' },
    { id: 3, title: 'Life DiaLog', image: '/life_dialog.png', link: 'https://life-dialog.vercel.app/' },
    { id: 4, title: 'プロジェクトB', image: '/project_b.png', link: 'https://example.com/project_b' },
  ];

  return (
    <Section 
      id="works" 
      title="My Works"
      className="bg-transparent flex justify-center py-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl px-4">
        {works.map((work) => (
          <a key={work.id} href={work.link} target="_blank" rel="noopener noreferrer" className="relative group flex justify-center items-center">
            <img src={work.image} alt={work.title} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition rounded-lg">
              <span className="text-white text-lg text-center px-2">{work.title}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
