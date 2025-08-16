import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IReactChildren {
  children: React.ReactNode;
}

export type ThemeMode = "light" | "dark" | "system";

export type ColorTheme =
  | "default"
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "pink";

type ThemeConfig = {
  colorTheme: ColorTheme;
  mode: ThemeMode;
};
