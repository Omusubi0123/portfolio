import React from 'react';

const Header: React.FC = () => {
  const sections = ['About', 'Works', 'Certifications', 'Skills'];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-gray-300 transition"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
