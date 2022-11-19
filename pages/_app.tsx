import type { AppProps } from 'next/app';
import { MusicContextProvider } from '../context/MusicContext';
import { CrtContextProvider } from '/context/CrtContext';
import '/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CrtContextProvider>
      <MusicContextProvider>
        <Component {...pageProps} />
      </MusicContextProvider>
    </CrtContextProvider>
  );
}

export default MyApp;
