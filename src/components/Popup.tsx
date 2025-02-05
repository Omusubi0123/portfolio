import { useEffect, useRef } from 'react';

interface PopupProps {
  title: string;
  description: string;
  media: string;
  isVideo?: boolean;
  onClose: () => void;
  link?: string;
  github?: string;
  my_skills?: string[];
  other_skills?: string[];
  cd_skills?: string[];
}

export default function Popup({ title, description, media, isVideo = false, onClose, link, github, my_skills, other_skills, cd_skills }: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 md:pr-4 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">{description}</p>
            {link && (
              <p className="mt-2">
                <span className="text-black">Link: </span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">{link}</a>
              </p>
            )}
            {github && (
              <p className="mt-2">
                <span className="text-black">Github: </span>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">{github}</a>
              </p>
            )}
            {(my_skills || other_skills || cd_skills) && (
              <p className="mt-4">
                <span className="text-black">使用技術: </span>
                {my_skills && my_skills.map((skill, index) => (
                  <span key={index} className="text-black">
                    {skill}{index < my_skills.length - 1 && ', '}
                  </span>
                ))}
                {my_skills && other_skills && ', '}
                {other_skills && other_skills.map((skill, index) => (
                  <span key={index} className="text-gray-500">
                    {skill}{index < other_skills.length - 1 && ', '}
                  </span>
                ))}
                {(my_skills || other_skills) && cd_skills && ', '}
                {cd_skills && cd_skills.map((skill, index) => (
                  <span key={index} className="text-green-500">
                    {skill}{index < cd_skills.length - 1 && ', '}
                  </span>
                ))}
              </p>
            )}
          </div>

          <div className="md:flex-1">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {isVideo ? (
                <video
                  src={media}
                  controls
                  className="w-full h-auto rounded-lg cursor-pointer border-4 border-gray-300"
                />
              ) : (
                <img
                  src={media || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-auto rounded-lg cursor-pointer border-4 border-gray-300"
                />
              )}
            </a>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
