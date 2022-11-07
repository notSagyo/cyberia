import { animeProvider, AnimeProvidersNames } from "/services/consumet-service";

interface IAnime {
  id: string;
  title?: string;
}

const animesMap =
  new Map<string, Partial<Record<AnimeProvidersNames, string>>>([
    ['Serial Experiments Lain', {
      gogoanime: 'serial-experiments-lain',
      zoro: 'serial-experiments-lain-503',
    }],
    ['Code Geass Lelouch Of The Rebellion', {
      gogoanime: 'code-geass-lelouch-of-the-rebellion',
      zoro: 'code-geass-lelouch-of-the-rebellion-41',
    }],
    ['Code Geass Lelouch Of The Rebellion R2', {
      gogoanime: '-code-geass-lelouch-of-the-rebellion-r2',
      zoro: 'code-geass-lelouch-of-the-rebellion-r2-17',
    }],
    ['Cowboy Bebop', {
      gogoanime: 'cowboy-bebop',
      zoro: 'cowboy-bebop-27',
    }],
    ['Ghost In The Shell', {
      gogoanime: 'ghost-in-the-shell',
      zoro: 'ghost-in-the-shell-220',
    }],
    ['Ergo Proxy', {
      gogoanime: 'ergo-proxy',
      zoro: 'ergo-proxy-626',
    }],
    ['Neon Genesis Evangelion', {
      gogoanime: 'neon-genesis-evangelion-',
      zoro: 'neon-genesis-evangelion-209',
    }],
    ['Evangelion The End Of Evangelion', {
      gogoanime: 'evangelion-the-end-of-evangelion',
      zoro: 'neon-genesis-evangelion-movie-the-end-of-evangelion-93',
    }],
    ['Perfect Blue', {
      gogoanime: 'perfect-blue',
      zoro: 'perfect-blue-127',
    }],
    ['Psycho Pass', {
      gogoanime: 'psycho-pass',
      zoro: 'psycho-pass-158',
    }],
    ['Psycho Pass 2', {
      gogoanime: 'psycho-pass-2',
      zoro: 'psycho-pass-2-1774',
    }],
    ['Psycho Pass 3', {
      gogoanime: 'psycho-pass-3',
      zoro: 'psycho-pass-3-1360',
    }],
    ['Steins;Gate', {
      gogoanime: 'steinsgate',
      zoro: 'steinsgate-3',
    }],
    ['Steins;Gate 0', {
      gogoanime: 'steinsgate-0',
      zoro: 'steinsgate-0-92',
    }],
    ['Akira', {
      gogoanime: 'akira',
      zoro: 'akira-337',
    }],
    ['Blame', {
      gogoanime: 'blame',
      zoro: 'blame-movie-2863',
    }],
    ['Claymore', {
      gogoanime: 'claymore',
      zoro: 'claymore-844',
    }],
    ['Devilman Crybaby', {
      gogoanime: 'devilman-crybaby',
      zoro: 'devilman-crybaby-702',
    }],
    ['Sailor Moon', {
      gogoanime: 'sailor-moon-',
      zoro: 'sailor-moon-1067',
    }],
    ['Sailor Moon R', {
      gogoanime: 'sailor-moon-r',
      zoro: 'sailor-moon-r-1057',
    }],
    ['Sailor Moon S', {
      gogoanime: 'sailor-moon-s',
      zoro: 'sailor-moon-s-720',
    }],
    ['Sailor Moon Supers', {
      gogoanime: 'sailor-moon-supers',
      zoro: 'sailor-moon-supers-1308',
    }],
    ['Sailor Moon Sailor Stars', {
      gogoanime: 'bishoujo-senshi-sailor-moon-sailor-stars',
      zoro: 'sailor-moon-sailor-stars-643',
    }],
    ['Sailor moong Crystal Stars', {
      zoro: 'sailor-moon-sailor-stars-643',
    }],
    ['Monster', {
      gogoanime: 'monster',
      zoro: 'monster-37',
    }],
  ])

const getAnimes = (provider: AnimeProvidersNames) => {
  const animes: IAnime[] = [];
  animesMap.forEach((v, k) => {
    v[provider] && animes.push({ title: k, id: v[provider] as string})
  })
  return animes;
}

const animes = {
  gogoanime: getAnimes('gogoanime'),
  zoro: getAnimes('zoro'),
  get default() { return this[animeProvider] || [] },
} satisfies Partial<Record<AnimeProvidersNames, IAnime[]>>

export default animes;
