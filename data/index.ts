import type { Locale } from '@/lib/i18n'
import type { Work } from '@/components/Works/types'
import type { CareerItem } from './types'
import { worksJa } from './ja/works'
import { worksEn } from './en/works'
import { careersJa } from './ja/careers'
import { careersEn } from './en/careers'

export function getWorks(locale: Locale): Work[] {
  return locale === 'ja' ? worksJa : worksEn
}

export function getCareerData(locale: Locale): CareerItem[] {
  return locale === 'ja' ? careersJa : careersEn
}

export type { CareerItem } from './types'
