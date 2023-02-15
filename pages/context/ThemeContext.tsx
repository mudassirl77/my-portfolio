import { createContext } from 'react';
import { IThemeContext } from '../interfaces/portfolio.interfaces';

export const ThemeContext = createContext<IThemeContext>(
  {} as IThemeContext
);
