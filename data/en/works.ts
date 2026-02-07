import type { Work } from '@/components/Works/types'

export const worksEn: Work[] = [
  {
    id: 1,
    title: 'Nihon GO UP APP',
    description: `A project from a generative AI hackathon hosted by UMP-JUST. We built a service to support Japanese language learning for foreign workers.
    I was in charge of backend development.
    It was my first hackathon, and thanks to a strong team we won the Technical Award and the cotomi Award.
    Some features were left unfinished in the two-day event, and I hope to continue developing the service.
    I have deployed a slightly modified version for my own use.`,
    media: '/nihon_go_up_app.png',
    isVideo: false,
    link: 'https://nihon-go-up-app.vercel.app/',
    github: 'https://github.com/Omusubi0123/nihon-go-up-app',
    slide: 'https://drive.google.com/file/d/1P33v6AeTH96daZJ3wcWP9QqZngSPy6jZ/view?usp=drive_link',
    my_skills: ['FastAPI', 'Azure AI Search', 'Amazon Bedrock', 'cotomi API'],
    other_skills: ['TypeScript', 'React', 'Vite', 'Docker', 'Google Cloud Platform', 'Vercel'],
  },
  {
    id: 2,
    title: 'Netrend',
    description: `A web app I built for a university lab course on information visualization and data analysis.
    We analyzed a Niconico video dataset and visualized internet trends from 2007 to 2021.
    This was my first time developing a frontend; building it with D3 only (no other frameworks) deepened my understanding of the basics.
    Our team of three built the app; I was responsible for "Screen 3."
    We received the Well Implemented Award at the final presentation.`,
    media: '/netrend.png',
    isVideo: false,
    link: 'https://netrend.vercel.app/',
    slide: 'https://drive.google.com/file/d/1_c_UpaC5FZLKqLnIgGXogtvzW3njUhXl/view?usp=drive_link',
    my_skills: ['HTML', 'CSS', 'JavaScript', 'D3.js', 'FastAPI', 'Docker', 'Cloudflare tunnel'],
  },
  {
    id: 3,
    title: 'Life DiaLog',
    description: `A project from the 2024 JP HACKS hackathon. We created "Life DiaLog," a service based on the idea of recording daily life and having a dialogue with it.
    Users register daily events in real time via LINE and look back on their life by searching past entries and talking with AI.
    I was in charge of backend development.
    Despite a two-day development period, we won three corporate awards thanks to a strong team.
    After the hackathon I changed the DB and other services and deployed my own version; I use it every day.
    I later improved the diary search with a pgvector + Elasticsearch hybrid search and added Google OAuth for security.`,
    media: '/life_dialog.png',
    isVideo: false,
    link: 'https://page.line.me/900crthd',
    github: 'https://github.com/Omusubi0123/life-dialog',
    my_skills: ['FastAPI', 'LINE Messaging API', 'Firebase Firestore', 'Azure AI Search', 'OpenAI API'],
    other_skills: ['TypeScript', 'React', 'Vite', 'Docker', 'Google Cloud Platform', 'Vercel'],
    cd_skills: ['PostgreSQL', 'pgvector', 'elasticsearch', 'Google OAuth', 'docker-compose', 'Cloudflare tunnel', '(home server)'],
  },
  {
    id: 4,
    title: 'My Portfolio',
    description: `This website.
    I had no prior experience with TypeScript or React, so I built this portfolio site as a learning project.
    I focused on making it responsive for both desktop and mobile, and paid attention to colors, animation, and detail.
    I learned by understanding AI-generated code and connecting components step by step.
    Having my own homepage was a long-held dream, and I'm glad it's now a reality.`,
    media: '/portfolio.png',
    isVideo: false,
    link: 'https://www.omusubiy.com/',
    github: 'https://github.com/Omusubi0123/portfolio',
    my_skills: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'three.js', 'Github Pages'],
  },
  {
    id: 5,
    title: 'Therapystoy',
    description: `A project developed at the University of Tokyo × SoftBank "UGIP Data Hackathon 2025."
    We built a system that uses an AI-powered stuffed toy to support children's mental health.
    For the AI toy, we embedded a Raspberry Pi and implemented Speech-to-Speech including RAG over medical documents.
    Other team members built features to analyze children's personality and mental state from conversation logs and give feedback to parents.
    It was my first business-focused hackathon; I put particular effort into the business model and pitch slides.
    I was responsible for the AI toy model and backend; we placed 3rd thanks to a strong team.`,
    media: '/therapystoy.png',
    isVideo: false,
    link: 'https://www.youtube.com/watch?v=n6q0AeKy2mY',
    github: 'https://github.com/DeepMIC-2025ugip',
    slide: 'https://drive.google.com/file/d/1J0I7bYlILijSkyLgA2QXjBJBqrzJXirP/view?usp=drive_link',
    my_skills: ['Raspberry Pi', 'FastAPI', 'PostgreSQL', 'Azure AI Search', 'OpenAI API', 'Speech Recognition'],
    other_skills: ['TypeScript', 'React', 'Next.js', 'AWS(ECS, ALB, RDB)', 'Github Actions'],
  },
  {
    id: 6,
    title: 'Home Server',
    description: `I set up a home server by installing Ubuntu Server on a mini PC.
    The backend for "Works" runs on this server.
    I wrote about how I deploy backend services on the home server in the article linked below.
    I also use it as a NAS by connecting an external HDD.`,
    media: '/home_server.png',
    link: 'https://qiita.com/Omusubi0123/items/216968e23b13f35a90a1',
    isVideo: false,
  },
]
