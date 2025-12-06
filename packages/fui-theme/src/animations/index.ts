import { keyframes } from '@mui/material';

// ============================================================
// FADE IN ANIMATIONS
// ============================================================

/** Fade in from bottom with upward motion */
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/** Fade in from left */
export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

/** Fade in from right */
export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

/** Slide in from bottom-left diagonal */
export const slideInDiagonal = keyframes`
  from {
    opacity: 0;
    transform: translate(-30px, 30px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

// ============================================================
// SCALE & ROTATE ANIMATIONS
// ============================================================

/** Scale in from smaller size */
export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/** Rotate in with scale */
export const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
`;

// ============================================================
// PULSE ANIMATIONS
// ============================================================

/** Simple opacity pulse */
export const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

/** Glow pulse effect (for buttons, highlights) */
export const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 179, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 179, 0, 0.6); }
`;

// ============================================================
// FLOAT & FLICKER ANIMATIONS
// ============================================================

/** Gentle floating motion */
export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

/** Hologram/HUD flicker effect */
export const hologramFlicker = keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  95% { opacity: 0.9; }
  96% { opacity: 1; }
`;

// ============================================================
// HUD / CYBER ANIMATIONS
// ============================================================

/** Vertical scan line moving down the screen */
export const scanLine = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

/** Data stream flowing horizontally */
export const dataStream = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(200%); opacity: 0; }
`;

/** Grid background pulse */
export const gridPulse = keyframes`
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.08; }
`;
