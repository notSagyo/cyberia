import { ISong } from '/types/song';

export const MAIN_SONG_START_TIME = 792.7;

const songs: ISong[] = [
  // First song is played by default on site visit
  {
    tag: 'Cyberia',
    title: 'Cyberia > Mix',
    url: 'https://youtu.be/bEHUFRRK9Sk',
    source: 'youtube',
  },
  {
    tag: 'Cyberia',
    title: 'Serial Experiments Lain > OST',
    url: 'https://youtu.be/bty0bNS7i0g',
    source: 'youtube',
  },
  // GAMES
  {
    tag: 'Games',
    title: 'VA-11 HALL-A > Second Round',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOo1KU4f3JFQ6sGsJ02oF9S8',
    imageUrl: 'https://i.imgur.com/RIcAyf4.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'VA-11 HALL-A > Sounds from the Future',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqFZ75hYMv9iGWSTNnEe6Xa',
    imageUrl: 'https://i.imgur.com/sQiAdL0.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'VA-11 HALL-A > Bonus Tracks Collection',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOpG93QeJIjW3OeieDQyaLXj',
    imageUrl: 'https://i.imgur.com/meuQ38r.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'OMORI > OST',
    url: 'https://youtu.be/pw-2e3T03Co',
    imageUrl: 'https://i.imgur.com/g6m8wFY.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'Katana ZERO > OST',
    url: 'https://youtu.be/P196hEuA_Xc',
    imageUrl: 'https://i.imgur.com/mLRe76X.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'Gris > OST',
    url: 'https://youtu.be/I6rufOlNyYM',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'Little Nightmares > OST',
    url: 'https://youtu.be/zN-n5WmQoLc',
    imageUrl: 'https://i.imgur.com/0ZxPZIs.jpg',
    source: 'youtube',
  },
  // ANIME
  {
    tag: 'Anime',
    title: 'COWBOY BEBOP > OST',
    url: 'https://www.youtube.com/playlist?list=PLjuzMNNpQyOqkKjgg07vzT4HSo5zf73v7',
    imageUrl: 'https://i.imgur.com/E8RsB0y.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Perfect Blue > OST',
    url: 'https://youtu.be/KmBG4UV48X8',
    imageUrl: 'https://i.imgur.com/VhQ3qRk.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Madoka Magica > OST',
    url: 'https://www.youtube.com/watch?v=bzlHPlq8hIs&list=PLjuzMNNpQyOrwQnGLE9UHy7JPsv093h9l',
    imageUrl: 'https://i.imgur.com/AGkU6bG.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Devilman Crybaby > OST CD1',
    url: 'https://youtu.be/_JFTgoGa2Dk',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Devilman Crybaby > OST CD2',
    url: 'https://youtu.be/hKyi5phGbek',
    source: 'youtube',
  },
  // ALBUMS
  {
    tag: 'Albums',
    title: 'Slowdive > Souvlaki',
    imageUrl: 'https://i.imgur.com/k5i4BFL.jpg',
    url: 'https://www.youtube.com/playlist?list=OLAK5uy_kL4-koXbPqeBxIGNoPO5d60Lb0o5cuUAA',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'My Bloody Valentine > Loveless',
    imageUrl: 'https://i.imgur.com/yO0qckT.jpg',
    url: 'https://youtube.com/playlist?list=OLAK5uy_mdVxWs91qMNd9e-hT2bYOiLNBG7iAIv1g',
    source: 'youtube',
  },
];

export const omoriSong: ISong = {
  title: 'OMORI > Lost At A Sleepover',
  url: 'https://youtu.be/fmuGHGL70Qc',
  source: 'youtube',
};

export default songs;
