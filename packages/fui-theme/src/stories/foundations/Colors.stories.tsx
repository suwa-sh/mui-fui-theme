import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { getColors, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

interface ColorSwatchProps {
  name: string;
  value: string;
  textColor?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  value,
  textColor = '#fff',
}) => (
  <Box
    sx={{
      width: 120,
      height: 80,
      backgroundColor: value,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      p: 1,
      border: '1px solid rgba(255,255,255,0.1)',
    }}
  >
    <Typography variant="caption" sx={{ color: textColor, fontSize: '0.65rem' }}>
      {name}
    </Typography>
    <Typography
      variant="caption"
      sx={{ color: textColor, fontSize: '0.55rem', opacity: 0.7 }}
    >
      {value}
    </Typography>
  </Box>
);

const ColorPalette: React.FC<{ mode: ThemeMode }> = ({ mode }) => {
  const colors = getColors(mode);

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Primary & Secondary
        </Typography>
        <Stack direction="row" spacing={1}>
          <ColorSwatch
            name="Primary"
            value={colors.primary}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
          <ColorSwatch
            name="Secondary"
            value={colors.secondary}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Stage Colors (1-4: Gradient, 5-13: Color Wheel)
        </Typography>
        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
          <ColorSwatch
            name="Stage 1"
            value={colors.stages.stage1}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
          <ColorSwatch
            name="Stage 2"
            value={colors.stages.stage2}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
          <ColorSwatch
            name="Stage 3"
            value={colors.stages.stage3}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
          <ColorSwatch
            name="Stage 4"
            value={colors.stages.stage4}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
        </Stack>
        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
          <ColorSwatch
            name="Stage 5"
            value={colors.stages.stage5}
            textColor="#fff"
          />
          <ColorSwatch
            name="Stage 6"
            value={colors.stages.stage6}
            textColor="#fff"
          />
          <ColorSwatch
            name="Stage 7"
            value={colors.stages.stage7}
            textColor="#fff"
          />
          <ColorSwatch
            name="Stage 8"
            value={colors.stages.stage8}
            textColor="#fff"
          />
          <ColorSwatch
            name="Stage 9"
            value={colors.stages.stage9}
            textColor="#fff"
          />
        </Stack>
        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
          <ColorSwatch
            name="Stage 10"
            value={colors.stages.stage10}
            textColor="#fff"
          />
          <ColorSwatch
            name="Stage 11"
            value={colors.stages.stage11}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
          <ColorSwatch
            name="Stage 12"
            value={colors.stages.stage12}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
          <ColorSwatch
            name="Stage 13"
            value={colors.stages.stage13}
            textColor={mode === 'dark' ? '#000' : '#fff'}
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Backgrounds
        </Typography>
        <Stack direction="row" spacing={1}>
          <ColorSwatch
            name="Default"
            value={colors.background.default}
            textColor={mode === 'dark' ? '#fff' : '#000'}
          />
          <ColorSwatch
            name="Paper"
            value={colors.background.paper}
            textColor={mode === 'dark' ? '#fff' : '#000'}
          />
          <ColorSwatch
            name="Elevated"
            value={colors.background.elevated}
            textColor={mode === 'dark' ? '#fff' : '#000'}
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Text Colors
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Stack spacing={1}>
            <Typography sx={{ color: colors.text.primary }}>
              Primary Text
            </Typography>
            <Typography sx={{ color: colors.text.secondary }}>
              Secondary Text
            </Typography>
            <Typography sx={{ color: colors.text.disabled }}>
              Disabled Text
            </Typography>
            <Typography sx={{ color: colors.text.accent }}>
              Accent Text
            </Typography>
          </Stack>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Status Colors
        </Typography>
        <Stack direction="row" spacing={1}>
          <ColorSwatch name="Success" value={colors.success} />
          <ColorSwatch name="Error" value={colors.error} />
          <ColorSwatch name="Warning" value={colors.warning} textColor="#000" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Borders
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: 100,
              height: 60,
              border: `2px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption">Border</Typography>
          </Box>
          <Box
            sx={{
              width: 100,
              height: 60,
              border: `2px solid ${colors.borderBright}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption">Bright</Typography>
          </Box>
        </Stack>
      </Box>

      {mode === 'dark' && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Glow Effects
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                width: 80,
                height: 80,
                backgroundColor: colors.background.paper,
                boxShadow: colors.glow.soft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption">Soft</Typography>
            </Box>
            <Box
              sx={{
                width: 80,
                height: 80,
                backgroundColor: colors.background.paper,
                boxShadow: colors.glow.medium,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption">Medium</Typography>
            </Box>
            <Box
              sx={{
                width: 80,
                height: 80,
                backgroundColor: colors.background.paper,
                boxShadow: colors.glow.strong,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption">Strong</Typography>
            </Box>
          </Stack>
        </Box>
      )}
    </Stack>
  );
};

export const DarkMode: StoryObj = {
  render: () => <ColorPalette mode="dark" />,
};

export const LightMode: StoryObj = {
  render: () => <ColorPalette mode="light" />,
};
