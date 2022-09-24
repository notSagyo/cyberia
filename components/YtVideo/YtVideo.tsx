import Shell from '../Shell/Shell';

interface VideoProps {
  urlId: string;
  title?: string;
}

const YtVideo = ({ urlId, title }: VideoProps) => {
  return (
    <Shell shellTitle={title || 'Video'} noPadding>
      <iframe
        style={{ display: 'block' }}
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${urlId}?rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="encrypted-media;"
        allowFullScreen
      />
    </Shell>
  );
};

export default YtVideo;
