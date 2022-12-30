import { animeProvider, AnimeProvidersNames } from "/services/consumet-service";

interface IAnime {
  remoteId: string;
  localId: string;
}

const animesMap =
  new Map<string, Partial<Record<AnimeProvidersNames, string>>>([
    ['serial_experiments_lain', {
      gogoanime: 'serial-experiments-lain',
      zoro: 'serial-experiments-lain-503',
    }],
    ['ghost_in_the_shell', {
      gogoanime: 'ghost-in-the-shell',
      zoro: 'ghost-in-the-shell-220',
    }],
    ['ergo_proxy', {
      gogoanime: 'ergo-proxy',
      zoro: 'ergo-proxy-626',
    }],
    ['texhnolyze', {
      gogoanime: 'texhnolyze-',
      zoro: 'texhnolyze-908',
    }],
    ['neon_genesis_evangelion', {
      gogoanime: 'neon-genesis-evangelion-',
      zoro: 'neon-genesis-evangelion-209',
    }],
    ['evangelion_the_end_of_evangelion', {
      gogoanime: 'evangelion-the-end-of-evangelion',
      zoro: 'neon-genesis-evangelion-movie-the-end-of-evangelion-93',
    }],
    ['cowboy_bebop', {
      gogoanime: 'cowboy-bebop',
      zoro: 'cowboy-bebop-27',
    }],
    ['code_geass_lelouch_of_the_rebellion', {
      gogoanime: 'code-geass-lelouch-of-the-rebellion',
      zoro: 'code-geass-lelouch-of-the-rebellion-41',
    }],
    ['code_geass_lelouch_of_the_rebellion_r2', {
      gogoanime: '-code-geass-lelouch-of-the-rebellion-r2',
      zoro: 'code-geass-lelouch-of-the-rebellion-r2-17',
    }],
    ['perfect_blue', {
      gogoanime: 'perfect-blue',
      zoro: 'perfect-blue-127',
    }],
    ['psycho_pass', {
      gogoanime: 'psycho-pass',
      zoro: 'psycho-pass-158',
    }],
    ['psycho_pass_2', {
      gogoanime: 'psycho-pass-2',
      zoro: 'psycho-pass-2-1774',
    }],
    ['psycho_pass_3', {
      gogoanime: 'psycho-pass-3',
      zoro: 'psycho-pass-3-1360',
    }],
    ['steins_gate', {
      gogoanime: 'steinsgate',
      zoro: 'steinsgate-3',
    }],
    ['steins_gate_0', {
      gogoanime: 'steinsgate-0',
      zoro: 'steinsgate-0-92',
    }],
    ['akira', {
      gogoanime: 'akira',
      zoro: 'akira-337',
    }],
    ['blame', {
      gogoanime: 'blame',
      zoro: 'blame-movie-2863',
    }],
    ['claymore', {
      gogoanime: 'claymore',
      zoro: 'claymore-844',
    }],
    ['devilman_crybaby', {
      gogoanime: 'devilman-crybaby',
      zoro: 'devilman-crybaby-702',
    }],
    ['sailor_moon', {
      gogoanime: 'sailor-moon-',
      zoro: 'sailor-moon-1067',
    }],
    ['sailor_moon_r', {
      gogoanime: 'sailor-moon-r',
      zoro: 'sailor-moon-r-1057',
    }],
    ['sailor_moon_s', {
      gogoanime: 'sailor-moon-s',
      zoro: 'sailor-moon-s-720',
    }],
    ['sailor_moon_supers', {
      gogoanime: 'sailor-moon-supers',
      zoro: 'sailor-moon-supers-1308',
    }],
    ['sailor_moon_sailor_stars', {
      gogoanime: 'bishoujo-senshi-sailor-moon-sailor-stars',
      zoro: 'sailor-moon-sailor-stars-643',
    }],
    ['sailor_moong_crystal_stars', {
      zoro: 'sailor-moon-sailor-stars-643',
    }],
    ['monster', {
      gogoanime: 'monster',
      zoro: 'monster-37',
    }],
  ])

const getAnimes = (provider: AnimeProvidersNames) => {
  const animes: IAnime[] = [];
  animesMap.forEach((v, k) => {
    v[provider] && animes.push({ localId: k, remoteId: v[provider] as string})
  })
  return animes;
}

// ?FIXME: this broke dev mode, add again in the future:
//? satisfies Partial<Record<AnimeProvidersNames, IAnime[]>>
const animes = {
  gogoanime: getAnimes('gogoanime'),
  zoro: getAnimes('zoro'),
  get default() { return this[animeProvider] || [] },
};

export default animes;
