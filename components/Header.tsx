"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-scroll"
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import { isValidLocale, type Locale } from '@/lib/i18n'

const LOCALES: Locale[] = ['ja', 'en']

function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  return isValidLocale(segment) ? segment : 'ja'
}

interface NavSubItem {
  id: string
  label: string
}

interface NavItem {
  id: string
  label: string
  href: string
  subItems: NavSubItem[]
}

export default function Header() {
  const t = useTranslations('nav')
  const tResearch = useTranslations('research')
  const tCommon = useTranslations('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [expandedMobileNav, setExpandedMobileNav] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`
  const isBlogPage = pathname.startsWith(`/${locale}/blog`)
  const isResearchPage = pathname.startsWith(`/${locale}/research`)

  const homeHref = `/${locale}/`
  const blogHref = `/${locale}/blog`
  const researchHref = `/${locale}/research`
  const cvHref = '/cv.pdf'

  const isActiveNav = (navId: string) => {
    if (navId === 'home') return isHomePage
    if (navId === 'blog') return isBlogPage
    if (navId === 'research') return isResearchPage
    return false
  }

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: t('home'),
      href: homeHref,
      subItems: [
        { id: 'about', label: t('about') },
        { id: 'works', label: t('works') },
        { id: 'carriers', label: t('carriers') },
        { id: 'education', label: t('education') },
        { id: 'certifications', label: t('certifications') },
        { id: 'skills', label: t('skills') },
      ],
    },
    {
      id: 'blog',
      label: t('blog'),
      href: blogHref,
      subItems: [],
    },
    {
      id: 'research',
      label: t('research'),
      href: researchHref,
      subItems: [
        { id: 'publications', label: tResearch('publications') },
        { id: 'awards', label: tResearch('awards') },
        { id: 'education', label: tResearch('education') },
        { id: 'presentations', label: tResearch('presentations') },
      ],
    },
  ]

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    const handleScroll = () => {
      if (window.innerWidth < 768) {
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
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = useCallback((navId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHoveredNav(navId)
  }, [])

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredNav(null), 150)
  }, [])

  const isOnTargetPage = (navId: string) => {
    if (navId === 'home') return isHomePage
    if (navId === 'research') return isResearchPage
    return false
  }

  const getSubItemHref = (navItem: NavItem, subItem: NavSubItem) => {
    if (navItem.id === 'home') return `/${locale}/#${subItem.id}`
    if (navItem.id === 'research') return `/${locale}/research#${subItem.id}`
    return navItem.href
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full ios-white shadow-md z-50 transition-transform duration-300 md:translate-y-0 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-4 sm:px-10 lg:px-20 py-4 h-16 md:h-12 backdrop-blur-sm bg-black/60 rounded-lg">
        <NextLink href={homeHref} className="text-xl md:text-2xl font-bold shine-gold-text">
          {tCommon('siteName')}
        </NextLink>

        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex md:items-center md:space-x-2">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <NextLink
                href={item.href}
                className={`w-[90px] text-center text-lg md:text-xl cursor-pointer inline-flex items-center justify-center px-2 py-1 ${
                  isActiveNav(item.id)
                    ? 'shine-gold-text font-medium'
                    : 'shine-silver-text-menu'
                }`}
              >
                {item.label}
              </NextLink>

              {hoveredNav === item.id && item.subItems.length > 0 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <ul className="bg-black/80 backdrop-blur-md rounded-lg py-2 px-1 min-w-[160px] border border-gray-600/50 shadow-xl">
                    {item.subItems.map((sub) => (
                      <li key={sub.id}>
                        {isOnTargetPage(item.id) ? (
                          <Link
                            to={sub.id}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded cursor-pointer transition-colors"
                            onClick={() => setHoveredNav(null)}
                          >
                            {sub.label}
                          </Link>
                        ) : (
                          <NextLink
                            href={getSubItemHref(item, sub)}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                            onClick={() => setHoveredNav(null)}
                          >
                            {sub.label}
                          </NextLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          {/* <li className="border-l border-gray-500 pl-3 ml-2">
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-2 py-1 rounded text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
          </li> */}
          <li className="flex items-center gap-2 border-l border-gray-500 pl-4">
            {LOCALES.map((loc) => (
              <NextLink
                key={loc}
                href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}/`}
                className={`text-sm px-2 py-1 rounded transition ${
                  loc === locale
                    ? 'bg-yellow-600/30 text-yellow-400 font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {loc === 'ja' ? t('ja') : t('en')}
              </NextLink>
            ))}
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden fixed top-16 right-0 w-56 bg-black/90 backdrop-blur-md rounded-bl-lg shadow-lg border border-gray-700/50">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.subItems.length > 0 ? (
                  <>
                    <button
                      onClick={() => setExpandedMobileNav(expandedMobileNav === item.id ? null : item.id)}
                      className="w-full px-4 py-2 text-lg shine-silver-text transition cursor-pointer flex items-center justify-between"
                    >
                      <NextLink
                        href={item.href}
                        onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false) }}
                        className="shine-silver-text"
                      >
                        {item.label}
                      </NextLink>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedMobileNav === item.id ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedMobileNav === item.id && (
                      <ul className="bg-white/5 mx-2 rounded-lg mb-1">
                        {item.subItems.map((sub) => (
                          <li key={sub.id}>
                            {isOnTargetPage(item.id) ? (
                              <Link
                                to={sub.id}
                                smooth={true}
                                duration={500}
                                offset={-60}
                                className="block px-6 py-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                                onClick={() => { setIsMenuOpen(false); setExpandedMobileNav(null) }}
                              >
                                {sub.label}
                              </Link>
                            ) : (
                              <NextLink
                                href={getSubItemHref(item, sub)}
                                className="block px-6 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                onClick={() => { setIsMenuOpen(false); setExpandedMobileNav(null) }}
                              >
                                {sub.label}
                              </NextLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NextLink
                    href={item.href}
                    className="block px-4 py-2 text-lg shine-silver-text transition cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NextLink>
                )}
              </li>
            ))}
            {/* <li className="px-4 py-2 border-t border-gray-600 mt-2">
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white inline-flex items-center gap-1.5"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV
              </a>
            </li> */}
            <li className="px-4 py-2 flex gap-2">
              {LOCALES.map((loc) => (
                <NextLink
                  key={loc}
                  href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}/`}
                  className={`text-sm ${loc === locale ? 'text-yellow-400 font-medium' : 'text-gray-400'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {loc === 'ja' ? t('ja') : t('en')}
                </NextLink>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
