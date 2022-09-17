import React, { createContext, useContext, useEffect, useState } from 'react';
import MusicPlyr from '../components/MusicPlyr';

interface IMusicContext {
  videoId: string;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
  videoTitle: string;
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>;
}

const MusicContext = createContext<Record<string, never> | IMusicContext>({});
export const useMusicContext = () => useContext(MusicContext);

export const MusicContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [videoId, setVideoId] = useState<string>('bEHUFRRK9Sk');
  const [videoTitle, setVideoTitle] = useState<string>('Cyberia > Mix');
  const [plyr, setPlyr] = useState<React.ReactNode>();

  useEffect(() => {
    setPlyr(<MusicPlyr videoId={videoId} videoTitle={'TEST'} />);
  }, [videoId, videoTitle]);

  return (
    <MusicContext.Provider
      value={{ videoId, setVideoId, videoTitle, setVideoTitle }}
    >
      {plyr}
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
