import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default to Japanese for a fully-Japanese site view
  const [language, setLanguage] = useState<Language>('ja');

  // Translation function
  const t = (key: string): string => {
    const translations: Record<string, Record<Language, string>> = {
      // small UI keys
      'language.toggle': {
        en: 'Toggle language',
        ja: '\u8a00\u8a9e\u3092\u5207\u308a\u66ff\u3048\u308b'
      },
      'home.and': {
        en: 'and',
        ja: 'と'
      },
      // generic messages
      'loading': {
        en: 'Loading...',
        ja: '\u8aad\u307f\u8fbc\u307f\u4e2d...'
      },
      'projects.attempted_paths': {
        en: 'Attempted paths:',
        ja: '\u30c8\u30e9\u30a4\u3042\u305f\u308a\u3044\u3064\u304d\u8abf\u67fb\u3057\u305f\u30d1\u30b9\u30fb'
      },
      'projects.no_detail': {
        en: 'No detailed explanation available for this project.',
        ja: '\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5b9a\u4e0a\u3057\u305f\u8a73\u7d30\u8aac\u660e\u306f\u3042\u308a\u307e\u305b\u3093\u3002'
      },
      'projects.more': {
        en: '+{n} more',
        ja: '+{n}\u4ef6'
      },
      // metrics labels
      'projects.metrics.users': {
        en: 'users',
        ja: '\u30e6\u30fc\u30b6'
      },
      'projects.metrics.downloads': {
        en: 'downloads',
        ja: '\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9'
      },
      'projects.metrics.awards': {
        en: 'awards',
        ja: '\u5951\u7d04\u6599\u91d1\u3068\u3044\u3046\u4f8b'
      },
      // contact placeholders and selects
      'contact.placeholder.name': {
        en: 'Enter your name',
        ja: '\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044'
      },
      'contact.placeholder.email': {
        en: 'your@email.com',
        ja: 'example@domain.com'
      },
      'contact.form.select_project': {
        en: 'Select project type',
        ja: '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u3079'
      },
      'contact.placeholder.details': {
        en: 'Tell me about your project, timeline, budget, and any specific requirements...',
        ja: '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e3b\u8981\u3001\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3001\u4e88\u7b97\u3001\u307e\u305f\u7279\u5b9a\u306e\u8981\u9808\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002'
      },
      'contact.availability.label_available': {
        en: 'Available',
        ja: '\u5229\u7528\u53ef\u80fd'
      },
      'contact.availability.tz': {
        en: 'JST',
        ja: '日本標準時 (JST)'
      },
      // HomePage
      'home.title': {
        en: 'Keishin Mie',
        ja: '三重 慧心'
      },
      'home.subtitle.ai': {
        en: 'AI Engineer',
        ja: 'AIエンジニア'
      },
      'home.subtitle.web': {
        en: 'Web Developer',
        ja: 'ウェブ開発者'
      },
      'home.subtitle.android': {
        en: 'Android Developer',
        ja: 'Android開発者'
      },
      'home.tagline': {
        en: 'Building future-ready experiences with AI and Immersive Web',
        ja: 'AIと没入型ウェブで未来に対応した体験を構築'
      },
      'home.tagline.ai': {
        en: 'AI',
        ja: 'AI'
      },
      'home.tagline.immersive': {
        en: 'Immersive Web',
        ja: '没入型ウェブ'
      },
      'home.cta.explore': {
        en: 'Explore My Work',
        ja: '作品を探索'
      },
      'home.cta.about': {
        en: 'About Me',
        ja: '私について'
      },

      // Navigation
      'nav.home': {
        en: 'Home',
        ja: 'ホーム'
      },
      'nav.about': {
        en: 'About',
        ja: 'について'
      },
      'nav.projects': {
        en: 'Projects',
        ja: 'プロジェクト'
      },
      'nav.skills': {
        en: 'Skills',
        ja: 'スキル'
      },
      'nav.services': {
        en: 'Services',
        ja: 'サービス'
      },
      'nav.testimonials': {
        en: 'Testimonials',
        ja: 'お客様の声'
      },
      'nav.blog': {
        en: 'Blog',
        ja: 'ブログ'
      },
      'nav.contact': {
        en: 'Contact',
        ja: 'お問い合わせ'
      },

      // ProjectsPage
      'projects.title': {
        en: 'Project Galaxy',
        ja: 'プロジェクトギャラクシー'
      },
      'projects.subtitle': {
        en: 'Explore my portfolio of 30+ projects across social platforms, AR/VR experiences, AI tools, consumer apps, media platforms, and business solutions',
        ja: 'ソーシャルプラットフォーム、AR/VR体験、AIツール、コンシューマーアプリ、メディアプラットフォーム、ビジネスソリューションにわたる30以上のプロジェクトのポートフォリオを探索'
      },
      'projects.category.all': {
        en: 'All Projects',
        ja: 'すべてのプロジェクト'
      },
      'projects.category.social': {
        en: 'Social & Community Platforms',
        ja: 'ソーシャル・コミュニティプラットフォーム'
      },
      'projects.category.arvr': {
        en: 'AR / VR / 3D Experiences',
        ja: 'AR / VR / 3D体験'
      },
      'projects.category.ai': {
        en: 'AI / ML / Creative Tools',
        ja: 'AI / ML / クリエイティブツール'
      },
      'projects.category.consumer': {
        en: 'Consumer & Lifestyle Apps',
        ja: 'コンシューマー・ライフスタイルアプリ'
      },
      'projects.category.media': {
        en: 'Media, Entertainment & Content',
        ja: 'メディア、エンターテイメント・コンテンツ'
      },
      'projects.category.business': {
        en: 'Business & Productivity Tools',
        ja: 'ビジネス・生産性ツール'
      },
      'projects.showing': {
        en: 'Showing',
        ja: '表示中'
      },
      'projects.modal.role': {
        en: 'My Role',
        ja: '私の役割'
      },
      'projects.modal.year': {
        en: 'Year',
        ja: '年'
      },
      'projects.modal.technologies': {
        en: 'Technologies Used',
        ja: '使用技術'
      },
      'projects.modal.impact': {
        en: 'Impact & Metrics',
        ja: 'インパクト・指標'
      },
      'projects.modal.live': {
        en: 'Live Demo',
        ja: 'ライブデモ'
      },
      'projects.modal.code': {
        en: 'View Code',
        ja: 'コードを見る'
      },
      'projects.modal.detail': {
        en: 'Detail explanation',
        ja: '詳細説明'
      },

      // ContactPage
      'contact.title': {
        en: 'Get In Touch',
        ja: 'お問い合わせ'
      },
      'contact.subtitle': {
        en: 'Ready to bring your next project to life? Let\'s discuss how we can create something amazing together.',
        ja: '次のプロジェクトを実現する準備はできていますか？一緒に素晴らしいものを作る方法について話し合いましょう。'
      },
      'contact.available': {
        en: 'Currently Available',
        ja: '現在利用可能'
      },
      'contact.response': {
        en: 'Accepting new projects • Response within 24 hours • Tokyo timezone (JST)',
        ja: '新しいプロジェクトを受け入れ中 • 24時間以内に回答 • 東京時間（JST）'
      },
      'contact.form.title': {
        en: 'Start a Conversation',
        ja: '会話を始める'
      },
      'contact.form.name': {
        en: 'Your Name',
        ja: 'お名前'
      },
      'contact.form.email': {
        en: 'Email Address',
        ja: 'メールアドレス'
      },
      'contact.form.project': {
        en: 'Project Type',
        ja: 'プロジェクトタイプ'
      },
      'contact.form.details': {
        en: 'Project Details',
        ja: 'プロジェクト詳細'
      },
      'contact.form.send': {
        en: 'Send Message',
        ja: 'メッセージを送信'
      },
      'contact.form.sending': {
        en: 'Sending...',
        ja: '送信中...'
      },
      'contact.form.sent': {
        en: 'Message Sent!',
        ja: 'メッセージが送信されました！'
      },
      'contact.form.response': {
        en: 'Response Time',
        ja: '回答時間'
      },
      'contact.form.response.desc': {
        en: 'I typically respond within 24 hours with project insights and next steps.',
        ja: '通常24時間以内にプロジェクトの洞察と次のステップで回答いたします。'
      },
      'contact.commitment.title': {
        en: 'My Commitment',
        ja: '私のコミットメント'
      },
      'contact.commitment.content': {
        en: 'I believe in building lasting relationships through integrity, trust, and exceptional delivery. Every project receives my full attention and commitment to excellence.',
        ja: '誠実さ、信頼、卓越した提供を通じて永続的な関係を築くことを信じています。すべてのプロジェクトに全力で取り組み、卓越性へのコミットメントを提供します。'
      },
      'contact.commitment.communication': {
        en: 'Honest communication throughout the project',
        ja: 'プロジェクト全体を通じた誠実なコミュニケーション'
      },
      'contact.commitment.delivery': {
        en: 'Reliable delivery on time and budget',
        ja: '時間と予算内での信頼できる提供'
      },
      'contact.commitment.support': {
        en: 'Ongoing support and maintenance',
        ja: '継続的なサポートとメンテナンス'
      },
      'contact.connect': {
        en: 'Connect With Me',
        ja: '私とつながる'
      },
      'contact.availability': {
        en: 'Current Availability',
        ja: '現在の利用可能性'
      },
      'contact.availability.new': {
        en: 'New Projects',
        ja: '新しいプロジェクト'
      },
      'contact.availability.timezone': {
        en: 'Timezone',
        ja: 'タイムゾーン'
      },
      'contact.social.email': {
        en: 'Direct email contact',
        ja: '直接メール連絡'
      },
      'contact.social.email_name': {
        en: 'Email',
        ja: 'メール'
      },
      'contact.social.github': {
        en: 'Code repositories',
        ja: 'コードリポジトリ'
      },
      'contact.social.github_name': {
        en: 'GitHub',
        ja: 'ギットハブ'
      },
      'contact.social.telegram': {
        en: 'Quick messaging',
        ja: 'クイックメッセージ'
      },
      'contact.social.telegram_name': {
        en: 'Telegram',
        ja: 'テレグラム'
      },
      'contact.social.discord': {
        en: 'Gaming & chat',
        ja: 'ゲーム・チャット'
      },
      'contact.social.discord_name': {
        en: 'Discord',
        ja: 'ディスコード'
      },

      // Project Types
      'project.type.ai': {
        en: 'AI/ML Development',
        ja: 'AI/ML開発'
      },
      'project.type.web': {
        en: 'Web Application',
        ja: 'ウェブアプリケーション'
      },
      'project.type.android': {
        en: 'Android Application',
        ja: 'Androidアプリケーション'
      },
      'project.type.fullstack': {
        en: 'Full Stack Project',
        ja: 'フルスタックプロジェクト'
      },
      'project.type.leadership': {
        en: 'Team Leadership',
        ja: 'チームリーダーシップ'
      },
      'project.type.consulting': {
        en: 'Consulting',
        ja: 'コンサルティング'
      },
      'project.type.other': {
        en: 'Other',
        ja: 'その他'
      },

      // Project Descriptions
      'project.ameba.description': {
        en: 'Japan’s leading blogging SNS: AMP Stories, rich editor, modular UI, SEO & performance tuning; analytics and CDN integration.',
        ja: '日本最大級のブログSNS。AMPストーリー、リッチエディタ、モジュールUI、SEO/パフォーマンス最適化、分析とCDN統合を担当。'
      },
      'project.buzzfeed.description': {
        en: 'BuzzFeed Japan localization and modular content system. Responsive, performance-optimized UI, CMS workflow, analytics, and ad integrations.',
        ja: 'BuzzFeed Japanのローカライズとモジュール型コンテンツ。レスポンシブ最適化、CMSワークフロー、分析、広告連携を実装。'
      },
      'project.itmedia.description': {
        en: 'Modernized ITmedia with Laravel + React, Elasticsearch, Redis caching, Docker/Kubernetes on AWS; improved LCP and editorial throughput.',
        ja: 'Laravel+React、Elasticsearch、Redisキャッシュ、Docker/Kubernetes(AWS)で刷新。LCP・運用効率を改善。'
      },
      'project.manga.description': {
        en: 'High-concurrency manga platform with CDN, caching, auto-scaling; daily free-reads logic, native apps with offline-friendly reader.',
        ja: 'CDN・キャッシュ・オートスケール対応の高負荷マンガ基盤。毎日の無料閲覧、オフライン対応のネイティブ閲覧機能。'
      },
      'project.nicovideo.description': {
        en: 'Video community features with performant JS/React UI, caching/CDN strategies, and interactive modules.',
        ja: '動画コミュニティ機能。高性能なJS/React UI、キャッシュ/CDN戦略、インタラクティブモジュールを実装。'
      },
      'project.pixiv.description': {
        en: 'Scaled social/creator features: feeds, ranking, uploads, moderation tools; Google Cloud, caching, and anti-fraud integrations.',
        ja: 'フィード・ランキング・投稿・管理ツール等をスケール。Google Cloud、キャッシュ、詐欺対策を統合。'
      },
      'project.cookpad.description': {
        en: 'Recipe platform improvements across UX, performance, and scalability. Built React UI, Rails APIs, and caching with Redis; optimized mobile and SSR for high traffic.',
        ja: 'レシピプラットフォームのUX・性能・拡張性を改善。React UI、Rails API、Redisキャッシュを構築し、高トラフィック向けにモバイルとSSRを最適化。'
      },
      'project.jalan.description': {
        en: 'Travel booking platform with search, filters, profiles, and secure payments. React + Node/Express + PostgreSQL with Stripe; AWS deployment and CI/CD.',
        ja: '検索・絞り込み・プロフィール・安全な決済を備えた旅行予約プラットフォーム。React + Node/Express + PostgreSQL + Stripe。AWSにデプロイしCI/CDを構築。'
      },
      'project.muji.description': {
        en: 'E‑commerce storefront for MUJI Japan. Implemented responsive UI, product filters, and checkout; integrated backend systems and CDN with SCSS optimization.',
        ja: '無印良品のECストア。レスポンシブUI、商品フィルタ、チェックアウトを実装し、バックエンドとCDNを統合。SCSSで最適化。'
      },
      'project.tripadvisor.description': {
        en: 'Localized TripAdvisor Japan experience. Interactive maps, real‑time filters, personalization; Node/Express backend, PostgreSQL/Redis, Docker and AWS.',
        ja: '日本向けにローカライズ。インタラクティブな地図、リアルタイム絞り込み、パーソナライズ。Node/Express、PostgreSQL/Redis、DockerとAWSを使用。'
      },
      'project.zenn-dev.description': {
        en: 'Developer publishing platform using Next.js + TypeScript with Rails API. SSR/SSG, Tailwind UI, CI/CD on AWS; caching and search tuned for growth.',
        ja: 'Next.js + TypeScriptとRails APIを用いた開発者向けプラットフォーム。SSR/SSG、Tailwind UI、AWSでのCI/CD。キャッシュと検索を最適化。'
      },
      'project.zoff.description': {
        en: 'Eyewear e‑commerce with customizable filters, real‑time inventory, and 3D product views. React front‑end with Node/Express backend and Stripe payments.',
        ja: 'カスタマイズ可能なフィルタ、在庫のリアルタイム反映、3D商品ビューを備えたメガネEC。ReactフロントとNode/Expressバックエンド、Stripe決済。'
      },
      'project.lifesciencedb.description': {
        en: 'Interactive 3D human anatomy explorer (BodyParts3D/Anatomography). Built WebGL/Three.js UI to select parts, adjust visualization, and embed/export models; integrated anatomical datasets (FMA).',
        ja: '対話型3D人体解剖プラットフォーム（BodyParts3D/Anatomography）。WebGL/Three.jsで部位選択や可視化調整、埋め込み/エクスポートUIを実装し、FMAなどの解剖データセットを統合。'
      },
      'project.teamlab.description': {
        en: 'Immersive digital art experiences with interactive 3D/real‑time visuals. Contributed to performant WebGL scenes, SSR UI, and real‑time interactions for exhibitions and virtual tours.',
        ja: '没入型デジタルアート体験。パフォーマンスに優れたWebGLシーン、SSR UI、リアルタイムインタラクションを実装し、展示やバーチャルツアーを支援。'
      },
      'project.ampersand.description': {
        en: 'Full‑stack build using React, Node/Express, and MongoDB. Delivered responsive UI, CI/CD-ready build, testing, and scalable architecture with Docker and AWS.',
        ja: 'React、Node/Express、MongoDBによるフルスタック開発。レスポンシブUI、CI/CD対応ビルド、テスト、DockerとAWSでスケーラブルな構成を提供。'
      },
      'project.botanistofficial.description': {
        en: 'Led front‑end for the official site: CMS templating, performance/image strategy (srcset, lazy‑load), accessibility, SEO, and release workflow for campaigns.',
        ja: '公式サイトのフロントエンドをリード。CMSテンプレート、画像最適化（srcset・遅延読み込み）、アクセシビリティ、SEO、キャンペーンのリリースフローを構築。'
      },
      'project.abc_ar.description': {
        en: 'ABC_AR — an educational AR experience about space. Features: Explore Jupiter (3D models placed in the real world), Assemble the ISS with interactive parts, and a gamified Space Debris defense mode. Built with Unity, ARKit/ARCore and native mobile components; released for iOS and Android around 2018.',
        ja: 'ABC_AR — 宇宙をテーマにした教育的なAR体験。機能: 木星の3Dモデルを現実空間に配置して観察、ISSをパーツごとに組み立てるインタラクティブモード、宇宙ゴミを防ぐゲーム型モード。Unity、ARKit/ARCore、ネイティブモバイルで開発され、2018年頃にiOS/Android向けにリリース。'
      },
      'project.are-na.description': {
        en: 'Collaborative visual research and organization platform for collecting and organizing ideas, images, and knowledge networks.',
        ja: 'アイデア、画像、知識ネットワークを収集・整理するための協調的視覚研究・組織化プラットフォーム。'
      },
      'project.asmallworld.description': {
        en: 'Exclusive social networking platform for affluent and influential individuals worldwide.',
        ja: '世界中の富裕層や影響力のある個人向けの排他的ソーシャルネットワーキングプラットフォーム。'
      },
      'project.bereal.description': {
        en: 'Authentic social media app encouraging users to share unfiltered moments with friends.',
        ja: 'ユーザーが友人とフィルターなしの瞬間を共有することを奨励する本物のソーシャルメディアアプリ。'
      },
      'project.openai.description': {
        en: 'Artificial intelligence research organization developing safe and beneficial AI systems including ChatGPT and DALL-E.',
        ja: 'ChatGPTやDALL-Eを含む安全で有益なAIシステムを開発する人工知能研究組織。'
      },
      'project.midjourney.description': {
        en: 'AI-powered image generation platform with 3D visualization and VR integration capabilities.',
        ja: '3D可視化とVR統合機能を備えたAI駆動の画像生成プラットフォーム。'
      },
      'project.bemyeyes.description': {
        en: 'Accessibility app connecting blind and visually impaired users with volunteers worldwide for real-time visual support.',
        ja: '視覚障害者と世界中のボランティアをリアルタイムの視覚サポートでつなぐアクセシビリティアプリ。'
      },
      'project.letterboxd.description': {
        en: 'Social network for film lovers to discover, rate, and review movies.',
        ja: '映画愛好家が映画を発見、評価、レビューするためのソーシャルネットワーク。'
      },
      'project.untappd.description': {
        en: 'Social discovery platform for beer enthusiasts with rating and review system.',
        ja: 'ビール愛好家向けの評価・レビューシステムを備えたソーシャル発見プラットフォーム。'
      },
      'project.myanimelist.description': {
        en: 'Comprehensive anime and manga database with social features for tracking and discovering content.',
        ja: 'コンテンツの追跡と発見のためのソーシャル機能を備えた包括的なアニメ・マンガデータベース。'
      },
      'project.doximity.description': {
        en: 'Professional networking platform for healthcare professionals with secure messaging and collaboration tools.',
        ja: '安全なメッセージングとコラボレーションツールを備えた医療専門家向けプロフェッショナルネットワーキングプラットフォーム。'
      },
      'project.gptstudio.description': {
        en: 'An internal studio for building and fine‑tuning GPT‑powered assistants with orchestration tools and plugin support.',
        ja: 'GPTを活用したアシスタントを構築・ファインチューニングするためのスタジオ。オーケストレーションツールとプラグインサポートを備える。'
      },
      'project.codexpro.description': {
        en: 'AI-assisted developer tooling providing code completion, refactoring suggestions, and CI integrations.',
        ja: 'コード補完やリファクタリング提案、CI連携を備えたAI支援の開発者ツール。'
      },
      'project.voiceai.description': {
        en: 'Speech recognition and synthesis platform with low-latency streaming and multilingual support.',
        ja: '低遅延ストリーミングと多言語対応を備えた音声認識・合成プラットフォーム。'
      },
      'project.synthpix.description': {
        en: 'Generative image platform creating high-fidelity synthesized imagery for AR/3D experiences.',
        ja: 'AR/3D体験向けに高品質な合成画像を生成するジェネレーティブイメージプラットフォーム。'
      },
      'project.marvel.description': {
        en: 'Fan-facing content and interactive features for Marvel.com — high-performance frontend, responsive layouts, and CMS integration.',
        ja: 'Marvel.com向けのファン向けコンテンツとインタラクティブ機能。高性能フロントエンド、レスポンシブレイアウト、CMS連携を担当。'
      },
      'project.soundraw.description': {
        en: 'Server-backed music generation platform: audio processing pipelines, real-time previews, and a responsive web studio.',
        ja: '音楽生成プラットフォーム。オーディオ処理パイプライン、リアルタイムプレビュー、レスポンシブなウェブスタジオを実装。'
      },
      'project.yummygum.description': {
        en: 'Creative agency website and design system work focusing on accessible UI, motion, and performance.',
        ja: 'クリエイティブエージェンシーのウェブサイトとデザインシステム。アクセシブルなUI、モーション、パフォーマンスに注力。'
      },
      'project.venturebeat.description': {
        en: 'News and analysis platform optimised for speed and ads: SEO, article caching, and a modular front-end.',
        ja: 'ニュース・分析プラットフォームの高速化と広告最適化。SEO、記事キャッシュ、モジュール式フロントエンドを実装。'
      },
      'project.polywork.description': {
        en: 'Collaboration and professional network UI: activity feeds, tagging, and cross-platform notifications.',
        ja: 'コラボレーションとプロフェッショナルネットワークのUI。アクティビティフィード、タグ付け、クロスプラットフォーム通知を実装。'
      },
      'project.ravelry.description': {
        en: 'Community-driven marketplace and pattern database — user profiles, search ranking, and storefront integration.',
        ja: 'コミュニティ主導のマーケットプレイス兼パターンデータベース。ユーザープロフィール、検索ランキング、ストアフロント統合。'
      },
      'project.rallypoint.description': {
        en: 'Professional military network features focused on profiles, groups, and secure messaging.',
        ja: '兵士向けのプロフェッショナルネットワーク機能。プロフィール、グループ、セキュアメッセージングに注力。'
      },

      // SkillsPage
      'skills.title': {
        en: 'Skills Constellation',
        ja: 'スキルコンステレーション'
      },
      'skills.subtitle': {
        en: 'My expertise across AI, web development, mobile, and team leadership',
        ja: 'AI、ウェブ開発、モバイル、チームリーダーシップにわたる私の専門知識'
      },
      'skills.category.all': {
        en: 'All Skills',
        ja: 'すべてのスキル'
      },
      'skills.category.ai': {
        en: 'AI & Machine Learning',
        ja: 'AI・機械学習'
      },
      'skills.category.web': {
        en: 'Web Development',
        ja: 'ウェブ開発'
      },
      'skills.category.android': {
        en: 'Android Development',
        ja: 'Android開発'
      },
      'skills.category.management': {
        en: 'Backend & Cloud',
        ja: 'バックエンド・クラウド'
      },
      'skills.category.leadership': {
        en: 'Management',
        ja: 'マネジメント'
      },
      'skills.proficiency': {
        en: 'Proficiency',
        ja: '習熟度'
      },
      'skills.used_in': {
        en: 'Used in:',
        ja: '使用実績:'
      },
      'skills.years': {
        en: 'years',
        ja: '年'
      },
      'skills.stats.experience': {
        en: 'Years of Experience',
        ja: '経験年数'
      },
      'skills.stats.technologies': {
        en: 'Technologies Mastered',
        ja: '習得技術数'
      },
      'skills.stats.expert': {
        en: 'Expert Level Skills',
        ja: 'エキスパートレベルスキル'
      },
      'skills.stats.categories': {
        en: 'Active Categories',
        ja: 'アクティブカテゴリ'
      },

      // AboutPage
      'about.title': {
        en: 'My Journey',
        ja: '私の旅路'
      },
      'about.subtitle': {
        en: 'With 8+ years of experience spanning corporate engineering at Rakuten and international freelancing, now leading distributed teams to deliver AI, web, and mobile solutions worldwide.',
        ja: '楽天での企業エンジニアリングと国際フリーランスにわたる8年以上の経験を持ち、現在は分散チームを率いてAI、ウェブ、モバイルソリューションを世界中に提供しています。'
      },
      'about.currently_available': {
        en: 'Currently Available',
        ja: '現在利用可能'
      },
      'about.currently_desc': {
        en: 'Leading engineering teams while taking on unique and challenging projects',
        ja: 'ユニークで挑戦的なプロジェクトに取り組みながらエンジニアリングチームを率いています'
      },
      'about.open_collaborations': {
        en: 'Open for new collaborations',
        ja: '新しいコラボレーションを受け入れ中'
      },
      'about.download_resume': {
        en: 'Download Resume',
        ja: '履歴書をダウンロード'
      },
      'about.career_timeline': {
        en: 'Career Timeline',
        ja: 'キャリアタイムライン'
      },
      'about.key_highlights': {
        en: 'Key Highlights:',
        ja: '主なハイライト:'
      },
      'about.core_values': {
        en: 'Core Values & Approach',
        ja: 'コアバリュー・アプローチ'
      },
      'about.future_vision': {
        en: 'Future Vision',
        ja: '将来のビジョン'
      },
      'about.future_vision_text': {
        en: 'Continue creating unique and special projects that push the boundaries of technology, while maintaining the trust and integrity that has been the foundation of my career. My goal is to deliver exceptional value to clients worldwide through innovative AI and mobile solutions.',
        ja: '私のキャリアの基盤となってきた信頼と誠実さを維持しながら、技術の境界を押し広げるユニークで特別なプロジェクトの創造を続けます。革新的なAIとモバイルソリューションを通じて、世界中のクライアントに卓越した価値を提供することが私の目標です。'
      },
      'about.stats.experience': {
        en: 'Years of Experience',
        ja: '経験年数'
      },
      'about.stats.projects': {
        en: 'Projects Completed',
        ja: '完了プロジェクト数'
      },
      'about.stats.team': {
        en: 'Team Members Led',
        ja: '率いたチームメンバー数'
      },
      'about.stats.countries': {
        en: 'Countries Worked',
        ja: '活動国数'
      },
      'about.values.integrity': {
        en: 'Integrity & Trust',
        ja: '誠実さ・信頼'
      },
      'about.values.integrity_desc': {
        en: 'Building lasting relationships through honest communication and reliable delivery.',
        ja: '誠実なコミュニケーションと信頼できる提供を通じて永続的な関係を築く。'
      },
      'about.values.innovation': {
        en: 'Innovation Focus',
        ja: 'イノベーション重視'
      },
      'about.values.innovation_desc': {
        en: 'Always pushing boundaries with cutting-edge AI and mobile technologies.',
        ja: '最先端のAIとモバイル技術で常に境界を押し広げる。'
      },
      'about.values.leadership': {
        en: 'Team Leadership',
        ja: 'チームリーダーシップ'
      },
      'about.values.leadership_desc': {
        en: 'Empowering teams to achieve their best through mentorship and collaboration.',
        ja: 'メンターシップとコラボレーションを通じてチームが最高の成果を達成できるよう支援する。'
      },
      'about.values.global': {
        en: 'Global Perspective',
        ja: 'グローバル視点'
      },
      'about.values.global_desc': {
        en: 'Experience across Japan and Malaysia brings unique multicultural insights.',
        ja: '日本とマレーシアでの経験がユニークな多文化インサイトをもたらす。'
      },

      // ServicesPage
      'services.title': {
        en: 'Services',
        ja: 'サービス'
      },
      'services.subtitle': {
        en: 'Comprehensive development solutions for your business needs',
        ja: 'ビジネスニーズに応じた包括的な開発ソリューション'
      },
      'services.web.title': {
        en: 'Web Development',
        ja: 'ウェブ開発'
      },
      'services.web.subtitle': {
        en: 'Modern, responsive web applications',
        ja: 'モダンでレスポンシブなウェブアプリケーション'
      },
      'services.android.title': {
        en: 'Android Development',
        ja: 'Android開発'
      },
      'services.android.subtitle': {
        en: 'Native Android applications with Kotlin',
        ja: 'KotlinによるネイティブAndroidアプリケーション'
      },
      'services.ai.title': {
        en: 'AI Development',
        ja: 'AI開発'
      },
      'services.ai.subtitle': {
        en: 'Custom AI solutions and machine learning',
        ja: 'カスタムAIソリューションと機械学習'
      },
      'services.web.kpi': {
        en: '40% faster load times',
        ja: '40%の読み込み時間短縮'
      },
      'services.web.duration': {
        en: '2-4 weeks',
        ja: '2-4週間'
      },
      'services.android.kpi': {
        en: 'Native performance',
        ja: 'ネイティブ性能'
      },
      'services.android.duration': {
        en: '3-6 weeks',
        ja: '3-6週間'
      },
      'services.ai.kpi': {
        en: '90% accuracy',
        ja: '90%の精度'
      },
      'services.ai.duration': {
        en: '4-8 weeks',
        ja: '4-8週間'
      },
      'services.hero.alt': {
        en: 'Services hero background',
        ja: 'サービスヒーロー背景'
      },
      'services.list_title': {
        en: 'Our Services',
        ja: '私たちのサービス'
      },
      'services.cta.contact': {
        en: 'Start Your Project',
        ja: 'プロジェクトを開始'
      },
      'services.cta.close': {
        en: 'Close',
        ja: '閉じる'
      },
      'services.cta.case': {
        en: 'View Case Studies',
        ja: 'ケーススタディを見る'
      },
      'services.case_studies.ameba.title': {
        en: 'Ameba Platform Enhancement',
        ja: 'Amebaプラットフォーム強化'
      },
      'services.case_studies.ameba.description': {
        en: 'Enhanced user engagement and performance optimization',
        ja: 'ユーザーエンゲージメントとパフォーマンス最適化の向上'
      },
      'services.case_studies.ameba.kpi': {
        en: '40% performance boost',
        ja: '40%のパフォーマンス向上'
      },
      'services.case_studies.ameba.duration': {
        en: '6 months',
        ja: '6ヶ月'
      },
      'services.case_studies.ameba.role': {
        en: 'Lead Developer',
        ja: 'リード開発者'
      },
      'services.case_studies.buzzfeed.title': {
        en: 'BuzzFeed Japan Localization',
        ja: 'BuzzFeed Japanローカライゼーション'
      },
      'services.case_studies.buzzfeed.description': {
        en: 'Content management and user experience optimization',
        ja: 'コンテンツ管理とユーザー体験最適化'
      },
      'services.case_studies.buzzfeed.kpi': {
        en: '2x user engagement',
        ja: '2倍のユーザーエンゲージメント'
      },
      'services.case_studies.buzzfeed.duration': {
        en: '4 months',
        ja: '4ヶ月'
      },
      'services.case_studies.buzzfeed.role': {
        en: 'Frontend Lead',
        ja: 'フロントエンドリード'
      },
      'services.case_studies.itmedia.title': {
        en: 'ITmedia Platform Modernization',
        ja: 'ITmediaプラットフォーム近代化'
      },
      'services.case_studies.itmedia.description': {
        en: 'Full-stack modernization with Laravel and React',
        ja: 'LaravelとReactによるフルスタック近代化'
      },
      'services.case_studies.itmedia.kpi': {
        en: '60% faster load times',
        ja: '60%の読み込み時間短縮'
      },
      'services.case_studies.itmedia.duration': {
        en: '8 months',
        ja: '8ヶ月'
      },
      'services.case_studies.itmedia.role': {
        en: 'Technical Lead',
        ja: 'テクニカルリード'
      },
      'services.workflow.consult.title': {
        en: 'Consultation',
        ja: 'コンサルテーション'
      },
      'services.workflow.consult.desc': {
        en: 'Understanding your needs and requirements',
        ja: 'ニーズと要件の理解'
      },
      'services.workflow.design.title': {
        en: 'Design & Planning',
        ja: '設計・計画'
      },
      'services.workflow.design.desc': {
        en: 'Creating the perfect solution architecture',
        ja: '完璧なソリューションアーキテクチャの作成'
      },
      'services.workflow.develop.title': {
        en: 'Development',
        ja: '開発'
      },
      'services.workflow.develop.desc': {
        en: 'Building your solution with best practices',
        ja: 'ベストプラクティスでソリューションを構築'
      },
      'services.workflow.deploy.title': {
        en: 'Deployment',
        ja: 'デプロイメント'
      },
      'services.workflow.deploy.desc': {
        en: 'Launching and optimizing your solution',
        ja: 'ソリューションの起動と最適化'
      },
      'services.workflow.support.title': {
        en: 'Support',
        ja: 'サポート'
      },
      'services.workflow.support.desc': {
        en: 'Ongoing maintenance and improvements',
        ja: '継続的なメンテナンスと改善'
      },
      'services.workflow.build.title': {
        en: 'Build & Test',
        ja: '構築・テスト'
      },
      'services.workflow.build.desc': {
        en: 'Implementing and testing your solution',
        ja: 'ソリューションの実装とテスト'
      },
      'services.workflow.operate.title': {
        en: 'Operate & Monitor',
        ja: '運用・監視'
      },
      'services.workflow.operate.desc': {
        en: 'Monitoring and optimizing performance',
        ja: 'パフォーマンスの監視と最適化'
      },
      'services.web.description': {
        en: 'Modern, responsive web applications built with cutting-edge technologies',
        ja: '最先端技術で構築されたモダンでレスポンシブなウェブアプリケーション'
      },
      'services.web.features.1': {
        en: 'Responsive Design',
        ja: 'レスポンシブデザイン'
      },
      'services.web.features.2': {
        en: 'Performance Optimization',
        ja: 'パフォーマンス最適化'
      },
      'services.web.features.3': {
        en: 'SEO Optimization',
        ja: 'SEO最適化'
      },
      'services.web.features.4': {
        en: 'Cross-browser Compatibility',
        ja: 'クロスブラウザ互換性'
      },
      'services.web.features.5': {
        en: 'Accessibility (WCAG)',
        ja: 'アクセシビリティ（WCAG）'
      },
      'services.web.features.6': {
        en: 'Progressive Web App (PWA)',
        ja: 'プログレッシブウェブアプリ（PWA）'
      },
      'services.web.goal': {
        en: 'Deliver fast, accessible, and user-friendly web experiences',
        ja: '高速でアクセシブル、ユーザーフレンドリーなウェブ体験を提供'
      },
      'services.android.description': {
        en: 'Native Android applications with modern development practices',
        ja: 'モダンな開発手法によるネイティブAndroidアプリケーション'
      },
      'services.android.features.1': {
        en: 'Jetpack Compose UI',
        ja: 'Jetpack Compose UI'
      },
      'services.android.features.2': {
        en: 'MVVM Architecture',
        ja: 'MVVMアーキテクチャ'
      },
      'services.android.features.3': {
        en: 'Material Design 3',
        ja: 'Material Design 3'
      },
      'services.android.features.4': {
        en: 'Offline Support',
        ja: 'オフラインサポート'
      },
      'services.android.features.5': {
        en: 'Push Notifications',
        ja: 'プッシュ通知'
      },
      'services.android.features.6': {
        en: 'App Store Optimization',
        ja: 'アプリストア最適化'
      },
      'services.android.goal': {
        en: 'Create smooth, native Android experiences',
        ja: 'スムーズでネイティブなAndroid体験を作成'
      },
      'services.ai.description': {
        en: 'Custom AI solutions and machine learning implementations',
        ja: 'カスタムAIソリューションと機械学習実装'
      },
      'services.ai.features.1': {
        en: 'Machine Learning Models',
        ja: '機械学習モデル'
      },
      'services.ai.features.2': {
        en: 'Natural Language Processing',
        ja: '自然言語処理'
      },
      'services.ai.features.3': {
        en: 'Computer Vision',
        ja: 'コンピュータビジョン'
      },
      'services.ai.features.4': {
        en: 'Predictive Analytics',
        ja: '予測分析'
      },
      'services.ai.features.5': {
        en: 'Recommendation Systems',
        ja: 'レコメンデーションシステム'
      },
      'services.ai.features.6': {
        en: 'AI Integration',
        ja: 'AI統合'
      },
      'services.ai.goal': {
        en: 'Implement intelligent solutions that drive business value',
        ja: 'ビジネス価値を生み出すインテリジェントソリューションを実装'
      },
      'services.card.quote': {
        en: 'Professional, reliable, and innovative approach to development',
        ja: 'プロフェッショナルで信頼性が高く、革新的な開発アプローチ'
      },
      'services.representative_cases.title': {
        en: 'Representative Cases',
        ja: '代表的なケース'
      },
      'services.representative_cases.subtitle': {
        en: 'Real projects that showcase our expertise and results',
        ja: '私たちの専門知識と成果を示す実際のプロジェクト'
      },
      'services.workflow_title': {
        en: 'Our Development Process',
        ja: '私たちの開発プロセス'
      },
      'services.workflow.subtitle': {
        en: 'A proven methodology that ensures project success',
        ja: 'プロジェクトの成功を保証する実証済みの方法論'
      },
      'services.faq_title': {
        en: 'Frequently Asked Questions',
        ja: 'よくある質問'
      },
      'services.faq.subtitle': {
        en: 'Common questions about our services and process',
        ja: '私たちのサービスとプロセスに関する一般的な質問'
      },
      'services.faq.q1.title': {
        en: 'What technologies do you use?',
        ja: 'どのような技術を使用していますか？'
      },
      'services.faq.q1.answer': {
        en: 'We use modern, industry-standard technologies including React, Next.js, Android Jetpack Compose, and various AI/ML frameworks based on project requirements.',
        ja: 'プロジェクトの要件に基づいて、React、Next.js、Android Jetpack Compose、および様々なAI/MLフレームワークを含むモダンで業界標準の技術を使用しています。'
      },
      'services.faq.q2.title': {
        en: 'How long does a typical project take?',
        ja: '典型的なプロジェクトはどのくらいの期間がかかりますか？'
      },
      'services.faq.q2.answer': {
        en: 'Project duration varies based on complexity: Web applications (2-4 weeks), Android apps (3-6 weeks), AI solutions (4-8 weeks). We provide detailed timelines during consultation.',
        ja: 'プロジェクトの期間は複雑さによって異なります：ウェブアプリケーション（2-4週間）、Androidアプリ（3-6週間）、AIソリューション（4-8週間）。コンサルテーション時に詳細なタイムラインを提供します。'
      },
      'services.faq.q3.title': {
        en: 'Do you provide ongoing support?',
        ja: '継続的なサポートを提供していますか？'
      },
      'services.faq.q3.answer': {
        en: 'Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your solution continues to perform optimally.',
        ja: 'はい、ソリューションが最適に動作し続けるよう、メンテナンス、アップデート、技術支援を含む包括的なローンチ後サポートを提供しています。'
      },
      'services.faq.q4.title': {
        en: 'What is your pricing model?',
        ja: '料金体系はどのようになっていますか？'
      },
      'services.faq.q4.answer': {
        en: 'We offer flexible pricing based on project scope and requirements. Contact us for a detailed quote tailored to your specific needs.',
        ja: 'プロジェクトの範囲と要件に基づいて柔軟な料金設定を提供しています。あなたの具体的なニーズに合わせた詳細な見積もりについては、お問い合わせください。'
      },
      'services.cta.big_title': {
        en: 'Ready to Start Your Project?',
        ja: 'プロジェクトを開始する準備はできていますか？'
      },
      'services.cta.big_desc': {
        en: 'Let\'s discuss how we can bring your vision to life with cutting-edge technology and expert development.',
        ja: '最先端技術と専門的な開発で、あなたのビジョンを実現する方法について話し合いましょう。'
      },
      'services.cta.examples': {
        en: 'Web Apps • Mobile Apps • AI Solutions',
        ja: 'ウェブアプリ • モバイルアプリ • AIソリューション'
      },
      'services.stats.experience': {
        en: 'Years of Experience',
        ja: '経験年数'
      },
      'services.stats.projects': {
        en: 'Projects Completed',
        ja: '完了プロジェクト数'
      },
      'services.stats.timeframe': {
        en: 'Average Delivery Time',
        ja: '平均納期'
      },
      'services.stats.satisfaction': {
        en: 'Client Satisfaction',
        ja: 'クライアント満足度'
      },

      // TestimonialsPage
      'testimonials.title': {
        en: 'Client Testimonials',
        ja: 'お客様の声'
      },
      'testimonials.subtitle': {
        en: 'What our clients say about working with us',
        ja: 'お客様が私たちとの仕事について語る'
      },
      'testimonials.ameba.quote': {
        en: 'Exceptional work on our platform. The team delivered beyond expectations.',
        ja: '私たちのプラットフォームでの卓越した仕事。チームは期待を超える成果を提供しました。'
      },
      'testimonials.ameba.name': {
        en: 'Ameba Team',
        ja: 'Amebaチーム'
      },
      'testimonials.ameba.company': {
        en: 'Ameba',
        ja: 'Ameba'
      },
      'testimonials.ameba.metrics': {
        en: '40% performance improvement',
        ja: '40%のパフォーマンス向上'
      },
      'testimonials.itmedia.quote': {
        en: 'Outstanding technical leadership and delivery.',
        ja: '卓越した技術リーダーシップと提供。'
      },
      'testimonials.itmedia.name': {
        en: 'ITmedia Team',
        ja: 'ITmediaチーム'
      },
      'testimonials.itmedia.company': {
        en: 'ITmedia',
        ja: 'ITmedia'
      },
      'testimonials.itmedia.metrics': {
        en: '60% faster load times',
        ja: '60%の読み込み時間短縮'
      },
      'testimonials.buzzfeed.quote': {
        en: 'Professional, reliable, and innovative approach.',
        ja: 'プロフェッショナルで信頼性が高く、革新的なアプローチ。'
      },
      'testimonials.buzzfeed.name': {
        en: 'BuzzFeed Japan Team',
        ja: 'BuzzFeed Japanチーム'
      },
      'testimonials.buzzfeed.company': {
        en: 'BuzzFeed Japan',
        ja: 'BuzzFeed Japan'
      },
      'testimonials.buzzfeed.metrics': {
        en: '2x user engagement',
        ja: '2倍のユーザーエンゲージメント'
      },
      'testimonials.controls.auto_rotating': {
        en: 'Auto-rotating',
        ja: '自動回転中'
      },
      'testimonials.controls.paused': {
        en: 'Paused',
        ja: '一時停止中'
      },
      'testimonials.filter.all': {
        en: 'All Industries',
        ja: 'すべての業界'
      },
      'testimonials.filter.industry': {
        en: 'Filter by Industry',
        ja: '業界でフィルター'
      },
      'testimonials.filter.saas': {
        en: 'SaaS',
        ja: 'SaaS'
      },
      'testimonials.filter.media': {
        en: 'Media',
        ja: 'メディア'
      },
      'testimonials.filter.consumer': {
        en: 'Consumer',
        ja: 'コンシューマー'
      },
      'testimonials.case.view': {
        en: 'View Case Study',
        ja: 'ケーススタディを見る'
      },
      'testimonials.longform.title': {
        en: 'Detailed Case Studies',
        ja: '詳細なケーススタディ'
      },
      'testimonials.itmedia.title': {
        en: 'ITmedia Platform Modernization',
        ja: 'ITmediaプラットフォーム近代化'
      },
      'testimonials.ameba.title': {
        en: 'Ameba Platform Enhancement',
        ja: 'Amebaプラットフォーム強化'
      },
      'testimonials.buzzfeed.title': {
        en: 'BuzzFeed Japan Localization',
        ja: 'BuzzFeed Japanローカライゼーション'
      },
      'testimonials.manga.name': {
        en: 'Manga Platform Team',
        ja: 'マンガプラットフォームチーム'
      },
      'testimonials.manga.title': {
        en: 'High-Performance Manga Platform',
        ja: '高性能マンガプラットフォーム'
      },
      'testimonials.manga.company': {
        en: 'Manga Platform',
        ja: 'マンガプラットフォーム'
      },
      'testimonials.manga.metrics': {
        en: '50% faster loading',
        ja: '50%の読み込み速度向上'
      },
      'testimonials.manga.quote': {
        en: 'Exceptional performance optimization and user experience improvements.',
        ja: '卓越したパフォーマンス最適化とユーザー体験の改善。'
      },
      'testimonials.cookpad.name': {
        en: 'Cookpad Team',
        ja: 'クックパッドチーム'
      },
      'testimonials.cookpad.title': {
        en: 'Recipe Platform Enhancement',
        ja: 'レシピプラットフォーム強化'
      },
      'testimonials.cookpad.company': {
        en: 'Cookpad',
        ja: 'クックパッド'
      },
      'testimonials.cookpad.metrics': {
        en: '30% better UX',
        ja: '30%のUX向上'
      },
      'testimonials.cookpad.quote': {
        en: 'Outstanding work on our recipe platform with significant performance improvements.',
        ja: 'レシピプラットフォームでの卓越した仕事で、大幅なパフォーマンス向上を実現。'
      },
      'testimonials.teamlab.name': {
        en: 'TeamLab Team',
        ja: 'チームラボチーム'
      },
      'testimonials.teamlab.title': {
        en: 'Immersive Digital Art Platform',
        ja: '没入型デジタルアートプラットフォーム'
      },
      'testimonials.teamlab.company': {
        en: 'TeamLab',
        ja: 'チームラボ'
      },
      'testimonials.teamlab.metrics': {
        en: 'Immersive experiences',
        ja: '没入型体験'
      },
      'testimonials.teamlab.quote': {
        en: 'Revolutionary digital art experiences with cutting-edge technology.',
        ja: '最先端技術による革新的なデジタルアート体験。'
      },
      'testimonials.lifesciencedb.name': {
        en: 'Life Science DB Team',
        ja: 'ライフサイエンスDBチーム'
      },
      'testimonials.lifesciencedb.title': {
        en: '3D Anatomy Visualization Platform',
        ja: '3D解剖可視化プラットフォーム'
      },
      'testimonials.lifesciencedb.company': {
        en: 'Life Science DB',
        ja: 'ライフサイエンスDB'
      },
      'testimonials.lifesciencedb.metrics': {
        en: 'Interactive 3D models',
        ja: 'インタラクティブ3Dモデル'
      },
      'testimonials.lifesciencedb.quote': {
        en: 'Innovative 3D visualization that revolutionized medical education.',
        ja: '医学教育を革命的に変えた革新的な3D可視化。'
      },
      'testimonials.ameba.year': {
        en: '2023',
        ja: '2023年'
      },
      'testimonials.itmedia.year': {
        en: '2022',
        ja: '2022年'
      },
      'testimonials.buzzfeed.year': {
        en: '2021',
        ja: '2021年'
      },
      'testimonials.manga.year': {
        en: '2020',
        ja: '2020年'
      },
      'testimonials.cookpad.year': {
        en: '2019',
        ja: '2019年'
      },
      'testimonials.teamlab.year': {
        en: '2018',
        ja: '2018年'
      },
      'testimonials.lifesciencedb.year': {
        en: '2017',
        ja: '2017年'
      },
      'testimonials.ameba.industry': {
        en: 'SaaS',
        ja: 'SaaS'
      },
      'testimonials.itmedia.industry': {
        en: 'Media',
        ja: 'メディア'
      },
      'testimonials.buzzfeed.industry': {
        en: 'Media',
        ja: 'メディア'
      },
      'testimonials.manga.industry': {
        en: 'Consumer',
        ja: 'コンシューマー'
      },
      'testimonials.cookpad.industry': {
        en: 'Consumer',
        ja: 'コンシューマー'
      },
      'testimonials.teamlab.industry': {
        en: 'Consumer',
        ja: 'コンシューマー'
      },
      'testimonials.lifesciencedb.industry': {
        en: 'SaaS',
        ja: 'SaaS'
      },
      'testimonials.controls.play': {
        en: 'Play',
        ja: '再生'
      },
      'testimonials.controls.pause': {
        en: 'Pause',
        ja: '一時停止'
      },

      // BlogPage
      'blog.title': {
        en: 'Technical Blog',
        ja: '技術ブログ'
      },
      'blog.subtitle': {
        en: 'Insights and knowledge sharing',
        ja: '洞察と知識の共有'
      },
      'blog.search.placeholder': {
        en: 'Search articles...',
        ja: '記事を検索...'
      },
      'blog.categories.all': {
        en: 'All Categories',
        ja: 'すべてのカテゴリ'
      },
      'blog.featured': {
        en: 'Featured Articles',
        ja: '注目記事'
      },
      'blog.all_articles': {
        en: 'All Articles',
        ja: 'すべての記事'
      },
      'blog.articles_count': {
        en: '{count} article{plural}',
        ja: '{count}件の記事'
      }
    };

    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    
    return key; // Return key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};