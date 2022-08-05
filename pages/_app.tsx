import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="appWrapper">
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;
