import { useState, useEffect } from 'react';

interface BackgroundImageProps {
  pcImageUrl: string;
  mobileImageUrl: string;
  children: React.ReactNode;
}

export default function BackgroundImage({ pcImageUrl, mobileImageUrl, children }: BackgroundImageProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${isMobile ? mobileImageUrl : pcImageUrl})` }}
    >
      {children}
    </div>
  );
}
