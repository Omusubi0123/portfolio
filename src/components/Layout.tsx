import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <nav className="flex justify-center space-x-8 py-4">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#works" className="text-gray-600 hover:text-gray-900">Works</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#certs" className="text-gray-600 hover:text-gray-900">Certifications</a>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
