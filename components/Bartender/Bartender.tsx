import cn from 'classnames';
import { useEffect, useState } from 'react';
import DraggableShell from '../Shell/DraggableShell';
import s from './Bartender.module.scss';
import {
  ingredientNames,
  mix,
  onDragIngredient,
  onDragLeaveMixer,
  onDragOverMixer,
  onDropMixer,
  onToggleIceOrAged,
  resetMix,
  serveMix,
} from './BartenderHelper';

export interface IMix {
  adelhyde: number;
  bronson: number;
  delta: number;
  flanergide: number;
  karmotrine: number;
  ice: boolean;
  aged: boolean;
  blended: boolean;
}

const Bartender = () => {
  const [ice, setIce] = useState<boolean>(false);
  const [aged, setAged] = useState<boolean>(false);
  const [blended, setBlended] = useState<boolean>(false);
  const [currentMix, setCurrentMix] = useState<IMix>({
    ...{ adelhyde: 0, bronson: 0, delta: 0, flanergide: 0, karmotrine: 0 },
    ...{ ice, aged, blended },
  });
  const [money, setMoney] = useState(0);

  useEffect(() => {
    setCurrentMix((prev) => ({ ...prev, ice, aged, blended }));
  }, [ice, aged, blended]);

  useEffect(() => {
    if (money != 0) localStorage.setItem('money', String(money));
  }, [money]);

  useEffect(() => setMoney(Number(localStorage.getItem('money')) || 0), []);

  return (
    <DraggableShell
      className={s.shell}
      shellTitle="BARTENDER.EXE"
      noPadding
      centered
    >
      <div className={s.board}>
        {/* $$$ MULA */}
        <div id="moneyText" className={s.moneyText} data-value={0}>
          $ {money}
        </div>
        {/* DRINK NAME */}
        <div id="drinkName" className={s.drinkName} />
        {/* INGREDIENTS */}
        {ingredientNames.map((ingredientName, index) => (
          <img
            key={index}
            id={ingredientName}
            className={cn(s.ingredient, s[ingredientName])}
            src={`/img/va11halla/${ingredientName}.png`}
            alt={ingredientName}
            draggable="true"
            onDragStart={onDragIngredient}
          />
        ))}
        {/* INGREDIENTS INDICATORS */}
        {ingredientNames.map((ingredientName, index) => (
          <div
            key={index}
            id={`${ingredientName}Indicators`}
            className={cn(
              s.ingredientIndicators,
              s[`${ingredientName}Indicators`]
            )}
          >
            {Array.from(new Array(10)).map((_, i) => (
              <div key={i} className={s.hidden} />
            ))}
          </div>
        ))}
        {/* ICE / AGE */}
        <img
          className={s.ice}
          src="/img/va11halla/ice.png"
          alt="ice"
          onClick={(e) => onToggleIceOrAged(e, setIce)}
        />
        <img
          className={s.age}
          src="/img/va11halla/age.png"
          alt="aged"
          onClick={(e) => onToggleIceOrAged(e, setAged)}
        />
        {/* BUTTONS */}
        <img
          className={cn(s.btn, s.btnReset)}
          src="/img/va11halla/button-reset.png"
          alt="reset button"
          onClick={() => resetMix(setCurrentMix, setBlended)}
        />
        <img
          className={cn(s.btn, s.btnMix)}
          src="/img/va11halla/button-mix.png"
          alt="mix button"
          onClick={() => mix(currentMix, setBlended)}
        />
        <img
          id="serveButton"
          className={cn(s.btn, s.btnServe, s.hidden)}
          src="/img/va11halla/button-serve.png"
          alt="serve button"
          onClick={() =>
            serveMix(currentMix, setCurrentMix, setMoney, setBlended)
          }
        />
        {/* MIXER */}
        <img
          id="mixer"
          className={s.mixer}
          src="/img/va11halla/mixer.png"
          alt="mixer"
          onDragOver={onDragOverMixer}
          onDragLeave={onDragLeaveMixer}
          onDrop={(e) => onDropMixer(e, currentMix, setCurrentMix)}
        />
        {/* MIXER INDICATORS */}
        <div id="mixerIndicators">
          <div className={s.mixerIndicators}>
            {Array.from(new Array(10)).map((_, i) => (
              <div key={i} className={cn(s.outerIndicator, s.hidden)} />
            ))}
          </div>
          <div className={cn(s.mixerIndicators, s.mixerInnerIndicators)}>
            {Array.from(new Array(10)).map((_, i) => (
              <div key={i} className={cn(s.innerIndicator, s.hidden)} />
            ))}
          </div>
        </div>
        {/* RESULT */}
        <img
          id="drinkResult"
          className={cn(s.drinkResult, s.hidden)}
          src=""
          alt="result drink"
        />
      </div>
    </DraggableShell>
  );
};

Bartender.displayName = 'Bartender';
export default Bartender;
