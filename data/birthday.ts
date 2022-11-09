import { colors } from '/utils/colors';

export const quotesAndWeight = {
  'THERE IS NO ESCAPE': 5,
  'ABANDON ALL HOPE': 5,
  'CLOSER TO DEATH': 5,
  'ITS COMING': 10,
  'RUN RUN RUN': 7,
  'FUCK FUCK': 10,
  'NO HEAVEN': 10,
  'FUCK YOU': 4,
  ETERNITY: 10,
  ROTTING: 10,
  DESPAIR: 10,
  DECAY: 10,
  ALONE: 10,
  HELP: 10,
  CRY: 10,
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

export default quotesAndWeight;
