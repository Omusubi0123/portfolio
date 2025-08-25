import { Work } from './types';

export const works: Work[] = [
  {
    id: 1,
    title: 'にほんGO UP APP',
    description: `UMP-JUSTが主催する生成AIハッカソンでの作品です．外国人労働者の日本語学習を支援するためのサービスを作成しました．
    backendの開発を担当しました．
    ハッカソンへの参加は初めてでしたが，非常に優秀なメンバーのおかげで技術賞とcotomi賞を受賞することができました．
    2日間のハッカソンでは実装が間に合わなかった部分もあり，今後も継続開発したいと考えています．
    サービスを少し変えて自分用にデプロイしています．`,
    media: '/nihon_go_up_app.png',
    isVideo: false,
    link: 'https://nihon-go-up-app.vercel.app/',
    github: 'https://github.com/Omusubi0123/nihon-go-up-app',
    slide: 'https://drive.google.com/file/d/1P33v6AeTH96daZJ3wcWP9QqZngSPy6jZ/view?usp=drive_link',
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
    slide: 'https://drive.google.com/file/d/1_c_UpaC5FZLKqLnIgGXogtvzW3njUhXl/view?usp=drive_link',
    my_skills: ['HTML', 'CSS', 'JavaScript', 'D3.js', 'FastAPI', 'Docker', 'Cloudflare tunnel'],
  },
  {
    id: 3,
    title: 'Life DiaLog',
    description: `JP HACKSが主催する2024年のハッカソンでの作品です．日々の記録し人生と対話する，をコンセプトとした「Life DiaLog」というサービスを作成しました．
    LINEから日々の出来事をリアルタイムで登録し，毎日の記録を検索しながらAIと対話することで人生を振り返るサービスです．
    backendの開発を担当しました．
    開発期間は2日間でしたが，非常に優秀なメンバーのおかげで企業賞3つを受賞することができました．
    ハッカソン終了後にDB等のサービスを変更して自分用にデプロイしており，毎日愛用しています．
    日記検索アルゴリズムをpgvector + elasticsearchのhybrid検索に変更したり，セキュリティを高めるためにGoogle OAuthを導入したりしました．`,
    media: '/life_dialog.png',
    isVideo: false,
    link: 'https://page.line.me/900crthd',
    github: 'https://github.com/Omusubi0123/life-dialog',
    my_skills: ['FastAPI', 'LINE Messaging API', 'Firebase Firestore', 'Azure AI Search', 'OpenAI API'],
    other_skills: ['TypeScript', 'React', 'Vite', 'Docker', 'Google Cloud Platform','Vercel'],
    cd_skills: ['PostgreSQL', 'pgvector', 'elasticsearch', 'Google OAuth', 'docker-compose', 'Cloudflare tunnel', '(自宅サーバー)'],
  },
  {
    id: 4,
    title: 'My Portfolio',
    description: `このサイトです．
    Typescript, Reactは使用経験がなかったので，勉強を兼ねてPortfolio的なサイトを作成しました．
    PCとスマホの両方に対応（レスポンシブ対応）するよう工夫しました．色使いやアニメーションなどデザインや細部にこだわりを持って作っています．
    AIに書いてもらったコードを理解しながらcomponentを繋ぎ合わせていく，という進め方で勉強しました．
    幼少期からの夢の1つ「自分のホームページを持つ」が叶いうれしいです．`,
    media: '/portfolio.png',
    isVideo: false,
    link: 'https://www.omusubiy.com/',
    github: 'https://github.com/Omusubi0123/portfolio',
    my_skills: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'three.js', 'GIthub Pages'],
  },
  {
    id: 5,
    title: 'Therapystoy',
    description: `東京大学×SoftBank『UGIP Data Hackathon 2025』にて開発した作品です．
    近年深刻化する子どものメンタルヘルスを解決するため，AIを搭載したぬいぐるみを使って子どもをサポートするシステムを開発しました．
    AIぬいぐるみでは，ぬいぐるみの中にRaspberry Piを搭載し，医療文書のRAGを含めたSpeech-to-Speechの機能を作成しました．
    また，他メンバーが会話記録を基に子どもの性格・メンタルヘルスを分析し，保護者にフィードバックする機能を作成しました．
    ビジネス色の強いハッカソンは初参加で，ビジネスモデル考案やピッチ用スライド作成に特に力を入れて取り組みました．
    AIぬいぐるみのmodel, backendの開発を担当し，強力なメンバーのおかげで3位入賞することができました．`,
    media: '/therapystoy.png',
    isVideo: false,
    link: 'https://www.youtube.com/watch?v=n6q0AeKy2mY',
    github: 'https://github.com/DeepMIC-2025ugip',
    slide: 'https://drive.google.com/file/d/1J0I7bYlILijSkyLgA2QXjBJBqrzJXirP/view?usp=drive_link',
    my_skills: ['Raspberry Pi', 'FastAPI', 'PostgreSQL', 'Azure AI Search', 'OpenAI API', 'Speech Recognotion'],
    other_skills: ['TypeScript', 'React', 'Next.js', 'AWS(ECS, ALB, RDB)', 'Github Actions'],
  },
  {
    id: 6,
    title: '自宅サーバー',
    description: `ミニPCにUbuntu-Serverをインストールし，自宅サーバーを構築しました．
    「Works」のbackendはこのサーバーで運用しています．
    自宅サーバーでのbackendサービスデプロイの方法は以下の記事にまとめています．
    また，HDを接続してNASサーバーとしても運用しています．`,
    media: '/home_server.png',
    link: 'https://qiita.com/Omusubi0123/items/216968e23b13f35a90a1',
    isVideo: false,
  },
];
