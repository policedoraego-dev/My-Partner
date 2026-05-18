// ============================================================
//  apps-config.js  ─  アプリ一覧の設定ファイル
//  新しいアプリを追加する場合はこのファイルだけ編集すればOK
// ============================================================

const APPS_CONFIG = [

  // ─── LANGUAGE カテゴリ ────────────────────────────────────
  {
    id: "lang-01",
    name: "単語フラッシュカード",
    icon: "🃏",
    url: "./flashcard/index.html",
    category: "Language",
    color: "#00d4ff",
    description: "スマートな間隔反復で語彙を定着",
    status: "active"
  },
  {
    id: "lang-02",
    name: "シャドーイング練習",
    icon: "🎙️",
    url: "./shadowing/index.html",
    category: "Language",
    color: "#00d4ff",
    description: "ネイティブ音声と同時発話トレーニング",
    status: "active"
  },
  {
    id: "lang-03",
    name: "文法ドリル",
    icon: "📝",
    url: "./grammar/index.html",
    category: "Language",
    color: "#00d4ff",
    description: "弱点を自動検出して集中強化",
    status: "active"
  },
  {
    id: "lang-04",
    name: "リスニングクイズ",
    icon: "🎧",
    url: "./listening/index.html",
    category: "Language",
    color: "#00d4ff",
    description: "リアル音源で耳を鍛えるクイズ",
    status: "active"
  },
  {
    id: "lang-05",
    name: "ライティング添削",
    icon: "✍️",
    url: "./writing/index.html",
    category: "Language",
    color: "#00d4ff",
    description: "AI による即時フィードバック",
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
