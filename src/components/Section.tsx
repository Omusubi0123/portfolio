import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
  titleColor?: string;
}

export default function Section({ id, title, className, width, height, children, titleColor }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center items-center ${className || ''}`}
      style={{ width: width || '100%', height: height || 'auto', minHeight: '100vh' }}
    >
      <div className="bg-white/2 p-2 rounded-lg">
        <h2 className={`text-4xl font-bold text-center mb-8 ios-white ${titleColor || 'ios-white-text'}`} style={{ fontFamily: "Georgia, 'Caveat', cursive" }}>{title}</h2>
        <div className="w-full max-w-7xl text-white">{children}</div>
      </div>
    </section>
  );
};
