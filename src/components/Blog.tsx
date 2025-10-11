import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, Search, Filter, ArrowRight, BookOpen, User, Eye, Heart, ChevronLeft, ChevronRight, Edit3, Save, X, Plus, Upload } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const postsPerPage = 6;
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'ReactとNext.jsでハイパフォーマンスWebアプリケーションを構築する',
      excerpt: 'モダンなReactパターン、Next.js最適化技術、パフォーマンスベストプラクティスを使用して、高速なWebアプリケーションを作成する方法を学びます。',
      content: `今日の競争の激しいデジタル環境において、Webアプリケーションのパフォーマンスはユーザーエンゲージメントとビジネス成功にとって重要です。この包括的なガイドでは、ReactとNext.jsを使用してハイパフォーマンスWebアプリケーションを構築するために知っておくべきすべてをカバーします。

## 基盤：Reactパフォーマンス最適化

Reactのコンポーネントベースアーキテクチャは、最適化の優れた機会を提供します。主要な戦略には以下が含まれます：

- **コンポーネントメモ化**: 高コストなコンポーネントにReact.memo()を使用
- **フック最適化**: useMemo()とuseCallback()を戦略的に実装
- **コード分割**: 初期バンドルサイズを削減するためのコンポーネントの遅延読み込み
- **仮想スクロール**: 大きなデータセットを効率的に処理

## Next.jsパフォーマンス機能

Next.jsは強力な組み込み最適化を提供します：

- **自動コード分割**: ページが最適な読み込みのために自動的に分割
- **画像最適化**: 自動WebP変換を備えたNext.js Imageコンポーネント
- **静的生成**: 最大速度のためにビルド時にページをプリレンダリング
- **APIルート**: バックエンドロジックのためのサーバーレス関数

## 実際の結果

私の最近のプロジェクトでは、これらの技術を実装することで以下の結果を得ました：
- **40%高速なページ読み込み時間**
- **Core Web Vitalsの60%改善**
- **2倍良いユーザーエンゲージメント指標**

重要なのは、ユーザーのニーズを理解し、それに応じて最適化することです。`,
      author: 'Keishin',
      date: '2024-01-15',
      readTime: '8分',
      category: 'Web Development',
      tags: ['React', 'Next.js', 'パフォーマンス', 'Web開発'],
      image: '/projects/buzzfeed/1.jpg',
      views: 1247,
      likes: 89,
      featured: true
    },
    {
      id: '2',
      title: 'Jetpack ComposeによるAndroidアプリ開発：完全ガイド',
      excerpt: 'Jetpack Composeの力を発見し、より少ないコードとより良いパフォーマンスでモダンでレスポンシブなAndroidアプリケーションを作成しましょう。',
      content: `Jetpack Composeは、強力で直感的な宣言的UIフレームワークを提供することで、Android開発に革命をもたらしました。このガイドでは、基本概念から高度なパターンまで、すべてをカバーします。

## なぜJetpack Composeなのか？

XMLレイアウトを使用した従来のAndroid開発には、いくつかの制限があります：
- 冗長でエラーが発生しやすい
- 保守が困難
- 再利用性が限定的
- 複雑な状態管理

Jetpack Composeは以下の方法でこれらの問題を解決します：
- **宣言的UI**: 実現方法ではなく、何をしたいかを記述
- **Composable関数**: 再利用可能でテスト可能なUIコンポーネント
- **状態管理**: rememberとmutableStateOfによる組み込み状態処理
- **Material Design**: Material 3とのシームレスな統合

## ベストプラクティス

1. **Composableを小さく保つ**: 単一責任の原則
2. **状態のホイスティングを使用**: 適切なレベルまで状態を上げる
3. **適切なテストを実装**: ComposableのユニットテストとUIテスト
4. **パフォーマンス最適化**: 大きなリストにはLazyColumnを使用

## 実際のプロジェクト例

私の最近のAndroidプロジェクトでは、Jetpack Composeにより開発時間を30%短縮し、コードの保守性を大幅に改善しました。`,
      author: 'Keishin',
      date: '2024-01-10',
      readTime: '12分',
      category: 'Mobile Development',
      tags: ['Android', 'Jetpack Compose', 'モバイル開発', 'Kotlin'],
      image: '/projects/ameba/1.png',
      views: 892,
      likes: 67,
      featured: true
    },
    {
      id: '3',
      title: 'AIモデル開発：プロトタイプから本番環境まで',
      excerpt: 'MLOpsベストプラクティスを使用して、本番環境でAIモデルを構築、訓練、デプロイするための包括的なガイド。',
      content: `AIプロトタイプから本番対応システムへの道のりには、数多くの課題が伴います。このガイドでは、成功するAIデプロイメントのための完全なMLOpsパイプラインをカバーします。

## MLOpsパイプライン

### 1. データ準備
- **データ収集**: 関連性の高い高品質データセットの収集
- **データクリーニング**: 欠損値、外れ値、不整合の処理
- **特徴エンジニアリング**: モデル訓練のための意味のある特徴の作成
- **データ検証**: データ品質と一貫性の確保

### 2. モデル開発
- **アルゴリズム選択**: 問題に適したモデルの選択
- **ハイパーパラメータチューニング**: モデルパフォーマンスの最適化
- **クロスバリデーション**: モデルの汎化性の確保
- **モデル評価**: 包括的なパフォーマンス指標

### 3. 本番デプロイメント
- **コンテナ化**: 一貫した環境のためのDocker
- **API開発**: モデル推論のためのRESTfulサービス
- **監視**: リアルタイムパフォーマンス追跡
- **スケーリング**: 増加した負荷とトラフィックの処理

## 実際の成功事例

私の最近のAIプロジェクトでは、適切なMLOpsプラクティスの実装により以下の結果を得ました：
- **50%高速なモデルデプロイメント**
- **本番問題の90%削減**
- **3倍良いモデルパフォーマンス監視**

重要なのは、AIモデルを研究実験ではなく、本番ソフトウェアとして扱うことです。`,
      author: 'Keishin',
      date: '2024-01-05',
      readTime: '15分',
      category: 'AI/ML',
      tags: ['AI', 'MLOps', '機械学習', '本番環境'],
      image: '/projects/OpenAI/1.png',
      views: 1563,
      likes: 124,
      featured: true
    },
    {
      id: '4',
      title: '素晴らしいユーザーインターフェースのためのモダンCSS技術',
      excerpt: 'Grid、Flexbox、アニメーション、モダンレイアウトパターンを含む高度なCSS技術を探索し、美しいユーザーインターフェースを作成しましょう。',
      content: `CSSは大幅に進化し、洗練されたユーザーインターフェースを作成するための強力なツールを提供しています。このガイドでは、すべての開発者が知っておくべきモダンCSS技術をカバーします。

## レイアウトシステム

### CSS Grid
- **2次元レイアウト**: 複雑なページ構造に最適
- **レスポンシブデザイン**: 異なる画面サイズへの自動適応
- **グリッドエリア**: より良い保守性のためのセマンティック命名

### Flexbox
- **1次元レイアウト**: コンポーネントレベルのレイアウトに理想的
- **配置**: アイテムの位置に対する精密な制御
- **柔軟なサイズ調整**: 自動的なスペース配分

## 高度な技術

1. **カスタムプロパティ**: 動的テーマのためのCSS変数
2. **コンテナクエリ**: コンテナサイズに基づくレスポンシブデザイン
3. **CSSアニメーション**: スムーズで高性能なアニメーション
4. **モダンセレクタ**: 高度なターゲティング機能

## パフォーマンス考慮事項

- アニメーションにはtransformとopacityを使用
- より良いパフォーマンスのためにCSS containmentを活用
- 古いブラウザ用の適切なフォールバックを実装
- CSS-in-JSライブラリを慎重に使用

## 実際のプロジェクトへの影響

私のプロジェクトでモダンCSS技術を実装した結果：
- **25%高速なレンダリング**
- **40%良いユーザーエクスペリエンス**
- **60%のJavaScriptバンドルサイズ削減**

重要なのは、各技術をいつ使用するか、そしてそれらがどのように連携するかを理解することです。`,
      author: 'Keishin',
      date: '2024-01-01',
      readTime: '10分',
      category: 'Frontend',
      tags: ['CSS', 'フロントエンド', 'UI/UX', 'Web開発'],
      image: '/projects/muji/1.png',
      views: 743,
      likes: 56,
      featured: false
    },
    {
      id: '5',
      title: 'Node.jsでスケーラブルなバックエンドシステムを構築する',
      excerpt: 'Node.js、Express、モダンなアーキテクチャパターンを使用して、堅牢でスケーラブルなバックエンドシステムを設計・実装する方法を学びましょう。',
      content: `バックエンド開発では、スケーラビリティ、パフォーマンス、保守性を慎重に考慮する必要があります。このガイドでは、Node.jsを使用して本番対応のバックエンドシステムを構築する方法をカバーします。

## アーキテクチャパターン

### マイクロサービス
- **サービス分離**: 独立したデプロイ可能なサービス
- **APIゲートウェイ**: 集中化されたリクエストルーティング
- **サービスディスカバリ**: 動的なサービス位置特定
- **サーキットブレーカー**: フォルトトレランスパターン

### イベント駆動アーキテクチャ
- **メッセージキュー**: 非同期通信
- **イベントソーシング**: 監査証跡と状態再構築
- **CQRS**: コマンドクエリ責任分離
- **Sagaパターン**: 分散トランザクション管理

## パフォーマンス最適化

1. **データベース最適化**: 適切なインデックスとクエリ最適化
2. **キャッシュ戦略**: セッションとデータキャッシュのためのRedis
3. **ロードバランシング**: 複数のサーバー間でのトラフィック分散
4. **CDN統合**: 静的アセット配信最適化

## セキュリティベストプラクティス

- **認証**: JWTトークンとセッション管理
- **認可**: ロールベースアクセス制御
- **入力検証**: インジェクション攻撃の防止
- **レート制限**: 悪用からの保護

## 実際の結果

私のバックエンドプロジェクトでこれらのパターンを実装した結果：
- **70%良いスケーラビリティ**
- **50%高速なレスポンス時間**
- **90%のダウンタイム削減**

重要なのは、特定のユースケースに適したアーキテクチャを選択することです。`,
      author: 'Keishin',
      date: '2023-12-28',
      readTime: '14分',
      category: 'Backend',
      tags: ['Node.js', 'バックエンド', 'アーキテクチャ', 'スケーラビリティ'],
      image: '/projects/cookpad/1.jpg',
      views: 1089,
      likes: 78,
      featured: false
    },
    {
      id: '6',
      title: 'Web開発の未来：トレンドと予測',
      excerpt: 'WebAssemblyからエッジコンピューティングまで、Web開発の新興トレンドを探索し、それらがWebの未来をどのように形作るかを学びましょう。',
      content: `Web開発の風景は絶えず進化しています。この記事では、Web開発の現在のトレンドと将来の予測を探ります。

## 新興技術

### WebAssembly (WASM)
- **ネイティブに近いパフォーマンス**: ブラウザでコンパイルされたコードを実行
- **言語多様性**: C++、Rust、Goなどのサポート
- **ユースケース**: ゲーム、画像処理、科学計算

### エッジコンピューティング
- **レイテンシ削減**: ユーザーに近い場所での処理
- **より良いパフォーマンス**: 高速なレスポンス時間
- **グローバル配信**: コンテンツ配信最適化

### プログレッシブWebアプリ (PWA)
- **ネイティブライクなエクスペリエンス**: ブラウザでのアプリライクな機能
- **オフラインサポート**: インターネット接続なしでの動作
- **プッシュ通知**: 効果的なユーザーエンゲージメント

## 将来の予測

1. **AI統合**: Webアプリケーションでの機械学習
2. **音声インターフェース**: 会話型ユーザーエクスペリエンス
3. **AR/VR Web**: 没入型Webエクスペリエンス
4. **量子コンピューティング**: 革命的処理能力

## 未来への準備

- **最新情報を保つ**: 継続的な学習と適応
- **実験**: 新しい技術とフレームワークを試す
- **コミュニティ参加**: オープンソースへの貢献
- **スキル多様化**: 幅広い知識基盤

## 実際の影響

私の開発作業でトレンドに先んじた結果：
- **30%高速な新技術の採用**
- **50%良いクライアント満足度**
- **40%増加したプロジェクト成功率**

重要なのは、イノベーションと実用的な応用のバランスを取ることです。`,
      author: 'Keishin',
      date: '2023-12-20',
      readTime: '11分',
      category: 'Technology',
      tags: ['未来', '技術', 'Web開発', 'トレンド'],
      image: '/projects/teamlab/1.jpg',
      views: 934,
      likes: 72,
      featured: false
    }
  ]);

  // Editing functions
  const handleEditPost = (post: BlogPost) => {
    setEditingPost({ ...post });
    setIsEditing(true);
    setSelectedPost(null);
  };

  const handleCreatePost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: '新しい記事タイトル',
      excerpt: '記事を要約する魅力的な要約を書いてください...',
      content: `# あなたの記事タイトル

ここに記事の内容を書いてください。マークダウン形式を使用できます：

## セクションヘッダー
セクションヘッダーには ## を使用

### サブセクションヘッダー
サブセクションヘッダーには ### を使用

**太字** と *斜体* がサポートされています。

- 箇条書き
- リストに最適
- コンテンツの整理に役立つ

## コード例
\`\`\`javascript
// コードブロックがサポートされています
const example = "Hello World";
console.log(example);
\`\`\`

## 結論
重要なポイントと次のステップで記事をまとめましょう。`,
      author: 'Keishin',
      date: new Date().toISOString().split('T')[0],
      readTime: '5分',
      category: 'Web Development',
      tags: ['新しい記事', '技術'],
      image: '/projects/teamlab/1.jpg',
      views: 0,
      likes: 0,
      featured: false
    };
    setEditingPost(newPost);
    setIsCreating(true);
    setIsEditing(true);
    setSelectedPost(null); // Close any open article modal
  };

  const handleSavePost = () => {
    if (!editingPost) return;
    
    // Basic validation
    if (!editingPost.title.trim()) {
      alert(t('blog.validation.title_required'));
      return;
    }
    if (!editingPost.content.trim()) {
      alert(t('blog.validation.content_required'));
      return;
    }
    
    if (isCreating) {
      // Add new article to the beginning of the list
      setBlogPosts(prev => [editingPost, ...prev]);
      alert(t('blog.success.created'));
    } else {
      setBlogPosts(prev => prev.map(post => 
        post.id === editingPost.id ? editingPost : post
      ));
      alert(t('blog.success.updated'));
    }
    
    setIsEditing(false);
    setIsCreating(false);
    setEditingPost(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setIsCreating(false);
    setEditingPost(null);
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm(t('blog.confirm.delete'))) {
      setBlogPosts(prev => prev.filter(post => post.id !== postId));
      setSelectedPost(null);
    }
  };

  // Image upload functionality
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !editingPost) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert(t('blog.validation.file_type'));
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert(t('blog.validation.file_size'));
      return;
    }

    setUploadingImage(true);

    try {
      // Convert to base64 for demo purposes
      // In a real app, you'd upload to a server/cloud storage
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setEditingPost({...editingPost, image: result});
        setUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert(t('blog.validation.upload_error'));
      setUploadingImage(false);
    }
  };

  const handleImageUrlChange = (url: string) => {
    if (!editingPost) return;
    setEditingPost({...editingPost, image: url});
  };

  const categories = ['all', 'Web Development', 'Mobile Development', 'AI/ML', 'Frontend', 'Backend', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('blog.share.copied'));
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-coral-600/20"></div>
        <div className="absolute inset-0 bg-[url('/projects/teamlab/1.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="pt-10 relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-white/80 text-sm font-medium">{t('blog.title')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('blog.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-coral-400">Knowledge</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            {t('blog.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('blog-posts')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t('blog.hero.browse')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-white/60 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? t('blog.categories.all') : category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Quick Add Button */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">{t('blog.featured')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map(post => (
                <article
                  key={post.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {t('blog.featured.badge')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-white/60 mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/80 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-white/60" />
                        <span className="text-white/80 text-sm">{post.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
                            likedPosts.has(post.id) 
                              ? 'bg-red-500/20 text-red-400' 
                              : 'bg-white/10 text-white/60 hover:bg-white/20'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                          <span className="text-sm">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? t('blog.all_articles') : `${selectedCategory} Articles`}
            </h2>
            <span className="text-white/60">
              {filteredPosts.length} {t('blog.articles_count').replace('{count}', filteredPosts.length.toString()).replace('{plural}', filteredPosts.length !== 1 ? 's' : '')}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map(post => (
              <article
                key={post.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-white/60 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-white/60" />
                      <span className="text-white/80 text-sm">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
                          likedPosts.has(post.id) 
                            ? 'bg-red-500/20 text-red-400' 
                            : 'bg-white/10 text-white/60 hover:bg-white/20'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-colors"
                      >
                        <span className="text-sm">{t('blog.read')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-white/10 text-white/60 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    page === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 bg-white/10 text-white/60 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm pt-20">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="relative p-8 border-b border-white/10">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-coral-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedPost.title}
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-white/90 leading-relaxed">
                  {selectedPost.content}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('blog.close')}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit/Create Article Modal */}
      {isEditing && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm pt-20">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="relative p-8 border-b border-white/10">
              <button
                onClick={handleCancelEdit}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
              </button>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Edit3 className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {isCreating ? t('blog.create.title') : t('blog.edit.title')}
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {isCreating ? t('blog.create.subtitle') : t('blog.edit.subtitle')}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-white font-semibold mb-2">{t('blog.form.title')}</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('blog.form.title_placeholder')}
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-white font-semibold mb-2">{t('blog.form.excerpt')}</label>
                  <textarea
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                    placeholder={t('blog.form.excerpt_placeholder')}
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-white font-semibold mb-2">{t('blog.form.content')}</label>
                  <textarea
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 h-48 resize-none"
                    placeholder={t('blog.form.content_placeholder')}
                  />
                </div>

                {/* Category and Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">{t('blog.form.category')}</label>
                    <select
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Web Development" className="bg-slate-800">Web Development</option>
                      <option value="Mobile Development" className="bg-slate-800">Mobile Development</option>
                      <option value="AI/ML" className="bg-slate-800">AI/ML</option>
                      <option value="Frontend" className="bg-slate-800">Frontend</option>
                      <option value="Backend" className="bg-slate-800">Backend</option>
                      <option value="Technology" className="bg-slate-800">Technology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">{t('blog.form.read_time')}</label>
                    <input
                      type="text"
                      value={editingPost.readTime}
                      onChange={(e) => setEditingPost({...editingPost, readTime: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('blog.form.read_time_placeholder')}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-white font-semibold mb-2">{t('blog.form.tags')}</label>
                  <input
                    type="text"
                    value={editingPost.tags.join(', ')}
                    onChange={(e) => setEditingPost({...editingPost, tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('blog.form.tags_placeholder')}
                  />
                </div>

                {/* Featured and Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">{t('blog.form.featured')}</label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={editingPost.featured}
                        onChange={(e) => setEditingPost({...editingPost, featured: e.target.checked})}
                        className="w-5 h-5 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                      />
                      <span className="text-white/80">{t('blog.form.featured_label')}</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">{t('blog.form.image')}</label>
                    
                    {/* Image Preview */}
                    {editingPost.image && (
                      <div className="mb-4">
                        <img
                          src={editingPost.image}
                          alt="Article preview"
                          className="w-full h-32 object-cover rounded-lg border border-white/20"
                        />
                      </div>
                    )}
                    
                    {/* Upload Options */}
                    <div className="space-y-3">
                      {/* File Upload */}
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          disabled={uploadingImage}
                          className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                        >
                          {uploadingImage ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>{t('blog.form.uploading')}</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-5 h-5" />
                              <span>{t('blog.form.upload')}</span>
                            </>
                          )}
                        </button>
                        <p className="text-xs text-white/60 mt-1">{t('blog.form.max_size')}</p>
                      </div>
                      
                      {/* URL Input */}
                      <div>
                        <input
                          type="text"
                          value={editingPost.image}
                          onChange={(e) => handleImageUrlChange(e.target.value)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder={t('blog.form.image_placeholder')}
                        />
                      </div>
                      
                      {/* Project Images Quick Select */}
                      <div>
                        <label className="block text-white/80 text-sm mb-2">{t('blog.form.quick_select')}</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['/projects/teamlab/1.jpg', '/projects/buzzfeed/1.jpg', '/projects/ameba/1.png', '/projects/OpenAI/1.png', '/projects/muji/1.png', '/projects/cookpad/1.jpg'].map((imgPath) => (
                            <button
                              key={imgPath}
                              onClick={() => handleImageUrlChange(imgPath)}
                              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-xs text-white/80"
                            >
                              {imgPath.split('/').pop()}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleSavePost}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>{isCreating ? t('blog.form.create') : t('blog.form.save')}</span>
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-8 py-3 border border-white/20 hover:border-white/40 text-white rounded-xl font-semibold transition-colors"
                >
                  {t('blog.form.cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;