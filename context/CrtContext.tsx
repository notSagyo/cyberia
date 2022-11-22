import { createContext, useContext, useEffect, useState } from 'react';
import { SetState } from '/types/types';

interface ICrtContext {
  crtEnabled: boolean | undefined;
  setCrtEnabled: SetState<boolean | undefined>;
}

const CrtContext = createContext<Record<string, never> | ICrtContext>({});
export const useCrtContext = () => useContext(CrtContext);

export const crtKey = 'crt';
export const getStoredCrt = () => {
  return localStorage.getItem(crtKey)
    ? Boolean(Number(localStorage.getItem(crtKey)))
    : true;
};

export const CrtContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [crtEnabled, setCrtEnabled] = useState<boolean | undefined>();

  useEffect(() => {
    setCrtEnabled(getStoredCrt);
  }, []);

  useEffect(() => {
    if (crtEnabled != null) {
      crtEnabled
        ? document.getElementById('app-wrapper')?.classList.add('crt')
        : document.getElementById('app-wrapper')?.classList.remove('crt');
      localStorage.setItem(crtKey, String(Number(crtEnabled)));
    }
  }, [crtEnabled]);

  return (
    <CrtContext.Provider
      value={{
        crtEnabled,
        setCrtEnabled,
      }}
    >
      {children}
    </CrtContext.Provider>
  );
};

export default CrtContext;
