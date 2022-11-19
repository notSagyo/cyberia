import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import s from './Bday.module.scss';
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
      <div className={s.goodSide}>
        {/* HEADER */}
        <div className={cn('marquee', s.header)}>
          <div>
            <div
              className={cn(s.marqueeContent, 'pointer')}
              onClick={() => setShowHotaru(true)}
            >
              <Img src="/img/sailor-saturn.gif" alt="saturn" height={48} />
              <u>☆ HAPPY BIRTHDAY / 誕生日おめでとう～！☆</u>
              <Img src="/img/sailor-saturn.gif" alt="saturn" height={48} />
              <span>{'<-- click me'}</span>
            </div>
          </div>
        </div>
        <div className={s.goodSideBody}>
          {/* LEFT SIDE */}
          <aside className={s.goodSideLeft}>
            <div />
            <Img src="/img/usagi-cloud.gif" alt="usagi cloud" />
          </aside>
          {/* CENTER */}
          <div className={s.goodSideCenter}>
            <Img src="/img/cake.gif" alt="cake" />
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
            <h1 className={s.title}>★·.·´¯`·.·★ HAPPY BIRTHDAY ★·.·´¯`·.·★</h1>
            <Img src="/img/tfm.png" alt="transformice marry" />
          </div>
          {/* RIGHT SIDE */}
          <aside className={s.goodSideRight}>
            <Img src="/img/chibiusa-cloud.gif" alt="chibiusa cloud" />
          </aside>
        </div>
      </div>
      <div className={cn('bgMoon', s.badSide)}>
        <canvas ref={canvas} />
      </div>
    </div>
  );
};

export default Bday;
