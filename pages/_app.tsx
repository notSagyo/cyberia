import type { AppProps } from 'next/app';
import { MusicContextProvider } from '../context/MusicContext';
import { ThemeContextProvider } from '../context/ThemeContext';
import { CrtContextProvider } from '/context/CrtContext';
import '/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <CrtContextProvider>
        <MusicContextProvider>
          <div id="app-wrapper" className="crt">
            <Component {...pageProps} />
          </div>
        </MusicContextProvider>
      </CrtContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
