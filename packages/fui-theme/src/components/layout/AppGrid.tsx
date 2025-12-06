import Grid2, { Grid2Props } from '@mui/material/Grid2';
import { forwardRef } from 'react';

/**
 * AppGrid - MUI Grid2のラッパーコンポーネント
 *
 * Grid2をそのままラップし、将来的な拡張に備える。
 * - forwardRefでref転送
 * - 将来: spacing制限、デフォルト値設定など
 *
 * @example
 * // 基本的なレスポンシブレイアウト
 * <AppGrid container spacing={2}>
 *   <AppGrid size={{ xs: 12, md: 6 }}>Item 1</AppGrid>
 *   <AppGrid size={{ xs: 12, md: 6 }}>Item 2</AppGrid>
 * </AppGrid>
 *
 * @example
 * // auto/growレイアウト
 * <AppGrid container spacing={2}>
 *   <AppGrid size="auto">固定幅</AppGrid>
 *   <AppGrid size="grow">残り幅を埋める</AppGrid>
 * </AppGrid>
 */
export interface AppGridProps extends Grid2Props {}

export const AppGrid = forwardRef<HTMLDivElement, AppGridProps>(
  function AppGrid(props, ref) {
    return <Grid2 ref={ref} {...props} />;
  }
);
