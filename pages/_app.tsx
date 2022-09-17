import 'plyr-react/plyr.css';
import '/styles/globals.scss';
import type { AppProps } from 'next/app';
import { MusicContextProvider } from '../contexts/MusicContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MusicContextProvider>
      <Component {...pageProps} />
    </MusicContextProvider>
  );
}

export default MyApp;
