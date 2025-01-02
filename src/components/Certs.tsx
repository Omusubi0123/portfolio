import React from 'react';

const Certs: React.FC = () => {
  const certifications = [
    'Certified Kubernetes Administrator (CKA)',
    'AWS Certified Solutions Architect – Associate',
    'Google Cloud Professional Data Engineer',
    'TOEIC 900+',
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-8">Certifications</h2>
      <ul className="list-disc text-lg">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-2">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certs;
