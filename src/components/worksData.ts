import { Work } from './types';

export const works: Work[] = [
  {
    id: 1,
    title: 'にほんGO UP APP',
    description: `UMP-JUSTが主催する生成AIハッカソンでの作品です．外国人労働者の日本語学習を支援するためのサービスを作成しました．
    backendの開発を担当しました．
    ハッカソンへの参加は初めてでしたが，非常に優秀なメンバーのおかげで技術賞とcotomi賞を受賞することができました．
    継続開発を行いデプロイしたいと考えています．`,
    media: '/nihon_go_up_app.png',
    isVideo: false,
    link: 'https://nihon-go-up-app.vercel.app/',
    github: 'https://github.com/Omusubi0123/nihon-go-up-app',
    my_skills: ['FastAPI', 'Azure AI Search', 'Amazon Bedrock', 'cotomi API'],
    other_skills: ['TypeScript', 'React', 'Vite', 'Docker', 'Google Cloud Platform', 'Vercel'],
  },
  {
    id: 2,
    title: 'ネットレンド',
    description: `大学の「情報可視化とデータ分析」実験演習にて作成したWebアプリです．
    ニコニコ動画データセットを解析し，2007年~2021年のネットの流行を可視化しました．
    frontendの開発はこれが初めてで，D3以外のライブラリやフレームワークを使用せずに開発したことで基礎技術への理解が深まりました．
    3人チームで作成し，「画面3」を担当しました．
    実験最終回に行われたプレゼンの結果，Well Implimented Award を受賞することができました．`,
    media: '/netrend.png',
    isVideo: false,
    link: 'https://netrend.vercel.app/',
    my_skills: ['HTML', 'CSS', 'JavaScript', 'D3.js', 'FastAPI', 'Docker', 'Cloudflare tunnel'],
  },
  {
    id: 3,
    title: 'Life DiaLog',
    description: `JP HACKSが主催する2024年のハッカソンでの作品です．日々の記録し人生と対話する，をコンセプトとした「Life DiaLog」というサービスを作成しました．
    LINEから日々の出来事をリアルタイムで登録し，毎日の記録を検索しながらAIと対話することで人生を振り返るサービスです．
    backendの開発を担当しました．
    開発期間は2日間でしたが，非常に優秀なメンバーのおかげで企業賞3つを受賞することができました．
    ハッカソン終了後にDB等のサービスを変更して自分用にデプロイしており，今でも愛用しています．`,
    media: '/life_dialog.png',
    isVideo: false,
    link: 'https://life-dialog.vercel.app/',
    github: 'https://github.com/Omusubi0123/life-dialog',
    my_skills: ['FastAPI', 'LINE Messaging API', 'Firebase Firestore', 'Azure AI Search', 'OpenAI API'],
    other_skills: ['TypeScript', 'React', 'Vite', 'Docker', 'Google Cloud Platform','Vercel'],
    cd_skills: ['PostgreSQL', 'pgvector', 'docker-compose', 'Cloudflare tunnel', '(自宅サーバー)'],
  },
];
