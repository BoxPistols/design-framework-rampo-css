# Rampo CSS

A modern, utility-first CSS framework inspired by Tailwind CSS with built-in components and theming support.

シンプルで使いやすいモダン CSS フレームワークです。Tailwind CSS ライクなユーティリティクラスと、再利用可能なコンポーネントを提供します。

## 特徴 / Features

- 🎨 **モダンなデザイン** - CSS 変数を使用したカスタマイズ可能なテーマシステム
- 📱 **レスポンシブ対応** - モバイルファーストのレスポンシブデザイン
- ⚡ **軽量** - 必要最小限の機能を効率的に実装（約38KB minified）
- 🔧 **ユーティリティファースト** - 豊富なユーティリティクラスで高速開発
- 🧩 **コンポーネント付き** - よく使われる UI コンポーネントを内蔵
- 🌙 **ダークモード対応** - CSS変数ベースのテーマ切り替え

## インストール / Installation

### npm

```bash
npm install rampo-css
```

### yarn

```bash
yarn add rampo-css
```

### pnpm

```bash
pnpm add rampo-css
```

## 使用方法 / Usage

### CDN 経由で使用

```html
<!-- Minified version (recommended) -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />

<!-- Full version -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.css" />
```

### npm でインストールした場合

```javascript
// Import in your JavaScript/TypeScript
import 'rampo-css/dist/rampo.min.css';
```

または CSS で直接インポート：

```css
@import 'rampo-css/dist/rampo.min.css';
```

### HTML での使用例

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rampo CSS Example</title>
    <link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />
  </head>
  <body>
    <div class="container">
      <h1 class="text-center text-primary">Hello Rampo CSS!</h1>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </body>
</html>
```

## ファイル構成

```bash
CSS/
├── framework.css          # メインファイル（全モジュールをインポート）
├── minify.css            # 圧縮版
├── reset.css             # リセットスタイル
├── typography.css        # タイポグラフィ
├── grid.css              # グリッドシステム
├── utilities.css         # ユーティリティクラス
├── components.css        # コンポーネント
├── responsive.css        # レスポンシブユーティリティ
├── example.html          # 使用例
└── README.md            # このファイル
```

## レイアウトシステム

### コンテナ

```html
<div class="container">
  <!-- 最大幅1200px、中央揃え -->
</div>
```

### フレックスボックス

```html
<div class="flex justify-center items-center gap-4">
  <div>アイテム1</div>
  <div>アイテム2</div>
  <div>アイテム3</div>
</div>
```

### CSS グリッド

```html
<div class="grid grid-cols-3 gap-6">
  <div>グリッドアイテム1</div>
  <div>グリッドアイテム2</div>
  <div>グリッドアイテム3</div>
</div>
```

### 12 カラムグリッド

```html
<div class="row">
  <div class="col-6">半分の幅</div>
  <div class="col-6">半分の幅</div>
</div>
```

## ユーティリティクラス

### 余白

```html
<!-- マージン -->
<div class="m-4">全方向マージン</div>
<div class="mt-2 mb-4">上下マージン</div>
<div class="mx-auto">左右中央揃え</div>

<!-- パディング -->
<div class="p-6">全方向パディング</div>
<div class="px-4 py-2">水平・垂直パディング</div>
```

### 色

```html
<!-- 背景色 -->
<div class="bg-primary">プライマリ背景</div>
<div class="bg-gray-100">グレー背景</div>

<!-- 文字色 -->
<p class="text-white">白文字</p>
<p class="text-gray-600">グレー文字</p>
```

### Gap（要素間隔）

```html
<!-- Flexbox -->
<div class="flex gap-4">
  <div>アイテム1</div>
  <div>アイテム2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-2 gap-6">
  <div>グリッド1</div>
  <div>グリッド2</div>
</div>
```

## コンポーネント

### ボタン

```html
<!-- 基本ボタン -->
<button class="btn btn-primary">プライマリボタン</button>
<button class="btn btn-secondary">セカンダリボタン</button>
<button class="btn btn-outline">アウトラインボタン</button>

<!-- サイズ -->
<button class="btn btn-primary btn-sm">小</button>
<button class="btn btn-primary">標準</button>
<button class="btn btn-primary btn-lg">大</button>

<!-- ボタングループ -->
<div class="btn-group">
  <button class="btn btn-outline">左</button>
  <button class="btn btn-outline">中央</button>
  <button class="btn btn-outline">右</button>
</div>
```

### フォーム

```html
<form>
  <!-- テキスト入力 -->
  <div class="form-group">
    <label class="form-label" for="name">名前</label>
    <input type="text" class="form-input" id="name" placeholder="名前を入力" />
  </div>

  <!-- セレクト -->
  <div class="form-group">
    <label class="form-label" for="country">国</label>
    <select class="form-input form-select" id="country">
      <option>日本</option>
      <option>アメリカ</option>
      <option>イギリス</option>
    </select>
  </div>

  <!-- 日付入力 -->
  <div class="form-group">
    <label class="form-label" for="date">日付</label>
    <input type="date" class="form-input form-date" id="date" />
  </div>

  <!-- テキストエリア -->
  <div class="form-group">
    <label class="form-label" for="message">メッセージ</label>
    <textarea class="form-input form-textarea" id="message"></textarea>
  </div>

  <!-- チェックボックス・ラジオボタン -->
  <div class="form-group">
    <input type="checkbox" class="form-checkbox" id="agree" />
    <label for="agree">利用規約に同意する</label>
  </div>
</form>
```

### カード

```html
<div class="card">
  <div class="card-header">
    <h3>カードタイトル</h3>
  </div>
  <div class="card-body">
    <p>カードの内容をここに記述します。</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">アクション</button>
  </div>
</div>
```

### アラート

```html
<div class="alert alert-info">情報アラート</div>
<div class="alert alert-success">成功アラート</div>
<div class="alert alert-warning">警告アラート</div>
<div class="alert alert-error">エラーアラート</div>
```

### ナビゲーション

```html
<!-- ナビゲーションバー -->
<nav class="navbar">
  <a href="#" class="navbar-brand">ブランド名</a>
  <ul class="nav">
    <li class="nav-item"><a href="#" class="nav-link active">ホーム</a></li>
    <li class="nav-item"><a href="#" class="nav-link">概要</a></li>
    <li class="nav-item"><a href="#" class="nav-link">連絡先</a></li>
  </ul>
</nav>
```

### バッジ

```html
<span class="badge badge-primary">プライマリ</span>
<span class="badge badge-success">成功</span>
<span class="badge badge-warning">警告</span>
```

## 高度な使い方 / Advanced Usage

### Transform（変形）

Transform utilities を使用する際は、**必ず `.transform` クラスを追加**してください。

```html
<!-- ✅ 正しい使い方 -->
<div class="transform scale-105 rotate-45">変形要素</div>
<button class="transform hover:scale-110 transition duration-300">ホバーで拡大</button>

<!-- ❌ 間違い：.transform クラスがない -->
<div class="scale-105 rotate-45">動作しません</div>
```

#### 使用可能な Transform utilities

```html
<!-- スケール -->
<div class="transform scale-50">50%に縮小</div>
<div class="transform scale-105">105%に拡大</div>

<!-- 回転 -->
<div class="transform rotate-45">45度回転</div>
<div class="transform rotate-90">90度回転</div>
<div class="transform -rotate-45">-45度回転</div>

<!-- 組み合わせ -->
<div class="transform scale-110 rotate-12">拡大+回転</div>
<div class="transform translate-x-0 scale-95">複数の変形</div>
```

### Filter（フィルター効果）

Filter utilities を使用する際は、**必ず `.filter` クラスを追加**してください。

```html
<!-- ✅ 正しい使い方 -->
<img src="image.jpg" class="filter blur-sm grayscale" />
<div class="filter blur-lg">ぼかし効果</div>

<!-- ❌ 間違い：.filter クラスがない -->
<img src="image.jpg" class="blur-sm grayscale" /><!-- 動作しません -->
```

#### 使用可能な Filter utilities

```html
<!-- ぼかし -->
<img class="filter blur-sm" /><!-- 4px -->
<img class="filter blur" /><!-- 8px -->
<img class="filter blur-lg" /><!-- 16px -->

<!-- グレースケール -->
<img class="filter grayscale" /><!-- 100% -->

<!-- 組み合わせ -->
<img class="filter blur-sm grayscale" /><!-- ぼかし + グレースケール -->
```

### Transitions & Animations

スムーズなアニメーション効果を実現できます。

```html
<!-- 基本的なトランジション -->
<button class="btn btn-primary transition hover:opacity-75">
  ホバーで透明度変化
</button>

<!-- Transform との組み合わせ -->
<div class="transform transition duration-300 hover:scale-110">
  ホバーで拡大
</div>

<!-- カスタム速度 -->
<div class="transition duration-500 ease-in-out">
  ゆっくりとした変化
</div>
```

### Opacity（透明度）

```html
<div class="opacity-0">完全に透明</div>
<div class="opacity-50">50%透明</div>
<div class="opacity-100">不透明</div>

<!-- ホバー時の透明度変更 -->
<button class="opacity-75 hover:opacity-100 transition">
  ホバーで不透明に
</button>
```

## レスポンシブデザイン

### ブレークポイント

- `sm`: 640px 以上
- `md`: 768px 以上
- `lg`: 1024px 以上
- `xl`: 1280px 以上

### 使用例

```html
<!-- レスポンシブテキスト -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">見出し</h1>

<!-- レスポンシブ余白 -->
<div class="p-4 md:p-8 lg:p-12">コンテンツ</div>

<!-- レスポンシブグリッド -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>アイテム1</div>
  <div>アイテム2</div>
  <div>アイテム3</div>
</div>
```

## カスタマイズ

### CSS 変数でテーマを変更

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --success: #your-color;
  --warning: #your-color;
  --error: #your-color;

  --space-4: 1.5rem; /* 標準は1rem */
  --max-width: 1400px; /* 標準は1200px */
}
```

### カスタムコンポーネントの追加

```css
.my-component {
  /* CSS変数を使用してテーマに合わせる */
  background-color: var(--primary);
  color: var(--white);
  padding: var(--space-4);
  border-radius: 0.375rem;
}
```

## 実用例 / Practical Examples

### カードコンポーネントの作成

```html
<div class="card max-w-sm">
  <img src="product.jpg" class="w-full h-auto rounded-t-lg" />
  <div class="card-body">
    <h3 class="text-xl font-bold mb-2">商品タイトル</h3>
    <p class="text-gray-600 mb-4">商品の説明文がここに入ります。</p>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary">¥9,800</span>
      <button class="btn btn-primary transform transition hover:scale-105">
        カートに追加
      </button>
    </div>
  </div>
</div>
```

### モーダル風の要素

```html
<div class="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-white rounded-lg shadow-lg p-6 max-w-md">
  <h2 class="text-2xl font-bold mb-4">確認</h2>
  <p class="mb-6">この操作を実行しますか？</p>
  <div class="flex gap-4">
    <button class="btn btn-outline flex-1">キャンセル</button>
    <button class="btn btn-primary flex-1">OK</button>
  </div>
</div>
```

### ナビゲーションヘッダー

```html
<header class="fixed top-0 w-full bg-white shadow-md z-50">
  <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-primary">ロゴ</a>
    <ul class="flex gap-6">
      <li><a href="#" class="transition hover:text-primary">ホーム</a></li>
      <li><a href="#" class="transition hover:text-primary">製品</a></li>
      <li><a href="#" class="transition hover:text-primary">会社情報</a></li>
    </ul>
    <button class="btn btn-primary">お問い合わせ</button>
  </nav>
</header>
```

### イメージギャラリー

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="overflow-hidden rounded-lg">
    <img src="photo1.jpg"
         class="w-full h-64 object-cover transform transition duration-300 hover:scale-110" />
  </div>
  <div class="overflow-hidden rounded-lg">
    <img src="photo2.jpg"
         class="w-full h-64 object-cover transform transition duration-300 hover:scale-110" />
  </div>
  <div class="overflow-hidden rounded-lg">
    <img src="photo3.jpg"
         class="w-full h-64 object-cover transform transition duration-300 hover:scale-110" />
  </div>
</div>
```

## よくある質問 / FAQ

### Q: Transform が動作しません

A: `.transform` ベースクラスを追加してください。

```html
<!-- ❌ 動作しない -->
<div class="scale-105">...</div>

<!-- ✅ 正しい -->
<div class="transform scale-105">...</div>
```

### Q: Filter が動作しません

A: `.filter` ベースクラスを追加してください。

```html
<!-- ❌ 動作しない -->
<img class="blur grayscale" />

<!-- ✅ 正しい -->
<img class="filter blur grayscale" />
```

### Q: テーマカラーを変更したい

A: CSS変数を上書きしてください。

```css
:root {
  --primary: #your-color;
  --primary-rgb: 255, 0, 0; /* RGB値も更新 */
}
```

### Q: CDNで使用できますか？

A: はい、unpkgまたはjsDelivrから利用できます。

```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />

<!-- jsdelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rampo-css/dist/rampo.min.css" />
```

### Q: カスタムユーティリティクラスを追加したい

A: CSS変数を活用することで、既存のシステムに合わせて拡張できます。

```css
/* カスタムスペーシング */
.m-custom {
  margin: calc(var(--space-4) * 1.5);
}

/* カスタムカラー */
.text-brand {
  color: var(--primary);
}
```

## トラブルシューティング / Troubleshooting

### スタイルが適用されない

1. CSSファイルが正しく読み込まれているか確認
2. クラス名のスペルミスがないか確認
3. Transform/Filterはベースクラスを追加しているか確認

### ビルドエラーが発生する

```bash
# 依存関係を再インストール
npm install

# キャッシュをクリア
rm -rf node_modules package-lock.json
npm install

# ビルドを実行
npm run build
```

## デモ / Demo

完全なコンポーネント例とデモは `demo.html` を参照してください。

```bash
# ローカルでデモを表示
open demo.html
```

## ブラウザサポート

- Chrome 88+
- Firefox 86+
- Safari 14+
- Edge 88+

最新のブラウザ環境での使用を推奨します。

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告をお待ちしています。

開発に参加したい場合は、`DEVELOPMENT.md` を参照してください。

## 更新履歴 / Changelog

### v1.0.0

- 初回リリース / Initial release
- 基本的なユーティリティクラス / Basic utility classes
- コンポーネントライブラリ / Component library
- レスポンシブサポート / Responsive support
- Gap ユーティリティ追加 / Gap utilities
- ボタングループコンポーネント追加 / Button group components
- フォーム要素の拡充（Select、DatePicker）/ Enhanced form elements
- Transition, Transform, Opacity utilities
- Filter utilities (blur, grayscale)
- Max-width, Min-height utilities
- npm package配信対応 / npm package distribution support
