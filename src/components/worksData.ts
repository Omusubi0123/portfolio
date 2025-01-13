import { Work } from './types';

export const works: Work[] = [
  {
    id: 1,
    title: 'にほんGO UP APP',
    description: `UMP-JUSTの生成AIハッカソンでの作品です．外国人労働者の日本語学習を支援するためのサービスを作成しました．
    ハッカソンには初めて参加しましたが，優秀なチームメイトと協力して技術賞とcotomi賞を受賞することができました．
    継続開発を行いデプロイしたいと考えています．`,
    media: '/nihon_go_up_app.png',
    isVideo: false,
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'ネットレンド',
    description: 'ネット上のトレンド情報を簡単に確認できるウェブアプリ。',
    media: '/netrend.png',
    isVideo: false,
    link: 'https://netrend.vercel.app/',
  },
  {
    id: 3,
    title: 'Life DiaLog',
    description: 'ライフログを記録し、振り返りができるアプリです。',
    media: '/life_dialog.png',
    isVideo: false,
    link: 'https://life-dialog.vercel.app/',
  },
  {
    id: 4,
    title: 'プロジェクトB',
    description: '革新的なプロジェクト管理ツール。',
    media: '/project_b_demo.mp4',
    isVideo: true,
    link: '',
  },
];
