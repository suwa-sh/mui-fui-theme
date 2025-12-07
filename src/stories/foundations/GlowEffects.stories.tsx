import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Button, Typography, Stack, Paper, useTheme } from '@mui/material';
import { PlayArrow, Settings, CloudUpload } from '@mui/icons-material';
import { getGlowEffects, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Foundations/Glow Effects',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const GlowDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const glowEffects = getGlowEffects(mode);
  const isDark = mode === 'dark';

  return (
    <Stack spacing={6}>
      {/* Title with text glow */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Title with Text Glow
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            textShadow: glowEffects.text,
            letterSpacing: '0.1em',
          }}
        >
          SYSTEM DASHBOARD
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            textShadow: glowEffects.text,
            mt: 2,
          }}
        >
          System Status
        </Typography>
      </Box>

      {/* Buttons with glow */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Buttons with Glow
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            startIcon={<PlayArrow />}
            sx={{
              boxShadow: glowEffects.soft,
              '&:hover': {
                boxShadow: glowEffects.medium,
              },
            }}
          >
            Start
          </Button>
          <Button
            variant="contained"
            startIcon={<CloudUpload />}
            sx={{
              boxShadow: glowEffects.medium,
              '&:hover': {
                boxShadow: glowEffects.strong,
              },
            }}
          >
            Upload
          </Button>
          <Button
            variant="outlined"
            startIcon={<Settings />}
            sx={{
              '&:hover': {
                boxShadow: glowEffects.soft,
              },
            }}
          >
            Settings
          </Button>
        </Stack>
      </Box>

      {/* Glow intensity comparison */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Glow Intensity Levels
        </Typography>
        <Stack direction="row" spacing={3}>
          <Paper
            sx={{
              p: 3,
              width: 150,
              textAlign: 'center',
              boxShadow: glowEffects.soft,
            }}
          >
            <Typography variant="caption">Soft</Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: 'monospace', fontSize: '0.65rem' }}
            >
              {glowEffects.soft}
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 3,
              width: 150,
              textAlign: 'center',
              boxShadow: glowEffects.medium,
            }}
          >
            <Typography variant="caption">Medium</Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: 'monospace', fontSize: '0.65rem' }}
            >
              {glowEffects.medium}
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 3,
              width: 150,
              textAlign: 'center',
              boxShadow: glowEffects.strong,
            }}
          >
            <Typography variant="caption">Strong</Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: 'monospace', fontSize: '0.65rem' }}
            >
              {glowEffects.strong}
            </Typography>
          </Paper>
        </Stack>
        {!isDark && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Note: Glow effects are disabled in light mode for a cleaner look.
          </Typography>
        )}
      </Box>

      {/* Text glow on different elements */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Text Glow Applications
        </Typography>
        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              textShadow: glowEffects.text,
            }}
          >
            Section Header with Glow
          </Typography>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              textShadow: glowEffects.text,
              fontSize: '0.875rem',
            }}
          >
            Status: Online
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: theme.palette.success.main,
              textShadow: isDark ? '0 0 8px rgba(76, 175, 80, 0.6)' : 'none',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'success.main',
                boxShadow: isDark ? '0 0 8px rgba(76, 175, 80, 0.8)' : 'none',
              }}
            />
            <Typography variant="body2">Connected</Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export const GlowEffectsDemo: StoryObj = {
  name: 'Glow Effects',
  render: () => <GlowDemo />,
};
