
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { themes, Theme } from './themes';

// Define the colors for dark mode
const darkThemeColors = {
  background: '#121212',
  card: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  secondary: '#343A40',
};

interface ThemeContextType {
  theme: Theme;
  themeKey: string;
  setThemeByName: (name: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeKey, setThemeKey] = useState<string>('default');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = themes[themeKey];
    const effectiveColors = { ...currentTheme.colors };

    if (isDarkMode) {
        effectiveColors.background = darkThemeColors.background;
        effectiveColors.card = darkThemeColors.card;
        effectiveColors.text = darkThemeColors.text;
        effectiveColors.textSecondary = darkThemeColors.textSecondary;
        effectiveColors.secondary = darkThemeColors.secondary;
    }

    const root = window.document.documentElement;
    
    Object.entries(effectiveColors).forEach(([key, value]) => {
      const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });

  }, [themeKey, isDarkMode]);

  const setThemeByName = (name: string) => {
    if (themes[name]) {
      setThemeKey(name);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  const theme = themes[themeKey];

  const value = useMemo(() => ({ theme, themeKey, setThemeByName, isDarkMode, toggleDarkMode }), [theme, themeKey, isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
