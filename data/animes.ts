interface IAnime {
  id: string;
  title?: string;
}

// !TODO: Uncomment before production
export const gogoanimeAnimes: IAnime[] = [
  { id: 'serial-experiments-lain' },
  { id: 'code-geass-lelouch-of-the-rebellion' },
  { id: '-code-geass-lelouch-of-the-rebellion-r2' },
  { id: 'cowboy-bebop' },
  { id: 'ghost-in-the-shell' },
  { id: 'ergo-proxy' },
  { id: 'neon-genesis-evangelion-' },
  { id: 'evangelion-the-end-of-evangelion' },
  { id: 'perfect-blue' },
  { id: 'psycho-pass' },
  { id: 'psycho-pass-2' },
  { id: 'psycho-pass-3' },
  { id: 'steinsgate' },
  { id: 'steinsgate-0' },
  { id: 'akira' },
  { id: 'blame' },
  { id: 'claymore' },
  { id: 'devilman-crybaby' },
  { id: 'sailor-moon-' },
  { id: 'sailor-moon-r' },
  { id: 'sailor-moon-s' },
  { id: 'sailor-moon-supers' },
  { id: 'bishoujo-senshi-sailor-moon-sailor-stars' },
  { id: 'monster' },
];

export const zoroAnimes: IAnime[] = [
  { id: 'serial-experiments-lain-503' },
  { id: 'code-geass-lelouch-of-the-rebellion-41' },
  { id: 'code-geass-lelouch-of-the-rebellion-r2-17' },
  { id: 'cowboy-bebop-27' },
  { id: 'ghost-in-the-shell-220' },
  { id: 'ergo-proxy-626' },
  { id: 'neon-genesis-evangelion-209' },
  { id: 'neon-genesis-evangelion-movie-the-end-of-evangelion-93' },
  { id: 'perfect-blue-127' },
  { id: 'psycho-pass-158' },
  { id: 'psycho-pass-2-1774' },
  { id: 'psycho-pass-3-1360' },
  { id: 'steinsgate-3' },
  { id: 'steinsgate-0-92' },
  { id: 'akira-337' },
  { id: 'blame-movie-2863' },
  { id: 'claymore-844' },
  { id: 'devilman-crybaby-702' },
  { id: 'sailor-moon-1067' },
  { id: 'sailor-moon-r-1057' },
  { id: 'sailor-moon-s-720' },
  { id: 'sailor-moon-supers-1308' },
  { id: 'sailor-moon-sailor-stars-643' },
  { id: 'sailor-moon-crystal-season-i-ii-3635' },
  { id: 'monster-37' },
];

const animes: IAnime[] = gogoanimeAnimes;

export default animes;
