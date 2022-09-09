import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Shell from '../../components/shell/shell';
import {
  ingredientNames,
  onDragIngredient,
  onDragLeaveMixer,
  onDragOverMixer,
  onDropMixer,
  mix,
  resetMix,
  onToggleIceOrAged,
  serveMix,
} from './helper';
import styles from '/styles/bartender.module.scss';

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
  const [blended, setBlended] = useState<boolean>(false);
  const [aged, setAged] = useState<boolean>(false);
  const [currentMix, setCurrentMix] = useState<IMix>({
    ...{ adelhyde: 0, bronson: 0, delta: 0, flanergide: 0, karmotrine: 0 },
    ice,
    aged,
    blended,
  });

  useEffect(() => {
    setCurrentMix((prev) => ({ ...prev, ice, aged, blended }));
  }, [ice, aged, blended]);

  // TODO: Big drinks
  return (
    <Layout
      noPadding
      bodyProps={{ className: styles.layoutBody }}
      title="bartender.exe"
    >
      <div className={styles.pageWrapper}>
        <div className={styles.clouds} />
        <Shell className="mAuto" shellTitle="BARTENDER.EXE" noPadding>
          <div className={styles.board}>
            {/* $$$ MULA */}
            <div id="moneyText" className={styles.moneyText} data-value={0}>
              $ 0
            </div>
            {/* DRINK NAME */}
            <div id="drinkName" className={styles.drinkName} />
            {/* INGREDIENTS */}
            {ingredientNames.map((ingredientName, index) => (
              <img
                key={index}
                id={ingredientName}
                className={cn(styles.ingredient, styles[ingredientName])}
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
                  styles.ingredientIndicators,
                  styles[`${ingredientName}Indicators`]
                )}
              >
                {Array.from(new Array(10)).map((_, i) => (
                  <div key={i} className="hidden" />
                ))}
              </div>
            ))}
            {/* ICE / AGE */}
            <img
              className={styles.ice}
              src="/img/va11halla/ice.png"
              alt="ice"
              onClick={(e) => onToggleIceOrAged(e, setIce)}
            />
            <img
              className={styles.age}
              src="/img/va11halla/age.png"
              alt="aged"
              onClick={(e) => onToggleIceOrAged(e, setAged)}
            />
            {/* BUTTONS */}
            <img
              className={cn(styles.btn, styles.btnReset)}
              src="/img/va11halla/button-reset.png"
              alt="reset button"
              onClick={() => resetMix(setCurrentMix, setBlended)}
            />
            <img
              className={cn(styles.btn, styles.btnMix)}
              src="/img/va11halla/button-mix.png"
              alt="mix button"
              onClick={() => mix(currentMix, setBlended)}
            />
            <img
              id="serveButton"
              className={cn(styles.btn, styles.btnServe, 'hidden')}
              src="/img/va11halla/button-serve.png"
              alt="serve button"
              onClick={() => serveMix(currentMix, setCurrentMix, setBlended)}
            />
            {/* MIXER */}
            <img
              id="mixer"
              className={styles.mixer}
              src="/img/va11halla/mixer.png"
              alt="mixer"
              onDragOver={onDragOverMixer}
              onDragLeave={onDragLeaveMixer}
              onDrop={(e) => onDropMixer(e, setCurrentMix)}
            />
            {/* MIXER INDICATORS */}
            <div id="mixerIndicators">
              <div className={styles.mixerIndicators}>
                {Array.from(new Array(10)).map((_, i) => (
                  <div
                    key={i}
                    className={cn(styles.outerIndicator, 'hidden')}
                  />
                ))}
              </div>
              <div
                className={cn(
                  styles.mixerIndicators,
                  styles.mixerInnerIndicators
                )}
              >
                {Array.from(new Array(10)).map((_, i) => (
                  <div
                    key={i}
                    className={cn(styles.innerIndicator, 'hidden')}
                  />
                ))}
              </div>
            </div>
            {/* RESULT */}
            <img
              id="drinkResult"
              className={cn(styles.drinkResult, 'hidden')}
              src="/img/va11halla/drink-bad-touch.png"
              alt="result drink"
            />
          </div>
        </Shell>
      </div>
    </Layout>
  );
};

export default Bartender;
