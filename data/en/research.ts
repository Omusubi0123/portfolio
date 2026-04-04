import type { Publication, Award, Presentation } from '../types'

export const publicationsEn: Publication[] = [
  {
    id: 'style-modulation-head',
    title: 'Steering at the Source: Style Modulation Heads for Robust Persona Control',
    authors: ['Yoshihiro Izawa', 'Gouki Minegishi', 'Koshi Eguchi', 'Sosuke Hosokawa', 'Kenjiro Taura'],
    highlightAuthor: 'Yoshihiro Izawa',
    venue: 'ICLR 2026 Workshop on Representational Alignment (Re-Align)',
    venueShort: 'ICLR 2026 Workshop',
    year: 2026,
    type: 'workshop',
    isFirstAuthor: true,
    thumbnail: '/research/style-modulation-head.png',
    abstract: 'Activation steering offers a computationally efficient mechanism for controlling Large Language Models (LLMs) without fine-tuning. While effectively controlling target traits (e.g., persona), coherency degradation remains a major obstacle to safety and practical deployment. We hypothesize that this degradation stems from intervening on the residual stream, which indiscriminately affects aggregated features and inadvertently amplifies off-target noise. In this work, we identify a sparse subset of attention heads (only three heads) that independently govern persona and style formation, which we term Style Modulation Heads. Specifically, these heads can be localized via geometric analysis of internal representations, combining layer-wise cosine similarity and head-wise contribution scores. We demonstrate that intervention targeting only these specific heads achieves robust behavioral control while significantly mitigating the coherency degradation observed in residual stream steering. More broadly, our findings show that precise, component-level localization enables safer and more precise model control.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2603.13249' },
      { label: 'Code', url: 'https://github.com/Omusubi0123/style-modulation-head' },
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=JlO2MCzUto' },
    ],
  },
]

export const awardsEn: Award[] = [
  {
    id: 'dean-award',
    title: "Dean's Award for Research",
    organization: 'Faculty of Engineering, The University of Tokyo',
    year: 2026,
    category: 'Research',
  },
]

export const presentationsEn: Presentation[] = []
