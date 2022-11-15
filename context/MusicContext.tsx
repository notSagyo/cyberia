import dynamic from 'next/dynamic';
import React, { createContext, useContext, useState } from 'react';
import { loadSongFromStorage } from '/components/CustomPlayer/CustomPlayerHelper';
import songs from '/data/songs';
import { ISong } from '/types/song';
import { SetState } from '/types/types';

interface IMusicContext {
  song: ISong;
  setSong: SetState<ISong>;
  enabled: boolean;
  setEnabled: SetState<boolean>;
  /** @WARN Try to manually force play/pause and may not trigger side effects */
  setPlaying: SetState<boolean | undefined>;
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
  const [song, setSong] = useState(loadSongFromStorage() || songs[0]);
  const [enabled, setEnabled] = useState(true);
  const [playing, setPlaying] = useState<boolean | undefined>();

  return (
    <MusicContext.Provider
      value={{
        song,
        setSong,
        enabled,
        setEnabled,
        setPlaying,
      }}
    >
      {enabled && <CustomPlayerMain song={song} playing={playing} />}
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
