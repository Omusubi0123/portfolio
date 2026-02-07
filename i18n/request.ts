import { getRequestConfig } from 'next-intl/server'

// Static export: avoid reading requestLocale/headers so pages can be pre-rendered.
// Locale and messages are provided by app/[locale]/layout.tsx from params.
export default getRequestConfig(async () => {
  const locale = 'ja'
  const messages = (await import(`../messages/${locale}.json`)).default
  return {
    locale,
    messages,
  }
})
