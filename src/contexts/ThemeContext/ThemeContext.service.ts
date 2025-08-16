"use client";

import { ThemeConfig } from "@/types";
import { createContext } from "react";

import { IContext } from "./ThemeContext";

const initialState: IContext = {
  actualMode: "light",
  colorTheme: "default",
  mode: "system",
  mounted: false,
  setColorTheme: () => null,
  setMode: () => null,
  setTheme: () => null,
};

export const Context = createContext<IContext>(initialState);

export const defaultThemeConfig: ThemeConfig = {
  colorTheme: "default",
  mode: "system",
};
