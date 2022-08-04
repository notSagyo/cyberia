import Shell from './shell';

interface VideoProps {
  urlId: string;
  title?: string;
}

type iframe = any;

const Video = ({ urlId, title }: VideoProps) => {
  return (
    <Shell title={title || 'Video'} p0>
      <iframe
        style={{ display: 'block' }}
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${urlId}?rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="encrypted-media;"
        allowFullScreen
      ></iframe>
    </Shell>
  );
};

export default Video;
