import type { AppProps } from 'next/app';
import 'plyr-react/plyr.css';
import { MusicPlyrContextProvider } from '../contexts/MusicPlyrContext';
import '/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MusicPlyrContextProvider>
      <Component {...pageProps} />
    </MusicPlyrContextProvider>
  );
}

export default MyApp;
