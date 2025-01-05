import Section from './Section';

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      width="100%" 
      height="auto"
    >
      <img src="/images/my-icon.png" alt="My Icon" className="w-32 h-32 rounded-full mx-auto" />
      <p className="mt-4 text-lg text-center">
        こんにちは！私はWeb開発に情熱を持つエンジニアです。
      </p>
    </Section>
  );
};

export default About;
