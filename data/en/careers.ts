import type { CareerItem } from '../types'

export const careersEn: CareerItem[] = [
  {
    title: 'Machine Learning Engineer',
    company: 'LY Corporation',
    startDate: new Date(2026, 8),
    endDate: new Date(2026, 9),
    description: 'Visual Understanding Team',
    achievements: [
      'Additional Training of MLLMs in Japanese',
    ],
  },
  {
    title: 'Academic Technical Staff',
    company: 'The University of Tokyo Hospital',
    startDate: new Date(2025, 8),
    endDate: new Date(2026, 9),
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
