import React, { Dispatch, SetStateAction } from 'react';
import { IMix } from '.';
import drinks from '../../data/drinks';
import { IngredientNames } from '../../types';
import styles from '/styles/bartender.module.scss';

// VARIABLES =================================================================//
const ingredientNames: IngredientNames[] = [
  'adelhyde',
  'bronson',
  'delta',
  'flanergide',
  'karmotrine',
];

let isMixing = false;
let mixingTimeout: NodeJS.Timeout;

// FUNCTIONS =================================================================//
function findDrink(mix: IMix) {
  return drinks.find(
    (drink) =>
      drink.ice == mix.ice &&
      drink.aged == mix.aged &&
      drink.blended == mix.blended &&
      drink.adelhyde == mix.adelhyde &&
      drink.bronson == mix.bronson &&
      drink.delta == mix.delta &&
      drink.flanergide == mix.flanergide &&
      (drink.karmotrine === 'optional'
        ? true
        : drink.karmotrine == mix.karmotrine)
  );
}

// Prepare mix =======================//
function mix(mix: IMix, setBlended: Dispatch<SetStateAction<boolean>>) {
  const mixer = document.querySelector('#mixer');
  if (!mixer) throw new Error('Element with ID "mixer" not found');

  clearTimeout(mixingTimeout);
  isMixing = !isMixing;

  // If mix: In 5 seconds if still mixing set blended state and styles
  // If stop: remove mixing styles and update result
  if (isMixing) {
    mixer.classList.add(styles.shake);
    mixingTimeout = setTimeout(() => {
      if (!isMixing) return;
      mixer.classList.add(styles.blend);
      setBlended(true);
    }, 5000);
  } else {
    const foundDrink = findDrink(mix);
    const drinkFileName =
      foundDrink?.name &&
      foundDrink.name.toLowerCase().replaceAll(' ', '-') + '.png';
    setResultName(foundDrink?.name || '##20%!!');
    setResultSprite(`/img/va11halla/drink-${drinkFileName || 'glitch.png'}`);
    toggleHidden('serveButton', false);
    toggleHidden('drinkResult', false);
    toggleHidden('mixer', true);
    resetMixerIndicators();
    mixer.classList.remove(styles.shake, styles.blend);
  }
}

function resetMix(
  setMix: Dispatch<SetStateAction<IMix>>,
  setBlended: Dispatch<SetStateAction<boolean>>
) {
  toggleHidden('drinkResult', true);
  toggleHidden('serveButton', true);
  resetAllIndicators();
  resetMixerSprite();
  setBlended(false);
  setResultName('');
  setMix((prev) => ({
    ...{ adelhyde: 0, bronson: 0, delta: 0, flanergide: 0, karmotrine: 0 },
    ice: prev.ice,
    aged: prev.aged,
    blended: false,
  }));
}

function serveMix(
  mix: IMix,
  setMix: Dispatch<SetStateAction<IMix>>,
  setBlended: Dispatch<SetStateAction<boolean>>
) {
  const foundDrink = findDrink(mix);
  // !XXX:
  console.log('Served:', foundDrink);
  toggleHidden('serveButton', true);
  toggleHidden('drinkResult', true);
  toggleHidden('mixer', false);
  resetMix(setMix, setBlended);
}

// Event handlers ====================//
function onDragIngredient(ev: React.DragEvent) {
  if (!ev.dataTransfer || !(ev.target instanceof HTMLElement)) return;
  ev.dataTransfer.setData('text', ev.target.id);
  ev.target.style.cursor = 'move !important';
}

function onDragOverMixer(ev: React.DragEvent) {
  if (!(ev.target instanceof HTMLImageElement) || isMixing) return;
  ev.preventDefault();
  ev.target.src = '/img/va11halla/mixer-open.png';
  ev.target.style.height = '33.6956%';
}

function onDragLeaveMixer(ev: React.DragEvent) {
  if (!(ev.target instanceof HTMLElement) || isMixing) return;
  ev.preventDefault();
  resetMixerSprite();
}

function onDropMixer(
  ev: React.DragEvent,
  setMix: Dispatch<SetStateAction<IMix>>
) {
  if (!(ev.target instanceof HTMLElement) || isMixing) return;
  ev.preventDefault();
  resetMixerSprite();

  const ingredientName = ev.dataTransfer.getData('text') as IngredientNames;
  if (!ingredientNames.includes(ingredientName)) return;

  unhideNextIndicator(ingredientName);

  setMix((prev) => ({
    ...prev,
    [ingredientName]:
      prev[ingredientName] < 10
        ? prev[ingredientName] + 1
        : prev[ingredientName],
  }));
}

function onToggleIceOrAged(
  e: React.MouseEvent,
  setState: Dispatch<SetStateAction<boolean>>
) {
  if (!(e.target instanceof HTMLElement) || isMixing) return;
  e.target.classList.toggle(styles.active);
  setState((prev) => !prev);
}

// UTILS =====================================================================//
// Reset Indicators ==================//
function resetAllIndicators() {
  resetMixerIndicators();
  resetIngredientIndicators();
}

function resetMixerIndicators() {
  resetIndicator(`.${styles.mixerIndicators}`);
}

function resetIngredientIndicators() {
  resetIndicator(`.${styles.ingredientIndicators}`);
}

function resetIndicator(query: string) {
  const elements = document.querySelectorAll(query);

  if (elements.length < 1)
    throw new Error(`Elements matching "${query}" not found`);
  elements.forEach((indicators) => {
    const indicatorsDiv = indicators.querySelectorAll('div');
    indicatorsDiv.forEach((div) => div.classList.add('hidden'));
  });
}

// Hiding stuff ======================//
function toggleHidden(elemId: string, value?: boolean) {
  const elem = document.querySelector(`#${elemId}`);
  if (!elem) throw new Error(`Element with ID "${elemId}" not found`);
  if (value === true) elem.classList.add('hidden');
  else if (value === false) elem.classList.remove('hidden');
  else elem.classList.toggle('hidden');
}

function unhideNextIndicator(ingredient: string) {
  const ingredientIndicators = document.querySelector(
    `#${ingredient}Indicators`
  );
  const mixerIndicators = document.querySelector(`#mixerIndicators`);

  const nextIngredientIndicator =
    ingredientIndicators && ingredientIndicators.querySelector('.hidden');
  const nextMixerIndicator =
    mixerIndicators && mixerIndicators.querySelector('.hidden');

  nextIngredientIndicator && nextIngredientIndicator.classList.remove('hidden');
  nextMixerIndicator && nextMixerIndicator.classList.remove('hidden');
}

// Other =============================//
function setResultName(name: string) {
  const drinkNameElem = document.querySelector('#drinkName');
  if (!drinkNameElem) throw new Error('Element with ID "drinkName" not found');
  drinkNameElem.textContent = name;
}

function setResultSprite(imgPath: string) {
  const resultElem = document.querySelector('#drinkResult') as
    | HTMLImageElement
    | undefined;
  if (!resultElem) throw new Error('Element with ID "drinkResult" not found');
  resultElem.src = imgPath;
}

function resetMixerSprite() {
  const mixer = document.querySelector('#mixer') as HTMLImageElement | null;
  if (!mixer) throw new Error('Element with ID "mixer" not found');
  mixer.src = '/img/va11halla/mixer.png';
  mixer.classList.remove(styles.shake);
  mixer.classList.remove(styles.blend);
  mixer.classList.remove('hidden');
  mixer.style.height = '';
}

export {
  ingredientNames,
  findDrink,
  mix,
  resetMix,
  serveMix,
  onDragIngredient,
  onDragOverMixer,
  onDragLeaveMixer,
  onDropMixer,
  resetMixerSprite,
  onToggleIceOrAged,
};
