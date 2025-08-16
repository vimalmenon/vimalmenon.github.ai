"use client";

import { ColorTheme, ThemeConfig, ThemeMode } from "@types";
import { createContext, useContext } from "react";
import { notImplemented } from "@utilities";

import { IContext } from "./ThemeContext";

const initialState: IContext = {
  actualMode: "light",
  colorTheme: "default",
  mode: "system",
  mounted: false,
  setColorTheme: notImplemented,
  setMode: notImplemented,
  setTheme: notImplemented,
};

export const Context = createContext<IContext>(initialState);

export const defaultThemeConfig: ThemeConfig = {
  colorTheme: "default",
  mode: "system",
};

export const useTheme = () => {
  const context = useContext<IContext>(Context);
  return context;
};

// Color theme definitions for easy access
export const colorThemes: Record<
  ColorTheme,
  { name: string; description: string }
> = {
  blue: { description: "Professional blue theme", name: "Blue" },
  default: { description: "Classic neutral theme", name: "Default" },
  green: { description: "Natural green theme", name: "Green" },
  orange: { description: "Energetic orange theme", name: "Orange" },
  pink: { description: "Vibrant pink theme", name: "Pink" },
  purple: { description: "Creative purple theme", name: "Purple" },
  red: { description: "Bold red theme", name: "Red" },
};

export const modes: Record<ThemeMode, { name: string; description: string }> = {
  dark: { description: "Dark mode", name: "Dark" },
  light: { description: "Light mode", name: "Light" },
  system: { description: "Follow system preference", name: "System" },
};
