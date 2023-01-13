import { compact, concat, keys } from 'lodash';
import albumImagesOmnipresence from './an-omnipresence-in-wired';
import animes from './animes';
import { quotesAndWeight } from './birthday';
import drinks from './drinks';
import albumImagesOfficial from './lain-game-official-guide';
import mangas from './mangas';
import albumImagesOmori1 from './omori-album-images-1';
import albumImagesOmori2 from './omori-album-images-2';
import albumImagesOmori3 from './omori-album-images-3';
import albumImagesOmori4 from './omori-album-images-4';
import { albumImages as albumImagesPsych } from './psych-ward-album-images';
import { fortuneQuotes } from './quotes';
import songs from './songs';
import albumImagesUltimate from './ultimate-fan-guide';
import albumImagesVallhalla from './va11halla-album-images';
import albumImagesVisual from './visual-experiments-album-images';

export const weirdImages = [
  'arrow-blue-left.gif',
  'arrow-blue-right.gif',
  'arrow-tdr.gif',
  'arrow-yellow-left.gif',
  'arrow-yellow-right.gif',
  'bg-flower.gif',
  'bg-moon.webp',
  'bg-nebula.jpg',
  'bg-omori.jpg',
  'bg-space.gif',
  'bg-stars.gif',
  'big-yellow-cat-body.png',
  'big-yellow-cat-eyes.png',
  'cake.gif',
  'cd.gif',
  'chibiusa-cloud.gif',
  'cursor-pointer.png',
  'cursor.png',
  'eternal-banana.webp',
  'empty.png',
  'favicon.ico',
  'favicon.webp',
  'halloween-mansion.png',
  'hello-kitty.gif',
  'hr-blood.gif',
  'hr-blue.gif',
  'hr-fire.gif',
  'hr-sweet.webp',
  'kitty-balloons.gif',
  'kitty-bd.webp',
  'kitty-dance.webp',
  'kuromi.webp',
  'melody-gift.webp',
  'melody-heart.webp',
  'open-24h.gif',
  'pumpkin.gif',
  'sailor-saturn.gif',
  'sigil.gif',
  'tfm.png',
  'tv-static.gif',
  'under-construction-line.gif',
  'under-construction.gif',
  'usagi-cloud.gif',
];

export const weirdTexts: string[] = compact(
  concat(
    albumImagesOmnipresence.map((img) => img.title),
    animes.default.map((anime) => anime.localId),
    keys(quotesAndWeight),
    drinks.map((drink) => drink.name),
    albumImagesOfficial.map((img) => img.title),
    mangas.default.map((manga) => manga.title),
    albumImagesOmori1.map((img) => img.title),
    albumImagesOmori2.map((img) => img.title),
    albumImagesOmori3.map((img) => img.title),
    albumImagesOmori4.map((img) => img.title),
    albumImagesPsych.lebensgefahr.map((img) => img.title),
    fortuneQuotes,
    songs.map((song) => song.title),
    albumImagesUltimate.map((img) => img.title),
    albumImagesVallhalla.map((img) => img.title),
    albumImagesVisual.map((img) => img.title)
  )
);
