import Section from './Section';

export default function About() {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-red-100"
    >
      <img src="/images/my-icon.png" alt="My Icon" className="w-32 h-32 rounded-full mx-auto" />
      <p className="mt-4 text-lg text-center">
        こんにちは！私はWeb開発に情熱を持つエンジニアです。
      </p>
    </Section>
  );
};
