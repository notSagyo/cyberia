import Plyr, { PlyrSource } from 'plyr-react';
import React from 'react';
import Shell, { ShellProps } from './Shell/Shell';

interface MusicPlyrProps {
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
      style={{ ...(shellProps && { ...shellProps.style }), width: 512 }}
      shellTitle={videoTitle}
    >
      <Plyr
        {...props}
        source={
          source
            ? source
            : { type: 'audio', sources: [{ src: videoId, provider: provider }] }
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
