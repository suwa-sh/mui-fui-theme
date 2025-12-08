import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import coreTokens from '../../tokens/core.json';
import darkTokens from '../../tokens/dark.json';
import lightTokens from '../../tokens/light.json';

// Helper to get token value
const getValue = <T,>(token: { value: T }): T => token.value;

// Color Swatch component
const ColorSwatch = ({
  name,
  value,
  textColor = '#fff',
}: {
  name: string;
  value: string;
  textColor?: string;
}) => (
  <Box sx={{ mb: 1 }}>
    <Box
      sx={{
        width: 80,
        height: 80,
        backgroundColor: value,
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="caption" sx={{ color: textColor, fontSize: '0.6rem' }}>
        {value}
      </Typography>
    </Box>
    <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
      {name}
    </Typography>
  </Box>
);

// Color Group component
const ColorGroup = ({
  title,
  colors,
}: {
  title: string;
  colors: { name: string; value: string; textColor?: string }[];
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </Box>
  </Box>
);

// Design Tokens Overview component
const DesignTokensOverview = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Design Tokens
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Dark Mode Colors
        </Typography>

        <ColorGroup
          title="Primary"
          colors={[
            { name: 'primary', value: getValue(darkTokens.colors.primary), textColor: '#000' },
            { name: 'secondary', value: getValue(darkTokens.colors.secondary), textColor: '#000' },
          ]}
        />

        <ColorGroup
          title="Stage Colors (1-13)"
          colors={Object.entries(darkTokens.colors.stages).map(([name, token]) => ({
            name,
            value: getValue(token as { value: string }),
            textColor: '#000',
          }))}
        />

        <ColorGroup
          title="Background"
          colors={Object.entries(darkTokens.colors.background).map(([name, token]) => ({
            name,
            value: getValue(token as { value: string }),
          }))}
        />

        <ColorGroup
          title="Text"
          colors={Object.entries(darkTokens.colors.text).map(([name, token]) => ({
            name,
            value: getValue(token as { value: string }),
            textColor: name === 'primary' ? '#000' : '#fff',
          }))}
        />

        <ColorGroup
          title="Status"
          colors={[
            { name: 'success', value: getValue(coreTokens.status.success), textColor: '#000' },
            { name: 'error', value: getValue(coreTokens.status.error), textColor: '#000' },
            { name: 'warning', value: getValue(darkTokens.colors.warning), textColor: '#000' },
            { name: 'info', value: getValue(darkTokens.colors.info), textColor: '#000' },
          ]}
        />
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Light Mode Colors
        </Typography>

        <ColorGroup
          title="Primary"
          colors={[
            { name: 'primary', value: getValue(lightTokens.colors.primary) },
            { name: 'secondary', value: getValue(lightTokens.colors.secondary) },
          ]}
        />

        <ColorGroup
          title="Stage Colors (1-13)"
          colors={Object.entries(lightTokens.colors.stages).map(([name, token]) => ({
            name,
            value: getValue(token as { value: string }),
          }))}
        />

        <ColorGroup
          title="Background"
          colors={Object.entries(lightTokens.colors.background).map(([name, token]) => ({
            name,
            value: getValue(token as { value: string }),
            textColor: '#000',
          }))}
        />

        <ColorGroup
          title="Text"
          colors={Object.entries(lightTokens.colors.text).map(([name, token]) => ({
            name,
            value: getValue(token as { value: string }),
          }))}
        />
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Typography
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Chip label={`Font: ${getValue(coreTokens.typography.fontFamily)}`} />
        </Box>

        <Grid container spacing={2}>
          {['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'button', 'caption', 'overline'].map(
            (variant) => {
              const token = coreTokens.typography[variant as keyof typeof coreTokens.typography];
              if (!token || typeof token === 'string') return null;
              return (
                <Grid key={variant} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
                      {variant}
                    </Typography>
                    {'fontWeight' in token && (
                      <Typography variant="body2">
                        Weight: {getValue(token.fontWeight as { value: string })}
                      </Typography>
                    )}
                    {'letterSpacing' in token && (
                      <Typography variant="body2">
                        Spacing: {getValue(token.letterSpacing as { value: string })}
                      </Typography>
                    )}
                    {'textTransform' in token && (
                      <Typography variant="body2">
                        Transform: {getValue(token.textTransform as { value: string })}
                      </Typography>
                    )}
                    {'lineHeight' in token && (
                      <Typography variant="body2">
                        Line Height: {getValue(token.lineHeight as { value: string })}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Layout
        </Typography>

        <Grid container spacing={2}>
          {Object.entries(coreTokens.layout).map(([name, token]) => (
            <Grid key={name} size={{ xs: 6, sm: 3 }}>
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
                <Typography variant="h6">{getValue(token)}px</Typography>
                <Typography variant="caption">{name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Effects (Dark Mode)
        </Typography>

        <Grid container spacing={2}>
          {Object.entries(darkTokens.effects.glow).map(([name, token]) => (
            <Grid key={name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  boxShadow: getValue(token),
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2">glow.{name}</Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {getValue(token)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Token Files
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Design tokens are stored in JSON format (Figma Tokens / Tokens Studio compatible):
        </Typography>

        <Box component="pre" sx={{ p: 2, bgcolor: 'background.paper', overflow: 'auto' }}>
          {`tokens/
├── core.json      # Typography, spacing, layout (shared)
├── dark.json      # Dark mode colors and effects
└── light.json     # Light mode colors and effects`}
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Import tokens directly:
        </Typography>
        <Box component="pre" sx={{ p: 2, bgcolor: 'background.paper', overflow: 'auto', fontSize: '0.8rem' }}>
          {`import { coreTokens, darkTokens, lightTokens } from '@suwa-sh/mui-fui-theme';`}
        </Box>
      </Paper>
    </Box>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Overview',
  component: DesignTokensOverview,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
