import Artplayer from 'artplayer';
import Option from 'artplayer/types/option';
import Hls from 'hls.js';

export const customTypeM3u8 = (
  video: HTMLVideoElement,
  url: string,
  art: Artplayer
) => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl'))
    video.src = url;
  else art && (art.notice.show = 'Does not support playback of m3u8');
};

export const createArtPlayer = (
  url: string,
  container: string | HTMLDivElement,
  options?: { seekTime?: number } & Partial<Option>
) => {
  const seekTime = options?.seekTime || 5;
  const art: Artplayer = new Artplayer({
    fullscreen: true,
    icons: { state: '' },
    customType: { m3u8: customTypeM3u8 },
    screenshot: true,
    controls: [
      {
        position: 'right',
        html: '<img src="/img/player-rewind.svg"/>',
        tooltip: `Rewind ${seekTime}s`,
        click: () => (art.seek = art.currentTime - seekTime),
      },
      {
        position: 'right',
        html: '<img src="/img/player-forward.svg"/>',
        tooltip: `Forward ${seekTime}s`,
        click: () => (art.seek = art.currentTime + seekTime),
      },
    ],
    ...options,
    url,
    container,
  });

  return art;
};

export const updateSubtitleStyles = (art: Artplayer) => {
  art.subtitle.style({
    marginBottom: '2.5%',
    fontSize: `${16 + art.height * 0.025}px`,
  });
};
