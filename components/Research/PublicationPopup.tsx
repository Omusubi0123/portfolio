"use client"

import { useEffect, useRef } from 'react'
import React from 'react'
import { useTranslations } from 'next-intl'
import type { Publication } from '@/data'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LINK_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  arXiv:      { bg: 'bg-red-100',    text: 'text-red-700',    border: 'border-red-300' },
  Code:       { bg: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-300' },
  OpenReview: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
}

const DEFAULT_LINK_COLOR = { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' }

function getLinkColor(label: string) {
  return LINK_COLORS[label] || DEFAULT_LINK_COLOR
}

interface PublicationPopupProps {
  pub: Publication
  onClose: () => void
}

export default function PublicationPopup({ pub, onClose }: PublicationPopupProps) {
  const t = useTranslations('research')
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left: info */}
          <div className="md:flex-1 md:pr-4 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">{pub.title}</h2>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {pub.isFirstAuthor && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300">
                  First Author
                </span>
              )}
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-300">
                {pub.venueShort}
              </span>
            </div>

            {/* Authors */}
            <div className="mb-3">
              <p className="text-black font-bold mb-1">{t('authors')}</p>
              <p className="text-gray-700 text-base">
                {pub.authors.map((author, i) => (
                  <React.Fragment key={author}>
                    {i > 0 && ', '}
                    <span className={author === pub.highlightAuthor ? 'font-bold text-black' : ''}>
                      {author}
                    </span>
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Venue */}
            <div className="mb-4">
              <p className="text-black font-bold mb-1">{t('venue')}</p>
              <p className="text-gray-700 text-base">{pub.venue}</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-2">
              {pub.links.map((link) => {
                const color = getLinkColor(link.label)
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md ${color.bg} ${color.text} border ${color.border} hover:brightness-95 transition-all duration-200`}
                  >
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    {link.label}
                  </a>
                )
              })}
              {pub.citations !== undefined && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-gray-100 text-gray-600 border border-gray-300">
                  {t('citations')}: {pub.citations}
                </span>
              )}
            </div>
          </div>

          {/* Right: thumbnail */}
          {pub.thumbnail && (
            <div className="md:flex-1">
              <img
                src={pub.thumbnail}
                alt={pub.title}
                className="w-full h-auto rounded-lg border-4 border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Abstract */}
        {pub.abstract && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-black font-bold mb-2">{t('abstract')}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{pub.abstract}</p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          {t('close')}
        </button>
      </div>
    </div>
  )
}
