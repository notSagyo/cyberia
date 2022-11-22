import type { AppProps } from 'next/app';
import { MusicContextProvider } from '../context/MusicContext';
import { ThemeContextProvider } from '../context/ThemeContext';
import { CrtContextProvider } from '/context/CrtContext';
import '/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <CrtContextProvider>
        <div id="app-wrapper">
          <MusicContextProvider>
            <Component {...pageProps} />
          </MusicContextProvider>
        </div>
      </CrtContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
