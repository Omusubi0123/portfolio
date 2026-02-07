"use client"

import { useState, useEffect, useRef } from "react"
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

export default function Header() {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const headerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`

  const sectionIds = ['about', 'works', 'blog', 'carriers', 'certifications', 'skills'] as const
  const sectionLabels = [
    t('about'),
    t('works'),
    t('blog'),
    t('carriers'),
    t('certifications'),
    t('skills'),
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const homeHref = `/${locale}/`
  const blogHref = `/${locale}/blog`

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full ios-white shadow-md z-10 transition-transform duration-300 md:translate-y-0 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-4 sm:px-10 lg:px-20 py-4 h-16 md:h-12 backdrop-blur-sm bg-black/60 rounded-lg">
        <NextLink href={homeHref} className="text-xl md:text-2xl font-bold shine-gold-text">
          {tCommon('siteName')}
        </NextLink>

        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
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

        <ul className="hidden md:flex md:items-center md:space-x-6">
          {isHomePage ? (
            sectionIds.map((id, index) => (
              <li key={id}>
                {id === 'blog' ? (
                  <NextLink
                    href={blogHref}
                    className="text-lg md:text-xl shine-silver-text-menu transition cursor-pointer"
                  >
                    {sectionLabels[index]}
                  </NextLink>
                ) : (
                  <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    className="text-lg md:text-xl shine-silver-text-menu transition cursor-pointer"
                  >
                    {sectionLabels[index]}
                  </Link>
                )}
              </li>
            ))
          ) : (
            <>
              <li>
                <NextLink href={homeHref} className="text-lg md:text-xl shine-silver-text-menu transition cursor-pointer">
                  {t('home')}
                </NextLink>
              </li>
              <li>
                <NextLink href={blogHref} className="text-lg md:text-xl shine-silver-text-menu transition cursor-pointer">
                  {t('blog')}
                </NextLink>
              </li>
            </>
          )}
          <li className="flex items-center gap-2 ml-2 border-l border-gray-500 pl-4">
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

      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden fixed top-16 right-0 w-48 bg-black/90 rounded-bl-lg shadow-lg">
          <ul className="py-2">
            {isHomePage ? (
              sectionIds.map((id, index) => (
                <li key={id} className="px-4 py-2">
                  {id === 'blog' ? (
                    <NextLink
                      href={blogHref}
                      className="text-lg shine-silver-text transition cursor-pointer block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sectionLabels[index]}
                    </NextLink>
                  ) : (
                    <Link
                      to={id}
                      smooth={true}
                      duration={500}
                      className="text-lg shine-silver-text transition cursor-pointer block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sectionLabels[index]}
                    </Link>
                  )}
                </li>
              ))
            ) : (
              <>
                <li className="px-4 py-2">
                  <NextLink href={homeHref} className="text-lg shine-silver-text transition cursor-pointer block" onClick={() => setIsMenuOpen(false)}>
                    {t('home')}
                  </NextLink>
                </li>
                <li className="px-4 py-2">
                  <NextLink href={blogHref} className="text-lg shine-silver-text transition cursor-pointer block" onClick={() => setIsMenuOpen(false)}>
                    {t('blog')}
                  </NextLink>
                </li>
              </>
            )}
            <li className="px-4 py-2 border-t border-gray-600 mt-2 flex gap-2">
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
