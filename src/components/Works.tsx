import { useState } from 'react';
import Section from './Section';
import Popup from './Popup';

export default function Works() {
  const works = [
    { id: 1, title: 'にほんGO UP APP', image: '/nihon_go_up_app.png' },
    { id: 2, title: 'ネットレンド', image: '/netrend.png' },
    { id: 3, title: 'Life DiaLog', image: '/life_dialog.png' },
    { id: 4, title: 'プロジェクトB', image: '/project_b.png' },
  ];

  const [selectedWork, setSelectedWork] = useState<null | typeof works[0]>(null);

  const handleWorkClick = (work: typeof works[0]) => {
    setSelectedWork(work);
  };

  const handleClosePopup = () => {
    setSelectedWork(null);
  };

  return (
    <Section 
      id="works" 
      title="My Works"
      className="bg-transparent flex justify-center py-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl px-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group flex justify-center items-center cursor-pointer"
            onClick={() => handleWorkClick(work)}
          >
            <img src={work.image} alt={work.title} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition rounded-lg">
              <span className="text-white text-lg text-center px-2">{work.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <Popup
          title={selectedWork.title}
          image={selectedWork.image}
          onClose={handleClosePopup}
        />
      )}
    </Section>
  );
};
