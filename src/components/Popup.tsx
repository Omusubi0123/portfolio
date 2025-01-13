interface PopupProps {
  title: string;
  description: string;
  media: string;
  isVideo?: boolean;
  onClose: () => void;
  link: string;
}

export default function Popup({ title, description, media, isVideo = false, onClose, link }: PopupProps) {
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
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="flex-1">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {isVideo ? (
              <video
                src={media}
                controls
                className="w-full h-auto rounded-lg cursor-pointer"
              />
            ) : (
              <img
                src={media}
                alt={title}
                className="w-full h-auto rounded-lg cursor-pointer"
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
