import React, { createContext, useContext, useEffect, useState } from 'react';
import { SetState } from '/types/types';

export type Themes = 'default' | 'blue' | 'green';

interface IThemeContext {
  theme: Themes | undefined;
  setTheme: SetState<Themes | undefined>;
}

const ThemeContext = createContext<Record<string, never> | IThemeContext>({});
export const useThemeContext = () => useContext(ThemeContext);

export const themeKey = 'theme';
export const getStoredTheme = () => {
  return (localStorage.getItem(themeKey) as Themes) || 'default';
};

// ?TODO: Make this usable even if not wrapping whole app (styles)
export const ThemeContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [theme, setTheme] = useState<Themes | undefined>();

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem(themeKey, theme);
      if (document.body.className.includes('theme')) {
        const currentTheme = document.body.className.match(/theme.+?(?= |$)/g);
        currentTheme &&
          document.body.classList.replace(currentTheme[0], `theme-${theme}`);
      } else document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
