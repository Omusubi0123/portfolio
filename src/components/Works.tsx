import { useState } from 'react';
import Section from './Section';
import Popup from './Popup';

export default function Works() {
  const works = [
    {
      id: 1,
      title: 'にほんGO UP APP',
      description: 'このアプリは日本語学習者を対象とした効率的な学習アプリです。',
      media: '/nihon_go_up_app.png',
      isVideo: false,
    },
    {
      id: 2,
      title: 'ネットレンド',
      description: 'ネット上のトレンド情報を簡単に確認できるウェブアプリ。',
      media: '/netrend.png',
      isVideo: false,
    },
    {
      id: 3,
      title: 'Life DiaLog',
      description: 'ライフログを記録し、振り返りができるアプリです。',
      media: '/life_dialog.png',
      isVideo: false,
    },
    {
      id: 4,
      title: 'プロジェクトB',
      description: '革新的なプロジェクト管理ツール。',
      media: '/project_b_demo.mp4',
      isVideo: true,
    },
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
            <img src={work.media} alt={work.title} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition rounded-lg">
              <span className="text-white text-lg text-center px-2">{work.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <Popup
          title={selectedWork.title}
          description={selectedWork.description}
          media={selectedWork.media}
          isVideo={selectedWork.isVideo}
          onClose={handleClosePopup}
        />
      )}
    </Section>
  );
}
