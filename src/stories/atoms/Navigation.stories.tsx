import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  Button,
  Box,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Settings,
  Analytics,
  Person,
  Notifications,
  ExitToApp,
  Home,
  Folder,
  Description,
  MoreVert,
} from '@mui/icons-material';
import { getColors, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Atoms/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// AppBar Demo
const AppBarDemo = () => {
  return (
    <Stack spacing={4} sx={{ p: 2 }}>
      <Typography variant="h5">AppBar</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled AppBar with blur backdrop and sharp edges.
      </Typography>

      <Box sx={{ position: 'relative', height: 200, border: '1px solid', borderColor: 'divider' }}>
        <AppBar position="absolute" sx={{ position: 'absolute' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: '0.1em' }}>
              SYSTEM CONTROL
            </Typography>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <Person />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
};

export const AppBarShowcase: StoryObj = {
  name: 'AppBar',
  render: () => <AppBarDemo />,
};

// Drawer Demo
const DrawerDemo = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { icon: <Dashboard />, label: 'Dashboard' },
    { icon: <Analytics />, label: 'Analytics' },
    { icon: <Folder />, label: 'Projects' },
    { icon: <Description />, label: 'Documents' },
    { icon: <Settings />, label: 'Settings' },
  ];

  return (
    <Stack spacing={4} sx={{ p: 2 }}>
      <Typography variant="h5">Drawer</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled Drawer with grid pattern background and animated list items.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => setOpen(!open)}>
          {open ? 'CLOSE DRAWER' : 'OPEN DRAWER'}
        </Button>
      </Stack>

      <Box sx={{ display: 'flex', height: 400, border: '1px solid', borderColor: 'divider', position: 'relative', overflow: 'hidden' }}>
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: open ? 240 : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              position: 'absolute',
              height: '100%',
            },
          }}
        >
          <Toolbar>
            <Typography variant="subtitle2" sx={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.primary }}>
              Navigation
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={item.label}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3, ml: open ? '240px' : 0, transition: 'margin 0.3s' }}>
          <Typography variant="body2" color="text.secondary">
            Main content area. Click menu items to see the selection indicator animation.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export const DrawerShowcase: StoryObj = {
  name: 'Drawer',
  render: () => <DrawerDemo />,
};

// Menu Demo
const MenuDemo = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  return (
    <Stack spacing={4} sx={{ p: 2 }}>
      <Typography variant="h5">Menu</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled dropdown menus with sharp edges and hover effects.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Box>
          <Button
            variant="outlined"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            OPEN MENU
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon><Home fontSize="small" /></ListItemIcon>
              Home
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon><Dashboard fontSize="small" /></ListItemIcon>
              Dashboard
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon><Analytics fontSize="small" /></ListItemIcon>
              Analytics
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
              Settings
            </MenuItem>
          </Menu>
        </Box>

        <Box>
          <IconButton onClick={(e) => setAnchorEl2(e.currentTarget)}>
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl2}
            open={open2}
            onClose={() => setAnchorEl2(null)}
          >
            <MenuItem onClick={() => setAnchorEl2(null)}>Edit</MenuItem>
            <MenuItem onClick={() => setAnchorEl2(null)}>Duplicate</MenuItem>
            <MenuItem onClick={() => setAnchorEl2(null)}>Archive</MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchorEl2(null)} sx={{ color: 'error.main' }}>
              Delete
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
    </Stack>
  );
};

export const MenuShowcase: StoryObj = {
  name: 'Menu',
  render: () => <MenuDemo />,
};

// Divider Demo
const DividerDemo = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Stack spacing={4} sx={{ p: 2 }}>
      <Typography variant="h5">Divider</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled dividers using theme border color.
      </Typography>

      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" gutterBottom display="block">
            Horizontal Divider
          </Typography>
          <Box sx={{ p: 2, border: `1px solid ${colors.border}` }}>
            <Typography variant="body2">Content above</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2">Content below</Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="overline" gutterBottom display="block">
            With Text
          </Typography>
          <Box sx={{ p: 2, border: `1px solid ${colors.border}` }}>
            <Divider>SECTION</Divider>
          </Box>
        </Box>

        <Box>
          <Typography variant="overline" gutterBottom display="block">
            Vertical Divider
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ p: 2, border: `1px solid ${colors.border}` }}
          >
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export const DividerShowcase: StoryObj = {
  name: 'Divider',
  render: () => <DividerDemo />,
};

// Showcase all navigation components
export const Showcase: StoryObj = {
  name: 'Navigation Showcase',
  render: () => (
    <Stack spacing={6} sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Navigation Components
      </Typography>
      <AppBarDemo />
      <DrawerDemo />
      <MenuDemo />
      <DividerDemo />
    </Stack>
  ),
};
