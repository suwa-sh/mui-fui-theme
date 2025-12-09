# FUI Theme デザインルール

> このドキュメントは、LLMがFUI Themeを正しく利用するためのガイドです。
> 利用者が「どう書けばテーマの設定値を活用できるか」に焦点を当てています。

## 動作要件

- React 18.0+ または 19.0+
- MUI (Material UI) 7.0+
- Emotion 11.0+

## 概要

**FUI Theme** は J.A.R.V.I.S.スタイルのFuturistic User Interface（FUI/HUD）テーマです。

- **ダークモード**: Black + Amber（琥珀色）
- **ライトモード**: Light Gray + Blue

---

## テーマセットアップ

```tsx
import { ThemeProvider, CssBaseline, Grid } from '@mui/material';
import { createFuiTheme } from '@suwa-sh/mui-fui-theme';

const theme = createFuiTheme('dark'); // または 'light'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* FUIスタイルのグリッド背景等が自動適用 */}
      <Grid container>
        <YourApp />
      </Grid>
    </ThemeProvider>
  );
}
```

### MUI Grid によるレイアウト

FUI ThemeではMUI標準の `Grid` コンポーネントをレイアウトに使用します。

```tsx
import { Grid } from '@mui/material';

// 基本的なレスポンシブレイアウト
<Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 6 }}>左カラム</Grid>
  <Grid size={{ xs: 12, md: 6 }}>右カラム</Grid>
</Grid>

// auto/growレイアウト
<Grid container spacing={2}>
  <Grid size="auto">固定幅</Grid>
  <Grid size="grow">残り幅を埋める</Grid>
</Grid>
```

---

## カラーの使い方

### 基本パターン：getColors()

```tsx
import { getColors, type ThemeMode } from '@suwa-sh/mui-fui-theme';
import { useTheme, Box, Typography } from '@mui/material';

function MyComponent() {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Box sx={{
      backgroundColor: colors.background.paper,
      border: `1px solid ${colors.border}`,
      '&:hover': {
        borderColor: colors.borderBright,
      },
    }}>
      <Typography sx={{ color: colors.text.accent }}>
        強調テキスト
      </Typography>
    </Box>
  );
}
```

### 利用可能なカラー

| カラー | 用途 | 使用例 |
|--------|------|--------|
| `colors.primary` | メインアクセント | ボタン、アイコン |
| `colors.secondary` | サブアクセント | 補助要素 |
| `colors.text.primary` | 通常テキスト | 本文 |
| `colors.text.secondary` | 薄いテキスト | 補足情報 |
| `colors.text.accent` | 強調テキスト | ラベル、見出し |
| `colors.text.disabled` | 無効テキスト | 非活性要素 |
| `colors.background.default` | 最背面 | ページ背景 |
| `colors.background.paper` | カード背景 | Card, Paper |
| `colors.background.elevated` | 浮上要素 | ドロップダウン |
| `colors.background.input` | 入力欄背景 | TextField |
| `colors.border` | 通常ボーダー | 境界線 |
| `colors.borderBright` | 強調ボーダー | ホバー、フォーカス |
| `colors.success` | 成功 | ステータス表示 |
| `colors.error` | エラー | エラー表示 |
| `colors.warning` | 警告 | 警告表示 |
| `colors.info` | 情報 | 情報表示 |

### ステージカラー（13段階）

ワークフローや進行状況の表現に使用。

```tsx
import { getStageColors, type ThemeMode } from '@suwa-sh/mui-fui-theme';

function WorkflowSteps() {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  return (
    <>
      <Box sx={{ color: stageColors.stage1 }}>ステップ1</Box>
      <Box sx={{ color: stageColors.stage5 }}>ステップ5</Box>
      <Box sx={{ color: stageColors.stage13 }}>完了</Box>
    </>
  );
}
```

**ダークモード**: Amber系グラデーション → 色相環
**ライトモード**: Blue系グラデーション → 色相環

### グロー効果（ダークモード専用）

```tsx
import { getGlowEffects, type ThemeMode } from '@suwa-sh/mui-fui-theme';

function GlowingElement() {
  const theme = useTheme();
  const glowEffects = getGlowEffects(theme.palette.mode as ThemeMode);

  return (
    <Box sx={{
      boxShadow: glowEffects.soft,      // 控えめな光
      '&:hover': {
        boxShadow: glowEffects.medium,  // 中程度の光
      },
      '&:focus': {
        boxShadow: glowEffects.strong,  // 強い光
      },
    }}>
      ホバーで光る要素
    </Box>
  );
}
```

> **注意**: ライトモードでは全て `'none'` が返るため、条件分岐不要

---

## MUIコンポーネントの使い方

FUI Themeを適用すると、MUIコンポーネントは自動的にFUIスタイルになります。

### そのまま使える（追加設定不要）

```tsx
// これだけでFUIスタイルが適用される
<Button variant="contained">送信</Button>
<Card>カード</Card>
<TextField label="入力" />
<Chip label="タグ" />
<Alert severity="success">成功</Alert>
<LinearProgress />
```

### カスタマイズする場合

```tsx
import { getColors, type ThemeMode } from '@suwa-sh/mui-fui-theme';

function CustomCard() {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode as ThemeMode);

  return (
    <Card sx={{
      // 背景色をelevatedに変更
      backgroundColor: colors.background.elevated,
      // ホバー時にグロー追加
      '&:hover': {
        boxShadow: colors.glow.soft,
      },
    }}>
      カスタムカード
    </Card>
  );
}
```

---

## レイアウト値の使い方

### theme.fui でアクセス

```tsx
function ResponsiveLayout() {
  const theme = useTheme();

  return (
    <Box sx={{
      // レスポンシブパディング
      p: theme.fui.spacing.page,

      // レスポンシブサイズ
      width: theme.fui.sizes.iconBox,

      // 固定レイアウト値
      maxWidth: theme.fui.layout.maxContentWidth,
    }} />
  );
}
```

### 利用可能なレイアウト値

| 値 | 用途 |
|----|------|
| `theme.fui.layout.drawerWidth` | サイドバー幅 |
| `theme.fui.layout.collapsedDrawerWidth` | 折りたたみ時サイドバー幅 |
| `theme.fui.layout.appBarHeight` | ヘッダー高さ |
| `theme.fui.layout.maxContentWidth` | コンテンツ最大幅 |
| `theme.fui.spacing.page` | ページパディング（レスポンシブ） |
| `theme.fui.spacing.section` | セクション間隔（レスポンシブ） |
| `theme.fui.sizes.iconBox` | アイコンボックスサイズ（レスポンシブ） |
| `theme.fui.sizes.node` | ノードサイズ（レスポンシブ） |

---

## アニメーションの使い方

### 基本的な使い方

```tsx
import { fadeInUp, glowPulse, scanLine } from '@suwa-sh/mui-fui-theme';

function AnimatedContent() {
  return (
    <>
      {/* 入場アニメーション */}
      <Box sx={{ animation: `${fadeInUp} 0.5s ease-out` }}>
        フェードイン
      </Box>

      {/* 常時アニメーション */}
      <Box sx={{ animation: `${glowPulse} 2s infinite` }}>
        パルス
      </Box>

      {/* HUD効果 */}
      <Box sx={{ animation: `${scanLine} 3s linear infinite` }}>
        スキャンライン
      </Box>
    </>
  );
}
```

### 利用可能なアニメーション

| アニメーション | 用途 | 推奨設定 |
|---------------|------|----------|
| `fadeInUp` | 下から入場 | 0.3-0.5s ease-out |
| `fadeInLeft` | 左から入場 | 0.3-0.5s ease-out |
| `fadeInRight` | 右から入場 | 0.3-0.5s ease-out |
| `slideInDiagonal` | 斜めから入場 | 0.3-0.5s ease-out |
| `scaleIn` | 拡大入場 | 0.3-0.5s ease-out |
| `rotateIn` | 回転入場 | 0.3-0.5s ease-out |
| `pulse` | 脈動 | 2s infinite |
| `glowPulse` | 光脈動 | 2s infinite |
| `float` | 浮遊 | 3s ease-in-out infinite |
| `hologramFlicker` | ホログラム | 2s infinite |
| `scanLine` | スキャン | 3s linear infinite |
| `dataStream` | データ流 | 2s linear infinite |
| `gridPulse` | グリッド脈動 | 4s infinite |

---

## Hooksの使い方

### useTextDecode - テキストデコード効果

```tsx
import { useTextDecode } from '@suwa-sh/mui-fui-theme';

function DecodedTitle() {
  const { displayText, isDecoding } = useTextDecode('SYSTEM ONLINE', {
    duration: 1500,
    characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  });

  return <Typography>{displayText}</Typography>;
}
```

### useScrollAnimation - スクロールアニメーション

```tsx
import { useScrollAnimation } from '@suwa-sh/mui-fui-theme';

function ScrollReveal() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      スクロールで表示
    </Box>
  );
}
```

---

## 提供コンポーネントの使い方

### NavMenuItem - ナビゲーションアイテム

```tsx
import { NavMenuItem } from '@suwa-sh/mui-fui-theme';
import { Home } from '@mui/icons-material';

<NavMenuItem
  icon={<Home />}
  label="ホーム"
  selected={true}
  color="#FFB300"  // カスタムカラー（省略可）
  onClick={() => navigate('/')}
/>
```

### ProgressBar - プログレスバー

```tsx
import { ProgressBar } from '@suwa-sh/mui-fui-theme';

<ProgressBar
  value={75}
  color="#FFB300"  // カスタムカラー
  height={4}
  showLabel={true}
/>
```

### StatusIndicator - ステータス表示

```tsx
import { StatusIndicator } from '@suwa-sh/mui-fui-theme';

<StatusIndicator status="success" label="オンライン" />
<StatusIndicator status="error" label="エラー" />
<StatusIndicator status="warning" label="警告" />
<StatusIndicator status="info" label="情報" />
<StatusIndicator status="neutral" label="待機" />
```

### SectionHeader - セクション見出し

```tsx
import { SectionHeader } from '@suwa-sh/mui-fui-theme';

<SectionHeader title="SYSTEM STATUS" />
```

### IconBox - アイコンボックス

```tsx
import { IconBox } from '@suwa-sh/mui-fui-theme';
import { Settings } from '@mui/icons-material';

<IconBox color="#FFB300">
  <Settings />
</IconBox>
```

### DiamondNode - ダイヤモンドノード

```tsx
import { DiamondNode } from '@suwa-sh/mui-fui-theme';
import { CheckCircle } from '@mui/icons-material';

<DiamondNode
  color="#FFB300"
  icon={<CheckCircle />}
  label="完了"
/>
```

### ColorLegend - カラー凡例

```tsx
import { ColorLegend } from '@suwa-sh/mui-fui-theme';

<ColorLegend
  items={[
    { color: '#4CAF50', label: '成功' },
    { color: '#FF5252', label: 'エラー' },
    { color: '#FFB300', label: '処理中' },
  ]}
/>
```

### Grid - レスポンシブグリッド

```tsx
import { Grid } from '@mui/material';

<Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 4 }}>アイテム1</Grid>
  <Grid size={{ xs: 12, md: 4 }}>アイテム2</Grid>
  <Grid size={{ xs: 12, md: 4 }}>アイテム3</Grid>
</Grid>
```

---

## Design Tokensの直接利用

Figma等のデザインツールと連携する場合。

```tsx
// 直接インポート
import coreTokens from '@suwa-sh/mui-fui-theme/tokens/core.json';
import darkTokens from '@suwa-sh/mui-fui-theme/tokens/dark.json';
import lightTokens from '@suwa-sh/mui-fui-theme/tokens/light.json';

// または
import { coreTokens, darkTokens, lightTokens } from '@suwa-sh/mui-fui-theme';

// トークン形式: { value: string, type: string }
const primaryColor = darkTokens.colors.primary.value; // "#FFB300"
const fontFamily = coreTokens.typography.fontFamily.value;
```

---

## デザイン原則

FUI Themeは以下の原則に基づいています。

### 1. シャープエッジ

すべてのコンポーネントは `borderRadius: 0` または最小値。

### 2. 細いボーダー

ボーダーは常に `1px` で細く保つ。太いボーダーはFUIスタイルに反する。

```tsx
// OK
border: `1px solid ${colors.border}`

// NG
border: `2px solid ${colors.border}`
borderWidth: 3
```

### 3. グロー効果で強調（ダークモード専用）

ページ内で**強調したいポイント**にグロー効果を設定する。
ダークモードでのみ光るエフェクト。ライトモードでは自動的に無効。

```tsx
// 強調したい要素にグローを適用
<Card sx={{ boxShadow: glowEffects.medium }}>
  重要なコンテンツ
</Card>

// ホバーで注目を引く
<Button sx={{ '&:hover': { boxShadow: glowEffects.soft } }}>
  アクション
</Button>
```

### 4. ステージカラーの使い分け

**1ページ内で複数の強調が必要な場合は `stage1` 〜 `stage4` を使用する。**

| ステージ | 用途 |
|---------|------|
| `stage1` | 最も重要な強調（プライマリアクション） |
| `stage2` | 2番目に重要な強調 |
| `stage3` | 3番目の強調 |
| `stage4` | 4番目の強調 |
| `stage5`〜`stage13` | ワークフロー進行、ステップ表示 |

```tsx
const stageColors = getStageColors(mode);

// 複数の強調ポイントがある場合
<Box sx={{ color: stageColors.stage1 }}>最重要</Box>
<Box sx={{ color: stageColors.stage2 }}>重要</Box>
<Box sx={{ color: stageColors.stage3 }}>補助</Box>
```

### 5. モノスペースフォントを採用

フォントはthemeで自動適用される。

### 6. 大文字 + 広い字間

見出し、ラベル、ボタンは大文字 + letterSpacing。

### 7. ボーダーとグリッド

明確な境界線と背景グリッドパターン。

### 8. コーナーデコレーション

MuiPaper/MuiCard/MuiAlertでは、左上にL字型装飾が適用される。
ボーダーの強調（太さなど）は適用しない。ボーダーで強調したい場合は、MUIのコンポーネントを利用する。

### 9. 4層背景構造

default → paper → elevated → input の深度表現。

---

## よくある使用パターン

### パターン1: カードにカスタムスタイル

```tsx
const colors = getColors(mode);
const glowEffects = getGlowEffects(mode);

<Card sx={{
  backgroundColor: colors.background.paper,
  border: `1px solid ${colors.border}`,
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: colors.borderBright,
    boxShadow: glowEffects.soft,
  },
}}>
  内容
</Card>
```

### パターン2: ステージカラーでプログレス表示

```tsx
const stageColors = getStageColors(mode);

{steps.map((step, index) => (
  <Box
    key={index}
    sx={{
      color: stageColors[`stage${index + 1}` as keyof typeof stageColors],
      borderColor: stageColors[`stage${index + 1}` as keyof typeof stageColors],
    }}
  >
    {step.label}
  </Box>
))}
```

### パターン3: 入場アニメーション付きリスト

```tsx
import { fadeInUp } from '@suwa-sh/mui-fui-theme';

{items.map((item, index) => (
  <Box
    key={index}
    sx={{
      animation: `${fadeInUp} 0.5s ease-out`,
      animationDelay: `${index * 0.1}s`,
      animationFillMode: 'both',
    }}
  >
    {item}
  </Box>
))}
```

### パターン4: レスポンシブレイアウト

```tsx
<Box sx={{
  p: theme.fui.spacing.page,
  maxWidth: theme.fui.layout.maxContentWidth,
  mx: 'auto',
}}>
  <Box sx={{ mb: theme.fui.spacing.section }}>
    セクション1
  </Box>
  <Box>
    セクション2
  </Box>
</Box>
```

---

## 避けるべきパターン

### NG: カラーのハードコード

```tsx
// NG
sx={{ color: '#FFB300', backgroundColor: '#000000' }}

// OK
const colors = getColors(mode);
sx={{ color: colors.primary, backgroundColor: colors.background.default }}
```

### NG: 大きな角丸

```tsx
// NG
sx={{ borderRadius: 8 }}

// OK（FUIスタイルを維持）
sx={{ borderRadius: 0 }}
```

### NG: テーマ外カラーの使用

```tsx
// NG
sx={{ color: '#FF00FF' }}

// OK（ステージカラーまたはテーマカラーを使用）
sx={{ color: stageColors.stage7 }}
```

### NG: ボーダーを太くして強調

FUIスタイルではボーダーは常に`1px`。強調にはグロー効果を使用する。

```tsx
// NG - 太いボーダー
borderBottom: `2px solid ${color}`

// OK - 1pxボーダー + グロー効果
'&::after': {
  height: '1px',
  backgroundColor: color,
  boxShadow: `0 0 8px ${color}`,
}
```
