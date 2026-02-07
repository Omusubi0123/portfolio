'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getLocaleFromAcceptLanguage } from '@/lib/i18n'

export default function BlogSlugRedirectClient({
  slug,
}: {
  slug: string
}) {
  const router = useRouter()

  useEffect(() => {
    const locale =
      typeof navigator !== 'undefined'
        ? getLocaleFromAcceptLanguage(navigator.language)
        : 'ja'
    router.replace(`/${locale}/blog/${slug}`)
  }, [router, slug])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4" />
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
