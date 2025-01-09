interface PopupProps {
    title: string;
    description: string; // 説明文を追加
    media: string; // 画像や動画のURL
    isVideo?: boolean; // メディアが動画かどうか
    onClose: () => void;
  }
  
  export default function Popup({ title, description, media, isVideo = false, onClose }: PopupProps) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full flex"
          onClick={(e) => e.stopPropagation()} // ポップアップ内クリックで閉じないようにする
        >
          {/* 左側: 説明文 */}
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
  
          {/* 右側: メディア（画像または動画） */}
          <div className="flex-1">
            {isVideo ? (
              <video
                src={media}
                controls
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <img
                src={media}
                alt={title}
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
  