"use client";

import { IReactChildren } from '@/types';
import { Context } from './ThemeContext.service';


export const ThemeContext: React.FC<IReactChildren> = ({ children }) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
}