import { APITypes } from 'plyr-react';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import MusicPlyrMain from '/components/MusicPlyr/MusicPlyrMain';
import songs from '/data/songs';
import { SetState } from '/types';

interface IMusicPlyrContext {
  videoId: string;
  setVideoId: SetState<string>;
  videoTitle: string;
  setVideoTitle: SetState<string>;
  plyrElem: React.ReactNode;
  setPlyrElem: SetState<React.ReactNode>;
  plyr: Plyr | null;
}

const MusicPlyrContext = createContext<
  Record<string, never> | IMusicPlyrContext
>({});
export const useMusicPlyrContext = () => useContext(MusicPlyrContext);

export const MusicPlyrContextProvider = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  const [videoId, setVideoId] = useState<string>(songs[0].id);
  const [videoTitle, setVideoTitle] = useState<string>(songs[0].title);
  const [plyrElem, setPlyrElem] = useState<React.ReactNode>();
  const plyrRef = useRef<APITypes>(null);
  const plyr = plyrRef.current && plyrRef.current.plyr;

  useEffect(() => {
    setPlyrElem(
      <MusicPlyrMain ref={plyrRef} videoId={videoId} videoTitle={videoTitle} />
    );
  }, [videoId, videoTitle]);

  return (
    <MusicPlyrContext.Provider
      value={{
        videoId,
        setVideoId,
        videoTitle,
        setVideoTitle,
        plyrElem,
        setPlyrElem,
        plyr,
      }}
    >
      {plyrElem}
      {children}
    </MusicPlyrContext.Provider>
  );
};

export default MusicPlyrContext;
