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

export default function Popup({ title, description, media, isVideo = false, onClose, link, github, my_skills, other_skills, cd_skills}: PopupProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-6xl w-full flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 pr-4">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 text-lg">{description}</p>
            {link && (
            <p className="mt-4">
              <span className="text-black">Link: </span>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{link}</a>
            </p>
            )}
            {github && (
            <p className="mt-4">
              <span className="text-black">Github: </span>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">{github}</a>
            </p>
            )}
            {(my_skills || other_skills) && (
            <p className="mt-4">
              <span className="text-black">仕様技術: </span>
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
              {my_skills && cd_skills && ', '}
              {cd_skills && cd_skills.map((skill, index) => (
              <span key={index} className="text-green-500">
              {skill}{index < cd_skills.length - 1 && ', '}
              </span>
              ))}
            </p>
            )}
        </div>

        <div className="flex-1">
            <a href={link} target="_blank" rel="noopener noreferrer">
            {isVideo ? (
              <video
              src={media}
              controls
              className="w-full h-auto rounded-lg cursor-pointer border-4 border-gray-300"
              />
            ) : (
              <img
              src={media}
              alt={title}
              className="w-full h-auto rounded-lg cursor-pointer border-4 border-gray-300"
              />
            )}
            </a>
        </div>
      </div>
    </div>
  );
}
