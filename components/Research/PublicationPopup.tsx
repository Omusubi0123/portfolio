"use client"

import { useEffect, useRef } from 'react'
import React from 'react'
import { useTranslations } from 'next-intl'
import type { Publication } from '@/data'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LINK_COLORS: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
  arXiv:      { bg: 'bg-red-600/20',    text: 'text-red-300',    border: 'border-red-500/40',    hoverBg: 'hover:bg-red-600/30' },
  Code:       { bg: 'bg-green-600/20',   text: 'text-green-300',  border: 'border-green-500/40',  hoverBg: 'hover:bg-green-600/30' },
  OpenReview: { bg: 'bg-purple-600/20',  text: 'text-purple-300', border: 'border-purple-500/40', hoverBg: 'hover:bg-purple-600/30' },
}

const DEFAULT_LINK_COLOR = { bg: 'bg-white/5', text: 'text-gray-300', border: 'border-gray-600/50', hoverBg: 'hover:bg-white/10' }

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
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-gray-900/95 backdrop-blur-md border border-gray-600/50 rounded-xl shadow-2xl p-5 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnail */}
          {pub.thumbnail && (
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="rounded-lg overflow-hidden border border-gray-600/50">
                <img
                  src={pub.thumbnail}
                  alt={pub.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}

          {/* Info */}
          <div className="flex-grow min-w-0">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
              {pub.title}
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {pub.isFirstAuthor && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-600/30 to-yellow-400/30 text-yellow-300 border border-yellow-500/40">
                  First Author
                </span>
              )}
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600/30 to-blue-400/30 text-blue-300 border border-blue-500/40">
                {pub.venueShort}
              </span>
            </div>

            {/* Authors */}
            <div className="mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('authors')}</span>
              <p className="text-sm text-gray-300 mt-1">
                {pub.authors.map((author, i) => (
                  <React.Fragment key={author}>
                    {i > 0 && ', '}
                    <span className={author === pub.highlightAuthor ? 'font-bold text-white' : ''}>
                      {author}
                    </span>
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Venue */}
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('venue')}</span>
              <p className="text-sm text-gray-300 mt-1">{pub.venue}</p>
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
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md ${color.bg} ${color.text} border ${color.border} ${color.hoverBg} hover:brightness-110 transition-all duration-200`}
                  >
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    {link.label}
                  </a>
                )
              })}
              {pub.citations !== undefined && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 text-gray-400 border border-gray-600/50">
                  {t('citations')}: {pub.citations}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Abstract */}
        {pub.abstract && (
          <div className="mt-6 pt-5 border-t border-gray-700/50">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('abstract')}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{pub.abstract}</p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-gray-600/50 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  )
}
