import cn from 'classnames';
import Plyr, { APITypes } from 'plyr-react';
import React, { HTMLAttributes } from 'react';
import Shell, { ShellProps } from '../Shell/Shell';

export interface MusicPlyrProps extends HTMLAttributes<HTMLElement> {
  videoId: string;
  videoTitle: string;
  source?: Plyr.SourceInfo;
  provider?: Plyr.Provider;
  videoOptions?: Plyr.Options;
  shellProps?: ShellProps;
}

const MusicPlyr = React.forwardRef<APITypes, MusicPlyrProps>(
  (
    {
      videoId,
      videoTitle,
      source,
      provider = 'youtube',
      videoOptions,
      shellProps,
      ...props
    },
    ref
  ) => {
    return (
      <Shell
        shellTitle={videoTitle}
        minimizeable
        {...shellProps}
        className={cn('plyrContainer', shellProps?.className)}
      >
        <Plyr
          {...props}
          ref={ref}
          source={
            source
              ? source
              : {
                  type: 'video',
                  sources: [{ src: videoId, provider: provider }],
                }
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
  }
);

MusicPlyr.displayName = 'MusicPlyr';
export default MusicPlyr;
