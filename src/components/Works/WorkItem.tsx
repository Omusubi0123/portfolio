import { Work } from './types';

interface WorkItemProps {
  work: Work;
  onClick: () => void;
}

export default function WorkItem({ work, onClick }: WorkItemProps) {
  return (
    <div
      className="relative group flex justify-center items-center cursor-pointer w-100 aspect-[16/9] bg-black"
      onClick={onClick}
    >
      <img
        src={work.media}
        alt={work.title}
        className="w-full h-full object-contain rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition rounded-lg">
        <span className="shine-silver-text font-bold text-2xl text-center px-2">{work.title}</span>
      </div>
      <span className="absolute top-2 left-2 bg-black bg-opacity-50 ios-white font-bold px-2 py-1 rounded-lg">
        {work.title}
      </span>
    </div>
  );
}



