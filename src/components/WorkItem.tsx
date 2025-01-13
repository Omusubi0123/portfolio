import { Work } from './types';

interface WorkItemProps {
  work: Work;
  onClick: () => void;
}

export default function WorkItem({ work, onClick }: WorkItemProps) {
  return (
    <div
      className="relative group flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <img src={work.media} alt={work.title} className="w-full h-auto rounded-lg shadow-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition rounded-lg">
        <span className="text-white text-2xl text-center px-2">{work.title}</span>
      </div>
    </div>
  );
}
