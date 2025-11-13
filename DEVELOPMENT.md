# Rampo CSS 開発・運用マニュアル

このドキュメントは、Rampo CSS の開発者・メンテナー向けの運用マニュアルです。

## 目次

- [開発環境のセットアップ](#開発環境のセットアップ)
- [プロジェクト構造](#プロジェクト構造)
- [開発ワークフロー](#開発ワークフロー)
- [ビルドプロセス](#ビルドプロセス)
- [CSS の変更・追加](#css-の変更追加)
- [バージョン管理](#バージョン管理)
- [npm パッケージの公開](#npm-パッケージの公開)
- [トラブルシューティング](#トラブルシューティング)

## 開発環境のセットアップ

### 必要な環境

- Node.js 14.0.0 以上
- npm 6.0.0 以上
- Git

### 初回セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/BoxPistols/design-framework-rampo-css.git
cd design-framework-rampo-css

# 依存関係をインストール
npm install

# ビルドを実行
npm run build
```

## プロジェクト構造

```
design-framework-rampo-css/
├── css/                    # ソースCSSファイル
│   ├── framework.css       # メインエントリーポイント（@importを使用）
│   ├── reset.css          # リセットスタイル
│   ├── typography.css     # タイポグラフィ
│   ├── grid.css           # グリッドシステム
│   ├── utilities.css      # ユーティリティクラス（最も重要）
│   ├── darkmode.css       # ダークモードスタイル
│   ├── components.css     # コンポーネント
│   └── responsive.css     # レスポンシブユーティリティ
├── scripts/               # ビルドスクリプト
│   ├── build.js          # PostCSS ビルド
│   └── minify.js         # CSS minification
├── dist/                  # ビルド出力（gitignoreに含まれる）
│   ├── rampo.css         # ビルドされたCSS
│   ├── rampo.min.css     # minified CSS（npm配信用）
│   └── *.css             # 個別モジュールのコピー
├── demo.html             # デモページ
├── example.html          # 基本的な使用例
├── package.json          # npm設定
├── postcss.config.js     # PostCSS設定
├── .npmignore           # npm配信時の除外設定
└── .gitignore           # Git除外設定
```

### 重要なファイル

#### `css/utilities.css`
- 最も頻繁に変更されるファイル
- すべてのユーティリティクラスを定義
- CSS変数の定義も含む

#### `scripts/build.js`
- PostCSS を使用してCSSをビルド
- @import を解決
- autoprefixer を適用

#### `scripts/minify.js`
- CleanCSS を使用して圧縮
- ファイルサイズを最適化

## 開発ワークフロー

### 1. 開発モード（ファイル監視）

```bash
# CSSを編集しながらリアルタイムでビルド
npm run dev

# ブラウザでdemo.htmlを開いて確認
open demo.html
```

### 2. 新しいユーティリティクラスの追加

**例: 新しいスペーシングユーティリティを追加**

`css/utilities.css` を編集：

```css
/* 既存のスペーシングに追加 */
.m-24 {
  margin: 6rem;
}

.p-24 {
  padding: 6rem;
}
```

変更後：

```bash
# ビルドを実行
npm run build

# demo.htmlで動作確認
open demo.html
```

### 3. 新しいコンポーネントの追加

`css/components.css` を編集：

```css
/* 新しいコンポーネント */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-2) var(--space-3);
  background: var(--gray-900);
  color: var(--white);
  border-radius: 0.25rem;
  white-space: nowrap;
}
```

### 4. CSS変数の追加・変更

`css/utilities.css` の `:root` セクションを編集：

```css
:root {
  /* 既存の変数 */
  --primary: #3b82f6;
  --primary-rgb: 59, 130, 246;

  /* 新しい変数を追加 */
  --brand: #your-color;
  --brand-rgb: 255, 100, 50;
}
```

**重要**: RGB値も一緒に定義すること（`rgba()` で使用するため）

## ビルドプロセス

### npm スクリプト

```bash
# フルビルド（CSS + minification）
npm run build

# CSS のみビルド
npm run build:css

# minification のみ
npm run build:minify

# 開発モード（watch）
npm run dev
```

### ビルドの流れ

1. **build:css**: `css/framework.css` を読み込み
   - `@import` を解決してすべてのCSSを結合
   - autoprefixer を適用
   - `dist/rampo.css` に出力
   - 各モジュールファイルを `dist/` にコピー

2. **build:minify**: `dist/rampo.css` を読み込み
   - CleanCSS で圧縮・最適化
   - `dist/rampo.min.css` に出力

## CSS の変更・追加

### Transform Utilities の追加

Transform utilities は CSS変数を使用して実装されています。

```css
/* .transform ベースクラスは既に定義済み */

/* 新しいスケールを追加 */
.scale-150 {
  --rampo-scale-x: 1.5;
  --rampo-scale-y: 1.5;
}

/* 新しい回転を追加 */
.rotate-30 {
  --rampo-rotate: 30deg;
}
```

### Filter Utilities の追加

Filter utilities も同様に CSS変数を使用します。

```css
/* .filter ベースクラスは既に定義済み */

/* 明るさを追加 */
.brightness-50 {
  --rampo-brightness: brightness(0.5);
}

.brightness-150 {
  --rampo-brightness: brightness(1.5);
}

/* コントラストを追加 */
.contrast-200 {
  --rampo-contrast: contrast(2);
}
```

### レスポンシブバリアントの追加

`css/responsive.css` にレスポンシブバリアントを追加：

```css
/* 新しいユーティリティのレスポンシブバリアント */
@media (min-width: 768px) {
  .md\:scale-150 {
    --rampo-scale-x: 1.5;
    --rampo-scale-y: 1.5;
  }
}
```

## バージョン管理

### バージョンの更新

```bash
# パッチバージョン（バグ修正）
npm version patch  # 1.0.0 → 1.0.1

# マイナーバージョン（新機能追加）
npm version minor  # 1.0.0 → 1.1.0

# メジャーバージョン（破壊的変更）
npm version major  # 1.0.0 → 2.0.0
```

### Changelog の更新

`README.md` の「更新履歴」セクションを更新：

```markdown
### v1.1.0

- 新機能: brightness、contrast filter utilities を追加
- 改善: ビルドサイズを5%削減
- 修正: レスポンシブグリッドのバグを修正
```

## npm パッケージの公開

### 事前チェックリスト

1. ✅ すべてのテストが通る
2. ✅ ビルドが成功する
3. ✅ `demo.html` で動作確認
4. ✅ README が更新されている
5. ✅ バージョンが正しく更新されている

### 公開手順

```bash
# 1. ビルド前のクリーンアップ
rm -rf dist node_modules
npm install

# 2. フルビルド
npm run build

# 3. ビルド結果を確認
ls -lh dist/
# rampo.css と rampo.min.css が存在することを確認

# 4. パッケージ内容を確認（dry-run）
npm pack --dry-run

# 5. npmにログイン（初回のみ）
npm login

# 6. パッケージを公開
npm publish

# 注意: package.json の "name" がユニークであることを確認
```

### 公開後の確認

```bash
# パッケージが公開されたか確認
npm view rampo-css

# バージョンを確認
npm view rampo-css version

# CDNで確認
# https://unpkg.com/rampo-css/dist/rampo.min.css
```

## 継続的な更新作業

### 定期的なメンテナンス

```bash
# 依存関係の更新チェック
npm outdated

# 依存関係を更新
npm update

# セキュリティチェック
npm audit

# セキュリティ問題を自動修正
npm audit fix
```

### 新しいユーティリティの追加プロセス

1. **企画**: どのようなユーティリティが必要か検討
2. **設計**: CSS変数を使うか、直接的な実装か決定
3. **実装**: `css/utilities.css` に追加
4. **デモ**: `demo.html` に使用例を追加
5. **ドキュメント**: `README.md` に使い方を記載
6. **テスト**: ブラウザで動作確認
7. **ビルド**: `npm run build`
8. **コミット**: 変更をコミット
9. **リリース**: バージョンアップして公開

### コミットメッセージの規約

```bash
# 新機能
git commit -m "feat: Add brightness filter utilities"

# バグ修正
git commit -m "fix: Fix responsive grid gap issue"

# リファクタリング
git commit -m "refactor: Improve transform utilities composability"

# ドキュメント
git commit -m "docs: Update README with new examples"

# ビルド関連
git commit -m "build: Update build scripts for better performance"
```

## トラブルシューティング

### ビルドエラー

```bash
# 依存関係の問題
rm -rf node_modules package-lock.json
npm install

# PostCSS エラー
npm run build:css  # エラー内容を確認

# Minification エラー
npm run build:minify  # エラー内容を確認
```

### CSS変数が動作しない

**問題**: 新しく追加したCSS変数が反映されない

**解決策**:
1. `:root` に正しく定義されているか確認
2. ビルドを再実行 `npm run build`
3. ブラウザのキャッシュをクリア

### Transform/Filter が動作しない

**問題**: 新しく追加したtransform/filterユーティリティが動作しない

**チェックポイント**:
1. CSS変数名が正しいか（`--rampo-*`）
2. `.transform` または `.filter` ベースクラスに変数が含まれているか
3. ユーザーがベースクラスを使用しているか

```css
/* ベースクラスに変数を追加 */
.transform {
  /* ... 既存の変数 ... */
  --rampo-your-new-var: ;
  transform: /* ... */ var(--rampo-your-new-var);
}
```

### npm publish エラー

**問題**: パッケージ名が既に存在する

```bash
# package.json の name を変更
# 例: "name": "rampo-css" → "name": "@yourname/rampo-css"
```

**問題**: ログインできない

```bash
# 2要素認証が必要な場合
npm login --auth-type=web
```

## 開発のベストプラクティス

1. **常にビルドしてから確認**: CSS を変更したら必ず `npm run build` を実行
2. **CSS変数を活用**: 繰り返しの値はCSS変数として定義
3. **命名規則を守る**: Tailwind CSS に倣った命名
4. **レスポンシブを考慮**: 新しいユーティリティにはレスポンシブバリアントを追加
5. **ドキュメントを更新**: 新機能は必ずREADMEに記載
6. **デモを更新**: `demo.html` に使用例を追加
7. **テストを忘れずに**: 主要ブラウザで動作確認

## 便利なコマンド集

```bash
# ファイルサイズを確認
ls -lh dist/rampo.min.css

# CSSの行数を確認
wc -l css/*.css

# ビルドサイズの詳細
npm run build | grep -A 3 "Built dist"

# git の状態確認
git status
git diff

# 最新の変更を確認
git log --oneline -10

# ローカルサーバーで確認（Python使用）
python3 -m http.server 8000
# http://localhost:8000/demo.html
```

## サポート

問題が発生した場合：

1. このドキュメントのトラブルシューティングを確認
2. [GitHub Issues](https://github.com/BoxPistols/design-framework-rampo-css/issues) で既存の問題を検索
3. 新しい Issue を作成して質問

---

Happy Coding! 🎨
