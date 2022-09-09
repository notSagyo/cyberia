import React, { Dispatch, SetStateAction } from 'react';
import { IMix } from '.';
import drinks from '../../data/drinks';
import { IngredientNames } from '../../types';
import styles from '/styles/bartender.module.scss';

// VARIABLES =================================================================//
const ingredientNames: IngredientNames[] = [
  'adelhyde',
  'bronson',
  'pwd',
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
      drink.pwd == mix.pwd &&
      drink.flanergide == mix.flanergide &&
      (drink.karmotrine === 'optional'
        ? true
        : drink.karmotrine == mix.karmotrine)
  );
}

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
    setDrinkName(foundDrink?.name || '##20%!!');
    setResultSprite(`/img/va11halla/drink-${drinkFileName || 'glitch.png'}`);
    toggleHiddenOff('serveButton');
    toggleHiddenOff('drinkResult');
    toggleHiddenOn('mixer');
    mixer.classList.remove(styles.shake, styles.blend);
  }
}

function resetMix(
  setMix: Dispatch<SetStateAction<IMix>>,
  setBlended: Dispatch<SetStateAction<boolean>>
) {
  toggleHiddenOn('drinkResult');
  toggleHiddenOn('serveButton');
  resetMixerSprite();
  resetIndicators();
  setBlended(false);
  setDrinkName('');
  setMix((prev) => ({
    ...{ adelhyde: 0, bronson: 0, pwd: 0, flanergide: 0, karmotrine: 0 },
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
  // XXX:
  console.log('Served:', foundDrink);
  toggleHiddenOn('serveButton');
  toggleHiddenOn('drinkResult');
  toggleHiddenOff('mixer');
  resetMix(setMix, setBlended);
}

function onDragDrink(ev: React.DragEvent) {
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

  const drinkName = ev.dataTransfer.getData('text') as IngredientNames;
  if (!ingredientNames.includes(drinkName)) return;

  const indicator = document.querySelector(`#${drinkName}Indicator`);
  const nextHiddenIndicator = indicator && indicator.querySelector('.hidden');
  nextHiddenIndicator && nextHiddenIndicator.classList.remove('hidden');

  setMix((prev) => ({
    ...prev,
    [drinkName]: prev[drinkName] < 10 ? prev[drinkName] + 1 : prev[drinkName],
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
function resetMixerSprite() {
  const mixer = document.querySelector('#mixer') as HTMLImageElement | null;
  if (!mixer) throw new Error('Element with ID "mixer" not found');
  mixer.src = '/img/va11halla/mixer.png';
  mixer.classList.remove(styles.shake);
  mixer.classList.remove(styles.blend);
  mixer.classList.remove('hidden');
  mixer.style.height = '';
}

function resetIndicators() {
  const indicators = document.querySelectorAll(`.${styles.indicator}`);
  if (indicators.length < 1)
    throw new Error(`Elements with class "${styles.indicator}" not found`);
  indicators.forEach((indicator) => {
    const squares = indicator.querySelectorAll('div');
    squares.forEach((square) => square.classList.add('hidden'));
  });
}

function toggleHiddenOn(elemId: string) {
  const elem = document.querySelector(`#${elemId}`);
  if (!elem) throw new Error(`Element with ID "${elemId}" not found`);
  elem.classList.add('hidden');
}

function toggleHiddenOff(elemId: string) {
  const elem = document.querySelector(`#${elemId}`);
  if (!elem) throw new Error(`Element with ID "${elemId}" not found`);
  elem.classList.remove('hidden');
}

function setResultSprite(imgPath: string) {
  const resultElem = document.querySelector('#drinkResult') as
    | HTMLImageElement
    | undefined;
  if (!resultElem) throw new Error('Element with ID "drinkResult" not found');
  resultElem.src = imgPath;
}

function setDrinkName(name: string) {
  const drinkNameElem = document.querySelector('#drinkName');
  if (!drinkNameElem) throw new Error('Element with ID "drinkName" not found');
  drinkNameElem.textContent = name;
}

export {
  ingredientNames,
  findDrink,
  mix,
  resetMix,
  serveMix,
  onDragDrink,
  onDragOverMixer,
  onDragLeaveMixer,
  onDropMixer,
  resetMixerSprite,
  onToggleIceOrAged,
};
