import Section from './Section';

export default function Skills() {
  const mainSkills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Transformers', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'},
    { name: 'PyTorch', icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg'},
  ];

  const backendSkills = [
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'Firestore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg' },
  ];

  const infraSkills = [
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg' },
  ];

  const frontendSkills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
  ];

   return (
    <Section id="skills" title="Skills" className="bg-transparent flex justify-center py-8">
      <div className="w-full max-w-5xl px-4">
        {[
          { title: 'Main', skills: mainSkills },
          { title: 'Backend + DB', skills: backendSkills },
          { title: 'Infra + Network', skills: infraSkills },
          { title: 'Frontend', skills: frontendSkills },
        ].map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center space-y-2 p-4 bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                  <span className="text-sm sm:text-base md:text-lg font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
