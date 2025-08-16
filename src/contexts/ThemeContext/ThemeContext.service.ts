"use client";

import { ThemeConfig } from "@/types";
import { createContext } from "react";
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
