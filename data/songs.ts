import { YtThumbnailQuality as YtThumbnailResolution } from '/types';

interface ISong {
  id: string;
  title: string;
  tag?: string;
  imageUrl?: string;
  res?: YtThumbnailResolution;
}

const songs: ISong[] = [
  // First song is played by default on site visit
  { tag: 'Cyberia', title: 'Cyberia > Mix', id: 'bEHUFRRK9Sk' },
  { tag: 'Cyberia', title: 'Serial Experiments Lain > OST', id: 'bty0bNS7i0g' },
  // GAMES
  { tag: 'Games', title: 'VA-11 HALL-A > Second Round', id: 'H8w_Q57RQJc' },
  {
    tag: 'Games',
    title: 'OMORI > OST',
    id: 'pw-2e3T03Co',
    imageUrl: 'https://i.imgur.com/g6m8wFY.jpg',
  },
  {
    tag: 'Games',
    title: 'Katana ZERO > OST',
    id: 'P196hEuA_Xc',
    imageUrl: 'https://i.imgur.com/mLRe76X.jpg',
  },
  {
    tag: 'Games',
    title: 'Gris > OST',
    id: 'I6rufOlNyYM',
  },
  {
    tag: 'Games',
    title: 'Little Nightmares > OST',
    id: 'zN-n5WmQoLc',
    imageUrl: 'https://i.imgur.com/0ZxPZIs.jpg',
  },
  // ANIME
  {
    tag: 'Anime',
    title: 'SEALTBELTS > COWBOY BEBOP',
    id: '6Hj6hPqKiS4',
    res: 'hqdefault',
  },
  {
    tag: 'Anime',
    title: 'Perfect Blue > OST',
    id: 'KmBG4UV48X8',
    imageUrl: 'https://i.imgur.com/VhQ3qRk.jpg',
  },
  {
    tag: 'Anime',
    title: 'Devilman Crybaby > OST CD1',
    id: '_JFTgoGa2Dk',
  },
  {
    tag: 'Anime',
    title: 'Devilman Crybaby > OST CD2',
    id: 'hKyi5phGbek',
  },
];

export const omoriSong: ISong = {
  title: 'OMORI > Lost At A Sleepover',
  id: 'fmuGHGL70Qc',
};

export default songs;
