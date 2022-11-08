import { IDrink } from '/types/bartender';

// prettier-ignore
const drinks: IDrink[] = [
  { name: 'Bad Touch',      price: 250,	flavour: 'Sour',   type: 'Classy',  adelhyde:0, bronson: 2, delta: 2, flanergide:2, karmotrine: 4,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-bad-touch.png'      },
  { name: 'Beer',           price: 200,	flavour: 'Bubbly', type: 'Classic', adelhyde:1, bronson: 2, delta: 1, flanergide:2, karmotrine: 4,          ice: false, aged: false, blended: false, image: '/img/va11halla/drink-beer.png'           },
  { name: 'Bleeding Jane',  price: 200,	flavour: 'Spicy',  type: 'Classic', adelhyde:0, bronson: 1, delta: 3, flanergide:3, karmotrine: 0,          ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-bleeding-jane.png'  },
  { name: 'Bloom Light',    price: 230,	flavour: 'Spicy',  type: 'Promo',   adelhyde:4, bronson: 0, delta: 1, flanergide:2, karmotrine: 3,          ice: true,  aged: true,  blended: false, image: '/img/va11halla/drink-brandtini.png'      },
  { name: 'Blue Fairy',     price: 170,	flavour: 'Sweet',  type: 'Girly',   adelhyde:4, bronson: 0, delta: 0, flanergide:1, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-blue-fairy.png'     },
  { name: 'Brandtini',      price: 250,	flavour: 'Sweet',  type: 'Classy',  adelhyde:6, bronson: 0, delta: 3, flanergide:0, karmotrine: 1,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-brandtini.png'      },
  { name: 'Cobalt Velvet',  price: 280,	flavour: 'Bubbly', type: 'Classy',  adelhyde:2, bronson: 0, delta: 0, flanergide:3, karmotrine: 5,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-cobalt-velvet.png'  },
  { name: 'Crevice Spike',  price: 140,	flavour: 'Sour',   type: 'Manly',   adelhyde:0, bronson: 0, delta: 2, flanergide:4, karmotrine: 'optional', ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-crevice-spike.png'  },
  { name: 'Flaming Moai',   price: 150,	flavour: 'Sour',   type: 'Classy',  adelhyde:1, bronson: 1, delta: 2, flanergide:3, karmotrine: 5,          ice: false, aged: false, blended: false, image: '/img/va11halla/drink-flaming-moai.png'   },
  { name: 'Fluffy Dream',   price: 170,	flavour: 'Sour',   type: 'Girly',   adelhyde:3, bronson: 0, delta: 3, flanergide:0, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-fluffy-dream.png'   },
  { name: 'Fringe Weaver',  price: 260,	flavour: 'Bubbly', type: 'Classy',  adelhyde:1, bronson: 0, delta: 0, flanergide:0, karmotrine: 9,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-fringe-weaver.png'  },
  { name: 'Frothy Water',   price: 150,	flavour: 'Bubbly', type: 'Classic', adelhyde:1, bronson: 1, delta: 1, flanergide:1, karmotrine: 0,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-beer.png'           },
  { name: 'Grizzly Temple', price: 220,	flavour: 'Bitter', type: 'Promo',   adelhyde:3, bronson: 3, delta: 3, flanergide:0, karmotrine: 1,          ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-grizzly-temple.png' },
  { name: 'Gut Punch',      price: 80,  flavour: 'Bitter', type: 'Manly',   adelhyde:0, bronson: 5, delta: 0, flanergide:1, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-gut-punch.png'      },
  { name: 'Marsblast',      price: 170,	flavour: 'Spicy',  type: 'Manly',   adelhyde:0, bronson: 6, delta: 1, flanergide:4, karmotrine: 2,          ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-marsblast.png'      },
  { name: 'Mercuryblast',   price: 250,	flavour: 'Sour',   type: 'Classy',  adelhyde:1, bronson: 1, delta: 3, flanergide:3, karmotrine: 2,          ice: true,  aged: false, blended: true,  image: '/img/va11halla/drink-mercuryblast.png'   },
  { name: 'Moonblast',      price: 180,	flavour: 'Sweet',  type: 'Girly',   adelhyde:6, bronson: 0, delta: 1, flanergide:1, karmotrine: 2,          ice: true,  aged: false, blended: true,  image: '/img/va11halla/drink-moonblast.png'      },
  { name: 'Piano Man',      price: 320,	flavour: 'Sour',   type: 'Promo',   adelhyde:2, bronson: 3, delta: 5, flanergide:5, karmotrine: 3,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-piano-man.png'      },
  { name: 'Piano Woman',    price: 320,	flavour: 'Sweet',  type: 'Promo',   adelhyde:5, bronson: 5, delta: 2, flanergide:3, karmotrine: 3,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-piano-woman.png'    },
  { name: 'Pile Driver',    price: 160,	flavour: 'Bitter', type: 'Manly',   adelhyde:0, bronson: 3, delta: 0, flanergide:3, karmotrine: 4,          ice: false, aged: false, blended: false, image: '/img/va11halla/drink-pile-driver.png'    },
  { name: 'Sparkle Star',   price: 150,	flavour: 'Sweet',  type: 'Girly',   adelhyde:2, bronson: 0, delta: 1, flanergide:0, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-sparkle-star.png'   },
  { name: 'Sugar Rush',     price: 150,	flavour: 'Sweet',  type: 'Girly',   adelhyde:2, bronson: 0, delta: 1, flanergide:0, karmotrine: 'optional', ice: false, aged: false, blended: false, image: '/img/va11halla/drink-sugar-rush.png'     },
  { name: 'Sunshine Cloud', price: 150,	flavour: 'Bitter', type: 'Girly',   adelhyde:2, bronson: 2, delta: 0, flanergide:0, karmotrine: 'optional', ice: true,  aged: false, blended: true,  image: '/img/va11halla/drink-sunshine-cloud.png' },
  { name: 'Suplex',         price: 160,	flavour: 'Bitter', type: 'Manly',   adelhyde:0, bronson: 4, delta: 0, flanergide:3, karmotrine: 3,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-suplex.png'         },
  { name: 'Zen Star',       price: 210,	flavour: 'Sour',   type: 'Promo',   adelhyde:4, bronson: 4, delta: 4, flanergide:4, karmotrine: 4,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-zen-star.png'       },
]

export default drinks;
