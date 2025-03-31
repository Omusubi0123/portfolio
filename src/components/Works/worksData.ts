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
    ハッカソン終了後にDB等のサービスを変更して自分用にデプロイしており，毎日愛用しています．`,
    media: '/life_dialog.png',
    isVideo: false,
    link: 'https://page.line.me/900crthd',
    github: 'https://github.com/Omusubi0123/life-dialog',
    my_skills: ['FastAPI', 'LINE Messaging API', 'Firebase Firestore', 'Azure AI Search', 'OpenAI API'],
    other_skills: ['TypeScript', 'React', 'Vite', 'Docker', 'Google Cloud Platform','Vercel'],
    cd_skills: ['PostgreSQL', 'pgvector', 'docker-compose', 'Cloudflare tunnel', '(自宅サーバー)'],
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
    近年深刻化する子どものメンタルヘルスを課題とし，AIを搭載したぬいぐるみを使って子どもをサポートするシステムを開発しました．
    AIぬいぐるみでは，ぬいぐるみの中にRaspberry Piを搭載し，医療文書のRAGを含めたSpeech-to-Speechの機能を実装しました．
    また，会話記録を基に子どもの性格・メンタルヘルスを分析し，保護者にフィードバックする機能も実装しました．
    AIぬいぐるみのmodel, backendの開発を担当し，強力なメンバーのおかげで3位入賞することができました．`,
    media: '/therapystoy.png',
    isVideo: false,
    link: 'https://www.youtube.com/watch?v=n6q0AeKy2mY',
    github: 'https://github.com/DeepMIC-2025ugip',
    my_skills: ['Raspberry Pi', 'FastAPI', 'PostgreSQL', 'Azure AI Search', 'OpenAI API', 'Speech Recognotion'],
    other_skills: ['TypeScript', 'React', 'Next.js', 'AWS(ECS, ALB, RDB)', 'Github Actions'],
  },
  {
    id: 6,
    title: '自宅サーバー',
    description: `ミニPCにUbuntu-Serverをインストールし，自宅サーバーを構築しました．
    「Works」のbackendはこのサーバーで運用しています．
    自宅サーバーでのbackendサービスデプロイの方法は以下の記事にまとめています．`,
    media: '/home_server.png',
    link: 'https://qiita.com/Omusubi0123/items/216968e23b13f35a90a1',
    isVideo: false,
  },
  {
    id: 7,
    title: '観劇予約フォーム',
    description: `所属していた演劇サークルで公演予約システムが必要となり，予約フォームシステムを作りました．
    開発当初はWebサイトやDBを扱う技術がなかったこと，開発期間が短かったことから，GASを利用して開発しました．
    Google FormとGoogle SpreadsheetをGASで連携させました．
    フォームが送信されるごとに返信メールの送信と予約状況の再計算を行い，フォームの説明文や選択肢を予約状況に応じて更新します．
    GASの仕様上，数秒以内に大量にフォームが送信されるとメール送信が漏れる問題があったので，メール未送信時に再送信する機能を追加して対応しました．`,
    media: '/musical_reservation_form.png',
    isVideo: false,
    github: 'https://github.com/Omusubi0123/reservation_form_spreadsheet',
    my_skills: ['Google Apps Script', 'Google Form', 'Google Spreadsheet'],
  },
];
