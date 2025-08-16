"use client";

import { IReactChildren } from '@/types';
import { Context, defaultThemeConfig } from './ThemeContext.service';
import { useState } from 'react';

import { ThemeMode, ThemeConfig, } from "@types"


export const ThemeContext: React.FC<IReactChildren> = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeConfig);
  const [actualMode, setActualMode] = useState<ThemeMode>('light');
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}