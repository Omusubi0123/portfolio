import Section from './Section';

export default function Certifications() {
  const certifications = [
    'Certified Kubernetes Administrator (CKA)',
    'AWS Certified Solutions Architect – Associate',
    'Google Cloud Professional Data Engineer',
    'TOEIC 800+',
  ];

  return (
    <Section 
      id="certifications" 
      title="Certifications" 
      className="bg-transparent flex justify-center py-8"
    >
      <ul className="list-disc text-lg">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-2">
            {cert}
          </li>
        ))}
      </ul>
    </Section>
  );
};
