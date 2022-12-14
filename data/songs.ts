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
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqauRSQuYBSyX3l873F0Xi0',
    imageUrl: 'https://i.imgur.com/CSiiISv.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'Hotline Miami > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOoecKfSCKp1B0GsQJvxvxXo',
    imageUrl: 'https://i.imgur.com/pfFKjqk.jpg',
    source: 'youtube',
  },
  {
    tag: 'Games',
    title: 'Hotline Miami 2: Wrong Number > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrW4dALJfuyYlXYSkMbSnhF',
    imageUrl: 'https://i.imgur.com/jxhbeVF.jpg',
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
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqkKjgg07vzT4HSo5zf73v7',
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
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrwQnGLE9UHy7JPsv093h9l',
    imageUrl: 'https://i.imgur.com/AGkU6bG.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Neon Genesis Evangelion > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOosNCUjRAt7bgt2hmbxQ16T',
    imageUrl: 'https://i.imgur.com/OJYWNO3.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Claymore > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrtIyG2dW9OYSKVer-WQUEd',
    imageUrl: 'https://i.imgur.com/i2aeM8H.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Samurai Champloo > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrfr6hlGGjaE98hO3BSWVud',
    imageUrl: 'https://i.imgur.com/iNU6tkw.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'DEATH NOTE > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOoJoifIqJzvO2PKXtBMjvw3',
    imageUrl: 'https://i.imgur.com/8ZnR22V.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'DEATH NOTE > OST II',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOo35qtU15vNkcxtyERZaB7C',
    imageUrl: 'https://i.imgur.com/a4NXqBx.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'DEATH NOTE > OST III',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqVzzMq9PhibQ8yAraVZe-R',
    imageUrl: 'https://i.imgur.com/ksG2bVe.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Devilman Crybaby > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOo7cvT_428m-d_W2oryuUyu',
    imageUrl: 'https://i.imgur.com/olATfNr.jpg',
    source: 'youtube',
  },
  {
    tag: 'Anime',
    title: 'Kimi no Na wa > OST',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqr-EVaHQ9cWmcGUMBzz5Hr',
    imageUrl: 'https://i.imgur.com/B8eV12X.jpg',
    source: 'youtube',
  },
  // ALBUMS
  // !TODO: Paramore
  {
    tag: 'Albums',
    title: 'Slowdive > Souvlaki',
    url: 'https://youtube.com/playlist?list=OLAK5uy_kL4-koXbPqeBxIGNoPO5d60Lb0o5cuUAA',
    imageUrl: 'https://i.imgur.com/k5i4BFL.jpg',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'My Bloody Valentine > Loveless',
    url: 'https://youtube.com/playlist?list=OLAK5uy_mdVxWs91qMNd9e-hT2bYOiLNBG7iAIv1g',
    imageUrl: 'https://i.imgur.com/yO0qckT.jpg',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'Grimes > Visions',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqDhfR6yIZIC8wMe8NXvFLI',
    imageUrl: 'https://i.imgur.com/vctauMs.jpg',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'My Chemical Romance > Three Cheers For Sweet Revenge',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOoUoPhJ7v7ewY3ql6pcYM0s',
    imageUrl: 'https://i.imgur.com/Q96OYZD.jpg',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'Paramore > All We Know Is Falling',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOoDyCvlhoN3IFv4RCbg0l5Q',
    imageUrl: 'https://i.imgur.com/w7bHdHr.jpg',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'Deftones > Around the Fur',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrLious_jljOsG-cpiZOsqC',
    imageUrl: 'https://i.imgur.com/EymxFtW.jpg',
    source: 'youtube',
  },
  {
    tag: 'Albums',
    title: 'Teen Suicide > dc snuff fim / waste yrself',
    url: 'https://youtube.com/playlist?list=PLxwHtUHlFZ5HZxZtA9EWkAOrA8DFz1Qbx',
    imageUrl: 'https://i.imgur.com/6OngxQw.jpg',
    source: 'youtube',
  },
  // DANNIE
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > falling in love again',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrxzkfZfAjiQC0WPHbA5jxv',
    imageUrl: 'https://i.imgur.com/SfG9gNE.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > Goethica',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqvZ1mXiHHrgjT0BgLwGLpn',
    imageUrl: 'https://i.imgur.com/SlhhYes.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > Me atrapé',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOo2bd4y5gkMRzDZzyQwZWmu',
    imageUrl: 'https://i.imgur.com/PW872nQ.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > riot grrrls!',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrcvqTo3ZbEOwolfcHAZp94',
    imageUrl: 'https://i.imgur.com/KY404qL.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > 日本 🎏',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOrEHRujmFjEnFOgGGjKsOry',
    imageUrl: 'https://i.imgur.com/0w1JvNA.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > goofy',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqtcHvfEeXTK26-4XvW1-MM',
    imageUrl: 'https://i.imgur.com/eWoffuu.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: "Various Artists > Let's groove~",
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqMqwGDRKV9WvrvYPMm7zWR',
    imageUrl: 'https://i.imgur.com/i9OKJh0.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > Emo in 20XX',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOoXUnhpPhUXMNO4aO5bHLQs',
    imageUrl: 'https://i.imgur.com/ryOH3DN.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > always suffering',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOqKfPrJqIQhUN8W7OmYtiOl',
    imageUrl: 'https://i.imgur.com/D0PP2Q3.jpg',
    source: 'youtube',
  },
  {
    tag: 'DA-N N1-E',
    title: 'Various Artists > kill me asap',
    url: 'https://youtube.com/playlist?list=PLjuzMNNpQyOpir5KEDW1MmYUDh264kmtH',
    imageUrl: 'https://i.imgur.com/jsGUwNS.jpg',
    source: 'youtube',
  },
];

export const omoriSong: ISong = {
  title: 'OMORI > Lost At A Sleepover',
  url: 'https://youtu.be/fmuGHGL70Qc',
  source: 'youtube',
};

export const psychWardSong: ISong = {
  title: 'End Credits',
  url: 'https://youtu.be/KXMtcsoLb8g',
  source: 'youtube',
};

export default songs;
