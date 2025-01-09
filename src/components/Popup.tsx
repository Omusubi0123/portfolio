interface PopupProps {
  title: string;
  image: string;
  onClose: () => void;
}

export default function Popup({ title, image, onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={title} className="w-full h-auto rounded-lg mb-4" />
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        {/* <button
          className="text-red-500 font-semibold"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};
