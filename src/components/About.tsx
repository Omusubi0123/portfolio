"use client"

import type React from "react"
import Section from "./Section"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si"

const About = () => {
  return (
    <Section id="about" title="About Me" className="bg-transparent flex justify-center py-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white-500/10 via-pink-500/20 to-cyan-500/20"></div>
        <Particles />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a href="https://github.com/Omusubi0123" target="_blank" rel="noopener noreferrer" className="relative block">
            <img src="/icon.png" alt="Icon" className="w-60 h-60 rounded-full" />
          </a>
        </motion.div>

        <div className="max-w-lg">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Izawa
          </motion.h1>
          <motion.p
            className="text-lg mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Passionate full-stack developer with a keen eye for design and a love for creating seamless user
            experiences. Constantly exploring new technologies and pushing the boundaries of what's possible in web
            development.
          </motion.p>
          <motion.div
            className="flex space-x-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://github.com/Omusubi0123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Interest icon={<SiJavascript />} name="AI Engineer" />
            <Interest icon={<SiTypescript />} name="Backend Engineer" />
            <Interest icon={<SiReact />} name="Research & Development" />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

const Interest = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
    {icon}
    <span>{name}</span>
  </div>
)

const Particles = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-20 animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </>
)

export default About



// import Section from './Section';

// export default function About() {
//   return (
//     <Section 
//       id="about" 
//       title="About Me" 
//       className="bg-transparent flex justify-center py-8"
//     >
//       <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* 左側の列 */}
//         <div className="flex flex-col items-center text-center">
//           <a href="https://github.com/Omusubi0123" target="_blank" rel="noopener noreferrer">
//             <img 
//               src="/icon.png" 
//               alt="Icon" 
//               className="w-60 h-60 rounded-full mb-8"
//             />
//           </a>
//           <p className="text-lg font-medium">
//             いざわ
//             <br />東京大学工学部 電子情報工学科3年
//           </p>
//         </div>

//         {/* 右側の列 */}
//         <div className="overflow-y-auto h-[30rem] p-6 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl rounded-lg">
//           <h2 className="text-xl font-bold mb-4 text-center">これまでの経歴</h2>
//           <ul className="list-disc list-inside text-base leading-loose text-left">
//             <li className="border-b border-gray-300 pb-2">2020年: 大学卒業 (コンピュータサイエンス専攻)</li>
//             <li className="border-b border-gray-300 pb-2">2021年: Webエンジニアとしてキャリアをスタート</li>
//             <li className="border-b border-gray-300 pb-2">2022年: フリーランスとして多くのプロジェクトに参画</li>
//             <li className="border-b border-gray-300 pb-2">2023年: 新しい技術スタックの導入とチームリーダーとしての経験</li>
//             <li className="border-b border-gray-300 pb-2">2024年: 大規模プロジェクトの成功とクライアントからの高評価</li>
//             <li className="border-b border-gray-300 pb-2">2025年: 技術ブログの開始とコミュニティへの貢献</li>
//             <li className="border-b border-gray-300 pb-2">2026年: オープンソースプロジェクトへの参加とコントリビューション</li>
//             <li className="border-b border-gray-300 pb-2">2027年: 新しいスタートアップの立ち上げと成功</li>
//             <li className="border-b border-gray-300 pb-2">2028年: 複数の技術カンファレンスでの講演</li>
//             <li className="border-b border-gray-300 pb-2">2029年: 技術書の執筆と出版</li>
//             <li className="border-b border-gray-300 pb-2">2030年: グローバルな技術コミュニティでのリーダーシップ</li>
//             <li className="border-b border-gray-300 pb-2">2031年: 次世代のエンジニア育成プログラムの開始</li>
//             <li>現在: ReactとNode.jsを中心に開発</li>
//             <li>2032年: 継続的な学習と自己成長</li>
//           </ul>
//         </div>
//       </div>
//     </Section>
//   );
// }
