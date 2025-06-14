# CSS Framework Rampo CSS

シンプルで使いやすいモダン CSS フレームワークです。Tailwind CSS ライクなユーティリティクラスと、再利用可能なコンポーネントを提供します。

## 特徴

- 🎨 **モダンなデザイン** - CSS 変数を使用したカスタマイズ可能なテーマシステム
- 📱 **レスポンシブ対応** - モバイルファーストのレスポンシブデザイン
- ⚡ **軽量** - 必要最小限の機能を効率的に実装
- 🔧 **ユーティリティファースト** - 豊富なユーティリティクラスで高速開発
- 🧩 **コンポーネント付き** - よく使われる UI コンポーネントを内蔵

## クイックスタート

### CDN 経由で使用

```html
<link rel="stylesheet" href="./css/framework.css" />
```

### ファイルをダウンロードして使用

1. `framework.css`をダウンロード
2. HTML ファイルにリンクを追加

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Framework Rampo Example</title>
    <link rel="stylesheet" href="./css/framework.css" />
  </head>
  <body>
    <div class="container">
      <h1 class="text-center text-primary">Hello CSS Framework Rampo!</h1>
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

## ブラウザサポート

- Chrome 88+
- Firefox 86+
- Safari 14+
- Edge 88+

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告をお待ちしています。

## 更新履歴

### v1.0.0

- 初回リリース
- 基本的なユーティリティクラス
- コンポーネントライブラリ
- レスポンシブサポート
- Gap ユーティリティ追加
- ボタングループコンポーネント追加
- フォーム要素の拡充（Select、DatePicker）
