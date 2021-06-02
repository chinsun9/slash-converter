import { Theme as ThemeType } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      bgPrimary: string;
      bgSecondary: string;
      textPrimary: string;
      textSecondary: string;
      textLink: string;
    };
  }
}

let isDark = false;

function initTheme() {
  // chk local storage
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    isDark = true;
    return;
  }
  if (theme === 'light') {
    return;
  }

  //   visit first time
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

initTheme();

const theme: ThemeType = {
  color: {
    bgPrimary: isDark ? '#1e1e1e' : '#ffffff',
    bgSecondary: isDark ? '#3c3c3c' : '#dddddd',
    textPrimary: isDark ? '#ffffff' : '#000000',
    textSecondary: isDark ? '#8b949e' : '#7a7a7a',
    textLink: isDark ? '#ce9178' : '#0000ff',
  },
};

export default theme;
