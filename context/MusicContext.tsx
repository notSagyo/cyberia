import dynamic from 'next/dynamic';
import React, { createContext, useContext, useState } from 'react';
import songs from '/data/songs';
import { ISong } from '/types/song';
import { SetState } from '/types/types';

interface IMusicContext {
  song: ISong;
  setSong: SetState<ISong>;
  enabled: boolean;
  setEnabled: SetState<boolean>;
}

const MusicContext = createContext<Record<string, never> | IMusicContext>({});
export const useMusicContext = () => useContext(MusicContext);

const CustomPlayerMain = dynamic(
  () => import('/components/CustomPlayer/CustomPlayerMain'),
  { ssr: false }
);

export const MusicContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [song, setSong] = useState<ISong>(songs[0]);
  const [enabled, setEnabled] = useState(true);

  return (
    <MusicContext.Provider
      value={{
        song,
        setSong,
        enabled,
        setEnabled,
      }}
    >
      {enabled && <CustomPlayerMain autoplay song={song} />}
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
