import 'plyr-react/plyr.css';
import '/styles/globals.scss';
import type { AppProps } from 'next/app';
import { MusicPlyrContextProvider } from '../contexts/MusicPlyrContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MusicPlyrContextProvider>
      <Component {...pageProps} />
    </MusicPlyrContextProvider>
  );
}

export default MyApp;
