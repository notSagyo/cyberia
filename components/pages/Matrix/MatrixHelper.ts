// Reference: https://betterprogramming.pub/how-to-create-the-matrix-text-effect-with-javascript-325c6bb7d96e

const canvasId = 'matrixCanvas';

const tileSize = 20;
const fadeFactor = 0.055;
const delayMs = 50;

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let cleanup: Function = () => null;

let columns: { x: number; stackHeight: number; stackCounter: number }[] = [];
let maxStackHeight = 0;
let green = 255;

const init = () => {
  cleanup();
  initCanvas();
  if (!canvas) return;
  initMatrix();

  // Start loop
  const tick = setInterval(() => draw(), delayMs);
  cleanup = () => clearInterval(tick);
};

const initCanvas = () => {
  canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;

  const rect = (canvas.parentElement as HTMLElement).getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.font = `${tileSize - 2}px monospace`;
};

// Init columns and its data
const initMatrix = () => {
  if (!canvas || !ctx) return;
  maxStackHeight = Math.ceil(canvas.height / tileSize);
  columns = [];
  for (let i = 0; i < canvas.width / tileSize; ++i) {
    let column = {
      x: i * tileSize,
      stackHeight: 10 + Math.random() * maxStackHeight,
      stackCounter: 0,
    };
    columns.push(column);
  }
};

const draw = () => {
  if (!canvas || !ctx) return;

  // Darken old characters
  ctx.fillStyle = `rgba(0, 0, 0, ${fadeFactor})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Characters style
  ctx.fillStyle = `rgb(${255 - green}, ${green}, 0)`;
  green > 0 && green--;

  for (let i = 0; i < columns.length; i++) {
    const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
    ctx.fillText(
      randomChar,
      columns[i].x + 2.5,
      columns[i].stackCounter * tileSize + tileSize
    );

    if (++columns[i].stackCounter >= columns[i].stackHeight) {
      columns[i].stackHeight = 10 + Math.random() * maxStackHeight;
      columns[i].stackCounter = 0;
    }
  }
};

export { canvasId, init, cleanup };
