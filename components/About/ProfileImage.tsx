import type React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const ProfileImage: React.FC = () => {
  const locale = useLocale()
  const displayName = locale === "ja" ? "井澤慶広" : "yoshihiro izawa"

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative group flex flex-col items-center mt-20"
  >
    {/* 背景色と枠線用の div */}
    <div className="relative p-2 rounded-full bg-gradient-to-r from-[#B39855] via-[#E0E0E0] to-[#B39855] transform transition-transform duration-300 hover:scale-105">
      <a
        href="https://github.com/Omusubi0123"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
      >
        <img
          src="/profile_icon.png"
          alt="Icon"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-white brightness-95 transition-filter duration-300 hover:brightness-100"
        />
      </a>
    </div>

    {/* 名前のグラデーション */}
    <motion.h1
      className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B39855] via-[#E0E0E0] to-[#B39855]"
      style={{
        fontFamily: locale === "ja"
          ? '"Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif'
          : "Georgia, 'Caveat', cursive",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayName}
    </motion.h1>
    </motion.div>
  )
};

export default ProfileImage;
