@AGENTS.md

# ANVIL BASEBALL ACADEMY — Claude Code プロジェクトメモリ

このファイルはClaude Codeがセッション開始時に自動で読み込みます。
ここに書いたルールは毎回説明し直す必要がありません。

---

## プロジェクト概要

- 少年野球スクールの紹介サイト（架空のクライアント想定、本実績への営業用リハーサルサイト）
- 本番URL: https://anvil-baseball.vercel.app/
- ポートフォリオでの位置づけ：宮本さん（将棋教室、浅草で開講予定）への提案用リハーサル実績

## 技術スタック

- Next.js（App Router）+ Tailwind CSS
- デプロイ: Vercel
- ヘッドレスCMS: WordPress（Sakuraサーバー、`tocchan-web.sakura.ne.jp/sports/`）
  - REST API経由でNext.js側からデータ取得
  - Custom Post Type UI + ACF プラグイン使用

## ディレクトリ構成（主要パス）

```
app/page.tsx              … トップページ（23セクションを読み込み）
app/components/           … 各セクションコンポーネント
app/lib/wordpress.ts      … WordPress REST APIクライアント（fetchWP, 型定義, getCoaches, getGalleryItemsなど）
public/images/            … 静的画像（事前圧縮して配置）
next.config.ts            … remotePatterns, qualities設定
```

## WordPress連携の状況

| セクション | 状態 |
|---|---|
| Coaches | ✅ 連携済み（CPT: coaches） |
| PhotoGallery | ✅ 連携済み（CPT: gallery） |
| その他21セクション | 未連携 |

環境変数 `WORDPRESS_API_URL` はVercelに設定済み。

## 作業ルール（5ステップ判断・決定）

1. まず**解析・実装計画のみ提示**、まだ実装しない
2. 計画に対してユーザーの承認を得てから実装
3. **既存デザイン（色・レイアウト・フォント）は維持**することを明記して実装
4. 実装後は**修正ファイル一覧・差分概要**を提示、承認前にコミットしない
5. 承認後にコミット

画像を組み込む指示が出る際は、事前に `public/images/` 等へ保存してもらい依頼する。

## 既知の注意点・ハマりどころ

- WordPressにアップロードした画像は**事前にSquoosh等で圧縮**（目安150KB程度）。4MBの大きいPNGをそのまま使うと`next/image`最適化がタイムアウトし、ブロークン表示になる実績あり。
- `sizes`属性はレスポンシブ対応必須（例: `(max-width: 1024px) 100vw, 50vw`）。固定値`50vw`だけだと小画面でズレる。
- `next.config.ts`の`qualities`配列に使用する品質値を明示的に含めること（未登録の値はビルドエラーになる）。
- Windows環境のコミット時に出るCRLF警告は無視してOK。
- Claude Codeの日本語出力が文字化けすることがあるが実害なし（読み取りは可能）。

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド確認
npm run build

# Lint
npm run lint
```

## 変更しないでほしい範囲

- デザイントークン（色・フォント・レイアウト比率）は明示しない限り変更しない
- コミット前の承認プロセスを省略しない
