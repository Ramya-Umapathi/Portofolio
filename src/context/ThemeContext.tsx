import { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Token helper
export const tokens = (isDark: boolean) => ({
  bg:        isDark ? '#0f0a1e' : '#f8f6ff',
  bgAlt:     isDark ? '#160d2e' : '#ede8ff',
  surface:   isDark ? '#1a1035' : '#ffffff',
  surface2:  isDark ? '#221542' : '#f0ebff',
  border:    isDark ? '#2e1f5e' : '#d4c6ff',
  text:      isDark ? '#ede8ff' : '#120a2e',
  muted:     isDark ? '#fff' : '#000',
  accent:    '#a78bfa',
  accent2:   '#818cf8',
  accent3:   '#c084fc',
  grad:      isDark
    ? 'linear-gradient(135deg, #1a0533 0%, #160d2e 40%, #0f0a1e 100%)'
    : 'linear-gradient(135deg, #ede8ff 0%, #ddd5ff 40%, #f8f6ff 100%)',
  heroGrad:  'linear-gradient(135deg, #4f1599 0%, #7c3aed 40%, #9d46f5 70%, #c084fc 100%)',
});
