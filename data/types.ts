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
