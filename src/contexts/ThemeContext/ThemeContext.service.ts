"use client";

import { ThemeConfig } from "@/types";
import { createContext } from "react";

export const Context = createContext({});

export const defaultThemeConfig: ThemeConfig = {
  colorTheme: "default",
  mode: "system",
};
