import dynamic from 'next/dynamic';
import React, { createContext, useContext, useState } from 'react';
import songs from '/data/songs';
import { SetState } from '/types';

interface IMusicContext {
  videoId: string;
  setVideoId: SetState<string>;
  videoTitle: string;
  setVideoTitle: SetState<string>;
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
  const [videoId, setVideoId] = useState<string>(songs[0].id);
  const [videoTitle, setVideoTitle] = useState<string>(songs[0].title);

  return (
    <MusicContext.Provider
      value={{
        videoId,
        setVideoId,
        videoTitle,
        setVideoTitle,
      }}
    >
      <CustomPlayerMain
        autoplay
        url={`https://www.youtube.com/watch?v=${videoId}`}
        title={videoTitle}
      />
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
