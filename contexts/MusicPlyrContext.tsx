import React, { createContext, useContext, useEffect, useState } from 'react';
import MusicPlyrMain from '../components/MusicPlyr/MusicPlyrMain';

interface IMusicPlyrContext {
  videoId: string;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
  videoTitle: string;
  setVideoTitle: React.Dispatch<React.SetStateAction<string>>;
  plyr: React.ReactNode;
  setPlyr: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const MusicPlyrContext = createContext<
  Record<string, never> | IMusicPlyrContext
>({});
export const useMusicPlyrContext = () => useContext(MusicPlyrContext);

export const MusicPlyrContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [videoId, setVideoId] = useState<string>('bEHUFRRK9Sk');
  const [videoTitle, setVideoTitle] = useState<string>('Cyberia > Mix');
  const [plyr, setPlyr] = useState<React.ReactNode>();

  useEffect(() => {
    setPlyr(<MusicPlyrMain videoId={videoId} videoTitle={videoTitle} />);
  }, [videoId, videoTitle]);

  return (
    <MusicPlyrContext.Provider
      value={{ videoId, setVideoId, videoTitle, setVideoTitle, plyr, setPlyr }}
    >
      {plyr}
      {children}
    </MusicPlyrContext.Provider>
  );
};

export default MusicPlyrContext;
