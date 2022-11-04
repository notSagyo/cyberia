import Artplayer from 'artplayer';
import Option from 'artplayer/types/option';
import React, { useEffect, useRef } from 'react';
import { createArtPlayer } from './ArtPlayerHelper';

interface ArtPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  quality?: Option['quality'];
  options?: Option;
  getInstance?(art: Artplayer): void;
}

const ArtPlayer = ({
  url,
  quality,
  options,
  getInstance,
  ...props
}: ArtPlayerProps) => {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!artRef.current) return;
    const art: Artplayer = createArtPlayer(url, artRef.current, {
      ...options,
      quality,
    });
    if (getInstance) getInstance(art);
    return () => art && art.destroy && art.destroy(false);
  }, [getInstance, options, quality, url]);

  return <div ref={artRef} {...props} />;
};

export default ArtPlayer;
