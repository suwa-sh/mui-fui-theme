import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Tooltip,
  alpha,
  type SxProps,
  type Theme,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface NavMenuItemProps {
  /** Menu item label */
  label: string;
  /** Secondary description text */
  description?: string;
  /** Icon element to display */
  icon: React.ReactNode;
  /** Primary color for the item (affects icon, border, indicator, badge) */
  color: string;
  /** Internal navigation path */
  path?: string;
  /** External URL (opens in new tab) */
  url?: string;
  /** Badge text (e.g., 'AI', 'NEW', 'LIVE') */
  badge?: string;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** Whether the sidebar is collapsed (icon-only mode) */
  collapsed?: boolean;
  /** Whether to show external link icon */
  external?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Theme colors for text styling */
  themeColors: {
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      accent: string;
    };
  };
  /** Additional styles */
  sx?: SxProps<Theme>;
}

/**
 * Navigation menu item component for FUI sidebar.
 * Supports internal/external links, badges, selection state, and collapsed mode.
 *
 * Note: Uses !important for color overrides to ensure the custom color prop
 * takes precedence over MUI theme's default ListItemButton/ListItemIcon styles.
 *
 * @example
 * ```tsx
 * <NavMenuItem
 *   label="Dashboard"
 *   description="Home"
 *   icon={<HomeIcon />}
 *   color={stageColors.stage1}
 *   path="/"
 *   selected={pathname === '/'}
 *   themeColors={themeColors}
 *   onClick={() => navigate('/')}
 * />
 * ```
 */
export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  label,
  description,
  icon,
  color,
  url,
  badge,
  selected = false,
  collapsed = false,
  external,
  onClick,
  themeColors,
  sx,
}) => {
  const isExternal = external ?? !!url;

  // Indicator bar component (replaces MUI's default ::before pseudo-element)
  const IndicatorBar = (
    <Box
      sx={{
        position: 'absolute',
        left: collapsed ? 4 : 8,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: selected ? 20 : 0,
        backgroundColor: color,
        boxShadow: `0 0 ${selected ? 6 : 4}px ${color}`,
        transition: 'height 0.2s ease',
        '.MuiListItemButton-root:hover &': {
          height: 20,
        },
      }}
    />
  );

  // Badge component
  const BadgeChip = badge && (
    <Chip
      label={badge}
      size="small"
      sx={{
        height: 14,
        fontSize: '0.45rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        backgroundColor: alpha(color, 0.15),
        color: color,
        border: `1px solid ${alpha(color, 0.3)}`,
        '& .MuiChip-label': { px: 0.5 },
      }}
    />
  );

  // Primary text with optional badge
  const PrimaryContent = (
    <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
      <Typography
        component="span"
        variant="body2"
        sx={{
          fontWeight: 500,
          color: selected ? color : themeColors.text.secondary,
          fontSize: '0.7rem',
          lineHeight: 1.3,
          letterSpacing: '0.03em',
        }}
      >
        {label}
      </Typography>
      {BadgeChip}
    </Box>
  );

  // Secondary text with optional external link icon
  const SecondaryContent = description && (
    <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Typography
        component="span"
        variant="caption"
        sx={{
          color: themeColors.text.disabled,
          fontSize: '0.55rem',
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}
      >
        {description}
      </Typography>
      {isExternal && (
        <OpenInNewIcon sx={{ fontSize: 9, color: themeColors.text.disabled }} />
      )}
    </Box>
  );

  const buttonContent = (
    <ListItemButton
      selected={selected}
      onClick={onClick}
      sx={{
        mx: collapsed ? 0.5 : 1,
        my: 0.25,
        py: collapsed ? 1 : 0.75,
        pl: collapsed ? 1.5 : 2.5,
        minHeight: collapsed ? 44 : 48,
        borderRadius: 0,
        position: 'relative',
        transition: 'all 0.15s ease',
        border: '1px solid transparent',
        justifyContent: collapsed ? 'center' : 'flex-start',
        // Disable MUI theme's default indicator
        '&::before': { display: 'none' },
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: alpha(color, 0.3),
        },
        '&.Mui-selected': {
          backgroundColor: 'transparent',
          borderColor: alpha(color, 0.5),
          borderLeftWidth: 2,
          borderLeftColor: color,
          '&:hover': { backgroundColor: 'transparent' },
        },
      }}
    >
      {IndicatorBar}

      <ListItemIcon
        sx={{
          color: `${color} !important`, // Override MUI theme's .Mui-selected style
          minWidth: collapsed ? 'auto' : 32,
          mr: collapsed ? 0 : 1,
          '& .MuiSvgIcon-root': { fontSize: 18, color: 'inherit' },
        }}
      >
        {icon}
      </ListItemIcon>

      {!collapsed && (
        <ListItemText
          primary={PrimaryContent}
          secondary={SecondaryContent}
          sx={{ my: 0 }}
        />
      )}
    </ListItemButton>
  );

  return (
    <ListItem disablePadding sx={sx}>
      {collapsed ? (
        <Tooltip title={label} placement="right" arrow>
          {buttonContent}
        </Tooltip>
      ) : (
        buttonContent
      )}
    </ListItem>
  );
};
