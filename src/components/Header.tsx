import { useState, useEffect, useRef } from "react"
import { Link } from "react-scroll"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const sections = ["About", "Works", "Carriers", "Certifications", "Skills"]
  const headerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        // Only apply scroll hiding on mobile
        const currentScrollY = window.pageYOffset
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50)
        lastScrollY = currentScrollY
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !headerRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full ios-white shadow-md z-10 transition-transform duration-300 md:translate-y-0 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-4 sm:px-10 lg:px-20 py-4 h-16 md:h-12 backdrop-blur-sm bg-black/60 rounded-lg">
        <h1
          className="text-xl md:text-2xl font-bold shine-gold-text cursor-pointer"
          onClick={() => window.location.href = "/"}
        >
          izawa Official Site
        </h1>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
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
                className="text-lg md:text-xl shine-silver-text-menu transition cursor-pointer"
                >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden fixed top-16 right-0 w-48 bg-black/90 rounded-bl-lg shadow-lg">
          <ul className="py-2">
            {sections.map((section, index) => (
              <li key={index} className="px-4 py-2">
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-lg shine-silver-text transition cursor-pointer block"
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

