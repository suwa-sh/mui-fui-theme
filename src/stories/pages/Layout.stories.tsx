import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Typography,
  Stack,
  Paper,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Avatar,
  AvatarGroup,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Home,
  Folder,
  Description,
  ChevronRight,
  Person,
  Settings,
  Dashboard,
} from '@mui/icons-material';
import { getColors, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Pages/Layout',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Spacing Story
const SpacingDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);
  const spacingValues = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12];

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Spacing Scale</Typography>
      <Typography variant="body2" color="text.secondary">
        MUI uses an 8px spacing scale. spacing(1) = 8px
      </Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Visual Scale
        </Typography>
        <Stack spacing={1}>
          {spacingValues.map((value) => (
            <Stack key={value} direction="row" alignItems="center" spacing={2}>
              <Typography
                variant="caption"
                sx={{ width: 80, fontFamily: 'monospace' }}
              >
                spacing({value})
              </Typography>
              <Box
                sx={{
                  width: theme.spacing(value),
                  height: 24,
                  backgroundColor: colors.primary,
                  minWidth: 2,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {parseFloat(theme.spacing(value))}px
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Padding Example
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {[1, 2, 3, 4].map((p) => (
            <Paper key={p} sx={{ p }}>
              <Typography variant="caption">p: {p}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Gap Example
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: alpha(colors.primary, 0.3),
                border: `1px solid ${colors.primary}`,
              }}
            />
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: alpha(colors.primary, 0.3),
                border: `1px solid ${colors.primary}`,
              }}
            />
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: alpha(colors.primary, 0.3),
                border: `1px solid ${colors.primary}`,
              }}
            />
          </Stack>
          <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
            Stack with spacing=2 (16px gap)
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

export const Spacing: StoryObj = {
  render: () => <SpacingDemo />,
};

// Tabs Story
const TabsDemo: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Tabs</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Horizontal Tabs
        </Typography>
        <Paper sx={{ p: 0 }}>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
          >
            <Tab label="Overview" />
            <Tab label="Analytics" />
            <Tab label="Settings" />
            <Tab label="Logs" disabled />
          </Tabs>
          <Box sx={{ p: 3 }}>
            <Typography variant="body2">
              Content for tab {value + 1}
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Tabs with Icons
        </Typography>
        <Paper sx={{ p: 0 }}>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
          >
            <Tab icon={<Dashboard />} label="Dashboard" />
            <Tab icon={<Settings />} label="Settings" />
            <Tab icon={<Person />} label="Profile" />
          </Tabs>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Vertical Tabs
        </Typography>
        <Paper sx={{ display: 'flex', height: 200 }}>
          <Tabs
            orientation="vertical"
            value={verticalValue}
            onChange={(_, newValue) => setVerticalValue(newValue)}
            sx={{
              borderRight: 1,
              borderColor: 'divider',
            }}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          <Box sx={{ p: 3, flex: 1 }}>
            <Typography variant="body2">
              Vertical tab content {verticalValue + 1}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export const TabsShowcase: StoryObj = {
  name: 'Tabs',
  render: () => <TabsDemo />,
};

// Breadcrumbs Story
const BreadcrumbsDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Breadcrumbs</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Basic Breadcrumbs
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="#"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Home sx={{ mr: 0.5, fontSize: 18 }} />
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Projects
            </Link>
            <Typography color="text.primary">Current Page</Typography>
          </Breadcrumbs>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          With Custom Separator
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Breadcrumbs
            separator={<ChevronRight sx={{ fontSize: 16 }} />}
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              color="inherit"
              href="#"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Folder sx={{ mr: 0.5, fontSize: 18 }} />
              Root
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="#"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Folder sx={{ mr: 0.5, fontSize: 18 }} />
              Documents
            </Link>
            <Typography
              color="primary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: alpha(colors.primary, 0.1),
                px: 1,
                py: 0.25,
              }}
            >
              <Description sx={{ mr: 0.5, fontSize: 18 }} />
              Report.pdf
            </Typography>
          </Breadcrumbs>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Collapsed Breadcrumbs
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Breadcrumbs maxItems={3} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Level 1
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Level 2
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Level 3
            </Link>
            <Typography color="text.primary">Current</Typography>
          </Breadcrumbs>
        </Paper>
      </Box>
    </Stack>
  );
};

export const BreadcrumbsShowcase: StoryObj = {
  name: 'Breadcrumbs',
  render: () => <BreadcrumbsDemo />,
};

// Avatar Story
const AvatarDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Avatar</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Variants
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              alt="User"
              src="https://i.pravatar.cc/150?img=1"
            />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Image
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ bgcolor: colors.primary }}>JD</Avatar>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Letter
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ bgcolor: alpha(colors.primary, 0.2) }}>
              <Person sx={{ color: colors.primary }} />
            </Avatar>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Icon
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
              S
            </Avatar>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Small
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar>M</Avatar>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Medium
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Large
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80 }}>XL</Avatar>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Extra Large
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Avatar Group
        </Typography>
        <Paper sx={{ p: 2 }}>
          <AvatarGroup max={4}>
            <Avatar
              alt="User 1"
              src="https://i.pravatar.cc/150?img=1"
            />
            <Avatar
              alt="User 2"
              src="https://i.pravatar.cc/150?img=2"
            />
            <Avatar
              alt="User 3"
              src="https://i.pravatar.cc/150?img=3"
            />
            <Avatar
              alt="User 4"
              src="https://i.pravatar.cc/150?img=4"
            />
            <Avatar
              alt="User 5"
              src="https://i.pravatar.cc/150?img=5"
            />
          </AvatarGroup>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            max=4, showing +1 overflow
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

export const AvatarShowcase: StoryObj = {
  name: 'Avatar',
  render: () => <AvatarDemo />,
};
