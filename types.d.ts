export interface IAlbumImage {
  src: string;
  title?: string;
  description?: string;
}

// Bartender
export type zeroToTen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type IngredientNames =
  | 'adelhyde'
  | 'bronson'
  | 'pwd'
  | 'flanergide'
  | 'karmotrine';

export interface IDrink {
  name: string;
  price: number;
  flavour: string;
  type: string;

  adelhyde: zeroToTen;
  bronson: zeroToTen;
  pwd: zeroToTen;
  flanergide: zeroToTen;
  karmotrine: zeroToTen | 'optional';

  ice: boolean;
  aged: boolean;
  blended: boolean;

  image: string;
}
