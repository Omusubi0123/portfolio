import Section from './Section';

export default function About() {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-gray-300 flex justify-center py-8"
    >
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 左側の列 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/icon.png" 
            alt="Icon" 
            className="w-80 h-80 rounded-full mb-8"
          />
          <p className="text-xl font-medium">
            いざわ
            <br />東京大学工学部 電子情報工学科3年
          </p>
        </div>

        {/* 右側の列 */}
        <div className="overflow-y-auto h-[44rem] p-6 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">これまでの経歴</h2>
          <ul className="list-disc list-inside text-xl leading-loose text-left">
            <li className="border-b border-gray-300 pb-2">2020年: 大学卒業 (コンピュータサイエンス専攻)</li>
            <li className="border-b border-gray-300 pb-2">2021年: Webエンジニアとしてキャリアをスタート</li>
            <li className="border-b border-gray-300 pb-2">2022年: フリーランスとして多くのプロジェクトに参画</li>
            <li className="border-b border-gray-300 pb-2">2023年: 新しい技術スタックの導入とチームリーダーとしての経験</li>
            <li className="border-b border-gray-300 pb-2">2024年: 大規模プロジェクトの成功とクライアントからの高評価</li>
            <li className="border-b border-gray-300 pb-2">2025年: 技術ブログの開始とコミュニティへの貢献</li>
            <li className="border-b border-gray-300 pb-2">2026年: オープンソースプロジェクトへの参加とコントリビューション</li>
            <li className="border-b border-gray-300 pb-2">2027年: 新しいスタートアップの立ち上げと成功</li>
            <li className="border-b border-gray-300 pb-2">2028年: 複数の技術カンファレンスでの講演</li>
            <li className="border-b border-gray-300 pb-2">2029年: 技術書の執筆と出版</li>
            <li className="border-b border-gray-300 pb-2">2030年: グローバルな技術コミュニティでのリーダーシップ</li>
            <li className="border-b border-gray-300 pb-2">2031年: 次世代のエンジニア育成プログラムの開始</li>
            <li>現在: ReactとNode.jsを中心に開発</li>
            <li>2032年: 継続的な学習と自己成長</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
