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
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    const translations: Record<string, Record<Language, string>> = {
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
      'contact.social.github': {
        en: 'Code repositories',
        ja: 'コードリポジトリ'
      },
      'contact.social.telegram': {
        en: 'Quick messaging',
        ja: 'クイックメッセージ'
      },
      'contact.social.discord': {
        en: 'Gaming & chat',
        ja: 'ゲーム・チャット'
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