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
    theme && localStorage.setItem(themeKey, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`theme-${theme}`}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
