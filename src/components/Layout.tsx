import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full bg-gray-800 p-4 z-50">
        <nav className="flex justify-center space-x-6">
          <a href="#about" className="text-lg font-semibold hover:text-primary">About</a>
          <a href="#works" className="text-lg font-semibold hover:text-primary">Works</a>
          <a href="#skills" className="text-lg font-semibold hover:text-primary">Skills</a>
          <a href="#certs" className="text-lg font-semibold hover:text-primary">Certs</a>
        </nav>
      </header>
      <main className="mt-16 flex-1">{children}</main>
    </div>
  );
};

export default Layout;
