import { YtThumbnailQuality as YtThumbnailResolution } from '/types';

interface ISong {
  id: string;
  title: string;
  res?: YtThumbnailResolution;
}

const songs: ISong[] = [
  // First song is played by default on site visit
  { id: 'bEHUFRRK9Sk', title: 'Cyberia > Mix' },
  { id: 'H8w_Q57RQJc', title: 'VA-11 HALL-A > Second Round' },
  { id: 'P196hEuA_Xc', title: 'Katana ZERO > OST' },
  { id: 'pw-2e3T03Co', title: 'OMORI > OST' },
  { id: '6Hj6hPqKiS4', title: 'SEALTBELTS > COWBOY BEBOP', res: 'hqdefault' },
];

export const omoriSong: ISong = {
  id: 'fmuGHGL70Qc',
  title: 'OMORI > Lost At A Sleepover',
};

export default songs;
