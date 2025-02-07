import { useState, useEffect, useRef } from "react"
import { Link } from "react-scroll"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sections = ["About", "Works", "Carriers", "Skills", "Certifications"]
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full text-white shadow-md z-10 h-16 md:h-12 backdrop-blur-sm bg-black/60 rounded-lg">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-4 md:px-20 py-4 h-full">
        <h1 className="text-xl md:text-2xl font-bold">Izawa Official</h1>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:space-x-8">
          {sections.map((section, index) => (
            <li key={index}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-lg md:text-xl hover:text-gray-300 transition cursor-pointer"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden">
          <ul className="bg-black/90 py-4">
            {sections.map((section, index) => (
              <li key={index} className="px-4 py-2">
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-lg hover:text-gray-300 transition cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

