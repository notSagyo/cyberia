import { VideoJsPlayerOptions } from 'video.js';

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
