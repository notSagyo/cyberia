import type { AppProps } from 'next/app';
import { MusicContextProvider } from '../context/MusicContext';
import '/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MusicContextProvider>
      <Component {...pageProps} />
    </MusicContextProvider>
  );
}

export default MyApp;
