import { IVideo } from '@consumet/extensions/dist/models';
import _ from 'lodash';
import { HTMLAttributes, useRef } from 'react';
import { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import 'videojs-hotkeys';
import AnimeVideo, { AnimeVideoProps } from './AnimeVideo';
import { animeVideoJSOptions } from './AnimeVideoJSHelper';
import VideoJS from '/components/VideoJS/VideoJS';

interface AnimeVideoJSProps extends HTMLAttributes<HTMLDivElement> {
  url: string;
  sources?: IVideo[];
  options?: VideoJsPlayerOptions;
  videoTitle?: string;
  shellProps?: AnimeVideoProps;
}

const AnimeVideoJS = ({
  url,
  sources,
  options,
  videoTitle,
  shellProps,
  ...props
}: AnimeVideoJSProps) => {
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const currentTime = useRef(0);

  const videoJsOptions: VideoJsPlayerOptions = {
    ...animeVideoJSOptions,
    ...options,
    sources: sources?.map((src) => ({ src: src.url })),
  };

  const changeSource = (url: string) => {
    if (!playerRef.current) return;
    playerRef.current.src({ src: url });
    playerRef.current.currentTime(currentTime.current);
  };

  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;
    player.on(
      'timeupdate',
      _.throttle(() => {
        try {
          return (currentTime.current = player.currentTime());
        } catch (e) {}
      }, 1000)
    );
  };

  const qualityButtons =
    sources &&
    sources.map((src) => (
      <button key={src.url} onClick={() => changeSource(src.url)}>
        {src.quality}
      </button>
    ));

  return (
    <div {...props}>
      <AnimeVideo {...shellProps} videoTitle={videoTitle}>
        {url && (
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        )}
      </AnimeVideo>
      {qualityButtons}
    </div>
  );
};

export default AnimeVideoJS;
