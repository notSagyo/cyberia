export const isPlaylist = (url?: any) => {
  let result = false;
  if (typeof url === 'string') result = url.toLowerCase().includes('list');
  else if (Array.isArray(url)) result = true;
  return result;
};

/**
 * @param duration in seconds
 * @param played from 0 to 1
 * @param remaining get remaining time instead
 * @returns (-)(h:)mm:ss (optional)
 */
export const getPlayedString = (
  duration: number,
  played: number,
  remaining = false
) => {
  const time = remaining ? duration - duration * played : duration * played;
  const ss = ~~(time % 60);
  const mm = ~~(time / 60) % 60;
  const hh = ~~(time / 3600);
  return (
    (remaining ? '-' : '') +
    (hh > 0 ? hh + ':' : '') +
    `${padTime(mm)}:${padTime(ss)}`
  );
};

const padTime = (time: string | number) => {
  return String(time).padStart(2, '0');
};
