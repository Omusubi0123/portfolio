export interface CareerItem {
  title: string
  company: string
  startDate: Date
  endDate: Date | null
  description: string
  achievements: string[]
}

export interface Skill {
  name: string
  icon: string
  comment: string
}

export type SkillCategoryData = { skills: Skill[] }[]

export interface Publication {
  id: string
  title: string
  authors: string[]
  highlightAuthor: string
  venue: string
  venueShort: string
  year: number
  type: 'conference' | 'workshop' | 'journal' | 'preprint'
  isFirstAuthor: boolean
  thumbnail?: string
  abstract?: string
  links: { label: string; url: string }[]
  citations?: number
}

export interface Award {
  id: string
  title: string
  organization: string
  year: number
  category?: string
}

export interface Presentation {
  id: string
  title: string
  event: string
  date: string
  slideUrl?: string
  description?: string
}

export interface Education {
  id: string
  degree: string
  department: string
  institution: string
  lab?: string
  period: string
  current: boolean
}
