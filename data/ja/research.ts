import type { Publication, Award, Presentation, Education } from '../types'

export const publicationsJa: Publication[] = [
  {
    id: 'style-modulation-head',
    title: 'Steering at the Source: Style Modulation Heads for Robust Persona Control',
    authors: ['Yoshihiro Izawa', 'Gouki Minegishi', 'Koshi Eguchi', 'Sosuke Hosokawa', 'Kenjiro Taura'],
    highlightAuthor: 'Yoshihiro Izawa',
    venue: 'ICML 2026',
    venueShort: 'ICML 2026',
    year: 2026,
    type: 'conference',
    isFirstAuthor: true,
    thumbnail: '/research/style-modulation-head.png',
    abstract: 'Activation steering offers a computationally efficient mechanism for controlling Large Language Models (LLMs) without fine-tuning. While effectively controlling target traits (e.g., persona), coherency degradation remains a major obstacle to safety and practical deployment. We hypothesize that this degradation stems from intervening on the residual stream, which indiscriminately affects aggregated features and inadvertently amplifies off-target noise. In this work, we identify a sparse subset of attention heads (only three heads) that independently govern persona and style formation, which we term Style Modulation Heads. Specifically, these heads can be localized via geometric analysis of internal representations, combining layer-wise cosine similarity and head-wise contribution scores. We demonstrate that intervention targeting only these specific heads achieves robust behavioral control while significantly mitigating the coherency degradation observed in residual stream steering. More broadly, our findings show that precise, component-level localization enables safer and more precise model control.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2603.13249' },
      { label: 'Code', url: 'https://github.com/Omusubi0123/style-modulation-head' },
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=r6EuKr1hq4' },
    ],
  },
  {
    id: 'anosognosia-in-llms',
    title: 'Anosognosia in LLMs: Probing Self-Awareness of Quantized Computational Substrate',
    authors: ['Yoshihiro Izawa', 'Gouki Minegishi', 'Yoko Yamakata'],
    highlightAuthor: 'Yoshihiro Izawa',
    venue: 'Preprint',
    venueShort: 'Preprint',
    year: 2026,
    type: 'preprint',
    isFirstAuthor: true,
    thumbnail: '/research/anosognosia-in-llms.png',
    abstract: 'Can LLMs recognize degradation in their own computational substrate? Inspired by anosognosia, a neurological condition in which patients fail to recognize impairments in their own abilities, we investigate whether LLMs can recognize degradation in their computational substrate induced by quantization. We first show that existing models fail to self-report their quantization state, even when provided with their own generated text as an external cue. Linear probing reveals that, while generated text carries almost no trace of quantization, internal representations contain clear, method-specific fingerprints. Through training, models learn to identify severely degraded outputs such as those of 4-bit models by comparison, yet still fail to do so from a single output. A shared LoRA trained jointly across quantization levels succeeded in reading out internal fingerprints, but fails on unseen quantization methods, merely mapping method-specific fingerprints to labels. Whereas external self-observation can restore awareness in some cases of human anosognosia, our results suggest that the more promising route to enabling such awareness in LLMs may lie in their internal representations. Our results highlight fundamental limits of generalizability to LLM self-monitoring.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2610.06174' },
      { label: 'Code', url: 'https://github.com/Omusubi0123/llm-anosognosia' },
    ],
  }
]

export const awardsJa: Award[] = [
  {
    id: 'dean-award',
    title: '工学部長賞（研究）',
    organization: '東京大学 工学部',
    year: 2026,
    category: '研究',
  },
]

export const educationJa: Education[] = [
  {
    id: 'ist-master',
    degree: '修士課程',
    department: '情報理工学系研究科',
    institution: '東京大学大学院',
    lab: '山肩研究室',
    period: '2026.4 - 現在',
    current: true,
  },
  {
    id: 'eeic-bachelor',
    degree: '学士課程',
    department: '工学部 電子情報工学科',
    institution: '東京大学',
    lab: '田浦研究室',
    period: '2022.4 - 2026.3',
    current: false,
  },
]

export const presentationsJa: Presentation[] = []
