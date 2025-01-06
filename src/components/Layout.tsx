import React from 'react';

const Layout: React.FC<{ header: React.ReactNode; children: React.ReactNode }> = ({ header, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {header}
      </nav>

      {/* Content */}
      <main className="flex-grow pt-10">{children}</main>
    </div>
  );
};

export default Layout;