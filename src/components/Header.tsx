import { Link } from 'react-scroll';

export default function Header() {
  const sections = ['About', 'Works', 'Skills', 'Certifications'];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10 h-10 backdrop-blur-sm bg-black/60 rounded-lg">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-20 py-4 h-full">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-8">
          {sections.map((section, index) => (
            <li key={index}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                // offset={-10}
                className="text-xl hover:text-gray-300 transition cursor-pointer"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
