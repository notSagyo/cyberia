import cn from 'classnames';
import React, { createContext, useContext, useState } from 'react';
import { SetState } from '/types/types';

type Themes = 'default' | 'blue';

interface IThemeContext {
  theme: Themes;
  setTheme: SetState<Themes>;
}

const ThemeContext = createContext<Record<string, never> | IThemeContext>({});
export const useThemeContext = () => useContext(ThemeContext);

// ?TODO: Make this usable even if not wrapping whole app (styles)
export const ThemeContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [theme, setTheme] = useState<Themes>('default');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={cn('theme-provider', `theme-${theme}`)}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
