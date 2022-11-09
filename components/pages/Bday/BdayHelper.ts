import _ from 'lodash';
import { colorsAndWeight, quotesAndWeight } from '/data/birthday';
import { colors } from '/utils/colors';
import { getWeightedRandomPicker } from '/utils/utils';

// Math.PI / 180
const DEGREE = 0.017453292519943295;

export let quotesAmount = 375;
export let updateFrequency = 1000;
export let cleanup: Function = () => null;

const pickRandomQuote = getWeightedRandomPicker(quotesAndWeight);
const pickRandomColor = getWeightedRandomPicker(colorsAndWeight);

export const initBday = async (canvas: HTMLCanvasElement) => {
  await document.fonts.ready;
  const ctx = initContext(canvas);
  if (!ctx) return;

  const interval = setInterval(() => draw(canvas, ctx), updateFrequency);
  cleanup = () => clearInterval(interval);
};

const initContext = (canvas: HTMLCanvasElement) => {
  cleanup();
  const ctx = canvas.getContext('2d', { alpha: false });
  const parent = canvas.parentElement as HTMLElement;
  canvas.width = parent.getBoundingClientRect().width;
  canvas.height = parent.getBoundingClientRect().height;
  if (!ctx) return ctx;

  ctx.font = `${canvas.width * 0.035}px w95fa`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'white';
  return ctx;
};

// Draw quotes
const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const rect = (canvas.parentElement as HTMLElement).getBoundingClientRect();
  if (canvas.width !== ~~rect.width || canvas.height !== ~~rect.height) {
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx = canvas.getContext('2d', { alpha: false }) as CanvasRenderingContext2D;
    ctx.font = `${canvas.width * 0.035}px w95fa`;
  }

  for (let i = 0; i < quotesAmount; i++) {
    ctx.save();
    ctx.translate(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.rotate(DEGREE * _.random(-75, 75));
    ctx.fillStyle = `${
      colors[pickRandomColor() as keyof typeof colors] +
      _.random(0, 255).toString(16).padStart(2, '0')
    }`;

    // !XXX: debug log
    console.log(pickRandomColor());

    ctx.fillText(pickRandomQuote(), 0, 0);
    ctx.restore();
  }
};
