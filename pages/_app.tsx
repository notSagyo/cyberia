import type { AppProps } from 'next/app';
import { MusicContextProvider } from '../context/MusicContext';
import { CrtContextProvider } from '/context/CrtContext';
import { ThemeContextProvider } from '/context/ThemeContext';
import '/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <CrtContextProvider>
        <MusicContextProvider>
          <Component {...pageProps} />
        </MusicContextProvider>
      </CrtContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
