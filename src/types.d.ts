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

export interface ThemeConfig {
  colorTheme: ColorTheme;
  mode: ThemeMode;
}

export interface ILocalStorageKey {
  colorTheme: ColorTheme;
  mode: ThemeMode;
}

export interface INavigationItemSlim {
  name: string;
  url: string;
  Icon?: any;
}

export interface INavigationItem extends INavigationItemSlim {
  segments: string[];
  breadcrumb: INavigationItemSlim[];
}
