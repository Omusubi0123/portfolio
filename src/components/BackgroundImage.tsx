export default function BackgroundImage({ imageUrl, children } : { imageUrl: string, children: React.ReactNode }) {
  return (
    <div 
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};
