import { colors } from '/utils/colors';

export const birthday = {
  day: 14,
  month: 1,
};

export const quotesAndWeight = {
  'THERE IS NO ESCAPE': 7,
  'ABANDON ALL HOPE': 7,
  'CLOSER TO DEATH': 7,
  'ITS COMING': 10,
  'RUN RUN RUN': 7,
  'FUCK FUCK': 10,
  'NO HEAVEN': 10,
  'FUCK YOU': 4,
  'DEAD END': 5,
  'NO SOUL': 7,
  'BAD END': 5,
  ETERNITY: 7,
  ROTTING: 10,
  DESPAIR: 10,
  DECAY: 10,
  ALONE: 12,
  HELP: 12,
  CRY: 12,
  // my bloody valentine
  'WHEN YOU SLEEP': 5,
  LOVELESS: 10,
  SHALLOW: 5,
  SOON: 10,
};

export const colorsAndWeight = {
  red: 100_000,
  maroon: 100_000,
  firebrick: 50_000,
  crimson: 50_000,
  mediumvioletred: 50_000,
  deeppink: 500,
  white: 350,
  black: 125,
} satisfies Partial<Record<keyof typeof colors, number>>;
