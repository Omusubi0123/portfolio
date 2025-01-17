import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, className, width, height, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center items-center ${className || ''}`}
      style={{ width: width || '100%', height: height || 'auto', minHeight: '100vh' }}
    >
      <div className="bg-white/50 p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        <div className="w-full max-w-7xl">{children}</div>
      </div>
    </section>
  );
};
