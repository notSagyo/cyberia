import React from 'react';
import Shell, { ShellProps } from '../Shell/Shell';

interface VideoProps extends React.HtmlHTMLAttributes<HTMLIFrameElement> {
  urlId: string;
  title?: string;
  shellProps?: ShellProps;
}

const YtVideo = ({ urlId, title, shellProps, ...props }: VideoProps) => {
  return (
    <Shell noPadding {...shellProps} shellTitle={title || 'Video'}>
      <iframe
        style={{ display: 'block' }}
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${urlId}?rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="encrypted-media;"
        allowFullScreen
        {...props}
      />
    </Shell>
  );
};

export default YtVideo;
