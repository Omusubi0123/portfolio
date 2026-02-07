import type { CareerItem } from '../types'

export const careersEn: CareerItem[] = [
  {
    title: 'Academic Technical Staff',
    company: 'The University of Tokyo Hospital',
    startDate: new Date(2025, 8),
    endDate: null,
    description: 'Belonging: Cardiovascular Medicine',
    achievements: [
      'Technical Support',
    ],
  },
  {
    title: 'Algorithm Engineer Intern',
    company: 'Tomoshibi Corporation',
    startDate: new Date(2023, 7),
    endDate: new Date(2025, 12),
    description: 'Belonging: LLM (Large Language Model) Team',
    achievements: [
      'Embedding model development',
      'SLM (Small Language Model) development',
      'Search agent development',
      'LLM-based algorithm development',
    ],
  },
]
