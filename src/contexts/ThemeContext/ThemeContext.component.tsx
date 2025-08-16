"use client";

import { ColorTheme, IReactChildren } from '@/types';
import { Context, defaultThemeConfig } from './ThemeContext.service';
import { useEffect, useState } from 'react';

import { ThemeMode, ThemeConfig, } from "@types"
import { IContext } from './ThemeContext';
import { storageKey } from "@data";


export const ThemeContext: React.FC<IReactChildren> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeConfig);
  const [actualMode, setActualMode] = useState<ThemeMode>('light');
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsedTheme = JSON.parse(stored);
        // Handle migration from old theme format
        if (typeof parsedTheme === 'string') {
          setThemeConfig({ colorTheme: 'default', mode: parsedTheme as ThemeMode });
        } else if (parsedTheme && typeof parsedTheme === 'object') {
          setThemeConfig({
            colorTheme: parsedTheme.colorTheme || 'default',
            mode: parsedTheme.mode || 'system',
          });
        }
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
    setMounted(true);
  }, [storageKey]);
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateMode = () => {
      let resolvedMode: 'light' | 'dark';

      if (themeConfig.mode === 'system') {
        resolvedMode = mediaQuery.matches ? 'dark' : 'light';
      } else {
        resolvedMode = themeConfig.mode;
      }

      setActualMode(resolvedMode);

      // Remove all theme classes
      root.classList.remove('light', 'dark');
      root.classList.remove(
        'theme-default',
        'theme-blue',
        'theme-green',
        'theme-purple',
        'theme-orange',
        'theme-red',
        'theme-pink'
      );

      // Add current theme classes
      root.classList.add(resolvedMode);
      root.classList.add(`theme-${themeConfig.colorTheme}`);

      // Set data attributes for additional styling hooks
      root.setAttribute('data-mode', resolvedMode);
      root.setAttribute('data-color-theme', themeConfig.colorTheme);
      root.setAttribute('data-theme', `${themeConfig.colorTheme}-${resolvedMode}`);
    };

    updateMode();

    // Listen for system theme changes
    const handleMediaChange = () => {
      if (themeConfig.mode === 'system') {
        updateMode();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [themeConfig, mounted]);
  const saveTheme = (config: ThemeConfig) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(config));
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
    setThemeConfig(config);
  };
  const value: IContext = {
    actualMode,
    colorTheme: themeConfig.colorTheme,
    mode: themeConfig.mode,
    mounted,
    setColorTheme: (colorTheme: ColorTheme) => {
      saveTheme({ ...themeConfig, colorTheme });
    },
    setMode: (mode: ThemeMode) => {
      saveTheme({ ...themeConfig, mode });
    },
    setTheme: (config: ThemeConfig) => {
      saveTheme(config);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}