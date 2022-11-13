import dynamic from 'next/dynamic';
import React, { createContext, useContext, useState } from 'react';
import songs from '/data/songs';
import { SetState } from '/types';

interface IMusicContext {
  songUrl: string;
  setSongUrl: SetState<string>;
  songTitle: string;
  setSongTitle: SetState<string>;
}

const MusicContext = createContext<Record<string, never> | IMusicContext>({});
export const useMusicContext = () => useContext(MusicContext);

const CustomPlayerMain = dynamic(
  () => import('../components/CustomPlayer/CustomPlayerMain'),
  { ssr: false }
);

export const MusicContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [songUrl, setSongUrl] = useState<string>(songs[0].url);
  const [songTitle, setSongTitle] = useState<string>(songs[0].title);

  return (
    <MusicContext.Provider
      value={{
        songUrl,
        setSongUrl,
        songTitle,
        setSongTitle,
      }}
    >
      <CustomPlayerMain autoplay url={songUrl} title={songTitle} />
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
