import _ from 'lodash';
import { colorsAndWeight, quotesAndWeight } from '/data/birthday';
import { colors } from '/utils/colors';
import { getWeightedRandomPicker } from '/utils/utils';

// VARS ======================================================================//
// Math.PI / 180
const DEGREE = 0.017453292519943295;

export let quotesAmount = 375;
export let updateFrequency = 1000;
export let cleanup: Function = () => null;

const pickRandomQuote = getWeightedRandomPicker(quotesAndWeight);
const pickRandomColor = getWeightedRandomPicker(colorsAndWeight);

// FUNCTIONS =================================================================//
// Start the birthday canvas drawing loop
export const initBday = async (canvas: HTMLCanvasElement) => {
  await document.fonts.ready;
  initCanvas(canvas);
  const ctx = initContext(canvas);
  if (!ctx) return;

  // Start the loop
  const interval = setInterval(() => draw(canvas, ctx), updateFrequency);
  cleanup = () => clearInterval(interval);
};

// Init canvas size and remove previous intervals
const initCanvas = (canvas: HTMLCanvasElement) => {
  const rect = (canvas.parentElement as HTMLElement).getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  cleanup();
};

const initContext = (canvas: HTMLCanvasElement) => {
  // Get Context
  const ctx = canvas.getContext('2d');
  if (!ctx) return ctx;
  ctx.font = `${canvas.width * 0.035}px w95fa`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'white';
  return ctx;
};

// Draw quotes
const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  // Update canvas if dimensions changed since last draw
  const rect = (canvas.parentElement as HTMLElement).getBoundingClientRect();
  if (canvas.width !== ~~rect.width || canvas.height !== ~~rect.height) {
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.font = `${canvas.width * 0.035}px w95fa`;
  }

  for (let i = 0; i < quotesAmount; i++) {
    // Save context and change its transform
    ctx.save();
    ctx.translate(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.rotate(DEGREE * _.random(-75, 75));

    // Random HEX color from list + random alpha
    ctx.fillStyle =
      colors[pickRandomColor()] +
      _.random(0, 255).toString(16).padStart(2, '0');

    // Draw and restore saved context
    ctx.fillText(pickRandomQuote(), 0, 0);
    ctx.restore();
  }
};
