# Rampo CSS

<div align="center">

**シンプルで使いやすいモダン CSS フレームワーク**
**A modern, utility-first CSS framework**

[![npm version](https://img.shields.io/npm/v/rampo-css.svg)](https://www.npmjs.com/package/rampo-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[English](./README_EN.md) | 日本語

</div>

---

## 📖 目次

- [特徴](#特徴)
- [3ステップで始める](#3ステップで始める)
- [インストール方法](#インストール方法)
- [基本的な使い方](#基本的な使い方)
- [コンポーネント](#コンポーネント)
- [高度な使い方](#高度な使い方)
- [実用例](#実用例)
- [よくある質問](#よくある質問)
- [ライセンス](#ライセンス)

---

## ✨ 特徴

- 🎨 **モダンなデザイン** - CSS 変数を使用したカスタマイズ可能なテーマシステム
- 📱 **レスポンシブ対応** - モバイルファーストのレスポンシブデザイン
- ⚡ **軽量** - 約38KB（minified）で高速読み込み
- 🔧 **ユーティリティファースト** - Tailwind CSS ライクな豊富なユーティリティクラス
- 🧩 **コンポーネント付き** - よく使われる UI コンポーネントを内蔵
- 🌙 **ダークモード対応** - CSS変数ベースのテーマ切り替え
- 🚀 **CDN対応** - npm不要で即座に利用可能

---

## 🚀 3ステップで始める

### ステップ 1: HTMLファイルを作成

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rampo CSS Demo</title>
  <!-- ステップ 2: CDNからRampo CSSを読み込み -->
  <link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />
</head>
<body>
  <!-- ステップ 3: クラスを使用して要素をスタイリング -->
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-primary mb-4">Hello, Rampo CSS!</h1>
    <p class="text-gray-600 mb-6">モダンなCSSフレームワークへようこそ</p>
    <button class="btn btn-primary transform transition hover:scale-105">
      始める
    </button>
  </div>
</body>
</html>
```

**これだけ！** ブラウザで開けばすぐに美しいUIが表示されます。

---

## 📦 インストール方法

### 方法 1: CDN経由（推奨・最も簡単）

```html
<!-- Minified版（推奨） -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />

<!-- または通常版 -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.css" />
```

### 方法 2: npm経由

```bash
# npm を使用
npm install rampo-css

# yarn を使用
yarn add rampo-css

# pnpm を使用
pnpm add rampo-css
```

#### npmでインストール後の使用方法

```javascript
// JavaScriptファイルでインポート
import 'rampo-css/dist/rampo.min.css';
```

```css
/* または CSSファイルでインポート */
@import 'rampo-css/dist/rampo.min.css';
```

---

## 📚 基本的な使い方

### レイアウト

#### ステップ 1: コンテナを作成

```html
<div class="container">
  <!-- コンテンツ -->
</div>
```

#### ステップ 2: Flexboxでレイアウト

```html
<div class="flex justify-between items-center gap-4">
  <div>左側のコンテンツ</div>
  <div>中央のコンテンツ</div>
  <div>右側のコンテンツ</div>
</div>
```

#### ステップ 3: グリッドレイアウト

```html
<!-- 3カラムグリッド -->
<div class="grid grid-cols-3 gap-6">
  <div class="bg-gray-100 p-4 rounded">アイテム 1</div>
  <div class="bg-gray-100 p-4 rounded">アイテム 2</div>
  <div class="bg-gray-100 p-4 rounded">アイテム 3</div>
</div>

<!-- レスポンシブグリッド -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>モバイル: 1列、タブレット: 2列、PC: 3列</div>
  <div>自動的にレイアウトが変わります</div>
  <div>レスポンシブ対応</div>
</div>
```

### スペーシング（余白）

```html
<!-- マージン -->
<div class="m-4">全方向に余白</div>
<div class="mt-4 mb-2">上下に余白</div>
<div class="mx-auto">左右中央揃え</div>

<!-- パディング -->
<div class="p-6">全方向にパディング</div>
<div class="px-4 py-2">水平・垂直パディング</div>
```

**スペーシングの値:**
- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)

### カラー

```html
<!-- 背景色 -->
<div class="bg-primary">プライマリカラー</div>
<div class="bg-gray-100">グレー背景</div>

<!-- テキスト色 -->
<p class="text-white">白文字</p>
<p class="text-primary">プライマリカラーの文字</p>
<p class="text-gray-600">グレー文字</p>
```

**利用可能なカラー:**
- `primary` - メインカラー（青）
- `secondary` - セカンダリカラー（グレー）
- `success` - 成功（緑）
- `warning` - 警告（オレンジ）
- `error` - エラー（赤）
- `gray-50` ~ `gray-900` - グレースケール

---

## 🧩 コンポーネント

### ボタン

#### ステップ 1: 基本的なボタン

```html
<button class="btn btn-primary">プライマリボタン</button>
<button class="btn btn-secondary">セカンダリボタン</button>
<button class="btn btn-outline">アウトラインボタン</button>
```

#### ステップ 2: サイズバリエーション

```html
<button class="btn btn-primary btn-sm">小さいボタン</button>
<button class="btn btn-primary">通常サイズ</button>
<button class="btn btn-primary btn-lg">大きいボタン</button>
```

#### ステップ 3: ホバーアニメーション付きボタン

```html
<button class="btn btn-primary transform transition hover:scale-105">
  ホバーで拡大
</button>
```

### フォーム

#### 完全なフォーム例

```html
<form class="max-w-md mx-auto">
  <!-- テキスト入力 -->
  <div class="form-group">
    <label class="form-label" for="name">名前</label>
    <input type="text" class="form-input" id="name" placeholder="山田太郎">
  </div>

  <!-- メールアドレス -->
  <div class="form-group">
    <label class="form-label" for="email">メールアドレス</label>
    <input type="email" class="form-input" id="email" placeholder="example@email.com">
  </div>

  <!-- セレクトボックス -->
  <div class="form-group">
    <label class="form-label" for="category">カテゴリ</label>
    <select class="form-input form-select" id="category">
      <option>選択してください</option>
      <option>オプション 1</option>
      <option>オプション 2</option>
    </select>
  </div>

  <!-- テキストエリア -->
  <div class="form-group">
    <label class="form-label" for="message">メッセージ</label>
    <textarea class="form-input form-textarea" id="message" rows="4"></textarea>
  </div>

  <!-- チェックボックス -->
  <div class="form-group">
    <input type="checkbox" class="form-checkbox" id="agree">
    <label for="agree">利用規約に同意する</label>
  </div>

  <!-- 送信ボタン -->
  <button type="submit" class="btn btn-primary w-full">送信</button>
</form>
```

### カード

```html
<div class="card max-w-sm">
  <div class="card-header">
    <h3>カードタイトル</h3>
  </div>
  <div class="card-body">
    <p>カードの内容をここに記述します。</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">詳細を見る</button>
  </div>
</div>
```

### アラート

```html
<div class="alert alert-info">
  <strong>お知らせ:</strong> 重要な情報をお伝えします。
</div>

<div class="alert alert-success">
  <strong>成功!</strong> 操作が正常に完了しました。
</div>

<div class="alert alert-warning">
  <strong>警告:</strong> 注意が必要です。
</div>

<div class="alert alert-error">
  <strong>エラー:</strong> 問題が発生しました。
</div>
```

---

## 🎨 高度な使い方

### Transform（変形） - 重要！

Transform utilities を使用する際は、**必ず `.transform` クラスを追加**してください。

#### ステップ 1: `.transform` クラスを追加

```html
<!-- ✅ 正しい -->
<div class="transform scale-105">拡大表示</div>

<!-- ❌ 間違い（動作しません） -->
<div class="scale-105">動作しません</div>
```

#### ステップ 2: 複数の変形を組み合わせる

```html
<!-- スケール + 回転 -->
<div class="transform scale-110 rotate-12">
  拡大して回転
</div>

<!-- ホバーアニメーション -->
<button class="transform transition duration-300 hover:scale-110 hover:rotate-3">
  マウスオーバーで変化
</button>
```

#### 利用可能な Transform

```html
<!-- スケール（拡大縮小） -->
<div class="transform scale-50">50%に縮小</div>
<div class="transform scale-75">75%に縮小</div>
<div class="transform scale-105">105%に拡大</div>
<div class="transform scale-110">110%に拡大</div>

<!-- 回転 -->
<div class="transform rotate-45">45度回転</div>
<div class="transform rotate-90">90度回転</div>
<div class="transform -rotate-45">-45度回転（反時計回り）</div>
```

### Filter（フィルター効果） - 重要！

Filter utilities を使用する際は、**必ず `.filter` クラスを追加**してください。

#### ステップ 1: `.filter` クラスを追加

```html
<!-- ✅ 正しい -->
<img src="image.jpg" class="filter blur-sm" />

<!-- ❌ 間違い（動作しません） -->
<img src="image.jpg" class="blur-sm" />
```

#### ステップ 2: 複数のフィルターを組み合わせる

```html
<!-- ぼかし + グレースケール -->
<img src="image.jpg" class="filter blur-sm grayscale" />
```

#### 利用可能な Filter

```html
<!-- ぼかし効果 -->
<img class="filter blur-sm" />  <!-- 4px -->
<img class="filter blur" />     <!-- 8px -->
<img class="filter blur-md" />  <!-- 12px -->
<img class="filter blur-lg" />  <!-- 16px -->

<!-- グレースケール -->
<img class="filter grayscale" />    <!-- 100% -->
<img class="filter grayscale-0" />  <!-- 0%（元に戻す） -->
```

### Transitions & Animations

#### ステップ 1: トランジションを追加

```html
<button class="transition hover:opacity-75">
  ホバーで透明度が変わる
</button>
```

#### ステップ 2: 速度を調整

```html
<div class="transition duration-75">超高速</div>
<div class="transition duration-150">高速（デフォルト）</div>
<div class="transition duration-300">普通</div>
<div class="transition duration-500">ゆっくり</div>
```

#### ステップ 3: イージングを調整

```html
<div class="transition ease-linear">リニア</div>
<div class="transition ease-in">イーズイン</div>
<div class="transition ease-out">イーズアウト</div>
<div class="transition ease-in-out">イーズインアウト</div>
```

### レスポンシブデザイン

#### ブレークポイント

| プレフィックス | 画面幅 | 用途 |
|------------|--------|------|
| なし | 0px~ | モバイル（全デバイス） |
| `sm:` | 640px~ | タブレット縦向き |
| `md:` | 768px~ | タブレット横向き |
| `lg:` | 1024px~ | ノートPC |
| `xl:` | 1280px~ | デスクトップ |

#### ステップ 1: レスポンシブテキストサイズ

```html
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  モバイル: 小、タブレット: 中、PC: 大
</h1>
```

#### ステップ 2: レスポンシブ余白

```html
<div class="p-4 md:p-8 lg:p-12">
  画面サイズに応じて余白が変わる
</div>
```

#### ステップ 3: レスポンシブグリッド

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>モバイル: 1列</div>
  <div>タブレット: 2列</div>
  <div>PC: 3列</div>
</div>
```

---

## 💼 実用例

### 例 1: 商品カード

```html
<div class="card max-w-sm overflow-hidden">
  <!-- 画像 -->
  <img src="product.jpg" class="w-full h-48 object-cover" />

  <!-- カード本体 -->
  <div class="card-body">
    <h3 class="text-xl font-bold mb-2">商品名</h3>
    <p class="text-gray-600 mb-4">商品の説明文がここに入ります。魅力的な説明を記載しましょう。</p>

    <!-- 価格と購入ボタン -->
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary">¥9,800</span>
      <button class="btn btn-primary transform transition hover:scale-105">
        カートに追加
      </button>
    </div>
  </div>
</div>
```

### 例 2: ヒーローセクション

```html
<section class="bg-primary text-white py-20">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">
      あなたのビジネスを加速させる
    </h1>
    <p class="text-xl mb-8 opacity-90">
      最新のツールで生産性を最大化しましょう
    </p>
    <div class="flex gap-4 justify-center">
      <button class="btn bg-white text-primary hover:opacity-90 transition">
        無料で始める
      </button>
      <button class="btn btn-outline border-white text-white hover:bg-white hover:text-primary transition">
        詳細を見る
      </button>
    </div>
  </div>
</section>
```

### 例 3: ナビゲーションバー

```html
<nav class="bg-white shadow-md fixed top-0 w-full z-50">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- ロゴ -->
    <a href="/" class="text-2xl font-bold text-primary">ロゴ</a>

    <!-- ナビゲーションメニュー -->
    <ul class="flex gap-8">
      <li>
        <a href="#" class="text-gray-700 hover:text-primary transition">
          ホーム
        </a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-primary transition">
          製品
        </a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-primary transition">
          会社情報
        </a>
      </li>
    </ul>

    <!-- CTAボタン -->
    <button class="btn btn-primary">
      お問い合わせ
    </button>
  </div>
</nav>
```

### 例 4: フォトギャラリー

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

---

## ❓ よくある質問

### Q1: Transform が動作しません

**A:** `.transform` ベースクラスを追加してください。

```html
<!-- ❌ 動作しない -->
<div class="scale-105">...</div>

<!-- ✅ 正しい -->
<div class="transform scale-105">...</div>
```

### Q2: Filter が動作しません

**A:** `.filter` ベースクラスを追加してください。

```html
<!-- ❌ 動作しない -->
<img class="blur grayscale" />

<!-- ✅ 正しい -->
<img class="filter blur grayscale" />
```

### Q3: テーマカラーを変更したい

**A:** CSS変数を上書きしてください。

```html
<style>
  :root {
    --primary: #your-color;
    --primary-rgb: 255, 100, 50; /* RGB値も更新してください */
  }
</style>
```

### Q4: CDNで使用できますか？

**A:** はい、即座に利用可能です。

```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />

<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rampo-css/dist/rampo.min.css" />
```

### Q5: ダークモードを実装したい

**A:** CSS変数を使用してダークモードを実装できます。

```html
<style>
  [data-theme="dark"] {
    --bg-primary: #1f2937;
    --text-primary: #f9fafb;
    /* その他の変数を上書き */
  }
</style>

<script>
  // テーマ切り替え
  document.body.setAttribute('data-theme', 'dark');
</script>
```

### Q6: カスタムユーティリティを追加したい

**A:** CSS変数を活用して拡張できます。

```css
/* カスタムスペーシング */
.m-custom {
  margin: calc(var(--space-4) * 1.5);
}

/* カスタムカラー */
.text-brand {
  color: var(--primary);
}

/* カスタムアニメーション */
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

---

## 🔧 トラブルシューティング

### スタイルが適用されない

1. **CSSが読み込まれているか確認**
   ```html
   <!-- ブラウザの開発者ツールでNetworkタブを確認 -->
   ```

2. **クラス名のスペルミスを確認**
   ```html
   <!-- ❌ 間違い -->
   <div class="conteiner">...</div>

   <!-- ✅ 正しい -->
   <div class="container">...</div>
   ```

3. **Transform/Filterのベースクラスを確認**
   ```html
   <!-- .transform または .filter を追加してください -->
   ```

### ビルドエラーが発生する

```bash
# ステップ 1: 依存関係を再インストール
npm install

# ステップ 2: キャッシュをクリア
rm -rf node_modules package-lock.json
npm install

# ステップ 3: ビルドを実行
npm run build
```

### レスポンシブが動作しない

1. **viewportメタタグを追加**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **ブレークポイントの記法を確認**
   ```html
   <!-- ✅ 正しい -->
   <div class="text-sm md:text-lg">...</div>

   <!-- ❌ 間違い -->
   <div class="md-text-lg">...</div>
   ```

---

## 📘 さらに学ぶ

- **デモページ**: `demo.html` で全コンポーネントを確認
- **開発者向けドキュメント**: `DEVELOPMENT.md` を参照
- **完全なクラス一覧**: ソースコード `css/utilities.css` を参照

---

## 🌐 ブラウザサポート

- Chrome 88+
- Firefox 86+
- Safari 14+
- Edge 88+

最新のブラウザ環境での使用を推奨します。

---

## 📄 ライセンス

MIT License - 自由に使用、変更、配布できます。

---

## 🤝 貢献

プルリクエストやイシューの報告をお待ちしています。

開発に参加したい場合は、[DEVELOPMENT.md](./DEVELOPMENT.md) を参照してください。

---

## 📝 更新履歴

### v1.0.0

- 初回リリース
- 基本的なユーティリティクラス
- コンポーネントライブラリ
- レスポンシブサポート
- Transform & Filter utilities（CSS変数ベース）
- Transition & Animation utilities
- npm package配信対応

---

<div align="center">

**Made with ❤️ by Rampo CSS Team**

[GitHub](https://github.com/BoxPistols/design-framework-rampo-css) |
[npm](https://www.npmjs.com/package/rampo-css) |
[Demo](./demo.html)

</div>
