/**
 * FUI Theme console banner
 *
 * Displays powered by message on first theme creation.
 * Set FUI_THEME_SILENT=true to disable.
 *
 * @example
 * ```typescript
 * // Silence via environment variable (Node.js / Vite)
 * // .env: FUI_THEME_SILENT=true
 *
 * // Silence via window global (browser console)
 * window.FUI_THEME_SILENT = true;
 * ```
 */

declare global {
  interface Window {
    FUI_THEME_SILENT?: boolean;
  }
}

const isSilent = (): boolean => {
  // Browser: window global
  if (typeof window !== 'undefined' && window.FUI_THEME_SILENT) {
    return true;
  }
  // Vite environment
  if (typeof import.meta !== 'undefined' && 'env' in import.meta) {
    const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env;
    if (env.FUI_THEME_SILENT === 'true' || env.VITE_FUI_THEME_SILENT === 'true') {
      return true;
    }
  }
  // Node.js environment
  if (typeof process !== 'undefined' && process.env?.FUI_THEME_SILENT === 'true') {
    return true;
  }
  return false;
};

let bannerShown = false;

/**
 * Display FUI Theme banner in console (once per session)
 */
export const showBanner = (): void => {
  if (bannerShown || isSilent()) {
    return;
  }
  bannerShown = true;

  console.log(
    '%c FUI THEME %c Futuristic UI Theme for MUI',
    'background: #FFB300; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'color: #FFB300; font-weight: bold;'
  );
  console.log(
    `  📦 npm: https://www.npmjs.com/package/@suwa-sh/mui-fui-theme
  📖 GitHub: https://github.com/suwa-sh/mui-fui-theme
  📚 Docs: https://suwa-sh.github.io/mui-fui-theme/

  To disable this message, set FUI_THEME_SILENT=true`
  );
};

// Legacy exports for backward compatibility
export interface LoggerOptions {
  disableConsole?: boolean;
}

export const createLogger = (options: LoggerOptions = {}) => {
  const { disableConsole = false } = options;
  const shouldLog = !disableConsole && !isSilent();

  return {
    log: (message: string, ...args: unknown[]) => {
      if (shouldLog) console.log(`[FUI Theme] ${message}`, ...args);
    },
    warn: (message: string, ...args: unknown[]) => {
      if (shouldLog) console.warn(`[FUI Theme] ${message}`, ...args);
    },
    info: (message: string, ...args: unknown[]) => {
      if (shouldLog) console.info(`[FUI Theme] ${message}`, ...args);
    },
  };
};

export const logger = createLogger();
