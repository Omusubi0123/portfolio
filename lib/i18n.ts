export const locales = ['ja', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ja'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale
  const first = acceptLanguage.split(',')[0].trim().split('-')[0].toLowerCase()
  return first === 'ja' ? 'ja' : 'en'
}
