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
  containerRef: (el: HTMLDivElement | null) => void;
}

const InterestItem: React.FC<InterestItemProps> = ({
  icon,
  name,
  description,
  isActive,
  onClick,
  observerRef,
  containerRef,
}) => {
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
            className="absolute z-10 bottom-full mb-2 p-4 bg-white dark:bg-black rounded-lg shadow-xl w-64 max-w-full"
            ref={containerRef}
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
      icon: <SiHuggingface className="text-2xl text-red-600" />,
      name: "AI Engineer",
      description: "モデル開発楽しい 進化が速すぎて仕事にするのには不安もある…でもやっぱり好きなので仕事にしたいかも…",
    },
    {
      icon: <SiFastapi className="text-2xl text-blue-600" />,
      name: "Backend Engineer",
      description: "APIやDBの開発楽しい 個人開発の経験はあるが実務は未経験",
    },
    {
      icon: <SiRobotframework className="text-2xl text-green-600" />,
      name: "Research & Development",
      description: "研究開発好き D進は悩み中…",
    },
  ];

const Interests: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const popupRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0 }
    );

    observerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [observerRefs]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeIndex !== null) {
        const isClickInside = observerRefs.current[activeIndex]?.contains(event.target as Node) ||
                              popupRefs.current[activeIndex]?.contains(event.target as Node);
        if (!isClickInside) {
          setActiveIndex(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeIndex]);

  return (
    <motion.div
      className="flex flex-wrap gap-4 justify-center"
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
          containerRef={(el: HTMLDivElement | null) => (popupRefs.current[index] = el)} // ポップアップ部分を ref に格納
        />
      ))}
    </motion.div>
  );
};

export default Interests;
