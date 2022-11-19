import cn from 'classnames';
import s from './Bday.module.scss';
import Anchor from '/components/utils/Anchor/Anchor';
import Img from '/components/utils/Img/Img';
import { SetState } from '/types/types';

interface BdayHeaderProps extends React.HTMLAttributes<HTMLElement> {
  setShowHotaru: SetState<boolean>;
}

const BdayHeader = ({ setShowHotaru, ...props }: BdayHeaderProps) => {
  return (
    <div {...props} className={cn('marquee', s.header, props.className)}>
      <div>
        <Anchor
          noDecoration
          noColor
          className={cn(s.marqueeContent, 'pointer')}
          onClick={() => setShowHotaru(true)}
        >
          <Img src="/img/sailor-saturn.gif" alt="saturn" height={48} />
          <u>☆ HAPPY BIRTHDAY / 誕生日おめでとう～！☆</u>
          <Img src="/img/sailor-saturn.gif" alt="saturn" height={48} />
          <span>{'<-- click me'}</span>
        </Anchor>
      </div>
    </div>
  );
};

export default BdayHeader;
