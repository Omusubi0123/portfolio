import React from 'react';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
      <div className="w-full max-w-4xl">{children}</div>
    </section>
  );
};

export default Section;
