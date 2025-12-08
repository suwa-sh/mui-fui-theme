# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

@suwa-sh/mui-fui-theme は J.A.R.V.I.S.スタイルの Futuristic User Interface (FUI/HUD) テーマを MUI と CodeMirror に提供するライブラリです。

- **ダークモード**: Black + Amber（琥珀色）
- **ライトモード**: Light Gray + Blue
- **パッケージ名**: `@suwa-sh/mui-fui-theme`

## 開発コマンド

```bash
# ビルド
pnpm build              # TypeScript コンパイル (dist/ に出力)
pnpm dev                # TypeScript ウォッチモード

# Storybook
pnpm storybook          # 開発サーバー起動 (port 6006)
pnpm build-storybook    # 静的ビルド

# 品質チェック
pnpm lint               # ESLint
pnpm test               # Vitest
```

## アーキテクチャ

### Design Tokens (Single Source of Truth)

```
tokens/
├── core.json      # Typography, spacing, layout (共通)
├── dark.json      # ダークモード カラー・エフェクト
└── light.json     # ライトモード カラー・エフェクト
```

Figma Tokens (Tokens Studio) 形式。`src/theme.ts` と `src/responsive.ts` がこれらを読み込んでテーマを生成する。

### ソースコード構造

```
src/
├── index.ts          # メインエントリ（全エクスポート）
├── theme.ts          # createFuiTheme(), getColors(), MUIテーマ設定
├── responsive.ts     # FuiCustomTheme (theme.fui 用のレスポンシブ値)
├── codemirror.ts     # CodeMirror テーマ
├── animations/       # CSS keyframe アニメーション
├── hooks/            # useTextDecode, useScrollAnimation
├── components/
│   ├── layout/       # AppGrid
│   ├── atoms/        # NavMenuItem, ProgressBar, etc.
│   └── molecules/    # DiamondNode, IconBox
└── stories/          # Storybook stories
```

### テーマアクセス方法

```tsx
// カラー取得
import { getColors, getStageColors, getGlowEffects, type ThemeMode } from '@suwa-sh/mui-fui-theme';
const colors = getColors(theme.palette.mode as ThemeMode);

// レイアウト値（theme.fui）
theme.fui.layout.drawerWidth      // 固定値
theme.fui.spacing.page            // レスポンシブ値 { xs, sm, md }
theme.fui.sizes.iconBox           // レスポンシブ値
```

### パッケージエクスポート

```
.                  → dist/index.js       # メインエントリ
./codemirror       → dist/codemirror.js  # CodeMirror テーマ
./tokens/*.json    → tokens/*.json       # Design Tokens
```

## ドキュメントメンテナンス

このリポジトリでは以下のドキュメントをコード変更と同期してメンテナンスする必要があります：

### README.md
- パッケージの概要、インストール方法、Quick Start
- エクスポートされるコンポーネント・hooks・アニメーション一覧
- Design Tokens の説明

### DESIGN_RULES.md / DESIGN_RULES_ja.md
- LLM/Coding Agent 向けのテーマ利用ガイド
- カラー、レイアウト、アニメーション、hooks の使い方
- デザイン原則（シャープエッジ、1pxボーダー、グロー効果等）
- 避けるべきパターン

### CHANGELOG.md
- [Keep a Changelog](https://keepachangelog.com/) 形式
- Semantic Versioning に準拠

## FUI デザイン原則

コード変更時は以下の原則を遵守すること：

1. **シャープエッジ**: `borderRadius: 0` または最小値
2. **細いボーダー**: 常に `1px`、太いボーダーは NG
3. **グロー効果で強調**: ダークモード専用、ライトモードでは自動的に `'none'`
4. **ステージカラー**: stage1〜4 は強調用、stage5〜13 はワークフロー・進行状況用
5. **モノスペースフォント**: JetBrains Mono + Noto Sans JP
6. **大文字 + 広い字間**: 見出し、ラベル、ボタン
7. **4層背景**: default → paper → elevated → input
8. **コーナーデコレーション**: Paper/Card/Alert の左上に L字装飾

### 避けるべきパターン

```tsx
// NG: カラーのハードコード
sx={{ color: '#FFB300' }}

// NG: 大きな角丸
sx={{ borderRadius: 8 }}

// NG: 太いボーダー
border: `2px solid ${color}`
```

## 技術スタック

- **React** 18/19
- **MUI** v6
- **TypeScript** ~5.7
- **Storybook** 10
- **Vitest** 4
- **ESLint** 9 (flat config)
- **pnpm** (パッケージマネージャー)
