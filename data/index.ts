import type { Locale } from '@/lib/i18n'
import type { Work } from '@/components/Works/types'
import type { CareerItem, SkillCategoryData } from './types'
import { worksJa } from './ja/works'
import { worksEn } from './en/works'
import { careersJa } from './ja/careers'
import { careersEn } from './en/careers'
import { skillsJa } from './ja/skills'
import { skillsEn } from './en/skills'

export function getWorks(locale: Locale): Work[] {
  return locale === 'ja' ? worksJa : worksEn
}

export function getCareerData(locale: Locale): CareerItem[] {
  return locale === 'ja' ? careersJa : careersEn
}

export function getSkills(locale: Locale): SkillCategoryData {
  return locale === 'ja' ? skillsJa : skillsEn
}

export type { CareerItem, Skill } from './types'
