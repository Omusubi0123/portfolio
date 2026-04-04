import type { Locale } from '@/lib/i18n'
import type { Work } from '@/components/Works/types'
import type { CareerItem, SkillCategoryData, Publication, Award, Presentation } from './types'
import { worksJa } from './ja/works'
import { worksEn } from './en/works'
import { careersJa } from './ja/careers'
import { careersEn } from './en/careers'
import { skillsJa } from './ja/skills'
import { skillsEn } from './en/skills'
import { publicationsJa, awardsJa, presentationsJa } from './ja/research'
import { publicationsEn, awardsEn, presentationsEn } from './en/research'

export function getWorks(locale: Locale): Work[] {
  return locale === 'ja' ? worksJa : worksEn
}

export function getCareerData(locale: Locale): CareerItem[] {
  return locale === 'ja' ? careersJa : careersEn
}

export function getSkills(locale: Locale): SkillCategoryData {
  return locale === 'ja' ? skillsJa : skillsEn
}

export function getPublications(locale: Locale): Publication[] {
  return locale === 'ja' ? publicationsJa : publicationsEn
}

export function getAwards(locale: Locale): Award[] {
  return locale === 'ja' ? awardsJa : awardsEn
}

export function getPresentations(locale: Locale): Presentation[] {
  return locale === 'ja' ? presentationsJa : presentationsEn
}

export type { CareerItem, Skill, Publication, Award, Presentation } from './types'
