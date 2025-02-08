import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiHuggingface, SiFastapi, SiRobotframework } from "react-icons/si";

interface InterestItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  observerRef: (el: HTMLDivElement | null) => void;
}

const InterestItem: React.FC<InterestItemProps> = ({ icon, name, description, isActive, onClick, observerRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative interest-item"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={onClick}
      ref={observerRef} // IntersectionObserver 用
    >
      <motion.div
        className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
        <span>{name}</span>
      </motion.div>
      <AnimatePresence>
        {((isMobile && isActive) || (!isMobile && isHovered)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 bottom-full mb-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-64 max-w-full"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const interestsData = [
  {
    icon: <SiHuggingface className="text-2xl text-pink-500" />,
    name: "AI Engineer",
    description: "Specializing in developing and implementing cutting-edge AI models and algorithms.",
  },
  {
    icon: <SiFastapi className="text-2xl text-blue-600" />,
    name: "Backend Engineer",
    description: "Building robust and scalable server-side applications and APIs.",
  },
  {
    icon: <SiRobotframework className="text-2xl text-green-600" />,
    name: "Research & Development",
    description: "Exploring new technologies and methodologies to drive innovation in software development.",
  },
];

const Interests: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInterestClick = (index: number) => {
    if (isMobile) {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) {
            setActiveIndex((prevIndex) => (prevIndex === index ? null : prevIndex));
          }
        });
      },
      { threshold: 0 } // 0% が見えなくなったら発火
    );

    observerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [observerRefs]);

  return (
    <motion.div
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {interestsData.map((interest, index) => (
        <InterestItem
          key={index}
          {...interest}
          isActive={activeIndex === index}
          onClick={() => handleInterestClick(index)}
          observerRef={(el: HTMLDivElement | null) => (observerRefs.current[index] = el)} // 各要素を ref に格納
        />
      ))}
    </motion.div>
  );
};

export default Interests;
