import cn from 'classnames';
import Plyr, { PlyrSource } from 'plyr-react';
import { HTMLAttributes } from 'react';
import Shell, { ShellProps } from '../Shell/Shell';

export interface MusicPlyrProps extends HTMLAttributes<HTMLElement> {
  videoId: string;
  videoTitle: string;
  source?: PlyrSource;
  provider?: Plyr.Provider;
  videoOptions?: Plyr.Options;
  shellProps?: ShellProps;
}

const MusicPlyr = ({
  videoId,
  videoTitle,
  source,
  provider = 'youtube',
  videoOptions,
  shellProps,
  ...props
}: MusicPlyrProps) => {
  return (
    <Shell
      shellTitle={videoTitle}
      minimizeable
      {...shellProps}
      className={cn('plyrContainer', shellProps?.className)}
    >
      <Plyr
        {...props}
        source={
          source
            ? source
            : { type: 'video', sources: [{ src: videoId, provider: provider }] }
        }
        options={{
          hideControls: false,
          controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
          tooltips: { seek: false },
          invertTime: false,
          ...videoOptions,
        }}
      />
    </Shell>
  );
};

export default MusicPlyr;
