import { IDrink } from "../types"

// TODO: Get supplex image
const drinks: IDrink[] = [
  { name: 'Bad Touch',      price: 250,	flavour: 'Sour',   type: 'Classy',  adelhyde:0, bronson: 2, pwd: 2, flanergide:2, karmotrine: 4,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-bad-touch'      },
  { name: 'Beer',           price: 200,	flavour: 'Bubbly', type: 'Classic', adelhyde:1, bronson: 2, pwd: 1, flanergide:2, karmotrine: 4,          ice: false, aged: false, blended: false, image: '/img/va11halla/drink-beer'           },
  { name: 'Bleeding Jane',  price: 200,	flavour: 'Spicy',  type: 'Classic', adelhyde:0, bronson: 1, pwd: 3, flanergide:3, karmotrine: 0,          ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-bleeding-jane'  },
  { name: 'Bloom Light',    price: 230,	flavour: 'Spicy',  type: 'Promo',   adelhyde:4, bronson: 0, pwd: 1, flanergide:2, karmotrine: 3,          ice: true,  aged: true,  blended: false, image: '/img/va11halla/drink-brandtini'      },
  { name: 'Blue Fairy',     price: 170,	flavour: 'Sweet',  type: 'Girly',   adelhyde:4, bronson: 0, pwd: 0, flanergide:1, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-blue-fairy'     },
  { name: 'Brandtini',      price: 250,	flavour: 'Sweet',  type: 'Classy',  adelhyde:6, bronson: 0, pwd: 3, flanergide:0, karmotrine: 1,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-brandtini'      },
  { name: 'Cobalt Velvet',  price: 280,	flavour: 'Bubbly', type: 'Classy',  adelhyde:2, bronson: 0, pwd: 0, flanergide:3, karmotrine: 5,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-cobalt-velvet'  },
  { name: 'Crevice Spike',  price: 140,	flavour: 'Sour',   type: 'Manly',   adelhyde:0, bronson: 0, pwd: 2, flanergide:4, karmotrine: 'optional', ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-crevice-spike'  },
  { name: 'Flaming Moai',   price: 150,	flavour: 'Sour',   type: 'Classy',  adelhyde:1, bronson: 1, pwd: 2, flanergide:3, karmotrine: 5,          ice: false, aged: false, blended: false, image: '/img/va11halla/drink-flaming-moai'   },
  { name: 'Fluffy Dream',   price: 170,	flavour: 'Sour',   type: 'Girly',   adelhyde:3, bronson: 0, pwd: 3, flanergide:0, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-fluffy-dream'   },
  { name: 'Fringe Weaver',  price: 260,	flavour: 'Bubbly', type: 'Classy',  adelhyde:1, bronson: 0, pwd: 0, flanergide:0, karmotrine: 9,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-fringe-weaver'  },
  { name: 'Frothy Water',   price: 150,	flavour: 'Bubbly', type: 'Classic', adelhyde:1, bronson: 1, pwd: 1, flanergide:1, karmotrine: 0,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-beer'           },
  { name: 'Grizzly Temple', price: 220,	flavour: 'Bitter', type: 'Promo',   adelhyde:3, bronson: 3, pwd: 3, flanergide:0, karmotrine: 1,          ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-grizzly-temple' },
  { name: 'Gut Punch',      price: 80,  flavour: 'Bitter', type: 'Manly',   adelhyde:0, bronson: 5, pwd: 0, flanergide:1, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-gut-punch'      },
  { name: 'Marsblast',      price: 170,	flavour: 'Spicy',  type: 'Manly',   adelhyde:0, bronson: 6, pwd: 1, flanergide:4, karmotrine: 2,          ice: false, aged: false, blended: true,  image: '/img/va11halla/drink-marsblast'      },
  { name: 'Mercuryblast',   price: 250,	flavour: 'Sour',   type: 'Classy',  adelhyde:1, bronson: 1, pwd: 3, flanergide:3, karmotrine: 2,          ice: true,  aged: false, blended: true,  image: '/img/va11halla/drink-mercuryblast'   },
  { name: 'Moonblast',      price: 180,	flavour: 'Sweet',  type: 'Girly',   adelhyde:6, bronson: 0, pwd: 1, flanergide:1, karmotrine: 2,          ice: true,  aged: false, blended: true,  image: '/img/va11halla/drink-moonblast'      },
  { name: 'Piano Man',      price: 320,	flavour: 'Sour',   type: 'Promo',   adelhyde:2, bronson: 3, pwd: 5, flanergide:5, karmotrine: 3,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-piano-man'      },
  { name: 'Piano Woman',    price: 320,	flavour: 'Sweet',  type: 'Promo',   adelhyde:5, bronson: 5, pwd: 2, flanergide:3, karmotrine: 3,          ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-piano-woman'    },
  { name: 'Pile Driver',    price: 160,	flavour: 'Bitter', type: 'Manly',   adelhyde:0, bronson: 3, pwd: 0, flanergide:3, karmotrine: 4,          ice: false, aged: false, blended: false, image: '/img/va11halla/drink-pile-driver'    },
  { name: 'Sparkle Star',   price: 150,	flavour: 'Sweet',  type: 'Girly',   adelhyde:2, bronson: 0, pwd: 1, flanergide:0, karmotrine: 'optional', ice: false, aged: true,  blended: false, image: '/img/va11halla/drink-sparkle-star'   },
  { name: 'Sugar Rush',     price: 150,	flavour: 'Sweet',  type: 'Girly',   adelhyde:2, bronson: 0, pwd: 1, flanergide:0, karmotrine: 'optional', ice: false, aged: false, blended: false, image: '/img/va11halla/drink-sugar-rush'     },
  { name: 'Sunshine Cloud', price: 150,	flavour: 'Bitter', type: 'Girly',   adelhyde:2, bronson: 2, pwd: 0, flanergide:0, karmotrine: 'optional', ice: true,  aged: false, blended: true,  image: '/img/va11halla/drink-sunshine-cloud' },
  { name: 'Suplex',         price: 160,	flavour: 'Bitter', type: 'Manly',   adelhyde:0, bronson: 4, pwd: 0, flanergide:3, karmotrine: 3,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-pile-driver'    },
  { name: 'Zen Star',       price: 210,	flavour: 'Sour',   type: 'Promo',   adelhyde:4, bronson: 4, pwd: 4, flanergide:4, karmotrine: 4,          ice: true,  aged: false, blended: false, image: '/img/va11halla/drink-zen-star'       },
]

export default drinks
