// ============================================================
//  apps-config.js  ─  アプリ一覧の設定ファイル
//  新しいアプリを追加する場合はこのファイルだけ編集すればOK
// ============================================================

const APPS_CONFIG = [

  // ─── LANGUAGE カテゴリ ────────────────────────────────────
  {
    id: "lang-01",
    name: "Medical English",
    icon: "🩺",
    url: "https://mlb-app-one.vercel.app",
    category: "Language",
    color: "#00d4ff",
    description: "プロフェッショナルな現場・アスリートケア用",
    status: "active"
  },
  {
    id: "lang-02",
    name: "Nightlife Edition",
    icon: "🔮",
    url: "https://mlb-app-nightlife.vercel.app",
    category: "Language",
    color: "#00d4ff",
    description: "バー・クラブ等のディープな夜の会話用",
    status: "active"
  },
  {
    id: "lang-03",
    name: "Baseball English",
    icon: "⚾️",
    url: "https://baseball-english.vercel.app",
    category: "Language",
    color: "#00d4ff",
    description: "グラウンド・クラブハウスでの実戦用",
    status: "active"
  },
  {
    id: "lang-04",
    name: "Daily English",
    icon: "☀️",
    url: "https://daily-english-two.vercel.app",
    category: "Language",
    color: "#00d4ff",
    description: "カフェ・ウーバー・買い物など西海岸の日常用",
    status: "active"
  },
  {
    id: "lang-05",
    name: "Asian Daily",
    icon: "🍵",
    url: "https://asian-daily.vercel.app",
    category: "Language",
    color: "#00d4ff",
    description: "韓国語・台湾華語でのリアルな日常会話",
    status: "active"
  },

  // ─── FINANCE カテゴリ ─────────────────────────────────────
  {
    id: "fin-01",
    name: "投資レーダー",
    icon: "📡",
    url: "#",
    category: "Finance",
    color: "#00ff88",
    description: "ポートフォリオをリアルタイム監視",
    status: "coming-soon"
  },

  // ─── FITNESS カテゴリ ─────────────────────────────────────
  {
    id: "fit-01",
    name: "ワークアウト管理",
    icon: "🏋️",
    url: "#",
    category: "Fitness",
    color: "#ff6b9d",
    description: "トレーニングを記録・分析・可視化",
    status: "coming-soon"
  }

];

// カテゴリ定義（タブの順序・表示名・カラーをここで管理）
const CATEGORIES_CONFIG = [
  { id: "All",      label: "ALL",          emoji: "",   color: "#ffffff" },
  { id: "Language", label: "LANGUAGE",     emoji: "🗣️", color: "#00d4ff" },
  { id: "Finance",  label: "FINANCE",      emoji: "📈", color: "#00ff88" },
  { id: "Fitness",  label: "FITNESS",      emoji: "💪", color: "#ff6b9d" }
];
