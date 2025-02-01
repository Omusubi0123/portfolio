import React from 'react';
import BackgroundImage from './BackgroundImage';

const Layout: React.FC<{ header: React.ReactNode; children: React.ReactNode }> = ({ header, children }) => {
  return (
    <BackgroundImage 
      pcImageUrl="/background1.jpg"
      mobileImageUrl="/background2.jpg"
    >
      <div className="flex flex-col min-h-screen">
        <nav className="sticky top-0 z-50">
          {header}
        </nav>
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </BackgroundImage>
  );
};
export default Layout;
