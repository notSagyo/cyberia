import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import s from './Bday.module.scss';
import BdayHeader from './BdayHeader';
import HotaruWindow from './HotaruWindow';
import { cleanup, initBday } from '/components/pages/Bday/BdayHelper';
import Img from '/components/utils/Img/Img';

const Bday = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [showHotaru, setShowHotaru] = useState<boolean>(false);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) initBday(canvas.current);
    return () => cleanup();
  }, []);

  return (
    <div {...props} className={s.bdayContainer}>
      {showHotaru && <HotaruWindow onClose={() => setShowHotaru(false)} />}
      {/* GOOD SIDE */}
      <section className={s.goodSide}>
        {/* HEADER */}
        <BdayHeader setShowHotaru={setShowHotaru} />
        <div className={s.goodSideBody}>
          {/* LEFT SIDE */}
          <aside className={s.goodSideLeft}>
            <div />
            <Img src="/img/usagi-cloud.gif" alt="usagi cloud" />
          </aside>
          {/* CENTER */}
          <div className={s.goodSideCenter}>
            <div className={s.cakeRow}>
              <Img src="/img/hr-sweet.webp" alt="cake" />
              <Img src="/img/cake.gif" alt="cake" />
              <Img src="/img/hr-sweet.webp" alt="cake" />
            </div>
            {/* MAIN TEXT */}
            <h1 className={s.title}>★·.·´¯`·.·★ HAPPY BIRTHDAY ★·.·´¯`·.·★</h1>
            {/* HELLO KITTY STRIPE */}
            <div className={s.kittyStripe}>
              <Img src="/img/melody-heart.webp" alt="my melody" height={115} />
              <Img src="/img/melody-gift.webp" alt="my melody gift" />
              <Img src="/img/kitty-dance.webp" alt="kitty dance" height={100} />
              <Img src="/img/kitty-bd.webp" alt="kitty birthday" />
              <Img src="/img/hello-kitty.gif" alt="hello kitty" />
              <Img src="/img/kitty-balloons.gif" alt="kitty balloons" />
              <Img src="/img/kuromi.webp" alt="kuromi" mirror />
            </div>
            <Img src="/img/tfm.png" alt="transformice marry" />
          </div>
          {/* RIGHT SIDE */}
          <aside className={s.goodSideRight}>
            <Img src="/img/chibiusa-cloud.gif" alt="chibiusa cloud" />
            <Img
              src="/img/eternal-banana.webp"
              alt="eternal banana"
              title="ETERNAL BANANA"
              className={cn('help', s.eternalBanana)}
              mirror
            />
          </aside>
        </div>
      </section>
      {/* BAD SIDE */}
      <section className={cn('bgMoon', s.badSide)}>
        <canvas ref={canvas} />
      </section>
    </div>
  );
};

export default Bday;
