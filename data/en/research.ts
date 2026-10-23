import type { Publication, Award, Presentation, Education } from '../types'

export const publicationsEn: Publication[] = [
  {
    id: 'style-modulation-head',
    title: 'Steering at the Source: Style Modulation Heads for Robust Persona Control',
    authors: ['Yoshihiro Izawa', 'Gouki Minegishi', 'Koshi Eguchi', 'Sosuke Hosokawa', 'Kenjiro Taura'],
    highlightAuthor: 'Yoshihiro Izawa',
    authorUrls: {
      'Yoshihiro Izawa': 'https://www.omusubiy.com/',
      'Gouki Minegishi': 'https://gouki510.github.io/',
      'Kenjiro Taura': 'https://www.eidos.ic.i.u-tokyo.ac.jp/',
    },
    venue: 'ICML 2026',
    venueShort: 'ICML 2026',
    year: 2026,
    type: 'conference',
    isFirstAuthor: true,
    thumbnail: '/research/paper/style-modulation-head.png',
    abstract: 'Activation steering offers a computationally efficient mechanism for controlling Large Language Models (LLMs) without fine-tuning. While effectively controlling target traits (e.g., persona), coherency degradation remains a major obstacle to safety and practical deployment. We hypothesize that this degradation stems from intervening on the residual stream, which indiscriminately affects aggregated features and inadvertently amplifies off-target noise. In this work, we identify a sparse subset of attention heads (only three heads) that independently govern persona and style formation, which we term Style Modulation Heads. Specifically, these heads can be localized via geometric analysis of internal representations, combining layer-wise cosine similarity and head-wise contribution scores. We demonstrate that intervention targeting only these specific heads achieves robust behavioral control while significantly mitigating the coherency degradation observed in residual stream steering. More broadly, our findings show that precise, component-level localization enables safer and more precise model control.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2603.13249' },
      { label: 'Code', url: 'https://github.com/Omusubi0123/style-modulation-head' },
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=JlO2MCzUto' },
    ],
  },
  {
    id: 'anosognosia-in-llms',
    title: 'Anosognosia in LLMs: Probing Self-Awareness of Quantized Computational Substrate',
    authors: ['Yoshihiro Izawa', 'Gouki Minegishi', 'Yoko Yamakata'],
    highlightAuthor: 'Yoshihiro Izawa',
    authorUrls: {
      'Yoshihiro Izawa': 'https://www.omusubiy.com/',
      'Gouki Minegishi': 'https://gouki510.github.io/',
      'Yoko Yamakata': 'https://www.hal.t.u-tokyo.ac.jp/',
    },
    venue: 'Preprint',
    venueShort: 'Preprint',
    year: 2026,
    type: 'preprint',
    isFirstAuthor: true,
    thumbnail: '/research/paper/anosognosia-in-llms.png',
    abstract: 'Can LLMs recognize degradation in their own computational substrate? Inspired by anosognosia, a neurological condition in which patients fail to recognize impairments in their own abilities, we investigate whether LLMs can recognize degradation in their computational substrate induced by quantization. We first show that existing models fail to self-report their quantization state, even when provided with their own generated text as an external cue. Linear probing reveals that, while generated text carries almost no trace of quantization, internal representations contain clear, method-specific fingerprints. Through training, models learn to identify severely degraded outputs such as those of 4-bit models by comparison, yet still fail to do so from a single output. A shared LoRA trained jointly across quantization levels succeeded in reading out internal fingerprints, but fails on unseen quantization methods, merely mapping method-specific fingerprints to labels. Whereas external self-observation can restore awareness in some cases of human anosognosia, our results suggest that the more promising route to enabling such awareness in LLMs may lie in their internal representations. Our results highlight fundamental limits of generalizability to LLM self-monitoring.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2610.06174' },
      { label: 'Code', url: 'https://github.com/Omusubi0123/llm-anosognosia' },
    ],
  }
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

export const educationEn: Education[] = [
  {
    id: 'ist-master',
    degree: "Master's Program",
    department: 'Graduate School of Information Science and Technology',
    institution: 'The University of Tokyo',
    lab: 'Yamakata Laboratory',
    institutionUrl: 'https://www.u-tokyo.ac.jp/en/',
    departmentUrl: 'https://www.i.u-tokyo.ac.jp/index_e.shtml',
    labUrl: 'https://www.hal.t.u-tokyo.ac.jp/',
    period: '2026.4 - Present',
    current: true,
  },
  {
    id: 'eeic-bachelor',
    degree: "Bachelor's Program",
    department: 'Department of Electrical Engineering and Information Systems',
    institution: 'The University of Tokyo',
    lab: 'Taura Laboratory',
    institutionUrl: 'https://www.u-tokyo.ac.jp/en/',
    departmentUrl: 'https://www.ee.t.u-tokyo.ac.jp/en/',
    labUrl: 'https://www.eidos.ic.i.u-tokyo.ac.jp/',
    period: '2022.4 - 2026.3',
    current: false,
  },
]

export const presentationsEn: Presentation[] = [
  {
    id: 'rinko-261023-survey-presentation',
    title: 'LLM and Agent Safety: Challenges and Current Research Directions',
    event: 'Seminar',
    date: '2026',
    thumbnail: '/research/presentation/rinko-261023-survey.png',
    pdfUrl: '/research/presentation/rinko-261023-survey.pdf',
    tags: ['AI Safety', 'LLM', 'Agent'],
    description: 'This presentation was given during a seminar in my master\'s program. I surveyed the latest research trends on AI safety, particularly focusing on the surging concerns regarding cyberattacks and runaway of agents. The presentation, delivered on October 23, 2026, outlines the challenges associated with LLM and agent safety and introduces current research directions aimed at addressing these issues.',
  },
  {
    id: 'anosognosia-in-llms-presentation',
    title: 'Anosognosia in LLMs: Probing Self-Awareness of Quantized Computational Substrate',
    event: 'Research Presentation',
    date: '2026',
    thumbnail: '/research/presentation/anosognosia-in-llms-slide.png',
    pdfUrl: '/research/presentation/anosognosia-in-llms-slide.pdf',
    tags: ['LLM', 'Mechanistic Interpretability', 'Quantization'],
    description: 'This paper investigates whether LLMs can recognize degradation in their own computational substrate (i.e., quantization). It demonstrates that while existing LLMs cannot identify their quantization status through self-reporting, distinguishable differences exist within their internal states, which can be read out through additional training. However, this readout merely maps these internal state differences to answer labels, failing to generalize to other quantization techniques.',
  },
  {
    id: 'style-modulation-head-presentation',
    title: 'Steering at the Source: Style Modulation Heads for Robust Persona Control',
    event: 'Research Presentation',
    date: '2026',
    thumbnail: '/research/presentation/style-modulation-head-slide.png',
    pdfUrl: '/research/presentation/style-modulation-head-slide.pdf',
    tags: ['LLM', 'Mechanistic Interpretability', 'Activation Steering', 'Persona Vector'],
    description: 'This paper addresses the performance degradation issue in Activation Steering, a technique that controls LLM behavior by intervening in its internal states. Focusing on LLM personality (persona) as the target trait for control, the authors analyzed internal representations and discovered that personas are formed within three heads of specific attention layers, which they named "Style Modulation Heads." By intervening solely in the source layer generating the relevant information, the proposed approach successfully controls model behavior while mitigating performance degradation.',
  },
  {
    id: 'introspective-awareness',
    title: 'Emergent Introspective Awareness in Large Language Models',
    event: 'Research Presentation',
    date: '2025',
    thumbnail: '/research/presentation/introspective-awareness.png',
    pdfUrl: '/research/presentation/introspective-awareness.pdf',
    tags: ['LLM', 'Mechanistic Interpretability', 'Introspection'],
    description: 'This is the content presented at the Taura Laboratory seminar in 2025. Among the papers read that year, this one was particularly interesting. It introduces a paper on how LLMs can develop introspective awareness (self-awareness) and identify concepts that have been injected into their internal states. This single-authored paper by Jack Lindsey from Anthropic is very intriguing.',
  },
  {
    id: 'spring-training-mpi',
    title: 'MPI (Spring Training 2025)',
    event: 'Technical Presentation',
    date: '2025',
    thumbnail: '/research/presentation/spring-training-mpi.png',
    pdfUrl: '/research/presentation/spring-training-mpi.pdf',
    tags: ['HPC', 'MPI', 'Parallel Computing'],
    description: 'This is the content presented at the Taura Laboratory Spring Training in 2025. The Spring Training is an annual event where new members of the lab present technical knowledge related to their research fields. This presentation covered the fundamentals of MPI, a key technology in high-performance computing, including its overview and practical examples of parallel computing implementations.',
  }
]
