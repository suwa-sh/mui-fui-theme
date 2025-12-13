import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useTheme } from '@mui/material';
import { ColorLegend, type ColorLegendItem } from '../../components/atoms/ColorLegend';
import { getStageColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof ColorLegend> = {
  title: 'Molecules/ColorLegend',
  component: ColorLegend,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    swatchStyle: {
      control: 'select',
      options: ['line', 'box'],
    },
    showGlow: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorLegend>;

// Basic horizontal legend
const BasicLegend: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const items: ColorLegendItem[] = [
    { label: 'Current', color: stageColors.stage1 },
    { label: 'Baseline', color: stageColors.stage2, dashed: true },
  ];

  return <ColorLegend items={items} />;
};

export const Default: Story = {
  render: () => <BasicLegend />,
};

// Multi-item legend
const MultiItemLegend: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const items: ColorLegendItem[] = [
    { label: 'CPU', color: stageColors.stage1 },
    { label: 'Memory', color: stageColors.stage2 },
    { label: 'Network', color: stageColors.stage3 },
    { label: 'Storage', color: stageColors.stage4 },
  ];

  return <ColorLegend items={items} />;
};

export const MultiItem: Story = {
  render: () => <MultiItemLegend />,
};

// Vertical layout
const VerticalLegend: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const items: ColorLegendItem[] = [
    { label: 'Low', color: stageColors.stage1 },
    { label: 'Medium', color: stageColors.stage2 },
    { label: 'High', color: stageColors.stage3 },
    { label: 'Very High', color: stageColors.stage4 },
  ];

  return <ColorLegend items={items} direction="column" />;
};

export const Vertical: Story = {
  render: () => <VerticalLegend />,
};

// Box style swatches
const BoxStyleLegend: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const items: ColorLegendItem[] = [
    { label: 'Category A', color: stageColors.stage1 },
    { label: 'Category B', color: stageColors.stage2 },
    { label: 'Category C', color: stageColors.stage3 },
  ];

  return <ColorLegend items={items} swatchStyle="box" swatchSize={12} />;
};

export const BoxStyle: Story = {
  render: () => <BoxStyleLegend />,
};

// Mixed dashed and solid
const MixedStyleLegend: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const items: ColorLegendItem[] = [
    { label: 'Actual', color: stageColors.stage1 },
    { label: 'Target', color: stageColors.stage2, dashed: true },
    { label: 'Forecast', color: stageColors.stage3, dashed: true },
  ];

  return <ColorLegend items={items} swatchWidth={24} />;
};

export const MixedStyles: Story = {
  render: () => <MixedStyleLegend />,
};

// Without glow
const NoGlowLegend: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const items: ColorLegendItem[] = [
    { label: 'Series A', color: stageColors.stage1 },
    { label: 'Series B', color: stageColors.stage2 },
  ];

  return <ColorLegend items={items} showGlow={false} />;
};

export const NoGlow: Story = {
  render: () => <NoGlowLegend />,
};
