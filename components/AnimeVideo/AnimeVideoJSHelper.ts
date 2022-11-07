import { ISubtitle, IVideo } from '@consumet/extensions/dist/models';
import videojs, { VideoJsPlayerOptions } from 'video.js';

export const animeVideoJSOptions: VideoJsPlayerOptions = {
  autoplay: true,
  controls: true,
  responsive: true,
  fluid: true,
  preload: 'metadata',
  plugins: {
    hotkeys: {
      volumeStep: 0.1,
      seekStep: 5,
      enableModifiersForNumbers: false,
    },
  },
};

export const videosToSources = (
  videos: IVideo[]
): videojs.Tech.SourceObject[] => {
  return videos?.map((video) => ({ src: video.url }));
};

export const subtitlesToTracks = (
  subtitles: ISubtitle[]
): videojs.TextTrackOptions[] => {
  // Zoro provides thumnbails "subtitles", filter that out
  const subtitlesOnly = subtitles.filter(
    (sub) => sub.lang.toLocaleLowerCase() != 'thumbnails'
  );
  const englishLang = ['en', 'eng', 'english'];
  let foundDefault = false;

  return subtitlesOnly.map((sub) => {
    const isDefault =
      !foundDefault && englishLang.includes(sub.lang.toLocaleLowerCase());
    foundDefault = !foundDefault && isDefault;

    return {
      src: sub.url,
      srclang: sub.lang,
      default: isDefault,
    };
  });
};
