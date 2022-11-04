import { ISubtitle } from '@consumet/extensions/dist/models';
import Artplayer from 'artplayer';
import Option from 'artplayer/types/option';
import React, { useEffect, useRef } from 'react';
import { createArtPlayer, updateSubtitleStyles } from './ArtPlayerHelper';

interface ArtPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  quality?: Option['quality'];
  subtitles?: ISubtitle[];
  options?: Option;
  getInstance?(art: Artplayer): void;
}

const ArtPlayer = ({
  url,
  quality,
  subtitles,
  options,
  getInstance,
  ...props
}: ArtPlayerProps) => {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!artRef.current) return;
    const art: Artplayer = createArtPlayer(url, artRef.current, {
      ...options,
      ...(quality && { quality }),
      ...(subtitles && { subtitle: subtitles?.[0] }),
    });
    if (getInstance) getInstance(art);
    art.on('resize', () => updateSubtitleStyles(art));
    art.on('ready', () => updateSubtitleStyles(art));
    return () => art && art.destroy && art.destroy(false);
  }, [getInstance, options, quality, subtitles, url]);

  return <div ref={artRef} {...props} />;
};

export default ArtPlayer;
