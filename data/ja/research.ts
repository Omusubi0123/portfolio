import type { Publication, Award, Presentation, Education } from '../types'

export const publicationsJa: Publication[] = [
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
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=r6EuKr1hq4' },
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
    institutionUrl: 'https://www.u-tokyo.ac.jp/ja/',
    departmentUrl: 'https://www.i.u-tokyo.ac.jp/',
    labUrl: 'https://www.hal.t.u-tokyo.ac.jp/',
    period: '2026.4 - 現在',
    current: true,
  },
  {
    id: 'eeic-bachelor',
    degree: '学士課程',
    department: '工学部 電子情報工学科',
    institution: '東京大学',
    lab: '田浦研究室',
    institutionUrl: 'https://www.u-tokyo.ac.jp/ja/',
    departmentUrl: 'https://www.ee.t.u-tokyo.ac.jp/',
    labUrl: 'https://www.eidos.ic.i.u-tokyo.ac.jp/',
    period: '2023.4 - 2026.3',
    current: false,
  },
]

export const presentationsJa: Presentation[] = [
  {
    id: 'rinko-261023-survey-presentation',
    title: 'LLM, Agentの安全性に関する課題と解決に向けた研究動向',
    event: '輪講',
    date: '2026',
    thumbnail: '/research/presentation/rinko-261023-survey.png',
    pdfUrl: '/research/presentation/rinko-261023-survey.pdf',
    tags: ['Survey', 'AI Safety', 'LLM', 'Agent'],
    description: '（修士時代の大学院の輪講でのサーベイ発表です）2026年下半期に入り深刻化するAIの安全性（サイバー攻撃、Agentの暴走）について、2026年10月23日当時の最前線の研究動向をサーベイした内容です。LLMやAgentの安全性に関する課題を整理し、解決に向けた研究動向を紹介しました。',
  },
  {
    id: 'anosognosia-in-llms-presentation',
    title: 'Anosognosia in LLMs: Probing Self-Awareness of Quantized Computational Substrate',
    event: '論文解説',
    date: '2026',
    thumbnail: '/research/presentation/anosognosia-in-llms-slide.png',
    pdfUrl: '/research/presentation/anosognosia-in-llms-slide.pdf',
    tags: ['LLM', 'Mechanistic Interpretability', 'Quantization'],
    description: '（修士時代に取り組んだ研究の解説スライドです）LLMが自身の計算基盤の劣化（量子化）を認識することができるか、という論文。既存のLLMはSelf-Reportで量子化状態を認識できないが、内部状態では識別可能な差が存在しており、追加学習によりこの差分の読み出しが可能であることを示した。一方で、この読出しは内部状態の差を回答ラベルにマッピングしたものであり、他の量子化手法には汎化しない。',
  },
  {
    id: 'style-modulation-head-presentation',
    title: 'Steering at the Source: Style Modulation Heads for Robust Persona Control',
    event: '論文解説',
    date: '2026',
    thumbnail: '/research/presentation/style-modulation-head-slide.png',
    pdfUrl: '/research/presentation/style-modulation-head-slide.pdf',
    tags: ['LLM', 'Mechanistic Interpretability', 'Activation Steering', 'Persona Vector'],
    description: '（学部の卒論の解説スライドです）LLMの内部状態に介入することで振る舞いを制御するActivation Steeringにおける性能低下の問題に取り組んだ論文。制御する特性としてLLMの人格（ペルソナ）に着目し、内部状態の解析を通じてペルソナは特定のAttention層の3つのヘッドで形成されていることを発見した（Style Modulation Headsと命名）。情報源の生成元にのみ介入することで性能低下を抑制しつつ振る舞いを制御可能にした。',
  },
  {
    id: 'introspective-awareness',
    title: 'Emergent Introspective Awareness in Large Language Models',
    event: '論文解説',
    date: '2025',
    thumbnail: '/research/presentation/introspective-awareness.png',
    pdfUrl: '/research/presentation/introspective-awareness.pdf',
    tags: ['LLM', 'Mechanistic Interpretability', 'Introspection'],
    description: '田浦研究室での輪読会で発表した内容です。2025年度に読んだ論文の中でも3本の指に入る面白さだったこの論文を紹介しました。LLMが自身の内部状態への介入に気付くことができ（内省）、どのような概念が注入されたかもある程度特定できるという論文です。AnthropicのJack Lindseyによる単著論文で、非常に興味深い内容でした。',
  },
  {
    id: 'spring-training-mpi',
    title: 'MPI (Spring Training 2025)',
    event: '技術解説',
    date: '2025',
    thumbnail: '/research/presentation/spring-training-mpi.png',
    pdfUrl: '/research/presentation/spring-training-mpi.pdf',
    tags: ['HPC', 'MPI', 'Parallel Computing'],
    description: '田浦研究室のSpring Training（毎年5月に行われる、新人が研究室の研究分野に関する技術を解説する催し）で発表した内容です。HPCの基礎技術であるMPIについて、MPIの概要から、MPIを用いた並列計算の実装例までを解説しました。HPCの知識は浅かったですが、スライドにまとめる中で理解を深めることができました。',
  }
]
