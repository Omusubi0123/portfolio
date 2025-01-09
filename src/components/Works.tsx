import { useState } from 'react';
import Section from './Section';
import Popup from './Popup';
import WorkItem from './WorkItem';
import { works } from './worksData';
import { Work } from './types';

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleWorkClick = (work: Work) => {
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
          <WorkItem key={work.id} work={work} onClick={() => handleWorkClick(work)} />
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
