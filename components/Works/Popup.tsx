"use client"

import { useEffect, useRef } from 'react';

interface PopupProps {
  title: string;
  description: string;
  media: string;
  isVideo?: boolean;
  onClose: () => void;
  link?: string;
  github?: string;
  slide?: string;
  my_skills?: string[];
  other_skills?: string[];
  cd_skills?: string[];
}

export default function Popup({ title, description, media, isVideo = false, onClose, link, github, slide, my_skills, other_skills, cd_skills }: PopupProps) {
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
        className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 md:pr-4 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">{title}</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">{description}</p>
            {link && (
              <p className="mt-2">
                <span className="text-black font-bold">Link: </span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">{link}</a>
              </p>
            )}
            {github && (
              <p className="mt-2">
                <span className="text-black font-bold">Github: </span>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">{github}</a>
              </p>
            )}
            {slide && (
              <p className="mt-2">
              <span className="text-black font-bold">Slide: </span>
              <a href={slide} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">
                {new URL(slide).hostname}
              </a>
              </p>
            )}
            {(my_skills || other_skills || cd_skills) && (
              <div className="mt-4">
                <p className="font-bold text-black">使用技術</p>
                {my_skills && my_skills.length > 0 && (
                  <p>
                    <span className="text-black font-bold">自分：</span>
                    {my_skills.map((skill, index) => (
                      <span key={index} className="text-black">
                        {skill}{index < my_skills.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                )}
                {other_skills && other_skills.length > 0 && (
                  <p>
                    <span className="text-black font-bold">他：</span>
                    {other_skills.map((skill, index) => (
                      <span key={index} className="text-gray-500">
                        {skill}{index < other_skills.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                )}
                {cd_skills && cd_skills.length > 0 && (
                  <p>
                    <span className="text-black font-bold">継続開発：</span>
                    {cd_skills.map((skill, index) => (
                      <span key={index} className="text-black">
                        {skill}{index < cd_skills.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                )}
              </div>
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
